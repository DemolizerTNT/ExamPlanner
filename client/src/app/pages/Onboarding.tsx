import { useState, Fragment } from 'react';
import {
  GraduationCap, ChevronRight, CheckCircle2,
  Building2, BookOpen, Star, Calendar, ChevronLeft, Info
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';

const TOTAL_STEPS = 4;

const STEP_META = [
  { label: 'Faculty',        icon: Building2 },
  { label: 'Direction',      icon: BookOpen },
  { label: 'Specialization', icon: Star },
  { label: 'Semester',       icon: Calendar },
];

export function Onboarding() {
  const { user, faculties, getDirectionsFor, getSpecializationsFor, completeOnboarding } = useApp();
  const [step, setStep] = useState(1);
  const [selectedFaculty,    setSelectedFaculty]    = useState('');
  const [selectedDirection,  setSelectedDirection]  = useState('');
  const [selectedSpec,       setSelectedSpec]       = useState<string | undefined>(undefined);
  const [selectedSemester,   setSelectedSemester]   = useState(0);

  const faculty   = faculties.find(f => f.id === selectedFaculty);
  const directions = selectedFaculty ? getDirectionsFor(selectedFaculty) : [];
  const direction  = directions.find(d => d.id === selectedDirection);
  const specializations = selectedDirection ? getSpecializationsFor(selectedDirection) : [];

  const goBack = () => setStep(s => Math.max(1, s - 1));

  /* ── step handlers ── */
  const handleFaculty = (id: string) => { setSelectedFaculty(id); setSelectedDirection(''); setSelectedSpec(undefined); setStep(2); };
  const handleDirection = (id: string) => { setSelectedDirection(id); setSelectedSpec(undefined); setStep(3); };
  const handleSpec = (id: string | undefined) => { setSelectedSpec(id); setStep(4); };
  const handleFinish = () => {
    if (selectedFaculty && selectedDirection && selectedSemester > 0) {
      completeOnboarding(selectedFaculty, selectedDirection, selectedSpec, selectedSemester);
    }
  };

  /* ── spec note ── */
  const specNote = specializations.length > 0
    ? `Specializations available from semester ${Math.min(...specializations.map(s => s.min_semester))}`
    : 'No specializations for this direction';

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-xl">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#003366] flex items-center justify-center mx-auto mb-4">
            <GraduationCap size={28} className="text-[#F4C430]" />
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 700 }} className="text-[#003366] mb-1">
            Welcome, {user?.name}! 👋
          </h1>
          <p style={{ fontSize: '0.9rem' }} className="text-gray-500">
            Let's set up your profile — it only takes 4 quick steps.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {STEP_META.map((s, i) => {
            const stepNum = i + 1;
            const isDone = step > stepNum;
            const isActive = step === stepNum;
            const Icon = s.icon;
            return (
              <Fragment key={s.label}>
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border-2 ${
                    isDone    ? 'bg-[#F4C430] border-[#F4C430]' :
                    isActive  ? 'bg-[#003366] border-[#003366]' :
                                'bg-white border-gray-200'
                  }`}>
                    {isDone
                      ? <CheckCircle2 size={16} className="text-[#003366]" />
                      : <Icon size={15} className={isActive ? 'text-white' : 'text-gray-300'} />
                    }
                  </div>
                  <p style={{ fontSize: '0.62rem' }} className={`mt-0.5 ${isActive ? 'text-[#003366]' : 'text-gray-300'}`}>
                    {s.label}
                  </p>
                </div>
                {i < STEP_META.length - 1 && (
                  <div className={`h-0.5 flex-1 mb-4 max-w-[40px] transition-all ${step > stepNum ? 'bg-[#F4C430]' : 'bg-gray-200'}`} />
                )}
              </Fragment>
            );
          })}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">

          {/* ── Step 1: Faculty ── */}
          {step === 1 && (
            <motion.div key="step1"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
            >
              <StepHeader step={1} total={TOTAL_STEPS} title="Select Your Faculty" subtitle="Which faculty are you enrolled in at PRz?" />
              <div className="space-y-2 mt-4 max-h-72 overflow-y-auto pr-1">
                {faculties.map(f => (
                  <OptionRow
                    key={f.id}
                    label={f.name}
                    sub={f.shortName}
                    selected={selectedFaculty === f.id}
                    onClick={() => handleFaculty(f.id)}
                    showArrow
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Step 2: Direction ── */}
          {step === 2 && (
            <motion.div key="step2"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
            >
              <StepHeader step={2} total={TOTAL_STEPS} title="Select Your Direction" subtitle={`Faculty: ${faculty?.name}`} onBack={goBack} />
              <div className="space-y-2 mt-4">
                {directions.length === 0 ? (
                  <p style={{ fontSize: '0.85rem' }} className="text-gray-400 text-center py-6">No directions found for this faculty.</p>
                ) : directions.map(d => (
                  <OptionRow
                    key={d.id}
                    label={d.name}
                    selected={selectedDirection === d.id}
                    onClick={() => handleDirection(d.id)}
                    showArrow
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Step 3: Specialization ── */}
          {step === 3 && (
            <motion.div key="step3"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
            >
              <StepHeader step={3} total={TOTAL_STEPS} title="Select Your Specialization" subtitle={`Direction: ${direction?.name}`} onBack={goBack} />

              {/* Info banner */}
              <div className="flex items-start gap-2 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2.5 mt-4 mb-3">
                <Info size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <p style={{ fontSize: '0.78rem' }} className="text-blue-600">
                  {specNote}. Students in earlier semesters can select <strong>General Curriculum</strong> and switch later.
                </p>
              </div>

              <div className="space-y-2">
                {/* General option */}
                <OptionRow
                  label="General Curriculum"
                  sub="No specialization — common subjects for all students"
                  selected={selectedSpec === undefined}
                  onClick={() => handleSpec(undefined)}
                  showArrow
                  accent="#003366"
                />
                {specializations.map(sp => (
                  <OptionRow
                    key={sp.id}
                    label={sp.name}
                    sub={`Available from semester ${sp.min_semester}`}
                    selected={selectedSpec === sp.id}
                    onClick={() => handleSpec(sp.id)}
                    showArrow
                    accent="#7c3aed"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Step 4: Semester ── */}
          {step === 4 && (
            <motion.div key="step4"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
            >
              <StepHeader step={4} total={TOTAL_STEPS} title="Select Your Semester" subtitle="Which semester are you currently in?" onBack={goBack} />

              {/* Summary pill */}
              <div className="flex flex-wrap gap-2 mt-4 mb-5">
                <Pill label={faculty?.shortName ?? ''} color="#003366" />
                <Pill label={direction?.name ?? ''} color="#1a6b3a" />
                {selectedSpec
                  ? <Pill label={specializations.find(s => s.id === selectedSpec)?.name ?? ''} color="#7c3aed" />
                  : <Pill label="General Curriculum" color="#b45309" />
                }
              </div>

              <div className="grid grid-cols-4 gap-2 mb-5">
                {[1, 2, 3, 4, 5, 6, 7].map(sem => (
                  <button
                    key={sem}
                    onClick={() => setSelectedSemester(sem)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedSemester === sem
                        ? 'border-[#003366] bg-[#003366] text-white'
                        : 'border-gray-100 hover:border-[#003366]/40 hover:bg-[#003366]/5'
                    }`}
                  >
                    <p style={{ fontSize: '1.35rem', fontWeight: 700 }}>{sem}</p>
                    <p style={{ fontSize: '0.62rem', marginTop: '2px' }} className={selectedSemester === sem ? 'text-white/70' : 'text-gray-400'}>
                      sem.
                    </p>
                  </button>
                ))}
              </div>

              {/* Spec warning if semester < min_semester */}
              {selectedSpec && selectedSemester > 0 && (() => {
                const spec = specializations.find(s => s.id === selectedSpec);
                if (spec && selectedSemester < spec.min_semester) {
                  return (
                    <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 mb-4">
                      <Info size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                      <p style={{ fontSize: '0.78rem' }} className="text-amber-700">
                        <strong>{spec.name}</strong> specialization starts in semester {spec.min_semester}. Specialization subjects won't appear until then — common subjects will be shown.
                      </p>
                    </div>
                  );
                }
                return null;
              })()}

              <button
                onClick={handleFinish}
                disabled={!selectedSemester}
                className="w-full py-3 rounded-xl bg-[#F4C430] text-[#003366] flex items-center justify-center gap-2 hover:bg-[#e5b820] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ fontSize: '0.9rem', fontWeight: 700 }}
              >
                Go to App
                <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Reusable sub-components ── */

