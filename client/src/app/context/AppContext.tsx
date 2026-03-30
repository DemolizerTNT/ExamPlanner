import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  DEMO_USER, FACULTIES, DIRECTIONS, SPECIALIZATIONS,
  getSubjects, getKnowledgePoints, getDirections, getSpecializations,
} from '../data/mockData';
import type {
  Faculty, Direction, Specialization, Subject, KnowledgePoint, UserProgress, ProgressStatus
} from '../data/mockData';

interface AppUser {
  id: string;
  name: string;
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
  faculties: Faculty[];
  directions: Direction[];
  specializations: Specialization[];
  getDirectionsFor: (facultyId: string) => Direction[];
  getSpecializationsFor: (directionId: string) => Specialization[];
  subjects: Subject[];
  knowledgePointsBySubject: Record<string, KnowledgePoint[]>;
  progress: Record<string, UserProgress>;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
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

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.USER);
    return stored ? JSON.parse(stored) : null;
  });
  const [isOnboarded, setIsOnboarded] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.ONBOARDED) === 'true';
  });
  const [progress, setProgress] = useState<Record<string, UserProgress>>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (stored) return JSON.parse(stored);
    // Seed some demo progress
    const initial: Record<string, UserProgress> = {};
    const demoPoints = [
      'weii-3-1-kp-1','weii-3-1-kp-2','weii-3-1-kp-3',
      'weii-3-2-kp-1','weii-3-2-kp-2','weii-3-3-kp-1','weii-3-3-kp-2','weii-3-3-kp-3',
      'weii-3-4-kp-1','weii-3-5-kp-1','weii-3-5-kp-2',
    ];
    const skippedPoints = ['weii-3-1-kp-4', 'weii-3-2-kp-3'];
    demoPoints.forEach(id => {
      initial[id] = { user_id: 'user-1', point_id: id, status: 'completed', completion_date: '2026-03-20' };
    });
    skippedPoints.forEach(id => {
      initial[id] = { user_id: 'user-1', point_id: id, status: 'skipped', completion_date: '2026-03-21' };
    });
    return initial;
  });

  const currentWeek = getWeekNumber(TODAY);
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const weeksUntilExam = Math.max(1, Math.ceil((EXAM_START.getTime() - TODAY.getTime()) / msPerWeek));

  const faculties = FACULTIES;
  const currentUser = user || DEMO_USER;
  const subjects = getSubjects(
    currentUser.faculty_id,
    currentUser.semester,
    currentUser.direction_id,
    currentUser.specialization_id
  );

  const knowledgePointsBySubject: Record<string, KnowledgePoint[]> = {};
  subjects.forEach(s => {
    knowledgePointsBySubject[s.id] = getKnowledgePoints(s.id);
  });

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
        const week = currentWeek + Math.floor(idx / Math.max(1, pointsPerWeek));
        if (!weeklyMap[week]) weeklyMap[week] = [];
        weeklyMap[week].push(p);
      });
    });
    return weeklyMap;
  }, [progress, subjects, currentWeek, weeksUntilExam]);

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
        const week = 1 + Math.floor(idx / Math.max(1, pointsPerWeek));
        map[p.id] = week;
      });
    });
    return map;
  }, [subjects, currentWeek, weeksUntilExam]);

  const weeklyMap = assignPointsToWeeks();
  const pointWeekMap = buildFullPointWeekMap();

  const weeklyPoints = (weeklyMap[currentWeek] || []).filter(p => progress[p.id]?.status !== 'completed');
  const nextWeekPoints = [
    ...(weeklyMap[currentWeek] || []).filter(p => progress[p.id]?.status === 'skipped'),
    ...(weeklyMap[currentWeek + 1] || []).filter(p => progress[p.id]?.status !== 'completed'),
  ].slice(0, 8);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  }, [progress]);

  const login = async (email: string, _password: string): Promise<boolean> => {
    const name = email.split('.')[0];
    const u: AppUser = {
      id: 'user-1',
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email,
      faculty_id: 'weii',
      direction_id: 'weii-cs',
      specialization_id: undefined,
      semester: 3,
    };
    setUser(u);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(u));
    return true;
  };

  const register = async (name: string, email: string, _password: string): Promise<boolean> => {
    const u: AppUser = {
      id: 'user-1',
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email,
      faculty_id: '',
      direction_id: undefined,
      specialization_id: undefined,
      semester: 0,
    };
    setUser(u);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(u));
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsOnboarded(false);
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.ONBOARDED);
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
      user: user || DEMO_USER,
      isLoggedIn: !!user,
      isOnboarded,
      faculties,
      directions: DIRECTIONS,
      specializations: SPECIALIZATIONS,
      getDirectionsFor: getDirections,
      getSpecializationsFor: getSpecializations,
      subjects,
      knowledgePointsBySubject,
      progress,
      login,
      register,
      logout,
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