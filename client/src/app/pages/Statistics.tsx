import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Clock, TrendingUp, CheckCircle2, SkipForward, Target } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProgressRing } from '../components/ProgressRing';

const GOLD = '#F4C430';
const NAVY = '#003366';

type ChartTooltipEntry = {
  name?: string;
  value?: string | number;
  color?: string;
};

type ChartTooltipProps = {
  active?: boolean;
  payload?: ChartTooltipEntry[];
  label?: string | number;
};

function CustomTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-3">
      <p style={{ fontSize: '0.8rem', fontWeight: 700 }} className="text-gray-700 mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} style={{ fontSize: '0.78rem' }} className="text-gray-600">
          {entry.name}: <strong style={{ color: entry.color }}>{entry.value}{entry.name?.includes('Time') ? ' min' : ''}</strong>
        </p>
      ))}
    </div>
  );
}

export function Statistics() {
  const { subjects, knowledgePointsBySubject, getPointStatus, getSemesterProgress } = useApp();

  const semesterProgress = getSemesterProgress();

  // Per-subject stats
  const subjectData = subjects.map(s => {
    const points = knowledgePointsBySubject[s.id] || [];
    const completed = points.filter(p => getPointStatus(p.id) === 'completed');
    const skipped = points.filter(p => getPointStatus(p.id) === 'skipped');
    const pending = points.filter(p => getPointStatus(p.id) === 'pending');
    const completedMinutes = completed.reduce((s, p) => s + p.estimated_minutes, 0);
    const totalMinutes = points.reduce((s, p) => s + p.estimated_minutes, 0);
    return {
      name: s.name.length > 18 ? s.name.slice(0, 18) + '…' : s.name,
      fullName: s.name,
      color: s.color,
      completed: completed.length,
      skipped: skipped.length,
      pending: pending.length,
      total: points.length,
      completedHours: Math.round(completedMinutes / 60 * 10) / 10,
      totalHours: Math.round(totalMinutes / 60 * 10) / 10,
      retention: points.length > 0 ? Math.round((completed.length / points.length) * 100) : 0,
    };
  });

  // Totals
  const totalCompleted = subjectData.reduce((s, d) => s + d.completed, 0);
  const totalSkipped = subjectData.reduce((s, d) => s + d.skipped, 0);
  const totalPending = subjectData.reduce((s, d) => s + d.pending, 0);
  const totalHoursStudied = subjectData.reduce((s, d) => s + d.completedHours, 0);
  const totalHoursPlanned = subjectData.reduce((s, d) => s + d.totalHours, 0);

  // Retention score
  const totalAttempted = totalCompleted + totalSkipped;
  const retentionScore = totalAttempted > 0 ? Math.round((totalCompleted / totalAttempted) * 100) : 0;

  // Pie data for status breakdown
  const pieData = [
    { name: 'Completed', value: totalCompleted, color: '#059669' },
    { name: 'Deferred', value: totalSkipped, color: GOLD },
    { name: 'Pending', value: totalPending, color: '#e5e7eb' },
  ].filter(d => d.value > 0);


  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }} className="text-[#003366]">Statistics</h1>
        <p style={{ fontSize: '0.85rem' }} className="text-gray-500 mt-0.5">Progress analysis & study efficiency</p>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Hours studied', value: `${totalHoursStudied}h`, icon: Clock, color: NAVY, bg: '#EEF2FF' },
          { label: 'Points completed', value: totalCompleted, icon: CheckCircle2, color: '#059669', bg: '#ECFDF5' },
          { label: 'Deferred', value: totalSkipped, icon: SkipForward, color: '#D97706', bg: '#FFFBEB' },
          { label: 'Semester progress', value: `${semesterProgress}%`, icon: TrendingUp, color: '#7c3aed', bg: '#F5F3FF' },
        ].map(kpi => (
          <div key={kpi.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: kpi.bg }}>
                <kpi.icon size={18} style={{ color: kpi.color }} />
              </div>
            </div>
            <p style={{ fontSize: '1.6rem', fontWeight: 800 }} className="text-gray-900">{kpi.value}</p>
            <p style={{ fontSize: '0.72rem' }} className="text-gray-400 mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* Middle row: Retention ring + Pie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {/* Retention score */}
        <div className="bg-[#003366] rounded-2xl p-6 flex flex-col items-center justify-center">
          <p style={{ fontSize: '0.75rem' }} className="text-white/50 uppercase tracking-widest mb-4">Retention Rate</p>
          <ProgressRing progress={retentionScore} size={120} strokeWidth={10} color={GOLD} trackColor="rgba(255,255,255,0.1)">
            <div className="text-center">
              <p style={{ fontSize: '1.6rem', fontWeight: 800 }} className="text-white">{retentionScore}%</p>
              <p style={{ fontSize: '0.6rem' }} className="text-white/40">retention</p>
            </div>
          </ProgressRing>
          <p style={{ fontSize: '0.78rem' }} className="text-white/60 text-center mt-4 leading-relaxed">
            Completed vs. Deferred<br />
            ({totalCompleted} / {totalAttempted || 1} points)
          </p>
          <div className={`mt-3 px-3 py-1.5 rounded-full ${retentionScore >= 80 ? 'bg-green-500/20' : retentionScore >= 60 ? 'bg-yellow-500/20' : 'bg-red-500/20'}`}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600 }} className={retentionScore >= 80 ? 'text-green-300' : retentionScore >= 60 ? 'text-yellow-300' : 'text-red-300'}>
              {retentionScore >= 80 ? '🏆 Excellent!' : retentionScore >= 60 ? '👍 Good' : '⚡ Improve retention'}
            </p>
          </div>
        </div>

        {/* Pie chart */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-[#003366] mb-3">Knowledge Point Status</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value} points`]} />
              <Legend
                formatter={(value) => <span style={{ fontSize: '0.75rem' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Totals */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-[#003366] mb-4">Total Study Time</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span style={{ fontSize: '0.78rem' }} className="text-gray-500">Completed</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700 }} className="text-gray-800">{totalHoursStudied}h</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-[#003366] rounded-full" style={{ width: `${totalHoursPlanned > 0 ? (totalHoursStudied / totalHoursPlanned) * 100 : 0}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span style={{ fontSize: '0.78rem' }} className="text-gray-500">Planned (semester)</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700 }} className="text-gray-800">{totalHoursPlanned}h</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full bg-gray-300 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span style={{ fontSize: '0.78rem' }} className="text-gray-500">Remaining</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800 }} className="text-[#003366]">
                  {Math.round((totalHoursPlanned - totalHoursStudied) * 10) / 10}h
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Target size={12} className="text-[#F4C430]" />
                <span style={{ fontSize: '0.7rem' }} className="text-gray-400">
                  ≈ {Math.round((totalHoursPlanned - totalHoursStudied) * 60 / Math.max(1, 11))} min / week
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bar chart: Hours per subject */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-6">
        <h3 style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-[#003366] mb-4">Study Hours per Subject</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={subjectData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} />
            <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="completedHours" name="Completed (h)" fill={NAVY} radius={[4, 4, 0, 0]}>
              {subjectData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
            <Bar dataKey="totalHours" name="Planned (h)" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Per-subject detail */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-[#003366]">Per-Subject Breakdown</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {subjectData.map(d => (
            <div key={d.fullName} className="px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: '0.85rem', fontWeight: 600 }} className="text-gray-800 truncate">{d.fullName}</p>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${d.retention}%`, backgroundColor: d.color }} />
                  </div>
                  <span style={{ fontSize: '0.7rem' }} className="text-gray-400">{d.retention}%</span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-right flex-shrink-0">
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-gray-800">{d.completedHours}h</p>
                  <p style={{ fontSize: '0.65rem' }} className="text-gray-400">of {d.totalHours}h</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-gray-800">{d.completed}/{d.total}</p>
                  <p style={{ fontSize: '0.65rem' }} className="text-gray-400">points</p>
                </div>
                <div className="flex items-center gap-1">
                  {d.skipped > 0 && (
                    <span style={{ fontSize: '0.7rem' }} className="px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full">
                      {d.skipped} def.
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
