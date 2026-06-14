import { useEffect, useMemo, useState } from 'react';
import {
  Bell, BookOpen, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight,
  Clock, Edit3, GraduationCap, Layers3, ListFilter, Loader2, MapPin, Plus, Search,
  Sparkles, Trash2, X, CalendarCheck2, Circle, RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  addDays, addMonths, addWeeks, differenceInCalendarDays, eachDayOfInterval, endOfMonth,
  endOfWeek, format, isSameDay, isSameMonth, parseISO, startOfDay, startOfMonth,
  startOfWeek, subMonths, subWeeks
} from 'date-fns';
import { enUS } from 'date-fns/locale';
import { apiClient } from '../services/api';
import { useApp } from '../context/AppContext';
import type {
  CalendarEventPayload, CalendarEventPriority, CalendarEventType, KnowledgePoint,
  Subject, UserCalendarEvent, UserProgress
} from '../types/catalog';

const SEMESTER_START = new Date('2026-02-23T12:00:00');
const FALLBACK_EXAM_DATE = new Date('2026-06-30T12:00:00');

const EVENT_TYPES: Array<{
  value: CalendarEventType;
  label: string;
  shortLabel: string;
  color: string;
  bg: string;
  ring: string;
  icon: typeof CalendarDays;
}> = [
  { value: 'exam', label: 'Exam', shortLabel: 'Exam', color: '#ef4444', bg: '#fef2f2', ring: '#fee2e2', icon: GraduationCap },
  { value: 'study', label: 'Study session', shortLabel: 'Study', color: '#003366', bg: '#eff6ff', ring: '#dbeafe', icon: BookOpen },
  { value: 'assignment', label: 'Assignment', shortLabel: 'Task', color: '#f59e0b', bg: '#fffbeb', ring: '#fef3c7', icon: Layers3 },
  { value: 'reminder', label: 'Reminder', shortLabel: 'Reminder', color: '#8b5cf6', bg: '#f5f3ff', ring: '#ede9fe', icon: Bell },
  { value: 'consultation', label: 'Consultation', shortLabel: 'Meet', color: '#10b981', bg: '#ecfdf5', ring: '#d1fae5', icon: MapPin },
  { value: 'personal', label: 'Personal', shortLabel: 'Personal', color: '#64748b', bg: '#f8fafc', ring: '#e2e8f0', icon: CalendarDays },
];

const PRIORITIES: Array<{ value: CalendarEventPriority; label: string }> = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

interface CalendarDisplayEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  type: CalendarEventType;
  priority: CalendarEventPriority;
  location: string;
  color: string;
  isCompleted: boolean;
  source: 'system' | 'user';
  points?: KnowledgePoint[];
}

interface CalendarFormState {
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  type: CalendarEventType;
  priority: CalendarEventPriority;
  location: string;
  color: string;
}

const toDateKey = (date: Date) => format(date, 'yyyy-MM-dd');
const safeDate = (dateKey: string) => parseISO(`${dateKey}T12:00:00`);
const getTypeConfig = (type: CalendarEventType) => EVENT_TYPES.find((item) => item.value === type) || EVENT_TYPES[5];

const getEmptyForm = (date: string): CalendarFormState => ({
  title: '',
  description: '',
  date,
  startTime: '09:00',
  endTime: '',
  type: 'personal',
  priority: 'medium',
  location: '',
  color: '#003366',
});

const mapUserEvent = (event: UserCalendarEvent): CalendarDisplayEvent => ({
  id: event.id,
  title: event.title,
  description: event.description,
  date: event.date,
  startTime: event.start_time,
  endTime: event.end_time,
  type: event.type,
  priority: event.priority,
  location: event.location,
  color: event.color,
  isCompleted: event.is_completed,
  source: 'user',
});

