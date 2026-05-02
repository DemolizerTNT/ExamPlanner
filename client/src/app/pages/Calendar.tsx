import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Clock, BookOpen, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameMonth, isSameDay, addMonths, subMonths, addWeeks, subWeeks } from 'date-fns';
import { enUS } from 'date-fns/locale';
import type { KnowledgePoint, Subject, UserProgress } from '../data/mockData2';

const TODAY = new Date('2026-03-27');

function buildEventMap(
  subjects: Subject[],
  knowledgePointsBySubject: Record<string, KnowledgePoint[]>,
  progress: Record<string, UserProgress>
) {
  const map: Record<string, { type: 'exam' | 'study'; label: string; points?: KnowledgePoint[]; color: string }[]> = {};
  const semStart = new Date('2026-02-23');

  subjects.forEach(subj => {
    if (subj.has_exam && subj.exam_date) {
      const key = subj.exam_date;
      if (!map[key]) map[key] = [];
      map[key].push({ type: 'exam', label: subj.name, color: subj.color });
    }

    const points = knowledgePointsBySubject[subj.id] || [];
    const pendingPoints = points.filter(p => progress[p.id]?.status !== 'completed');
    const examDate = subj.exam_date ? new Date(subj.exam_date) : new Date('2026-06-30');
    const totalWeeks = Math.max(1, Math.ceil((examDate.getTime() - semStart.getTime()) / (7 * 24 * 60 * 60 * 1000)));
    const pointsPerWeek = Math.ceil(pendingPoints.length / totalWeeks);

    pendingPoints.forEach((p, idx) => {
      const weekOffset = Math.floor(idx / Math.max(1, pointsPerWeek));
      const day = new Date(semStart);
      day.setDate(day.getDate() + weekOffset * 7 + (idx % 3) * 2);
      const key = day.toISOString().split('T')[0];
      if (!map[key]) map[key] = [];
      const existingStudy = map[key].find(e => e.type === 'study' && e.label === subj.name);
      if (existingStudy) {
        existingStudy.points = [...(existingStudy.points || []), p];
      } else {
        map[key].push({ type: 'study', label: subj.name, points: [p], color: subj.color });
      }
    });
  });

  return map;
}

