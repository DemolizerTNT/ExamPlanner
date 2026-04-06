import { useState } from 'react';
import type { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router';
import {
  LayoutDashboard, Calendar, BookOpen, ListChecks, BarChart3,
  GraduationCap, LogOut, Menu, X, ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FACULTIES, DIRECTIONS, SPECIALIZATIONS } from '../data/mockData2';

const NAV_ITEMS = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/calendar', label: 'Calendar', icon: Calendar },
  { path: '/exams', label: 'Exams', icon: BookOpen },
  { path: '/study-plan', label: 'Study Plan', icon: ListChecks },
  { path: '/statistics', label: 'Statistics', icon: BarChart3 },
];

export function Layout({ children }: { children: ReactNode }) {
  const { user, logout, getSemesterProgress } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const progress = getSemesterProgress();
  const faculty   = FACULTIES.find(f => f.id === user?.faculty_id);
  const direction = DIRECTIONS.find(d => d.id === (user as any)?.direction_id);
  const specObj   = SPECIALIZATIONS.find(s => s.id === (user as any)?.specialization_id);

  return (
    <div className="flex h-screen bg-[#F8F9FB] overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30 w-64 flex flex-col
          bg-[#003366] text-white transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <div className="w-9 h-9 rounded-lg bg-[#F4C430] flex items-center justify-center flex-shrink-0">
            <GraduationCap size={20} className="text-[#003366]" />
          </div>
          <div>
            <p style={{ fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.2 }} className="text-white">ExamPlanner</p>
            <p style={{ fontSize: '0.7rem' }} className="text-white/50 uppercase tracking-widest">PRz</p>
          </div>
          <button
            className="ml-auto lg:hidden text-white/70 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* User info */}
        <div className="px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#F4C430] flex items-center justify-center flex-shrink-0">
              <span style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-[#003366]">
                {user?.name?.charAt(0) || 'A'}
              </span>
            </div>
            <div className="min-w-0">
              <p style={{ fontSize: '0.85rem', fontWeight: 600 }} className="text-white truncate">
                {user?.name}
              </p>
              <p style={{ fontSize: '0.7rem' }} className="text-white/50 truncate">
                {faculty?.shortName}{direction ? ` · ${direction.name}` : ''} · Sem. {user?.semester}
              </p>
              {specObj && (
                <p style={{ fontSize: '0.62rem' }} className="text-[#F4C430]/70 truncate mt-0.5">
                  {specObj.name}
                </p>
              )}
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <span style={{ fontSize: '0.68rem' }} className="text-white/50 uppercase tracking-wider">Semester Progress</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600 }} className="text-[#F4C430]">{progress}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F4C430] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3">
          {NAV_ITEMS.map(({ path, label, icon: Icon }) => {
            const isActive = path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(path);
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all duration-150
                  ${isActive
                    ? 'bg-[#F4C430] text-[#003366]'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <Icon size={18} />
                <span style={{ fontSize: '0.875rem', fontWeight: isActive ? 600 : 400 }}>{label}</span>
                {isActive && <ChevronRight size={14} className="ml-auto" />}
              </NavLink>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <LogOut size={18} />
            <span style={{ fontSize: '0.875rem' }}>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar (mobile) */}
        <header className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
          <button onClick={() => setSidebarOpen(true)} className="text-[#003366]">
            <Menu size={22} />
          </button>
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-[#F4C430]" />
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }} className="text-[#003366]">ExamPlanner PRz</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
