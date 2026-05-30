import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  Plus,
  BookOpen,
  Zap,
  Trophy,
  StickyNote,
  Pin,
  Pencil,
  Trash2,
  Save,
  X,
  Loader2,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProgressRing } from '../components/ProgressRing';
import { motion, AnimatePresence } from 'motion/react';
import { apiClient } from '../services/api';
import type { UserNote } from '../types/catalog';

function getExamInfo(examDate: string | null | undefined, hasExam: boolean) {
  const today = new Date();
  const finalExamDate = !examDate && hasExam ? '2026-06-12' : examDate;

  if (!finalExamDate) return { examDateObj: null, daysToExam: 0 };

  const exam = new Date(finalExamDate);
  const days = Math.ceil((exam.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return {
    examDateObj: exam,
    daysToExam: days,
  };
}

function sortNotes(notes: UserNote[]) {
  return [...notes].sort((a, b) => {
    if (a.is_pinned !== b.is_pinned) {
      return a.is_pinned ? -1 : 1;
    }

    const aDate = new Date(a.updated_at || a.created_at || 0).getTime();
    const bDate = new Date(b.updated_at || b.created_at || 0).getTime();
    return bDate - aDate;
  });
}

function formatNoteDate(value?: string | null) {
  if (!value) return 'Just now';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return 'Just now';

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

function ExamCountdown({ examDate, hasExam, subjectName, color }: { examDate?: string | null; hasExam: boolean; subjectName: string; color: string }) {
  const { examDateObj, daysToExam: days } = getExamInfo(examDate, hasExam);
  const urgency = days <= 14 ? 'text-red-500' : days <= 30 ? 'text-amber-500' : 'text-[#003366]';

  return (
    <div className="bg-white rounded-2xl p-5 border-2 border-[#003366] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3 gap-3">
        <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: color }} />
        <span
          style={{ fontSize: '0.7rem', fontWeight: 600 }}
          className={`px-2 py-0.5 rounded-full ${days <= 14 ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-600'}`}
        >
          EXAM
        </span>
      </div>
      <p style={{ fontSize: '0.875rem', fontWeight: 600 }} className="text-gray-800 mb-1 leading-tight">
        {subjectName}
      </p>
      <div className="flex items-baseline gap-1 mt-2">
        <span style={{ fontSize: '2rem', fontWeight: 800 }} className={urgency}>{Math.max(0, days)}</span>
        <span style={{ fontSize: '0.8rem' }} className="text-gray-400">days</span>
      </div>
      <p style={{ fontSize: '0.75rem' }} className="text-gray-400 mt-1">
        {examDateObj?.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}
      </p>
      <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${Math.max(5, 100 - (Math.max(0, days) / 90) * 100)}%`,
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
  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(' ');

  const [showFAB, setShowFAB] = useState(false);
  const [quickLog, setQuickLog] = useState('');
  const [quickSubjectId, setQuickSubjectId] = useState('');
  const [quickPinned, setQuickPinned] = useState(false);
  const [notes, setNotes] = useState<UserNote[]>([]);
  const [notesLoading, setNotesLoading] = useState(false);
  const [notesSaving, setNotesSaving] = useState(false);
  const [notesError, setNotesError] = useState<string | null>(null);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');

  const subjectById = useMemo(() => {
    return subjects.reduce<Record<string, { name: string; color: string }>>((acc, subject) => {
      acc[subject.id] = { name: subject.name, color: subject.color };
      return acc;
    }, {});
  }, [subjects]);

  const refreshNotes = useCallback(async () => {
    if (!apiClient.isAuthenticated()) {
      setNotes([]);
      return;
    }

    setNotesLoading(true);
    setNotesError(null);

    try {
      const remoteNotes = await apiClient.getNotes(8);
      setNotes(sortNotes(remoteNotes));
    } catch (error) {
      console.error('Failed to load notes:', error);
      setNotesError('Could not load your notes.');
    } finally {
      setNotesLoading(false);
    }
  }, []);

  useEffect(() => {
    void refreshNotes();
  }, [refreshNotes, user?.id]);

  useEffect(() => {
    const hasSeenAlert = localStorage.getItem('examAlertShown');

    if (!hasSeenAlert) {
      alert("Information: Some of your exams don't have a specific date yet. We've temporarily set them to June 12, 2026, so you can see how the countdown works!");
    }

    localStorage.setItem('examAlertShown', 'true');
  }, []);

  const saveQuickNote = async () => {
    const content = quickLog.trim();

    if (!content || notesSaving) {
      return;
    }

    setNotesSaving(true);
    setNotesError(null);

    try {
      const created = await apiClient.createNote({
        content,
        subjectId: quickSubjectId || null,
        isPinned: quickPinned,
      });
      setNotes((prev) => sortNotes([created, ...prev]).slice(0, 8));
      setQuickLog('');
      setQuickSubjectId('');
      setQuickPinned(false);
      setShowFAB(false);
    } catch (error) {
      console.error('Failed to save note:', error);
      setNotesError('Could not save the note.');
    } finally {
      setNotesSaving(false);
    }
  };

  const togglePin = async (note: UserNote) => {
    try {
      const updated = await apiClient.updateNote(note.id, { isPinned: !note.is_pinned });
      setNotes((prev) => sortNotes(prev.map((item) => (item.id === updated.id ? updated : item))));
    } catch (error) {
      console.error('Failed to pin note:', error);
      setNotesError('Could not update the note.');
    }
  };

  const startEditing = (note: UserNote) => {
    setEditingNoteId(note.id);
    setEditingContent(note.content);
  };

  const cancelEditing = () => {
    setEditingNoteId(null);
    setEditingContent('');
  };

  const saveEditedNote = async (note: UserNote) => {
    const content = editingContent.trim();

    if (!content) {
      return;
    }

    try {
      const updated = await apiClient.updateNote(note.id, { content });
      setNotes((prev) => sortNotes(prev.map((item) => (item.id === updated.id ? updated : item))));
      cancelEditing();
    } catch (error) {
      console.error('Failed to edit note:', error);
      setNotesError('Could not update the note.');
    }
  };

  const deleteNote = async (note: UserNote) => {
    const shouldDelete = window.confirm('Delete this note?');

    if (!shouldDelete) {
      return;
    }

    try {
      await apiClient.deleteNote(note.id);
      setNotes((prev) => prev.filter((item) => item.id !== note.id));
    } catch (error) {
      console.error('Failed to delete note:', error);
      setNotesError('Could not delete the note.');
    }
  };

  const upcomingExams = subjects
    .filter((s) => s.has_exam)
    .sort((a, b) => new Date(a.exam_date || '2026-06-12').getTime() - new Date(b.exam_date || '2026-06-12').getTime())
    .slice(0, 2);

  const todaysFocus = weeklyPoints
    .filter((p) => getPointStatus(p.id) === 'pending')
    .slice(0, 3);

  const allPoints = subjects.flatMap((s) => knowledgePointsBySubject[s.id] || []);
  const totalCompleted = allPoints.filter((p) => getPointStatus(p.id) === 'completed').length;
  const totalSkipped = allPoints.filter((p) => getPointStatus(p.id) === 'skipped').length;

  const subjectStats = subjects.slice(0, 3).map((s) => {
    const pts = knowledgePointsBySubject[s.id] || [];
    const done = pts.filter((p) => getPointStatus(p.id) === 'completed').length;
    return { ...s, done, total: pts.length };
  });

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let daysToFirstExam = '-';
  let weeksToExamPeriod = '-';

  if (upcomingExams.length > 0) {
    const firstExam = upcomingExams[0];
    const { daysToExam } = getExamInfo(firstExam.exam_date, firstExam.has_exam);
    daysToFirstExam = String(Math.max(0, daysToExam));
    weeksToExamPeriod = String(Math.max(0, Math.ceil(daysToExam / 7)));
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }} className="text-[#003366]">
          Hello, {fullName || 'Student'}!
        </h1>
        <p style={{ fontSize: '0.9rem' }} className="text-gray-500 mt-1">
          Today is {formattedDate}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div className="bg-[#003366] rounded-2xl p-6 flex items-center gap-5 col-span-1 min-w-0">
          <ProgressRing progress={progress} size={100} strokeWidth={9}>
            <div className="text-center">
              <p style={{ fontSize: '1.4rem', fontWeight: 800 }} className="text-white">{progress}%</p>
              <p style={{ fontSize: '0.6rem' }} className="text-white/50 uppercase tracking-wider">completed</p>
            </div>
          </ProgressRing>
          <div className="min-w-0">
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

        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Days to first exam', value: daysToFirstExam, icon: AlertTriangle, color: '#003366', bg: '#EEF2FF' },
            { label: 'Points completed', value: String(totalCompleted), icon: CheckCircle2, color: '#059669', bg: '#ECFDF5' },
            { label: 'Weeks to exam period', value: weeksToExamPeriod, icon: Clock, color: '#D97706', bg: '#FFFBEB' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-4 border-2 border-[#003366] shadow-sm min-w-0">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: stat.bg }}>
                <stat.icon size={18} style={{ color: stat.color }} />
              </div>
              <p style={{ fontSize: '1.6rem', fontWeight: 800 }} className="text-gray-900">{stat.value}</p>
              <p style={{ fontSize: '0.72rem' }} className="text-gray-400 leading-tight mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <div className="bg-white rounded-2xl p-5 border-2 border-[#003366] shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={18} className="text-[#F4C430]" />
            <h2 style={{ fontSize: '1rem', fontWeight: 700 }} className="text-[#003366]">This Week's Focus</h2>
            <span style={{ fontSize: '0.7rem' }} className="ml-auto px-2 py-0.5 bg-[#F4C430]/20 text-[#003366] rounded-full font-semibold whitespace-nowrap">
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
                const subj = subjects.find((s) => s.id === point.subject_id);
                const status = getPointStatus(point.id);
                return (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => status === 'pending' && markPoint(point.id, 'completed')}
                    className={`flex items-start gap-3 p-3 rounded-xl border-2 transition-all ${
                      status === 'completed'
                        ? 'bg-green-50 border-green-200'
                        : status === 'skipped'
                          ? 'bg-amber-50 border-amber-200'
                          : 'bg-gray-50 border-gray-200 cursor-pointer hover:bg-gray-100'
                    } group`}
                  >
                    <div className="w-1 h-full min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: subj?.color || '#003366' }} />
                    <div className="flex-1 min-w-0">
                      <p style={{ fontSize: '0.8rem', fontWeight: 600 }} className="text-gray-700 truncate">{point.description}</p>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span style={{ fontSize: '0.7rem' }} className="text-gray-400">{subj?.name}</span>
                        <span style={{ fontSize: '0.7rem' }} className="text-gray-300">·</span>
                        <span style={{ fontSize: '0.7rem' }} className="text-gray-400 flex items-center gap-1">
                          <Clock size={11} /> {point.estimated_minutes} min
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); markPoint(point.id, 'completed'); }}
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

        <div className="bg-white rounded-2xl p-5 border-2 border-[#003366] shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-[#003366]" />
            <h2 style={{ fontSize: '1rem', fontWeight: 700 }} className="text-[#003366]">Subject Progress</h2>
          </div>
          <div className="space-y-4">
            {subjectStats.map((s) => {
              const pct = s.total === 0 ? 0 : Math.round((s.done / s.total) * 100);
              return (
                <div key={s.id}>
                  <div className="flex items-center justify-between mb-1 gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 500 }} className="text-gray-700 truncate">{s.name}</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }} className="text-gray-500 flex-shrink-0">
                      {s.done}/{s.total}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, backgroundColor: s.color }}
                    />
                  </div>
                </div>
              );
            })}
            {subjects.length > 3 && (
              <p style={{ fontSize: '0.75rem' }} className="text-gray-400 text-center pt-1">
                +{subjects.length - 3} more subjects
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border-2 border-[#003366] shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#003366]/10 flex items-center justify-center flex-shrink-0">
              <StickyNote size={18} className="text-[#003366]" />
            </div>
            <div className="min-w-0">
              <h2 style={{ fontSize: '1rem', fontWeight: 700 }} className="text-[#003366]">Quick Notes</h2>
              <p style={{ fontSize: '0.78rem' }} className="text-gray-400">Fast thoughts, reminders and study notes saved to your account.</p>
            </div>
          </div>
          <button
            onClick={() => setShowFAB(true)}
            className="px-4 py-2 rounded-xl bg-[#003366] text-white hover:bg-[#004488] transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            style={{ fontSize: '0.8rem', fontWeight: 700 }}
          >
            <Plus size={15} /> Add note
          </button>
        </div>

        {notesError && (
          <div className="mb-3 rounded-xl bg-red-50 border border-red-100 px-3 py-2 text-red-600" style={{ fontSize: '0.78rem' }}>
            {notesError}
          </div>
        )}

        {notesLoading ? (
          <div className="py-8 flex items-center justify-center gap-2 text-gray-400" style={{ fontSize: '0.85rem' }}>
            <Loader2 size={16} className="animate-spin" /> Loading notes...
          </div>
        ) : notes.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/70 p-6 text-center">
            <StickyNote size={30} className="text-gray-300 mx-auto mb-2" />
            <p style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-gray-600">No notes yet</p>
            <p style={{ fontSize: '0.78rem' }} className="text-gray-400 mt-1">Use Quick Notes to save what you studied or what you need to repeat.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {notes.map((note) => {
              const subject = note.subject_id ? subjectById[note.subject_id] : null;
              const isEditing = editingNoteId === note.id;

              return (
                <div key={note.id} className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4 hover:bg-white hover:shadow-sm transition-all min-w-0">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-1 self-stretch min-h-[52px] rounded-full flex-shrink-0"
                      style={{ backgroundColor: subject?.color || (note.is_pinned ? '#F4C430' : '#003366') }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        {note.is_pinned && (
                          <span className="px-2 py-0.5 rounded-full bg-[#F4C430]/20 text-[#003366] flex items-center gap-1" style={{ fontSize: '0.68rem', fontWeight: 700 }}>
                            <Pin size={10} /> Pinned
                          </span>
                        )}
                        {subject && (
                          <span className="px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-500" style={{ fontSize: '0.68rem', fontWeight: 700 }}>
                            {subject.name}
                          </span>
                        )}
                        <span className="text-gray-400" style={{ fontSize: '0.68rem' }}>
                          {formatNoteDate(note.updated_at || note.created_at)}
                        </span>
                      </div>

                      {isEditing ? (
                        <div className="space-y-2">
                          <textarea
                            value={editingContent}
                            onChange={(e) => setEditingContent(e.target.value)}
                            className="w-full min-h-[86px] resize-none rounded-xl border border-gray-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                            style={{ fontSize: '0.82rem' }}
                            maxLength={1200}
                          />
                          <div className="flex items-center gap-2 justify-end">
                            <button
                              onClick={cancelEditing}
                              className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors flex items-center gap-1"
                              style={{ fontSize: '0.72rem', fontWeight: 700 }}
                            >
                              <X size={12} /> Cancel
                            </button>
                            <button
                              onClick={() => saveEditedNote(note)}
                              className="px-3 py-1.5 rounded-lg bg-[#003366] text-white hover:bg-[#004488] transition-colors flex items-center gap-1"
                              style={{ fontSize: '0.72rem', fontWeight: 700 }}
                            >
                              <Save size={12} /> Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p style={{ fontSize: '0.84rem' }} className="text-gray-700 leading-relaxed break-words whitespace-pre-wrap">
                          {note.content}
                        </p>
                      )}
                    </div>

                    {!isEditing && (
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          onClick={() => togglePin(note)}
                          className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-[#003366] hover:border-[#003366]/30 transition-colors flex items-center justify-center"
                          title={note.is_pinned ? 'Unpin' : 'Pin'}
                        >
                          <Pin size={14} className={note.is_pinned ? 'fill-[#F4C430] text-[#003366]' : ''} />
                        </button>
                        <button
                          onClick={() => startEditing(note)}
                          className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-[#003366] hover:border-[#003366]/30 transition-colors flex items-center justify-center"
                          title="Edit"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          onClick={() => deleteNote(note)}
                          className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors flex items-center justify-center"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="mb-6">
        <h2 style={{ fontSize: '1rem', fontWeight: 700 }} className="text-[#003366] mb-3 flex items-center gap-2">
          <AlertTriangle size={18} className="text-amber-500" />
          Upcoming Exams
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {upcomingExams.map((exam) => (
            <ExamCountdown
              key={exam.id}
              examDate={exam.exam_date}
              hasExam={exam.has_exam}
              subjectName={exam.name}
              color={exam.color}
            />
          ))}
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-10">
        <AnimatePresence>
          {showFAB && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              className="mb-3 bg-white rounded-2xl shadow-xl border-2 border-[#003366] p-4 w-[min(22rem,calc(100vw-2rem))]"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 800 }} className="text-[#003366]">Quick Note</p>
                  <p style={{ fontSize: '0.72rem' }} className="text-gray-400">Saved to your account</p>
                </div>
                <button
                  onClick={() => setShowFAB(false)}
                  className="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              <textarea
                value={quickLog}
                onChange={(e) => setQuickLog(e.target.value)}
                placeholder="What did you study today?"
                className="w-full min-h-[96px] resize-none border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                style={{ fontSize: '0.82rem' }}
                maxLength={1200}
              />

              <div className="mt-3 grid grid-cols-1 gap-2">
                <select
                  value={quickSubjectId}
                  onChange={(e) => setQuickSubjectId(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                  style={{ fontSize: '0.78rem' }}
                >
                  <option value="">No subject</option>
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>{subject.name}</option>
                  ))}
                </select>

                <button
                  onClick={() => setQuickPinned((value) => !value)}
                  className={`w-full px-3 py-2 rounded-xl border transition-colors flex items-center justify-center gap-2 ${
                    quickPinned
                      ? 'bg-[#F4C430]/20 border-[#F4C430] text-[#003366]'
                      : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                  }`}
                  style={{ fontSize: '0.78rem', fontWeight: 700 }}
                >
                  <Pin size={13} className={quickPinned ? 'fill-[#F4C430]' : ''} />
                  {quickPinned ? 'Pinned note' : 'Pin note'}
                </button>
              </div>

              <button
                onClick={saveQuickNote}
                disabled={!quickLog.trim() || notesSaving}
                className="mt-3 w-full py-2.5 bg-[#003366] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl hover:bg-[#004488] transition-colors flex items-center justify-center gap-2"
                style={{ fontSize: '0.82rem', fontWeight: 800 }}
              >
                {notesSaving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                Save note
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