function StepHeader({ step, total, title, subtitle, onBack }: {
  step: number; total: number; title: string; subtitle: string; onBack?: () => void;
}) {
  return (
    <div>
      {onBack && (
        <button onClick={onBack} className="flex items-center gap-1 text-[#003366] hover:underline mb-2" style={{ fontSize: '0.8rem' }}>
          <ChevronLeft size={14} /> Back
        </button>
      )}
      <div className="flex items-start justify-between">
        <div>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700 }} className="text-[#003366]">{title}</h2>
          <p style={{ fontSize: '0.8rem' }} className="text-gray-500 mt-0.5">{subtitle}</p>
        </div>
        <span style={{ fontSize: '0.72rem', fontWeight: 600 }} className="bg-[#003366]/10 text-[#003366] px-2 py-1 rounded-full flex-shrink-0 ml-2">
          {step} / {total}
        </span>
      </div>
    </div>
  );
}

function OptionRow({ label, sub, selected, onClick, showArrow, accent = '#003366' }: {
  label: string; sub?: string; selected: boolean; onClick: () => void; showArrow?: boolean; accent?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all text-left group ${
        selected
          ? 'border-current bg-current/5'
          : 'border-gray-100 hover:border-current/40 hover:bg-current/5'
      }`}
      style={{ color: accent, borderColor: selected ? accent : undefined }}
    >
      <div className="flex-1 min-w-0">
        <p style={{ fontSize: '0.875rem', fontWeight: 600 }} className="text-gray-800 truncate">{label}</p>
        {sub && <p style={{ fontSize: '0.72rem' }} className="text-gray-400 mt-0.5 truncate">{sub}</p>}
      </div>
      {selected
        ? <CheckCircle2 size={16} style={{ color: accent }} className="flex-shrink-0 ml-2" />
        : showArrow && <ChevronRight size={15} className="text-gray-300 group-hover:text-gray-500 flex-shrink-0 ml-2" />
      }
    </button>
  );
}

function Pill({ label, color }: { label: string; color: string }) {
  if (!label) return null;
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-white truncate max-w-[180px]"
      style={{ backgroundColor: color, fontSize: '0.7rem', fontWeight: 600 }}
    >
      {label}
    </span>
  );
}
