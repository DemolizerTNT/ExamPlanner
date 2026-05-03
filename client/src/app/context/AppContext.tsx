/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { apiClient, type UserProfile } from '../services/api';
import type {
  Faculty, Direction, Specialization, Subject, KnowledgePoint, UserProgress, ProgressStatus
} from '../types/catalog';

interface AppUser {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  email: string;
  faculty_id: string;
  direction_id?: string;
  specialization_id?: string;
  semester: number;
}

interface AppContextType {
  user: AppUser | null;
  isLoggedIn: boolean;
  isOnboarded: boolean;
  isLoggingOut: boolean;
  faculties: Faculty[];
  directions: Direction[];
  specializations: Specialization[];
  getDirectionsFor: (facultyId: string) => Direction[];
  getSpecializationsFor: (directionId: string) => Specialization[];
  loadDirectionsForFaculty: (facultyId: string) => Promise<Direction[]>;
  loadSpecializationsForDirection: (directionId: string) => Promise<Specialization[]>;
  subjects: Subject[];
  knowledgePointsBySubject: Record<string, KnowledgePoint[]>;
  progress: Record<string, UserProgress>;
  login: (email: string, password: string) => Promise<boolean>;
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<{ ok: boolean; message?: string }>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  completeOnboarding: (facultyId: string, directionId: string, specializationId: string | undefined, semester: number) => void;
  markPoint: (pointId: string, status: ProgressStatus) => void;
  getPointStatus: (pointId: string) => ProgressStatus;
  getSubjectProgress: (subjectId: string) => { completed: number; skipped: number; total: number };
  getSemesterProgress: () => number;
  currentWeek: number;
  weeksUntilExam: number;
  weeklyPoints: KnowledgePoint[];
  nextWeekPoints: KnowledgePoint[];
  pointWeekMap: Record<string, number>;
}

const AppContext = createContext<AppContextType | null>(null);

const STORAGE_KEYS = {
  USER: 'examplanner_user',
  ONBOARDED: 'examplanner_onboarded',
  PROGRESS: 'examplanner_progress',
};

// Semester start: Feb 23, 2026. Exam start: Jun 12, 2026
const SEMESTER_START = new Date('2026-02-23');
const EXAM_START = new Date('2026-06-12');
const TODAY = new Date('2026-03-27');

function getWeekNumber(date: Date): number {
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  return Math.floor((date.getTime() - SEMESTER_START.getTime()) / msPerWeek) + 1;
}

const FALLBACK_USER: AppUser = {
  id: 'guest',
  firstName: 'Student',
  lastName: '',
  avatarUrl: null,
  email: '',
  faculty_id: '',
  direction_id: undefined,
  specialization_id: undefined,
  semester: 1,
};

const splitName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) {
    return { firstName: '', lastName: '' };
  }

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  };
};

const hydrateStoredUser = (): AppUser | null => {
  const stored = localStorage.getItem(STORAGE_KEYS.USER);

  if (!stored) {
    return null;
  }

  try {
    const parsed = JSON.parse(stored) as Partial<AppUser>;
    const legacyName = (parsed as Partial<AppUser> & { name?: string }).name || '';
    const nameParts = splitName(legacyName);

    return {
      ...FALLBACK_USER,
      ...parsed,
      firstName: parsed.firstName || nameParts.firstName || FALLBACK_USER.firstName,
      lastName: parsed.lastName || nameParts.lastName || FALLBACK_USER.lastName,
      avatarUrl: typeof parsed.avatarUrl === 'string' ? parsed.avatarUrl : null,
      faculty_id: parsed.faculty_id || FALLBACK_USER.faculty_id,
      direction_id: parsed.direction_id,
      specialization_id: parsed.specialization_id,
      semester: typeof parsed.semester === 'number' ? parsed.semester : FALLBACK_USER.semester,
    };
  } catch {
    return null;
  }
};

