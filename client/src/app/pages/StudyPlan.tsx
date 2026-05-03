import { useState } from 'react';
import { CheckCircle2, SkipForward, Clock, ChevronRight, Zap, Calendar, RefreshCw, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import type { KnowledgePoint } from '../types/catalog';
import { motion, AnimatePresence } from 'motion/react';

const CURRENT_WEEK = 5;

export function StudyPlan() {
  const {
    subjects, weeklyPoints, nextWeekPoints,
    getPointStatus, markPoint, knowledgePointsBySubject, weeksUntilExam
  } = useApp();

  const [skippedAnims, setSkippedAnims] = useState<Set<string>>(new Set());
  const [completedAnims, setCompletedAnims] = useState<Set<string>>(new Set());

  const handleComplete = (pointId: string) => {
    setCompletedAnims(prev => new Set(prev).add(pointId));
    setTimeout(() => markPoint(pointId, 'completed'), 400);
  };

  const handleSkip = (pointId: string) => {
    setSkippedAnims(prev => new Set(prev).add(pointId));
    setTimeout(() => markPoint(pointId, 'skipped'), 500);
  };

  const handleUndo = (pointId: string) => {
    markPoint(pointId, 'pending');
  };

  // Adaptive load calculation
  const pendingPoints = subjects.flatMap(s =>
    (knowledgePointsBySubject[s.id] || []).filter(p => getPointStatus(p.id) === 'pending')
  );
  const totalRemainingTime = pendingPoints.reduce((s, p) => s + p.estimated_minutes, 0);
  const weeklyLoad = weeksUntilExam > 0 ? Math.round(totalRemainingTime / weeksUntilExam) : 0;

  const currentPoints = weeklyPoints.filter(p => getPointStatus(p.id) === 'pending');
  const thisWeekCompleted = weeklyPoints.filter(p => getPointStatus(p.id) === 'completed');
  const thisWeekSkipped = weeklyPoints.filter(p => getPointStatus(p.id) === 'skipped');

  const PointCard = ({ point, bucket }: { point: KnowledgePoint; bucket: 'current' | 'next' | 'completed' | 'skipped' }) => {
    const subj = subjects.find(s => s.id === point.subject_id);
    const isSkipping = skippedAnims.has(point.id);
    const isCompleting = completedAnims.has(point.id);

    return (
      <AnimatePresence>
        <motion.div
          key={point.id}
          initial={{ opacity: 1, x: 0, scale: 1 }}
          animate={
            isSkipping ? { opacity: 0, x: 60, scale: 0.9 } :
            isCompleting ? { opacity: 0, scale: 0.8, y: -10 } :
            { opacity: 1, x: 0, scale: 1 }
          }
          transition={{ duration: 0.4 }}
          className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${
            bucket === 'completed'
              ? 'bg-green-50 border-green-100'
              : bucket === 'skipped'
              ? 'bg-amber-50 border-amber-100'
              : bucket === 'next'
              ? 'bg-gray-50 border-gray-100 opacity-75'
              : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
          }`}
        >
          {/* Status icon */}
          <div className="flex-shrink-0 mt-0.5">
            {bucket === 'completed' && <CheckCircle2 size={18} className="text-green-500" />}
            {bucket === 'skipped' && <SkipForward size={18} className="text-amber-400" />}
            {(bucket === 'current' || bucket === 'next') && (
              <div className="w-4.5 h-4.5 rounded-full border-2 border-gray-200 mt-0.5" />
            )}
          </div>

          {/* Subject accent */}
          <div className="w-0.5 self-stretch rounded-full flex-shrink-0" style={{ backgroundColor: subj?.color || '#003366' }} />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p style={{ fontSize: '0.85rem', fontWeight: 500 }}
              className={`leading-snug ${bucket === 'completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              {point.description}
            </p>
            <div className="flex items-center gap-3 mt-1.5">
              <span style={{ fontSize: '0.7rem', color: subj?.color || '#003366' }}
                className="font-medium">
                {subj?.name}
              </span>
              <span style={{ fontSize: '0.7rem' }} className="text-gray-300">·</span>
              <span style={{ fontSize: '0.7rem' }} className="text-gray-400 flex items-center gap-1">
                <Clock size={11} /> {point.estimated_minutes} min
              </span>
            </div>
          </div>

          {/* Actions */}
          {bucket === 'current' && (
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => handleComplete(point.id)}
                title="Mark as complete"
                className="w-8 h-8 rounded-lg bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
              >
                <CheckCircle2 size={15} className="text-green-600" />
              </button>
              <button
                onClick={() => handleSkip(point.id)}
                title="Defer to next week"
                className="w-8 h-8 rounded-lg bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors"
              >
                <SkipForward size={15} className="text-amber-600" />
              </button>
            </div>
          )}
          {(bucket === 'completed' || bucket === 'skipped') && (
            <button
              onClick={() => handleUndo(point.id)}
              title="Undo"
              className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
            >
              <RefreshCw size={12} className="text-gray-500" />
            </button>
          )}
          {bucket === 'next' && (
            <span style={{ fontSize: '0.65rem' }} className="px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full flex-shrink-0">
              Next week
            </span>
          )}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }} className="text-[#003366]">Study Plan</h1>
        <p style={{ fontSize: '0.85rem' }} className="text-gray-500 mt-0.5">Adaptive weekly schedule — 1 knowledge point per week per subject</p>
      </div>

      {/* Adaptive metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Semester week', value: `#${CURRENT_WEEK}`, icon: Calendar, color: '#003366' },
          { label: 'Weeks to exams', value: weeksUntilExam, icon: ChevronRight, color: '#b45309' },
          { label: 'Load / week', value: `${weeklyLoad} min`, icon: Zap, color: '#7c3aed' },
          { label: 'To do this week', value: currentPoints.length, icon: CheckCircle2, color: '#059669' },
        ].map(m => (
          <div key={m.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: m.color + '15' }}>
              <m.icon size={16} style={{ color: m.color }} />
            </div>
            <p style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-gray-900">{m.value}</p>
            <p style={{ fontSize: '0.7rem' }} className="text-gray-400 leading-tight mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Adaptive formula display */}
      <div className="bg-[#003366] text-white rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <Zap size={18} className="text-[#F4C430]" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700 }} className="text-white">Adaptive Engine</span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
            <p style={{ fontSize: '1.2rem', fontWeight: 800 }} className="text-[#F4C430]">{totalRemainingTime}</p>
            <p style={{ fontSize: '0.65rem' }} className="text-white/60">min remaining</p>
          </div>
          <div className="text-white/40 text-xl">÷</div>
          <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
            <p style={{ fontSize: '1.2rem', fontWeight: 800 }} className="text-[#F4C430]">{weeksUntilExam}</p>
            <p style={{ fontSize: '0.65rem' }} className="text-white/60">weeks</p>
          </div>
          <div className="text-white/40 text-xl">=</div>
          <div className="bg-[#F4C430] rounded-xl px-4 py-2 text-center">
            <p style={{ fontSize: '1.2rem', fontWeight: 800 }} className="text-[#003366]">{weeklyLoad} min</p>
            <p style={{ fontSize: '0.65rem' }} className="text-[#003366]/70">/ week</p>
          </div>
          <p style={{ fontSize: '0.78rem' }} className="text-white/50 ml-2">
            Skipping a point automatically<br />
            recalculates your schedule
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Current week */}
        <div className="lg:col-span-2 space-y-4">
          {/* Pending this week */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#003366]" />
              <h2 style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-[#003366]">
                This Week ({currentPoints.length} points)
              </h2>
            </div>
            {currentPoints.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
                <p style={{ fontSize: '2rem' }}>🎉</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 600 }} className="text-gray-700 mt-2">
                  Week complete!
                </p>
                <p style={{ fontSize: '0.8rem' }} className="text-gray-400 mt-1">
                  Great work. All points for this week are done.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {currentPoints.map(p => <PointCard key={p.id} point={p} bucket="current" />)}
              </div>
            )}
          </div>

          {/* Completed this week */}
          {thisWeekCompleted.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <h2 style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-green-600">
                  Completed This Week ({thisWeekCompleted.length})
                </h2>
              </div>
              <div className="space-y-2">
                {thisWeekCompleted.map(p => <PointCard key={p.id} point={p} bucket="completed" />)}
              </div>
            </div>
          )}

          {/* Skipped this week */}
          {thisWeekSkipped.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <h2 style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-amber-600">
                  Deferred ({thisWeekSkipped.length})
                </h2>
              </div>
              <div className="space-y-2">
                {thisWeekSkipped.map(p => <PointCard key={p.id} point={p} bucket="skipped" />)}
              </div>
            </div>
          )}
        </div>

        {/* Next week preview */}
        <div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-6">
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight size={16} className="text-gray-400" />
              <h2 style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-gray-600">Next Week</h2>
            </div>
            {nextWeekPoints.length === 0 ? (
              <p style={{ fontSize: '0.8rem' }} className="text-gray-400 text-center py-4">
                No points scheduled yet
              </p>
            ) : (
              <div className="space-y-2">
                {nextWeekPoints.slice(0, 6).map(point => {
                  const subj = subjects.find(s => s.id === point.subject_id);
                  return (
                    <div key={point.id} className="flex items-start gap-2 p-2.5 rounded-xl bg-gray-50">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: subj?.color || '#003366' }} />
                      <div className="min-w-0">
                        <p style={{ fontSize: '0.75rem' }} className="text-gray-700 leading-snug line-clamp-2">{point.description}</p>
                        <span style={{ fontSize: '0.65rem' }} className="text-gray-400">{point.estimated_minutes} min</span>
                      </div>
                    </div>
                  );
                })}
                {nextWeekPoints.length > 6 && (
                  <p style={{ fontSize: '0.72rem' }} className="text-gray-400 text-center">
                    +{nextWeekPoints.length - 6} more points
                  </p>
                )}
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p style={{ fontSize: '0.72rem' }} className="text-gray-400">
                Estimated time: <strong className="text-gray-600">
                  {nextWeekPoints.reduce((s, p) => s + p.estimated_minutes, 0)} min
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