const buildAutomaticEvents = (
  subjects: Subject[],
  knowledgePointsBySubject: Record<string, KnowledgePoint[]>,
  progress: Record<string, UserProgress>
): CalendarDisplayEvent[] => {
  const events: CalendarDisplayEvent[] = [];

  subjects.forEach((subject) => {
    if (subject.has_exam && subject.exam_date) {
      events.push({
        id: `exam-${subject.id}`,
        title: subject.name,
        description: 'Exam date loaded from the subject catalog.',
        date: subject.exam_date,
        startTime: '',
        endTime: '',
        type: 'exam',
        priority: 'high',
        location: '',
        color: '#ef4444',
        isCompleted: false,
        source: 'system',
      });
    }

    const points = knowledgePointsBySubject[subject.id] || [];
    const pendingPoints = points.filter((point) => progress[point.id]?.status !== 'completed');
    const examDate = subject.exam_date ? safeDate(subject.exam_date) : FALLBACK_EXAM_DATE;
    const totalWeeks = Math.max(1, Math.ceil((examDate.getTime() - SEMESTER_START.getTime()) / (7 * 24 * 60 * 60 * 1000)));
    const pointsPerWeek = Math.max(1, Math.ceil(pendingPoints.length / totalWeeks));
    const groups: Record<string, KnowledgePoint[]> = {};

    pendingPoints.forEach((point, index) => {
      const weekOffset = Math.floor(index / pointsPerWeek);
      const date = new Date(SEMESTER_START);
      date.setDate(date.getDate() + weekOffset * 7 + (index % 3) * 2);
      const key = toDateKey(date);

      if (!groups[key]) {
        groups[key] = [];
      }

      groups[key].push(point);
    });

    Object.entries(groups).forEach(([date, groupedPoints]) => {
      events.push({
        id: `study-${subject.id}-${date}`,
        title: subject.name,
        description: `${groupedPoints.length} knowledge point${groupedPoints.length === 1 ? '' : 's'} planned automatically.`,
        date,
        startTime: '',
        endTime: '',
        type: 'study',
        priority: 'medium',
        location: '',
        color: subject.color || '#003366',
        isCompleted: false,
        source: 'system',
        points: groupedPoints,
      });
    });
  });

  return events;
};