const buildUserFromProfile = (baseUser: AppUser, profile: UserProfile): AppUser => {
  const firstName = profile.firstName?.trim() || baseUser.firstName;
  const lastName = profile.lastName?.trim() || baseUser.lastName;

  return {
    ...baseUser,
    id: profile.id,
    email: profile.email || baseUser.email,
    firstName,
    lastName,
    avatarUrl: profile.avatar ?? baseUser.avatarUrl ?? null,
  };
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(() => hydrateStoredUser());
  const profileRefreshAttemptedRef = useRef(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const [directionsByFaculty, setDirectionsByFaculty] = useState<Record<string, Direction[]>>({});
  const [specializationsByDirection, setSpecializationsByDirection] = useState<Record<string, Specialization[]>>({});
  const [catalogSubjects, setCatalogSubjects] = useState<Subject[]>([]);
  const [knowledgePoints, setKnowledgePoints] = useState<KnowledgePoint[]>([]);
  const [isOnboarded, setIsOnboarded] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.ONBOARDED) === 'true';
  });
  const [progress, setProgress] = useState<Record<string, UserProgress>>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (stored) return JSON.parse(stored);
    return {};
  });

  const currentWeek = getWeekNumber(TODAY);
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const weeksUntilExam = Math.max(1, Math.ceil((EXAM_START.getTime() - TODAY.getTime()) / msPerWeek));

  const currentUser = user || FALLBACK_USER;
  const getDirectionsFor = useCallback(
    (facultyId: string) => directionsByFaculty[facultyId] || [],
    [directionsByFaculty]
  );

  const getSpecializationsFor = useCallback(
    (directionId: string) => specializationsByDirection[directionId] || [],
    [specializationsByDirection]
  );

  const loadDirectionsForFaculty = useCallback(async (facultyId: string) => {
    if (!facultyId) {
      return [];
    }

    try {
      const directionsForFaculty = await apiClient.getDirections(facultyId);
      setDirectionsByFaculty((prev) => ({
        ...prev,
        [facultyId]: directionsForFaculty,
      }));
      return directionsForFaculty;
    } catch (error) {
      console.error('Failed to load directions for faculty:', error);
      return [];
    }
  }, []);

  const loadSpecializationsForDirection = useCallback(async (directionId: string) => {
    if (!directionId) {
      return [];
    }

    try {
      const specializationsForDirection = await apiClient.getSpecializations(directionId);
      setSpecializationsByDirection((prev) => ({
        ...prev,
        [directionId]: specializationsForDirection,
      }));
      return specializationsForDirection;
    } catch (error) {
      console.error('Failed to load specializations for direction:', error);
      return [];
    }
  }, []);

  const subjects = useMemo(() => catalogSubjects.filter((subject) => {
    if (subject.faculty_id !== currentUser.faculty_id) {
      return false;
    }

    if (subject.semester !== currentUser.semester) {
      return false;
    }

    if (subject.direction_id && currentUser.direction_id && subject.direction_id !== currentUser.direction_id) {
      return false;
    }

    if (subject.direction_id && !currentUser.direction_id) {
      return false;
    }

    if (subject.specialization_id) {
      return subject.specialization_id === currentUser.specialization_id;
    }

    return true;
  }), [catalogSubjects, currentUser]);

  const knowledgePointsBySubject = useMemo<Record<string, KnowledgePoint[]>>(() => {
    const map: Record<string, KnowledgePoint[]> = {};
    subjects.forEach((s) => {
      map[s.id] = knowledgePoints.filter((point) => point.subject_id === s.id);
    });
    return map;
  }, [subjects, knowledgePoints]);

  // All points for the semester
  const allPoints = subjects.flatMap(s => knowledgePointsBySubject[s.id] || []);

  // Assign points to weeks based on order and subject exam date
  const assignPointsToWeeks = useCallback(() => {
    const weeklyMap: Record<number, KnowledgePoint[]> = {};
    subjects.forEach(subj => {
      const points = knowledgePointsBySubject[subj.id] || [];
      const pendingPoints = points.filter(p => progress[p.id]?.status !== 'completed');
      const examWeek = subj.exam_date
        ? getWeekNumber(new Date(subj.exam_date))
        : currentWeek + weeksUntilExam;
      const weeksLeft = Math.max(1, examWeek - currentWeek);
      const pointsPerWeek = Math.ceil(pendingPoints.length / weeksLeft);
      pendingPoints.forEach((p, idx) => {
        const targetWeek = currentWeek + Math.floor(idx / Math.max(1, pointsPerWeek));
        if (!weeklyMap[targetWeek]) weeklyMap[targetWeek] = [];
        weeklyMap[targetWeek].push(p);
      });
    });
    return weeklyMap;
  }, [progress, subjects, currentWeek, weeksUntilExam, knowledgePointsBySubject]);

  // Also build a full week map (including completed, for Exams page week badges)
  const buildFullPointWeekMap = useCallback(() => {
    const map: Record<string, number> = {};
    subjects.forEach(subj => {
      const points = knowledgePointsBySubject[subj.id] || [];
      const examWeek = subj.exam_date
        ? getWeekNumber(new Date(subj.exam_date))
        : currentWeek + weeksUntilExam;
      const weeksLeft = Math.max(1, examWeek - 1); // from week 1 of semester
      const pointsPerWeek = Math.ceil(points.length / weeksLeft);
      points.forEach((p, idx) => {
        map[p.id] = 1 + Math.floor(idx / Math.max(1, pointsPerWeek));
      });
    });
    return map;
  }, [subjects, currentWeek, weeksUntilExam, knowledgePointsBySubject]);

  const weeklyMap = assignPointsToWeeks();
  const pointWeekMap = buildFullPointWeekMap();

  const weeklyPoints = (weeklyMap[currentWeek] || []).filter(p => progress[p.id]?.status !== 'completed');
  const nextWeekPoints = [
    ...(weeklyMap[currentWeek] || []).filter(p => progress[p.id]?.status === 'skipped'),
    ...(weeklyMap[currentWeek + 1] || []).filter(p => progress[p.id]?.status !== 'completed'),
  ].slice(0, 8);

  const clearAuthState = useCallback(() => {
    setUser(null);
    setIsOnboarded(false);
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.ONBOARDED);
    setDirectionsByFaculty({});
    setSpecializationsByDirection({});
    setCatalogSubjects([]);
    setKnowledgePoints([]);
  }, []);

  const refreshProfile = useCallback(async () => {
    if (!apiClient.isAuthenticated()) {
      return;
    }

    try {
      const { profile } = await apiClient.getProfile();
      const nextUser = buildUserFromProfile(user || FALLBACK_USER, profile);
      setUser(nextUser);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(nextUser));
    } catch (error) {
      console.error('Failed to refresh profile:', error);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    let isCancelled = false;

    const loadCatalogData = async () => {
      try {
        const remoteFaculties = await apiClient.getFaculties();

        if (isCancelled) {
          return;
        }

        if (remoteFaculties.length > 0) {
          setFaculties(remoteFaculties);
        }
      } catch (error) {
        console.error('Failed to load catalog data:', error);
      }
    };

    void loadCatalogData();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const loadUserCatalog = async () => {
      if (!isOnboarded || !currentUser.faculty_id || currentUser.semester <= 0) {
        setCatalogSubjects([]);
        setKnowledgePoints([]);
        return;
      }

      try {
        const [remoteSubjects, remoteDirections, remoteSpecializations] = await Promise.all([
          apiClient.getSubjects({
            facultyId: currentUser.faculty_id,
            directionId: currentUser.direction_id,
            specializationId: currentUser.specialization_id,
            semester: currentUser.semester,
          }),
          loadDirectionsForFaculty(currentUser.faculty_id),
          currentUser.direction_id
            ? loadSpecializationsForDirection(currentUser.direction_id)
            : Promise.resolve([] as Specialization[]),
        ]);

        if (isCancelled) {
          return;
        }

        if (remoteDirections.length > 0) {
          setDirectionsByFaculty((prev) => ({
            ...prev,
            [currentUser.faculty_id]: remoteDirections,
          }));
        }

        if (currentUser.direction_id && remoteSpecializations.length > 0) {
          setSpecializationsByDirection((prev) => ({
            ...prev,
            [currentUser.direction_id as string]: remoteSpecializations,
          }));
        }

        setCatalogSubjects(remoteSubjects);

        const remoteKnowledgePoints = await Promise.all(
          remoteSubjects.map(async (subject) => {
            try {
              return await apiClient.getKnowledgePoints(subject.id);
            } catch {
              return [] as KnowledgePoint[];
            }
          })
        );

        if (isCancelled) {
          return;
        }

        setKnowledgePoints(remoteKnowledgePoints.flat());
      } catch (error) {
        console.error('Failed to load user catalog:', error);
      }
    };

    void loadUserCatalog();

    return () => {
      isCancelled = true;
    };
  }, [
    isOnboarded,
    currentUser.faculty_id,
    currentUser.direction_id,
    currentUser.specialization_id,
    currentUser.semester,
    loadDirectionsForFaculty,
    loadSpecializationsForDirection,
  ]);

  useEffect(() => {
    const handleAuthExpired = () => {
      clearAuthState();
    };

    window.addEventListener('authExpired', handleAuthExpired);

    return () => {
      window.removeEventListener('authExpired', handleAuthExpired);
    };
  }, [clearAuthState]);

  useEffect(() => {
    if (!apiClient.isAuthenticated()) {
      profileRefreshAttemptedRef.current = false;
      return;
    }

    if (profileRefreshAttemptedRef.current) {
      return;
    }

    profileRefreshAttemptedRef.current = true;
    const runProfileRefresh = async () => {
      await refreshProfile();
    };

    void runProfileRefresh();
  }, [refreshProfile]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await apiClient.login(email, password);
      const u: AppUser = {
        id: response.user.id,
        firstName: response.user.email.split('@')[0],
        lastName: '',
        avatarUrl: null,
        email: response.user.email,
        faculty_id: '',
        direction_id: undefined,
        specialization_id: undefined,
        semester: 1,
      };
      setUser(u);
      setIsOnboarded(false);
      localStorage.removeItem(STORAGE_KEYS.ONBOARDED);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(u));
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (firstName: string, lastName: string, email: string, password: string): Promise<{ ok: boolean; message?: string }> => {
    try {
      const response = await apiClient.register(firstName, lastName, email, password);
      const u: AppUser = {
        id: response.user.id,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        avatarUrl: null,
        email: response.user.email,
        faculty_id: '',
        direction_id: undefined,
        specialization_id: undefined,
        semester: 0,
      };
      setUser(u);
      setIsOnboarded(false);
      localStorage.removeItem(STORAGE_KEYS.ONBOARDED);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(u));
      return { ok: true };
    } catch (err: unknown) {
      console.error('Register failed:', err);
      // Try to get a useful message from the server
      const serverMessage =
        typeof err === 'object' && err !== null && 'response' in err
          ? ((err as { response?: { data?: { message?: string } } }).response?.data?.message || 'Registration failed')
          : err instanceof Error
            ? err.message
            : 'Registration failed';
      return { ok: false, message: serverMessage };
    }
  };

  const logout = async () => {
    if (isLoggingOut) {
      return;
    }

    setIsLoggingOut(true);

    // Wysyłamy request w tle bez czekania
    apiClient.logout().catch(error => console.error('Logout error:', error));

    // Kółko się kręci przez 1 sekundę, potem wyłączamy UI
    setTimeout(() => {
      clearAuthState();
      setIsLoggingOut(false);
    }, 1000);
  };

  const completeOnboarding = (
    facultyId: string,
    directionId: string,
    specializationId: string | undefined,
    semester: number
  ) => {
    const updated = {
      ...currentUser,
      faculty_id: facultyId,
      direction_id: directionId,
      specialization_id: specializationId,
      semester,
    };
    setUser(updated);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updated));
    setIsOnboarded(true);
    localStorage.setItem(STORAGE_KEYS.ONBOARDED, 'true');
  };

  const markPoint = (pointId: string, status: ProgressStatus) => {
    setProgress(prev => ({
      ...prev,
      [pointId]: {
        user_id: currentUser.id,
        point_id: pointId,
        status,
        completion_date: new Date().toISOString().split('T')[0],
      },
    }));
  };

  const getPointStatus = (pointId: string): ProgressStatus => {
    return progress[pointId]?.status || 'pending';
  };

  const getSubjectProgress = (subjectId: string) => {
    const pts = knowledgePointsBySubject[subjectId] || [];
    const completed = pts.filter(p => progress[p.id]?.status === 'completed').length;
    const skipped = pts.filter(p => progress[p.id]?.status === 'skipped').length;
    return { completed, skipped, total: pts.length };
  };

  const getSemesterProgress = (): number => {
    if (allPoints.length === 0) return 0;
    const completed = allPoints.filter(p => progress[p.id]?.status === 'completed').length;
    return Math.round((completed / allPoints.length) * 100);
  };

  return (
    <AppContext.Provider value={{
      user: user || FALLBACK_USER,
      isLoggedIn: !!user,
      isOnboarded,
      isLoggingOut,
      faculties,
      directions: Object.values(directionsByFaculty).flat(),
      specializations: Object.values(specializationsByDirection).flat(),
      getDirectionsFor,
      getSpecializationsFor,
      loadDirectionsForFaculty,
      loadSpecializationsForDirection,
      subjects,
      knowledgePointsBySubject,
      progress,
      login,
      register,
      logout,
      refreshProfile,
      completeOnboarding,
      markPoint,
      getPointStatus,
      getSubjectProgress,
      getSemesterProgress,
      currentWeek,
      weeksUntilExam,
      weeklyPoints,
      nextWeekPoints,
      pointWeekMap,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}