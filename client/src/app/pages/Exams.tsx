import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Clock, CheckCircle2, Circle, SkipForward, Award, BookOpen, Calendar, Star, Loader2, Pencil, Save } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { apiClient } from '../services/api';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

const TODAY = new Date();

function daysUntil(dateStr: string) {
  return Math.ceil((new Date(dateStr).getTime() - TODAY.getTime()) / (1000 * 60 * 60 * 24));
}

function weekLabel(week: number): string {
  if (week === 1) return 'Week 1';
  return `Week ${week}`;
}

function weekBadgeColor(week: number, currentWeek: number): { bg: string; border: string; text: string } {
  if (week < currentWeek) return { bg: 'bg-gray-100', border: 'border-gray-400', text: 'text-gray-400' };
  if (week === currentWeek) return { bg: 'bg-[#F4C430]/20', border: 'border-[#F4C430]', text: 'text-[#003366]' };
  if (week === currentWeek + 1) return { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-600' };
  return { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-500' };
}

export function Exams() {
  const { user, isLoggedIn, subjects, knowledgePointsBySubject, getPointStatus, markPoint, getSubjectProgress, pointWeekMap, currentWeek, faculties, refreshSubjects } = useApp();
  const [expanded, setExpanded] = useState<string | null>(subjects[0]?.id || null);
  const [showExamDateEditor, setShowExamDateEditor] = useState(false);
  const [examDateDrafts, setExamDateDrafts] = useState<Record<string, string>>({});
  const [examDatesSaving, setExamDatesSaving] = useState(false);
  const [examDatesError, setExamDatesError] = useState<string | null>(null);
  const faculty = faculties.find(f => f.id === user?.faculty_id);

  const examSubjects = useMemo(
    () => subjects.filter((subject) => subject.has_exam),
    [subjects]
  );

  const openExamDateEditor = () => {
    const drafts = examSubjects.reduce<Record<string, string>>((acc, subject) => {
      acc[subject.id] = subject.exam_date || '';
      return acc;
    }, {});

    setExamDateDrafts(drafts);
    setExamDatesError(null);
    setShowExamDateEditor(true);
  };

  const saveExamDates = async () => {
    if (!user?.faculty_id || !user.semester) {
      return;
    }

    setExamDatesSaving(true);
    setExamDatesError(null);

    try {
      await apiClient.updateSubjectExamDates({
        facultyId: user.faculty_id,
        directionId: user.direction_id,
        specializationId: user.specialization_id,
        semester: user.semester,
        updates: examSubjects.map((subject) => ({
          subjectId: subject.id,
          examDate: examDateDrafts[subject.id]?.trim() || null,
        })),
      });

      await refreshSubjects();
      setShowExamDateEditor(false);
    } catch (error) {
      console.error('Failed to update exam dates:', error);
      setExamDatesError('Could not save exam dates. Please try again.');
    } finally {
      setExamDatesSaving(false);
    }
  };

  const toggle = (id: string) => setExpanded(prev => prev === id ? null : id);

  const statusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />;
    if (status === 'skipped') return <SkipForward size={16} className="text-amber-400 flex-shrink-0" />;
    return <Circle size={16} className="text-gray-300 flex-shrink-0" />;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }} className="text-[#003366]">Exams & Subjects</h1>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span style={{ fontSize: '0.8rem' }} className="px-2.5 py-1 bg-[#003366]/10 text-[#003366] rounded-full font-medium">
            {faculty?.name || 'Faculty'}
          </span>
          <span style={{ fontSize: '0.8rem' }} className="px-2.5 py-1 bg-[#F4C430]/20 text-[#003366] rounded-full font-medium">
            Semester {user?.semester}
          </span>
          <span style={{ fontSize: '0.8rem' }} className="text-gray-400">
            {subjects.length} subjects · {subjects.filter(s => s.has_exam).length} with exam
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-5 flex-wrap">
        <p style={{ fontSize: '0.75rem' }} className="text-gray-500">Week badges:</p>
        {[
          { bg: 'bg-[#F4C430]/20', border: 'border-[#F4C430]', text: 'text-[#003366]', label: 'This week' },
          { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-600', label: 'Next week' },
          { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-500', label: 'Future' },
          { bg: 'bg-gray-100', border: 'border-gray-400', text: 'text-gray-400', label: 'Past' },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span className={`px-2 py-0.5 rounded-full text-xs border-2 ${item.bg} ${item.border} ${item.text}`} style={{ fontSize: '0.65rem' }}>
              Week N
            </span>
            <span style={{ fontSize: '0.72rem' }} className="text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Subjects', value: subjects.length, color: '#003366', clickable: false },
          { label: 'With exam', value: examSubjects.length, color: '#ef4444', clickable: isLoggedIn },
          { label: 'Total points', value: subjects.reduce((s, sub) => s + (knowledgePointsBySubject[sub.id]?.length || 0), 0), color: '#059669', clickable: false },
        ].map(stat => (
          <div
            key={stat.label}
            onClick={stat.clickable ? openExamDateEditor : undefined}
            onKeyDown={stat.clickable ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openExamDateEditor();
              }
            } : undefined}
            role={stat.clickable ? 'button' : undefined}
            tabIndex={stat.clickable ? 0 : undefined}
            className={`bg-white rounded-2xl p-4 border-2 border-[#003366] shadow-sm text-center ${
              stat.clickable ? 'cursor-pointer hover:bg-red-50/60 hover:shadow-md transition-all' : ''
            }`}
          >
            <p style={{ fontSize: '1.75rem', fontWeight: 800, color: stat.color }}>
              {stat.value}
            </p>
            <p style={{ fontSize: '0.75rem' }} className="text-gray-400 mt-0.5">{stat.label}</p>
            {stat.clickable && (
              <p style={{ fontSize: '0.68rem' }} className="text-red-500 mt-2 flex items-center justify-center gap-1">
                <Pencil size={11} /> Edit exam dates
              </p>
            )}
          </div>
        ))}
      </div>

      <Dialog open={showExamDateEditor} onOpenChange={setShowExamDateEditor}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-hidden flex flex-col bg-white">
          <DialogHeader>
            <DialogTitle className="text-[#003366]">Edit exam dates</DialogTitle>
            <DialogDescription>
              Set exam dates.
            </DialogDescription>
          </DialogHeader>

          {examDatesError && (
            <div className="rounded-xl bg-red-50 border border-red-100 px-3 py-2 text-red-600" style={{ fontSize: '0.78rem' }}>
              {examDatesError}
            </div>
          )}

          <div className="overflow-y-auto pr-1 space-y-3">
            {examSubjects.length === 0 ? (
              <p style={{ fontSize: '0.85rem' }} className="text-gray-500 text-center py-6">
                No exam subjects in this semester.
              </p>
            ) : (
              examSubjects.map((subject) => (
                <div key={subject.id} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/70 p-3">
                  <div className="w-2 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: subject.color }} />
                  <div className="flex-1 min-w-0">
                    <p style={{ fontSize: '0.82rem', fontWeight: 600 }} className="text-gray-800 truncate">
                      {subject.name}
                    </p>
                    <p style={{ fontSize: '0.7rem' }} className="text-gray-400">
                      {subject.exam_date ? `Current: ${new Date(subject.exam_date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}` : 'No date set yet'}
                    </p>
                  </div>
                  <input
                    type="date"
                    value={examDateDrafts[subject.id] || ''}
                    onChange={(event) => {
                      setExamDateDrafts((prev) => ({
                        ...prev,
                        [subject.id]: event.target.value,
                      }));
                    }}
                    className="border border-gray-200 rounded-xl px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                    style={{ fontSize: '0.78rem' }}
                  />
                </div>
              ))
            )}
          </div>

          <DialogFooter>
            <button
              type="button"
              onClick={() => setShowExamDateEditor(false)}
              className="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              style={{ fontSize: '0.8rem', fontWeight: 700 }}
              disabled={examDatesSaving}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={saveExamDates}
              disabled={examDatesSaving || examSubjects.length === 0}
              className="px-4 py-2 rounded-xl bg-[#003366] text-white hover:bg-[#004488] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              style={{ fontSize: '0.8rem', fontWeight: 700 }}
            >
              {examDatesSaving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
              Save dates
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Subject cards */}
      <div className="space-y-4">
        {subjects.map(subj => {
          const { completed, skipped, total } = getSubjectProgress(subj.id);
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
          const points = knowledgePointsBySubject[subj.id] || [];
          const isExpanded = expanded === subj.id;
          const days = subj.exam_date ? daysUntil(subj.exam_date) : null;

          return (
            <div key={subj.id} className="bg-white rounded-2xl border-2 border-[#003366] shadow-sm overflow-hidden">
              {/* Card header */}
              <button
                onClick={() => toggle(subj.id)}
                className="w-full p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {/* Color bar */}
                  <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ backgroundColor: subj.color }} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }} className="text-gray-900">{subj.name}</h3>
                      {subj.has_exam && (
                        <span style={{ fontSize: '0.65rem', fontWeight: 700 }}
                          className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full uppercase tracking-wide flex items-center gap-1">
                          <Award size={10} /> Exam
                        </span>
                      )}
                      {!subj.has_exam && (
                        <span style={{ fontSize: '0.65rem', fontWeight: 600 }}
                          className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full uppercase tracking-wide">
                          Credit
                        </span>
                      )}
                    </div>

                    {/* Progress bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%`, backgroundColor: subj.color }}
                        />
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600 }} className="text-gray-600 flex-shrink-0">
                        {completed}/{total}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                      <span style={{ fontSize: '0.72rem' }} className="text-gray-400">
                        {pct}% completed
                      </span>
                      {skipped > 0 && (
                        <span style={{ fontSize: '0.72rem' }} className="text-amber-500">
                          {skipped} deferred
                        </span>
                      )}
                      {subj.exam_date && days !== null && (
                        <span style={{ fontSize: '0.72rem' }} className={`font-medium ${days <= 14 ? 'text-red-500' : 'text-gray-500'}`}>
                          Exam in {days} days
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="text-right">
                      <p style={{ fontSize: '1.2rem', fontWeight: 800 }} className="text-[#003366]">{pct}%</p>
                    </div>
                    {isExpanded ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                  </div>
                </div>
              </button>

              {/* Expanded knowledge points */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t-2 border-[#003366]">
                      <div className="flex items-center gap-2 py-3 mb-2">
                        <BookOpen size={14} className="text-gray-400" />
                        <span style={{ fontSize: '0.78rem', fontWeight: 600 }} className="text-gray-500 uppercase tracking-wide">
                          {points.length} Knowledge Points
                        </span>
                        <div className="flex-1" />
                        {subj.exam_date && (
                          <span style={{ fontSize: '0.72rem' }} className="text-gray-400 flex items-center gap-1">
                            <Calendar size={11} />
                            Exam: {new Date(subj.exam_date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                          </span>
                        )}
                      </div>

                      {points.length === 0 ? (
                        <div className="py-8 text-center">
                          <p style={{ fontSize: '0.85rem' }} className="text-gray-400">
                            No knowledge points available for this subject yet.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {points.map((point, i) => {
                            const status = getPointStatus(point.id);
                            const week = pointWeekMap[point.id];
                            const { bg: wBg, text: wText } = week ? weekBadgeColor(week, currentWeek) : { bg: 'bg-gray-50', text: 'text-gray-400' };

                            return (
                              <motion.div
                                key={point.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.02 }}
                                onClick={() => status === 'pending' && markPoint(point.id, 'completed')}
                                className={`flex items-start gap-3 p-3 rounded-xl border-2 transition-all ${
                                  status === 'completed'
                                    ? 'bg-green-50 border-green-200'
                                    : status === 'skipped'
                                    ? 'bg-amber-50 border-amber-200'
                                    : 'bg-gray-50 border-gray-200 cursor-pointer hover:bg-gray-100'
                                }`}
                              >
                                <div className="flex-shrink-0 pt-0.5">
                                  {statusIcon(status)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p style={{ fontSize: '0.82rem', fontWeight: status === 'completed' ? 400 : 500 }}
                                    className={`leading-snug ${status === 'completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                                    <span style={{ fontSize: '0.72rem', fontWeight: 600 }} className="text-gray-400 mr-1">
                                      {String(i + 1).padStart(2, '0')}.
                                    </span>
                                    {point.description}
                                  </p>
                                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                                    <Clock size={11} className="text-gray-300" />
                                    <span style={{ fontSize: '0.7rem' }} className="text-gray-400">{point.estimated_minutes} min</span>
                                    {week && (
                                      <span className={`px-1.5 py-0.5 rounded-full border-2 ${wBg} ${weekBadgeColor(week, currentWeek).border} ${wText}`} style={{ fontSize: '0.65rem', fontWeight: 600 }}>
                                        {weekLabel(week)}
                                      </span>
                                    )}
                                    {week === currentWeek && <Star size={12} className="text-yellow-400 fill-yellow-400" style={{ marginLeft: '4px' }} />}
                                  </div>
                                </div>
                                {status === 'pending' && (
                                  <div className="flex gap-1 flex-shrink-0">
                                    <button
                                      onClick={() => markPoint(point.id, 'completed')}
                                      className="px-2 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-1"
                                      style={{ fontSize: '0.7rem' }}
                                    >
                                      <CheckCircle2 size={11} /> Done
                                    </button>
                                    <button
                                      onClick={() => markPoint(point.id, 'skipped')}
                                      className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors flex items-center gap-1"
                                      style={{ fontSize: '0.7rem' }}
                                    >
                                      <SkipForward size={11} /> Skip
                                    </button>
                                  </div>
                                )}
                                {status !== 'pending' && (
                                  <button
                                    onClick={() => markPoint(point.id, 'pending')}
                                    className="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 transition-colors flex-shrink-0"
                                    style={{ fontSize: '0.7rem' }}
                                  >
                                    Undo
                                  </button>
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      )}

                      {/* Summary for expanded */}
                      {points.length > 0 && (
                        <div className="mt-4 p-3 bg-[#003366]/5 rounded-xl flex items-center justify-between">
                          <span style={{ fontSize: '0.78rem' }} className="text-[#003366]">
                            Total study time: {points.reduce((s, p) => s + p.estimated_minutes, 0)} min
                            ({Math.round(points.reduce((s, p) => s + p.estimated_minutes, 0) / 60 * 10) / 10} h)
                          </span>
                          <span style={{ fontSize: '0.78rem', fontWeight: 600 }} className="text-[#003366]">
                            Remaining: {points.filter(p => getPointStatus(p.id) !== 'completed').reduce((s, p) => s + p.estimated_minutes, 0)} min
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