export function Calendar() {
  const { subjects, knowledgePointsBySubject, progress } = useApp();
  const today = useMemo(() => startOfDay(new Date()), []);
  const todayKey = toDateKey(today);
  const [view, setView] = useState<'month' | 'week' | 'agenda'>('month');
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(todayKey);
  const [userEvents, setUserEvents] = useState<UserCalendarEvent[]>([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<CalendarDisplayEvent | null>(null);
  const [form, setForm] = useState<CalendarFormState>(() => getEmptyForm(todayKey));
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | CalendarEventType>('all');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    let cancelled = false;

    const loadEvents = async () => {
      if (!apiClient.isAuthenticated()) {
        return;
      }

      setIsLoadingEvents(true);
      setFeedback('');

      try {
        const events = await apiClient.getCalendarEvents();

        if (!cancelled) {
          setUserEvents(events);
        }
      } catch {
        if (!cancelled) {
          setFeedback('Could not load your saved calendar events.');
        }
      } finally {
        if (!cancelled) {
          setIsLoadingEvents(false);
        }
      }
    };

    void loadEvents();

    return () => {
      cancelled = true;
    };
  }, []);

  const automaticEvents = useMemo(
    () => buildAutomaticEvents(subjects, knowledgePointsBySubject, progress),
    [subjects, knowledgePointsBySubject, progress]
  );

  const allEvents = useMemo(
    () => [...automaticEvents, ...userEvents.map(mapUserEvent)].sort((a, b) => {
      const byDate = a.date.localeCompare(b.date);

      if (byDate !== 0) {
        return byDate;
      }

      return (a.startTime || '99:99').localeCompare(b.startTime || '99:99');
    }),
    [automaticEvents, userEvents]
  );

  const filteredEvents = useMemo(() => {
    const phrase = search.trim().toLowerCase();

    return allEvents.filter((event) => {
      const matchesType = typeFilter === 'all' || event.type === typeFilter;
      const matchesSearch = !phrase
        || event.title.toLowerCase().includes(phrase)
        || event.description.toLowerCase().includes(phrase)
        || event.location.toLowerCase().includes(phrase);

      return matchesType && matchesSearch;
    });
  }, [allEvents, search, typeFilter]);

  const eventMap = useMemo(() => filteredEvents.reduce<Record<string, CalendarDisplayEvent[]>>((map, event) => {
    if (!map[event.date]) {
      map[event.date] = [];
    }

    map[event.date].push(event);
    return map;
  }, {}), [filteredEvents]);

  const selectedEvents = eventMap[selectedDate] || [];
  const todayEvents = eventMap[todayKey] || [];
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const monthDays = eachDayOfInterval({ start: gridStart, end: gridEnd });
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = eachDayOfInterval({ start: weekStart, end: addDays(weekStart, 6) });
  const visibleDays = view === 'week' ? weekDays : monthDays;
  const hasActiveFilters = search.trim().length > 0 || typeFilter !== 'all';

  const upcomingEvents = useMemo(() => filteredEvents.filter((event) => {
    const days = differenceInCalendarDays(safeDate(event.date), today);
    return days >= 0 && days <= 21;
  }).slice(0, 8), [filteredEvents, today]);

  const stats = useMemo(() => {
    const nextSeven = allEvents.filter((event) => {
      const days = differenceInCalendarDays(safeDate(event.date), today);
      return days >= 0 && days <= 7;
    });

    return {
      totalSaved: userEvents.length,
      today: allEvents.filter((event) => event.date === todayKey).length,
      nextSeven: nextSeven.length,
      high: allEvents.filter((event) => event.priority === 'high' && !event.isCompleted).length,
    };
  }, [allEvents, userEvents.length, today, todayKey]);

  const navigate = (direction: 'prev' | 'next') => {
    if (view === 'week') {
      setCurrentDate((date) => direction === 'prev' ? subWeeks(date, 1) : addWeeks(date, 1));
      return;
    }

    setCurrentDate((date) => direction === 'prev' ? subMonths(date, 1) : addMonths(date, 1));
  };

  const resetFilters = () => {
    setSearch('');
    setTypeFilter('all');
  };

  const openCreateForm = (date = selectedDate) => {
    setEditingEvent(null);
    setForm(getEmptyForm(date));
    setFeedback('');
    setFormOpen(true);
  };

  const openEditForm = (event: CalendarDisplayEvent) => {
    if (event.source !== 'user') {
      setFeedback('Automatic study and exam events cannot be edited here.');
      return;
    }

    setEditingEvent(event);
    setForm({
      title: event.title,
      description: event.description,
      date: event.date,
      startTime: event.startTime || '09:00',
      endTime: event.endTime,
      type: event.type,
      priority: event.priority,
      location: event.location,
      color: event.color,
    });
    setFeedback('');
    setFormOpen(true);
  };

  const updateForm = <K extends keyof CalendarFormState>(key: K, value: CalendarFormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const saveEvent = async () => {
    if (!form.title.trim()) {
      setFeedback('Event title is required.');
      return;
    }

    if (!form.date) {
      setFeedback('Event date is required.');
      return;
    }

    const payload: CalendarEventPayload = {
      title: form.title.trim(),
      description: form.description.trim(),
      date: form.date,
      startTime: form.startTime,
      endTime: form.endTime,
      type: form.type,
      priority: form.priority,
      location: form.location.trim(),
      color: form.color,
      isCompleted: editingEvent?.isCompleted || false,
    };

    setIsSaving(true);
    setFeedback('');

    try {
      if (editingEvent) {
        const updated = await apiClient.updateCalendarEvent(editingEvent.id, payload);
        setUserEvents((events) => events.map((event) => event.id === updated.id ? updated : event));
      } else {
        const created = await apiClient.createCalendarEvent(payload);
        setUserEvents((events) => [...events, created]);
      }

      setSelectedDate(form.date);
      setCurrentDate(safeDate(form.date));
      setFormOpen(false);
    } catch {
      setFeedback('Could not save this event. Check the database table and backend terminal.');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteEvent = async (eventId: string) => {
    setIsSaving(true);
    setFeedback('');

    try {
      await apiClient.deleteCalendarEvent(eventId);
      setUserEvents((events) => events.filter((event) => event.id !== eventId));
      setFormOpen(false);
      setEditingEvent(null);
    } catch {
      setFeedback('Could not delete this event.');
    } finally {
      setIsSaving(false);
    }
  };

  const toggleEventDone = async (event: CalendarDisplayEvent) => {
    if (event.source !== 'user') {
      return;
    }

    try {
      const updated = await apiClient.updateCalendarEvent(event.id, { isCompleted: !event.isCompleted });
      setUserEvents((events) => events.map((item) => item.id === updated.id ? updated : item));
    } catch {
      setFeedback('Could not update event status.');
    }
  };

  const DayCell = ({ date }: { date: Date }) => {
    const key = toDateKey(date);
    const dayEvents = eventMap[key] || [];
    const isToday = isSameDay(date, today);
    const isSelected = selectedDate === key;
    const isCurrentMonth = view === 'week' || isSameMonth(date, currentDate);
    const highPriority = dayEvents.some((event) => event.priority === 'high');
    const previewLimit = view === 'week' ? 4 : 3;

    return (
      <button
        onClick={() => setSelectedDate(key)}
        onDoubleClick={() => openCreateForm(key)}
        className={`group relative min-h-[126px] w-full overflow-hidden rounded-[22px] border p-3 text-left transition-all duration-200 ${
          isSelected ? 'border-[#003366] bg-[#003366]/5 shadow-sm ring-2 ring-[#003366]/10' : 'border-gray-100 bg-white hover:border-[#003366]/30 hover:bg-gray-50'
        } ${!isCurrentMonth ? 'opacity-45' : ''}`}
      >
        <div className="mb-3 flex items-center justify-between gap-2">
          <span
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
              isToday ? 'bg-[#003366] text-white shadow-sm' : isSelected ? 'bg-white text-[#003366]' : 'text-gray-700'
            }`}
            style={{ fontSize: '0.82rem', fontWeight: isToday || isSelected ? 800 : 650 }}
          >
            {format(date, 'd')}
          </span>
          <div className="flex items-center gap-1.5">
            {highPriority && <span className="h-2 w-2 rounded-full bg-red-500" />}
            {dayEvents.length > 0 && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-500" style={{ fontSize: '0.65rem', fontWeight: 800 }}>
                {dayEvents.length}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          {dayEvents.slice(0, previewLimit).map((event) => {
            const config = getTypeConfig(event.type);
            return (
              <div
                key={event.id}
                className={`flex min-h-[26px] items-center gap-2 rounded-xl px-2.5 py-1.5 ${event.isCompleted ? 'opacity-50' : ''}`}
                style={{ backgroundColor: event.type === 'study' && event.source === 'system' ? `${event.color}18` : config.bg }}
              >
                <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: event.color || config.color }} />
                <span className="min-w-0 flex-1 truncate text-gray-700" style={{ fontSize: '0.68rem', fontWeight: event.priority === 'high' ? 800 : 650 }}>
                  {event.startTime ? `${event.startTime} · ` : ''}{event.title}
                </span>
              </div>
            );
          })}
          {dayEvents.length > previewLimit && (
            <span className="block rounded-lg px-2.5 py-1 text-gray-400" style={{ fontSize: '0.66rem', fontWeight: 700 }}>
              +{dayEvents.length - previewLimit} more
            </span>
          )}
        </div>
      </button>
    );
  };

  const EventCard = ({ event, compact = false }: { event: CalendarDisplayEvent; compact?: boolean }) => {
    const config = getTypeConfig(event.type);
    const Icon = config.icon;
    const daysLeft = differenceInCalendarDays(safeDate(event.date), today);

    return (
      <div
        className={`relative overflow-hidden rounded-[22px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${event.isCompleted ? 'opacity-60' : ''}`}
      >
        <div className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: event.color || config.color }} />
        <div className={`${compact ? 'p-4 pl-5' : 'p-5 pl-6'}`}>
          <div className={`flex gap-4 ${compact ? 'flex-col' : 'flex-col sm:flex-row sm:items-start sm:justify-between'}`}>
            <div className="min-w-0 flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5" style={{ backgroundColor: config.bg, color: config.color, fontSize: '0.72rem', fontWeight: 800 }}>
                  <Icon size={13} />
                  {config.shortLabel}
                </span>
                {event.source === 'system' && (
                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-gray-500" style={{ fontSize: '0.7rem', fontWeight: 700 }}>
                    Auto
                  </span>
                )}
                {event.priority === 'high' && (
                  <span className="rounded-full bg-red-50 px-3 py-1.5 text-red-600" style={{ fontSize: '0.7rem', fontWeight: 800 }}>
                    High priority
                  </span>
                )}
                {event.isCompleted && (
                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-green-600" style={{ fontSize: '0.7rem', fontWeight: 800 }}>
                    Done
                  </span>
                )}
              </div>

              <h3 className="break-words text-gray-900" style={{ fontSize: compact ? '0.92rem' : '1.03rem', fontWeight: 800, lineHeight: 1.25 }}>
                {event.title}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500" style={{ fontSize: '0.76rem' }}>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={13} />
                  {format(safeDate(event.date), 'MMM d, yyyy', { locale: enUS })}
                </span>
                {(event.startTime || event.endTime) && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} />
                    {event.startTime || 'All day'}{event.endTime ? ` - ${event.endTime}` : ''}
                  </span>
                )}
                {event.location && (
                  <span className="inline-flex min-w-0 items-center gap-1.5 break-words">
                    <MapPin size={13} />
                    {event.location}
                  </span>
                )}
              </div>

              {!compact && event.description && (
                <p className="mt-4 rounded-2xl bg-gray-50 px-4 py-3 text-gray-600" style={{ fontSize: '0.82rem', lineHeight: 1.55 }}>
                  {event.description}
                </p>
              )}

              {!compact && event.points && event.points.length > 0 && (
                <div className="mt-4 rounded-2xl bg-gray-50 p-4">
                  <p className="mb-3 text-gray-500" style={{ fontSize: '0.74rem', fontWeight: 800 }}>
                    Study points · {event.points.reduce((sum, point) => sum + point.estimated_minutes, 0)} min
                  </p>
                  <div className="space-y-2">
                    {event.points.slice(0, 3).map((point) => (
                      <p key={point.id} className="break-words text-gray-600" style={{ fontSize: '0.76rem', lineHeight: 1.45 }}>
                        • {point.description}
                      </p>
                    ))}
                    {event.points.length > 3 && (
                      <p className="text-gray-400" style={{ fontSize: '0.72rem', fontWeight: 700 }}>
                        +{event.points.length - 3} more points
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className={`${compact ? 'flex items-center justify-between gap-3 border-t border-gray-100 pt-3' : 'flex flex-shrink-0 flex-col items-end gap-2'}`}>
              <span className={`whitespace-nowrap rounded-full px-3 py-1.5 ${daysLeft < 0 ? 'bg-gray-100 text-gray-400' : daysLeft <= 3 ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-[#003366]'}`} style={{ fontSize: '0.7rem', fontWeight: 800 }}>
                {daysLeft < 0 ? `${Math.abs(daysLeft)}d ago` : daysLeft === 0 ? 'Today' : `${daysLeft}d left`}
              </span>
              {event.source === 'user' && (
                <div className="flex items-center gap-1 rounded-xl bg-gray-50 p-1">
                  <button onClick={() => void toggleEventDone(event)} className="rounded-lg p-2 text-gray-400 hover:bg-green-50 hover:text-green-600" title="Toggle completed">
                    <CheckCircle2 size={15} />
                  </button>
                  <button onClick={() => openEditForm(event)} className="rounded-lg p-2 text-gray-400 hover:bg-blue-50 hover:text-[#003366]" title="Edit event">
                    <Edit3 size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-full bg-[#f5f7fb] p-4 sm:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br from-[#003366] via-[#06457a] to-[#0f172a] p-6 text-white shadow-xl sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/80 backdrop-blur" style={{ fontSize: '0.78rem', fontWeight: 700 }}>
                <Sparkles size={14} className="text-[#F4C430]" />
                Smart study calendar
              </div>
              <h1 className="text-white" style={{ fontSize: '2rem', fontWeight: 850, lineHeight: 1.1 }}>
                Calendar
              </h1>
              <p className="mt-3 max-w-2xl text-white/72" style={{ fontSize: '0.94rem', lineHeight: 1.6 }}>
                Plan exams, study sessions, reminders, consultations and your own tasks in one clean workspace.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[540px]">
              {[
                ['Saved', stats.totalSaved, CalendarCheck2],
                ['Today', stats.today, Clock],
                ['Next 7 days', stats.nextSeven, CalendarDays],
                ['High priority', stats.high, Bell],
              ].map(([label, value, Icon]) => {
                const StatIcon = Icon as typeof CalendarDays;
                return (
                  <div key={label as string} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <p className="text-white/60" style={{ fontSize: '0.72rem', fontWeight: 700 }}>{label as string}</p>
                      <StatIcon size={14} className="text-white/60" />
                    </div>
                    <p className="text-white" style={{ fontSize: '1.35rem', fontWeight: 850 }}>{value as number}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="min-w-0 space-y-6">
            <div className="rounded-[28px] border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex min-w-0 flex-col gap-5">
                <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex shrink-0 items-center gap-3">
                      <button onClick={() => navigate('prev')} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 text-gray-500 transition hover:border-[#003366]/30 hover:bg-[#003366]/5 hover:text-[#003366]">
                        <ChevronLeft size={18} />
                      </button>
                      <button onClick={() => navigate('next')} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 text-gray-500 transition hover:border-[#003366]/30 hover:bg-[#003366]/5 hover:text-[#003366]">
                        <ChevronRight size={18} />
                      </button>
                      <button onClick={() => { setCurrentDate(today); setSelectedDate(todayKey); }} className="h-11 rounded-2xl border border-gray-200 px-5 text-gray-600 transition hover:border-[#003366]/30 hover:bg-[#003366]/5 hover:text-[#003366]" style={{ fontSize: '0.82rem', fontWeight: 800 }}>
                        Today
                      </button>
                    </div>

                    <div className="min-w-0 px-1">
                      <h2 className="break-words text-[#003366]" style={{ fontSize: '1.12rem', fontWeight: 850, lineHeight: 1.2 }}>
                        {view === 'week'
                          ? `${format(weekStart, 'MMM d', { locale: enUS })} - ${format(addDays(weekStart, 6), 'MMM d, yyyy', { locale: enUS })}`
                          : format(currentDate, 'MMMM yyyy', { locale: enUS })}
                      </h2>
                      <p className="mt-1 max-w-[280px] text-gray-400" style={{ fontSize: '0.74rem', lineHeight: 1.45 }}>
                        Select a day or double click to add an event
                      </p>
                    </div>
                  </div>

                  <button onClick={() => openCreateForm()} className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-[#003366] px-5 text-white shadow-sm transition hover:bg-[#06457a] sm:w-auto" style={{ fontSize: '0.84rem', fontWeight: 850 }}>
                    <Plus size={16} />
                    Add event
                  </button>
                </div>

                <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                  <div className="relative min-w-0">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search events..."
                      className="h-11 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 text-gray-700 outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10"
                      style={{ fontSize: '0.84rem' }}
                    />
                  </div>
                  <div className="flex min-w-0 overflow-hidden rounded-2xl bg-gray-100 p-1.5">
                    {(['month', 'week', 'agenda'] as const).map((item) => (
                      <button
                        key={item}
                        onClick={() => setView(item)}
                        className={`min-w-[88px] flex-1 rounded-xl px-4 py-2.5 capitalize transition lg:flex-none ${view === item ? 'bg-white text-[#003366] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        style={{ fontSize: '0.78rem', fontWeight: 800 }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() => setTypeFilter('all')}
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 transition ${typeFilter === 'all' ? 'bg-[#003366] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                  style={{ fontSize: '0.74rem', fontWeight: 800 }}
                >
                  <ListFilter size={13} />
                  All
                </button>
                {EVENT_TYPES.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.value}
                      onClick={() => setTypeFilter(type.value)}
                      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 transition ${typeFilter === type.value ? 'text-white shadow-sm' : 'text-gray-500 hover:brightness-95'}`}
                      style={{ backgroundColor: typeFilter === type.value ? type.color : type.bg, fontSize: '0.74rem', fontWeight: 800 }}
                    >
                      <Icon size={13} />
                      {type.shortLabel}
                    </button>
                  );
                })}
                {hasActiveFilters && (
                  <button onClick={resetFilters} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-gray-500 transition hover:bg-gray-50" style={{ fontSize: '0.74rem', fontWeight: 800 }}>
                    <RotateCcw size={13} />
                    Clear
                  </button>
                )}
              </div>
            </div>

            {feedback && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-700" style={{ fontSize: '0.84rem', fontWeight: 650 }}>
                {feedback}
              </div>
            )}

            {view === 'agenda' ? (
              <div className="rounded-[28px] border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-[#003366]" style={{ fontSize: '1.05rem', fontWeight: 850 }}>Agenda</h2>
                    <p className="mt-1 text-gray-400" style={{ fontSize: '0.76rem' }}>{filteredEvents.length} matching events</p>
                  </div>
                  {hasActiveFilters && (
                    <button onClick={resetFilters} className="rounded-2xl border border-gray-200 px-4 py-2.5 text-gray-500 hover:bg-gray-50" style={{ fontSize: '0.78rem', fontWeight: 800 }}>
                      Clear filters
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  {filteredEvents.length === 0 ? (
                    <EmptyState onAdd={() => openCreateForm()} />
                  ) : filteredEvents.map((event) => <EventCard key={event.id} event={event} />)}
                </div>
              </div>
            ) : (
              <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm">
                <div className="overflow-x-auto p-3 sm:p-4">
                  <div className="min-w-[780px]">
                    <div className="grid grid-cols-7 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/80">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="py-3.5 text-center text-gray-400" style={{ fontSize: '0.72rem', fontWeight: 850, letterSpacing: '0.08em' }}>
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 grid grid-cols-7 gap-3">
                      {visibleDays.map((date) => <DayCell key={toDateKey(date)} date={date} />)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <aside className="min-w-0 space-y-6">
            <div className="rounded-[28px] border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#003366]/5 px-3 py-1.5 text-[#003366]" style={{ fontSize: '0.72rem', fontWeight: 800 }}>
                    <Circle size={8} fill="currentColor" />
                    Selected day
                  </p>
                  <h2 className="text-[#003366]" style={{ fontSize: '1.08rem', fontWeight: 850, lineHeight: 1.25 }}>
                    {format(safeDate(selectedDate), 'MMMM d, yyyy', { locale: enUS })}
                  </h2>
                  <p className="mt-1 text-gray-400" style={{ fontSize: '0.76rem' }}>
                    {selectedEvents.length === 0 ? 'No events planned' : `${selectedEvents.length} event${selectedEvents.length === 1 ? '' : 's'} planned`}
                  </p>
                </div>
                <button onClick={() => openCreateForm(selectedDate)} className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#003366] text-white shadow-sm transition hover:bg-[#06457a]">
                  <Plus size={18} />
                </button>
              </div>

              <div className="space-y-4">
                {selectedEvents.length === 0 ? <EmptyState onAdd={() => openCreateForm(selectedDate)} compact /> : selectedEvents.map((event) => <EventCard key={event.id} event={event} compact />)}
              </div>
            </div>

            <div className="rounded-[28px] border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-[#003366]" style={{ fontSize: '1.05rem', fontWeight: 850 }}>Upcoming</h2>
                  <p className="mt-1 text-gray-400" style={{ fontSize: '0.76rem' }}>Next 21 days</p>
                </div>
                {isLoadingEvents && <Loader2 size={18} className="animate-spin text-[#003366]" />}
              </div>

              <div className="space-y-4">
                {upcomingEvents.length === 0 ? (
                  <p className="rounded-2xl bg-gray-50 px-5 py-6 text-center text-gray-400" style={{ fontSize: '0.82rem' }}>
                    No upcoming events in this filter.
                  </p>
                ) : upcomingEvents.map((event) => <EventCard key={event.id} event={event} compact />)}
              </div>
            </div>

            <div className="rounded-[28px] border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-[#003366]" style={{ fontSize: '1.05rem', fontWeight: 850 }}>Today</h2>
                  <p className="mt-1 text-gray-400" style={{ fontSize: '0.76rem' }}>{todayEvents.length} event{todayEvents.length === 1 ? '' : 's'}</p>
                </div>
                <button onClick={() => { setCurrentDate(today); setSelectedDate(todayKey); }} className="rounded-2xl border border-gray-200 px-4 py-2.5 text-gray-500 hover:bg-gray-50" style={{ fontSize: '0.78rem', fontWeight: 800 }}>
                  Open
                </button>
              </div>
              <div className="rounded-2xl bg-[#003366]/5 px-4 py-3 text-[#003366]" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>
                Keep this panel clear: add only important reminders, tasks and consultations that really help you study.
              </div>
            </div>
          </aside>
        </div>
      </div>

      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 24, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 24, scale: 0.98, opacity: 0 }}
              className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-[32px] bg-white shadow-2xl"
            >
              {/* Inner scroll: scrollbar stays inside the white card (rounded clip on outer). */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-6 pt-6 pb-6 scrollbar-gutter-stable sm:px-7 sm:pt-7 sm:pb-7">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-[#003366]" style={{ fontSize: '1.3rem', fontWeight: 850 }}>
                    {editingEvent ? 'Edit event' : 'Add calendar event'}
                  </h2>
                  <p className="mt-2 text-gray-400" style={{ fontSize: '0.84rem', lineHeight: 1.5 }}>
                    Save your own exams, tasks, reminders and consultations.
                  </p>
                </div>
                <button onClick={() => setFormOpen(false)} className="rounded-2xl p-2.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600">
                  <X size={18} />
                </button>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-gray-600" style={{ fontSize: '0.78rem', fontWeight: 800 }}>Title</span>
                  <input value={form.title} onChange={(event) => updateForm('title', event.target.value)} className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10" placeholder="e.g. Discrete math exam" />
                </label>

                <label>
                  <span className="mb-2 block text-gray-600" style={{ fontSize: '0.78rem', fontWeight: 800 }}>Date</span>
                  <input type="date" value={form.date} onChange={(event) => updateForm('date', event.target.value)} className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10" />
                </label>

                <label>
                  <span className="mb-2 block text-gray-600" style={{ fontSize: '0.78rem', fontWeight: 800 }}>Type</span>
                  <select value={form.type} onChange={(event) => {
                    const nextType = event.target.value as CalendarEventType;
                    updateForm('type', nextType);
                    updateForm('color', getTypeConfig(nextType).color);
                  }} className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10">
                    {EVENT_TYPES.map((type) => <option key={type.value} value={type.value}>{type.label}</option>)}
                  </select>
                </label>

                <label>
                  <span className="mb-2 block text-gray-600" style={{ fontSize: '0.78rem', fontWeight: 800 }}>Start time</span>
                  <input type="time" value={form.startTime} onChange={(event) => updateForm('startTime', event.target.value)} className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10" />
                </label>

                <label>
                  <span className="mb-2 block text-gray-600" style={{ fontSize: '0.78rem', fontWeight: 800 }}>End time</span>
                  <input type="time" value={form.endTime} onChange={(event) => updateForm('endTime', event.target.value)} className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10" />
                </label>

                <label>
                  <span className="mb-2 block text-gray-600" style={{ fontSize: '0.78rem', fontWeight: 800 }}>Priority</span>
                  <select value={form.priority} onChange={(event) => updateForm('priority', event.target.value as CalendarEventPriority)} className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10">
                    {PRIORITIES.map((priority) => <option key={priority.value} value={priority.value}>{priority.label}</option>)}
                  </select>
                </label>

                <label>
                  <span className="mb-2 block text-gray-600" style={{ fontSize: '0.78rem', fontWeight: 800 }}>Color</span>
                  <input type="color" value={form.color} onChange={(event) => updateForm('color', event.target.value)} className="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 py-2 outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10" />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-2 block text-gray-600" style={{ fontSize: '0.78rem', fontWeight: 800 }}>Location</span>
                  <input value={form.location} onChange={(event) => updateForm('location', event.target.value)} className="h-12 w-full rounded-2xl border border-gray-200 px-4 outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10" placeholder="Room, building, online meeting..." />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-2 block text-gray-600" style={{ fontSize: '0.78rem', fontWeight: 800 }}>Description</span>
                  <textarea value={form.description} onChange={(event) => updateForm('description', event.target.value)} className="min-h-[120px] w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10" placeholder="Notes, materials, requirements..." />
                </label>
              </div>

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  {editingEvent && (
                    <button disabled={isSaving} onClick={() => void deleteEvent(editingEvent.id)} className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-red-200 px-5 text-red-600 transition hover:bg-red-50 disabled:opacity-60" style={{ fontSize: '0.84rem', fontWeight: 850 }}>
                      <Trash2 size={16} />
                      Delete
                    </button>
                  )}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setFormOpen(false)} className="h-12 rounded-2xl border border-gray-200 px-5 text-gray-600 transition hover:bg-gray-50" style={{ fontSize: '0.84rem', fontWeight: 850 }}>
                    Cancel
                  </button>
                  <button disabled={isSaving} onClick={() => void saveEvent()} className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#003366] px-6 text-white transition hover:bg-[#06457a] disabled:opacity-60" style={{ fontSize: '0.84rem', fontWeight: 850 }}>
                    {isSaving && <Loader2 size={16} className="animate-spin" />}
                    {editingEvent ? 'Save changes' : 'Create event'}
                  </button>
                </div>
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function EmptyState({ onAdd, compact = false }: { onAdd: () => void; compact?: boolean }) {
  return (
    <div className={`rounded-[22px] border border-dashed border-gray-200 bg-gray-50 text-center ${compact ? 'p-5' : 'p-8'}`}>
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#003366] shadow-sm">
        <CalendarDays size={20} />
      </div>
      <p className="text-gray-600" style={{ fontSize: '0.88rem', fontWeight: 800 }}>No events yet</p>
      <p className="mx-auto mt-2 max-w-[260px] text-gray-400" style={{ fontSize: '0.78rem', lineHeight: 1.5 }}>Add your own event to keep this day organized.</p>
      <button onClick={onAdd} className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#003366] px-5 py-2.5 text-white transition hover:bg-[#06457a]" style={{ fontSize: '0.8rem', fontWeight: 850 }}>
        <Plus size={15} />
        Add event
      </button>
    </div>
  );
}
