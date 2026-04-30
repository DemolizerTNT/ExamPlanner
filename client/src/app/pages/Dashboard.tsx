import { useState } from 'react';
import { Clock, AlertTriangle, CheckCircle2, Plus, BookOpen, Zap, Trophy } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProgressRing } from '../components/ProgressRing';
import { motion, AnimatePresence } from 'motion/react';

function ExamCountdown({ examDate, subjectName, color }: { examDate: string; subjectName: string; color: string }) {
  const today = new Date('2026-03-27');
  const exam = new Date(examDate);
  const days = Math.ceil((exam.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  const urgency = days <= 14 ? 'text-red-500' : days <= 30 ? 'text-amber-500' : 'text-[#003366]';

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: color }} />
        <span style={{ fontSize: '0.7rem', fontWeight: 600 }}
          className={`px-2 py-0.5 rounded-full ${days <= 14 ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-600'}`}>
          EXAM
        </span>
      </div>
      <p style={{ fontSize: '0.875rem', fontWeight: 600 }} className="text-gray-800 mb-1 leading-tight">{subjectName}</p>
      <div className="flex items-baseline gap-1 mt-2">
        <span style={{ fontSize: '2rem', fontWeight: 800 }} className={urgency}>{days}</span>
        <span style={{ fontSize: '0.8rem' }} className="text-gray-400">days</span>
      </div>
      <p style={{ fontSize: '0.75rem' }} className="text-gray-400 mt-1">
        {exam.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}
      </p>
      {/* Urgency bar */}
      <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${Math.max(5, 100 - (days / 90) * 100)}%`,
            backgroundColor: days <= 14 ? '#ef4444' : '#f59e0b',
          }}
        />
      </div>
    </div>
  );
}

export function Dashboard() {
  const { user, subjects, getSemesterProgress, weeklyPoints, getPointStatus, markPoint, knowledgePointsBySubject } = useApp();
  const progress = getSemesterProgress();
  const [showFAB, setShowFAB] = useState(false);
  const [quickLog, setQuickLog] = useState('');
  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(' ');

  // Get upcoming exams
  const upcomingExams = subjects
    .filter(s => s.has_exam && s.exam_date)
    .sort((a, b) => new Date(a.exam_date!).getTime() - new Date(b.exam_date!).getTime())
    .slice(0, 2);

  // Today's 3 most urgent points (pending, earliest scheduled)
  const todaysFocus = weeklyPoints
    .filter(p => getPointStatus(p.id) === 'pending')
    .slice(0, 3);

  // Total completed across all subjects
  const allPoints = subjects.flatMap(s => knowledgePointsBySubject[s.id] || []);
  const totalCompleted = allPoints.filter(p => getPointStatus(p.id) === 'completed').length;
  const totalSkipped = allPoints.filter(p => getPointStatus(p.id) === 'skipped').length;

  const subjectStats = subjects.slice(0, 3).map(s => {
    const pts = knowledgePointsBySubject[s.id] || [];
    const done = pts.filter(p => getPointStatus(p.id) === 'completed').length;
    return { ...s, done, total: pts.length };
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }} className="text-[#003366]">
          Hello, {fullName || 'Student'}! 👋
        </h1>
        <p style={{ fontSize: '0.9rem' }} className="text-gray-500 mt-1">
          Today is Friday, March 27, 2026 · Week 5 of semester
        </p>
      </div>

      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {/* Progress ring */}
        <div className="bg-[#003366] rounded-2xl p-6 flex items-center gap-5 col-span-1">
          <ProgressRing progress={progress} size={100} strokeWidth={9}>
            <div className="text-center">
              <p style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-white">{progress}%</p>
              <p style={{ fontSize: '0.6rem' }} className="text-white/50 uppercase tracking-wider">completed</p>
            </div>
          </ProgressRing>
          <div>
            <p style={{ fontSize: '0.75rem' }} className="text-white/50 uppercase tracking-wider mb-1">Semester Progress</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 600 }} className="text-white mb-3">
              {totalCompleted} / {allPoints.length} points
            </p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F4C430]" />
                <span style={{ fontSize: '0.72rem' }} className="text-white/60">{totalCompleted} completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <span style={{ fontSize: '0.72rem' }} className="text-white/60">{totalSkipped} deferred</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="col-span-2 grid grid-cols-3 gap-4">
          {[
            { label: 'Days to first exam', value: '77', icon: AlertTriangle, color: '#003366', bg: '#EEF2FF' },
            { label: 'Points completed', value: String(totalCompleted), icon: CheckCircle2, color: '#059669', bg: '#ECFDF5' },
            { label: 'Weeks to exam period', value: '11', icon: Clock, color: '#D97706', bg: '#FFFBEB' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: stat.bg }}>
                <stat.icon size={18} style={{ color: stat.color }} />
              </div>
              <p style={{ fontSize: '1.6rem', fontWeight: 800 }} className="text-gray-900">{stat.value}</p>
              <p style={{ fontSize: '0.72rem' }} className="text-gray-400 leading-tight mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        {/* Today's Focus */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={18} className="text-[#F4C430]" />
            <h2 style={{ fontSize: '1rem', fontWeight: 700 }} className="text-[#003366]">This Week's Focus</h2>
            <span style={{ fontSize: '0.7rem' }} className="ml-auto px-2 py-0.5 bg-[#F4C430]/20 text-[#003366] rounded-full font-semibold">
              Current Week
            </span>
          </div>
          {todaysFocus.length === 0 ? (
            <div className="text-center py-6">
              <Trophy size={32} className="text-[#F4C430] mx-auto mb-2" />
              <p style={{ fontSize: '0.875rem', fontWeight: 600 }} className="text-gray-600">Well done! 🎉</p>
              <p style={{ fontSize: '0.8rem' }} className="text-gray-400">All this week's points are complete.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {todaysFocus.map((point, i) => {
                const subj = subjects.find(s => s.id === point.subject_id);
                return (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-1 h-full min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: subj?.color || '#003366' }} />
                    <div className="flex-1 min-w-0">
                      <p style={{ fontSize: '0.8rem', fontWeight: 600 }} className="text-gray-700 truncate">{point.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span style={{ fontSize: '0.7rem' }} className="text-gray-400">{subj?.name}</span>
                        <span style={{ fontSize: '0.7rem' }} className="text-gray-300">·</span>
                        <span style={{ fontSize: '0.7rem' }} className="text-gray-400 flex items-center gap-1">
                          <Clock size={11} /> {point.estimated_minutes} min
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => markPoint(point.id, 'completed')}
                      className="opacity-0 group-hover:opacity-100 w-7 h-7 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-all flex-shrink-0"
                    >
                      <CheckCircle2 size={14} className="text-green-600" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Subject progress */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-[#003366]" />
            <h2 style={{ fontSize: '1rem', fontWeight: 700 }} className="text-[#003366]">Subject Progress</h2>
          </div>
          <div className="space-y-4">
            {subjectStats.map(s => (
              <div key={s.id}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 500 }} className="text-gray-700 truncate">{s.name}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600 }} className="text-gray-500 flex-shrink-0 ml-2">
                    {s.done}/{s.total}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${(s.done / s.total) * 100}%`, backgroundColor: s.color }}
                  />
                </div>
              </div>
            ))}
            {subjects.length > 3 && (
              <p style={{ fontSize: '0.75rem' }} className="text-gray-400 text-center pt-1">
                +{subjects.length - 3} more subjects
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Exam Countdown */}
      <div className="mb-6">
        <h2 style={{ fontSize: '1rem', fontWeight: 700 }} className="text-[#003366] mb-3 flex items-center gap-2">
          <AlertTriangle size={18} className="text-amber-500" />
          Upcoming Exams
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {upcomingExams.map(exam => (
            <ExamCountdown
              key={exam.id}
              examDate={exam.exam_date!}
              subjectName={exam.name}
              color={exam.color}
            />
          ))}
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-6 right-6 z-10">
        <AnimatePresence>
          {showFAB && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="mb-3 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-60"
            >
              <p style={{ fontSize: '0.8rem', fontWeight: 600 }} className="text-gray-600 mb-2">Quick Note</p>
              <input
                value={quickLog}
                onChange={e => setQuickLog(e.target.value)}
                placeholder="What did you study today?"
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                style={{ fontSize: '0.8rem' }}
              />
              <button
                onClick={() => { setQuickLog(''); setShowFAB(false); }}
                className="mt-2 w-full py-1.5 bg-[#003366] text-white rounded-lg text-sm hover:bg-[#004488] transition-colors"
                style={{ fontSize: '0.8rem' }}
              >
                Save
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setShowFAB(!showFAB)}
          className="w-14 h-14 rounded-full bg-[#003366] shadow-xl flex items-center justify-center hover:bg-[#004488] transition-all active:scale-95"
        >
          <motion.div animate={{ rotate: showFAB ? 45 : 0 }} transition={{ duration: 0.2 }}>
            <Plus size={24} className="text-[#F4C430]" />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