export function Calendar() {
  const { subjects, knowledgePointsBySubject, progress } = useApp();
  const [view, setView] = useState<'month' | 'week'>('month');
  const [currentDate, setCurrentDate] = useState(TODAY);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const eventMap = buildEventMap(subjects, knowledgePointsBySubject, progress);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const monthDays = eachDayOfInterval({ start: calStart, end: calEnd });

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  const selectedEvents = selectedDay ? (eventMap[selectedDay] || []) : [];

  const navigate = (dir: 'prev' | 'next') => {
    if (view === 'month') {
      setCurrentDate(dir === 'prev' ? subMonths(currentDate, 1) : addMonths(currentDate, 1));
    } else {
      setCurrentDate(dir === 'prev' ? subWeeks(currentDate, 1) : addWeeks(currentDate, 1));
    }
  };

  const DayCell = ({ date }: { date: Date }) => {
    const key = date.toISOString().split('T')[0];
    const events = eventMap[key] || [];
    const hasExam = events.some(e => e.type === 'exam');
    const hasStudy = events.some(e => e.type === 'study');
    const isToday = isSameDay(date, TODAY);
    const isSelected = selectedDay === key;
    const isCurrentMonth = view === 'week' || isSameMonth(date, currentDate);

    return (
      <button
        onClick={() => setSelectedDay(isSelected ? null : key)}
        className={`
          relative min-h-[80px] p-1.5 rounded-xl border transition-all text-left w-full
          ${isSelected ? 'border-[#003366] bg-[#003366]/5' : 'border-transparent hover:border-gray-200 hover:bg-gray-50'}
          ${!isCurrentMonth ? 'opacity-30' : ''}
        `}
      >
        <span
          className={`inline-flex items-center justify-center w-7 h-7 rounded-full mb-1
            ${isToday ? 'bg-[#003366] text-white' : 'text-gray-700'}`}
          style={{ fontSize: '0.8rem', fontWeight: isToday ? 700 : 400 }}
        >
          {format(date, 'd')}
        </span>
        <div className="space-y-0.5">
          {hasExam && (
            <div className="flex items-center gap-1 px-1 py-0.5 rounded bg-red-100">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
              <span style={{ fontSize: '0.62rem', fontWeight: 600 }} className="text-red-600 truncate">
                {events.find(e => e.type === 'exam')?.label}
              </span>
            </div>
          )}
          {hasStudy && events.filter(e => e.type === 'study').slice(0, 2).map((ev, i) => (
            <div key={i} className="flex items-center gap-1 px-1 py-0.5 rounded" style={{ backgroundColor: ev.color + '20' }}>
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ev.color }} />
              <span style={{ fontSize: '0.62rem' }} className="text-gray-600 truncate">{ev.label}</span>
            </div>
          ))}
          {events.filter(e => e.type === 'study').length > 2 && (
            <span style={{ fontSize: '0.6rem' }} className="text-gray-400 px-1">
              +{events.filter(e => e.type === 'study').length - 2} more
            </span>
          )}
        </div>
      </button>
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }} className="text-[#003366]">Calendar</h1>
          <p style={{ fontSize: '0.85rem' }} className="text-gray-500 mt-0.5">Exam schedule & study timetable</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-4 mr-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-red-400" />
              <span style={{ fontSize: '0.75rem' }} className="text-gray-500">Exam</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-[#003366]" />
              <span style={{ fontSize: '0.75rem' }} className="text-gray-500">Study</span>
            </div>
          </div>
          <div className="flex bg-gray-100 rounded-xl p-1">
            {(['month', 'week'] as const).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  view === v ? 'bg-white shadow text-[#003366]' : 'text-gray-500 hover:text-gray-700'
                }`}
                style={{ fontSize: '0.8rem', fontWeight: view === v ? 600 : 400 }}
              >
                {v === 'month' ? 'Month' : 'Week'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        {/* Calendar grid */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <button onClick={() => navigate('prev')} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600">
              <ChevronLeft size={16} />
            </button>
            <h2 style={{ fontSize: '1rem', fontWeight: 700 }} className="text-[#003366]">
              {view === 'month'
                ? format(currentDate, 'MMMM yyyy', { locale: enUS })
                : `${format(weekStart, 'MMM d', { locale: enUS })} – ${format(weekDays[6], 'MMM d, yyyy', { locale: enUS })}`
              }
            </h2>
            <button onClick={() => navigate('next')} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-7 border-b border-gray-100">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
              <div key={d} className="py-2 text-center">
                <span style={{ fontSize: '0.72rem', fontWeight: 600 }} className="text-gray-400 uppercase">{d}</span>
              </div>
            ))}
          </div>

          <div className="p-3 grid grid-cols-7 gap-1">
            {(view === 'month' ? monthDays : weekDays).map((date, i) => (
              <DayCell key={i} date={date} />
            ))}
          </div>
        </div>

        {/* Side drawer */}
        <AnimatePresence>
          {selectedDay && (
            <motion.div
              key="drawer"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 320 }}
              exit={{ opacity: 0, width: 0 }}
              className="flex-shrink-0 overflow-hidden"
            >
              <div className="w-80 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p style={{ fontSize: '1rem', fontWeight: 700 }} className="text-[#003366]">
                      {format(new Date(selectedDay + 'T12:00:00'), 'MMMM d, yyyy', { locale: enUS })}
                    </p>
                    <p style={{ fontSize: '0.75rem' }} className="text-gray-400">
                      {selectedEvents.length === 0 ? 'No activity' : `${selectedEvents.length} activities`}
                    </p>
                  </div>
                  <button onClick={() => setSelectedDay(null)} className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400">
                    <X size={14} />
                  </button>
                </div>

                {selectedEvents.length === 0 ? (
                  <div className="text-center py-8">
                    <p style={{ fontSize: '2rem' }}>📅</p>
                    <p style={{ fontSize: '0.85rem' }} className="text-gray-400 mt-2">Free day!</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                    {selectedEvents.map((ev, i) => (
                      <div key={i} className="p-3 rounded-xl border-l-4" style={{
                        borderColor: ev.type === 'exam' ? '#ef4444' : ev.color,
                        backgroundColor: ev.type === 'exam' ? '#fef2f2' : ev.color + '10',
                      }}>
                        <div className="flex items-center gap-2 mb-2">
                          {ev.type === 'exam'
                            ? <AlertCircle size={14} className="text-red-500" />
                            : <BookOpen size={14} style={{ color: ev.color }} />
                          }
                          <span style={{ fontSize: '0.8rem', fontWeight: 600 }}
                            className={ev.type === 'exam' ? 'text-red-600' : 'text-gray-800'}>
                            {ev.type === 'exam' ? '🎓 Exam: ' : ''}{ev.label}
                          </span>
                        </div>
                        {ev.points && ev.points.slice(0, 3).map(p => (
                          <div key={p.id} className="flex items-start gap-2 ml-5 mb-1">
                            <div className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                            <p style={{ fontSize: '0.75rem' }} className="text-gray-600 leading-snug">{p.description}</p>
                          </div>
                        ))}
                        {ev.points && ev.points.length > 3 && (
                          <p style={{ fontSize: '0.7rem' }} className="text-gray-400 ml-7 mt-1">
                            +{ev.points.length - 3} more points
                          </p>
                        )}
                        {ev.points && (
                          <div className="flex items-center gap-1 mt-2 ml-5">
                            <Clock size={11} className="text-gray-400" />
                            <span style={{ fontSize: '0.7rem' }} className="text-gray-400">
                              {ev.points.reduce((s, p) => s + p.estimated_minutes, 0)} min total
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
