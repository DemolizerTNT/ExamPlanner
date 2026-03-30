import { useState } from 'react';
import type { FormEvent } from 'react';
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function Login() {
  const { login } = useApp();
  const [email, setEmail] = useState('alex.johnson@stud.prz.edu.pl');
  const [password, setPassword] = useState('password123');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const ok = await login(email, password);
    if (!ok) setError('Invalid email or password. Please try again.');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex w-1/2 bg-[#003366] flex-col justify-between p-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F4C430]/10 rounded-full" />
          <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-white/5 rounded-full" />
          <div className="absolute top-1/2 right-16 w-32 h-32 bg-[#F4C430]/5 rounded-full" />
        </div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-[#F4C430] flex items-center justify-center">
              <GraduationCap size={22} className="text-[#003366]" />
            </div>
            <div>
              <p style={{ fontSize: '1.1rem', fontWeight: 700 }} className="text-white">ExamPlanner</p>
              <p style={{ fontSize: '0.7rem' }} className="text-white/40 uppercase tracking-widest">Rzeszów University of Technology</p>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 }} className="text-white mb-4">
              Your personal<br />
              <span className="text-[#F4C430]">exam study plan</span>
            </h1>
            <p style={{ fontSize: '1rem' }} className="text-white/60 leading-relaxed max-w-sm">
              Organize your exam session, track progress through 15 knowledge points per subject, and never miss a deadline.
            </p>
          </motion.div>
        </div>

        <div className="relative grid grid-cols-3 gap-4">
          {[
            { value: '15', label: 'Knowledge points per subject' },
            { value: '5', label: 'App pages' },
            { value: '∞', label: 'Motivation' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-white/10 backdrop-blur rounded-xl p-4"
            >
              <p style={{ fontSize: '1.75rem', fontWeight: 700 }} className="text-[#F4C430]">{stat.value}</p>
              <p style={{ fontSize: '0.72rem' }} className="text-white/50 leading-tight mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right panel - Login form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#F8F9FB]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-9 h-9 rounded-xl bg-[#003366] flex items-center justify-center">
              <GraduationCap size={18} className="text-[#F4C430]" />
            </div>
            <span style={{ fontWeight: 700 }} className="text-[#003366]">ExamPlanner PRz</span>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }} className="text-[#003366] mb-2">Sign In</h2>
          <p style={{ fontSize: '0.9rem' }} className="text-gray-500 mb-8">
            Use your PRz student account or click the demo button below.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 600 }} className="block text-gray-600 mb-1.5">
                Student Email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="firstname.lastname@stud.prz.edu.pl"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] transition-all"
                  style={{ fontSize: '0.875rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 600 }} className="block text-gray-600 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] transition-all"
                  style={{ fontSize: '0.875rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <p style={{ fontSize: '0.8rem' }} className="text-red-500 bg-red-50 px-3 py-2 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-xl bg-[#003366] text-white flex items-center justify-center gap-2 hover:bg-[#004488] transition-colors disabled:opacity-60"
              style={{ fontSize: '0.9rem', fontWeight: 600 }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span style={{ fontSize: '0.75rem' }} className="text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button
            onClick={() => login('demo.student@stud.prz.edu.pl', 'demo')}
            className="mt-4 w-full py-3 px-6 rounded-xl border-2 border-[#003366] text-[#003366] hover:bg-[#003366]/5 transition-colors"
            style={{ fontSize: '0.875rem', fontWeight: 600 }}
          >
            Continue as Demo Student
          </button>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span style={{ fontSize: '0.75rem' }} className="text-gray-400">new here?</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Link
            to="/register"
            className="mt-4 flex items-center justify-center w-full py-3 px-6 rounded-xl border-2 border-[#F4C430] text-[#003366] hover:bg-[#F4C430]/10 transition-colors"
            style={{ fontSize: '0.875rem', fontWeight: 600 }}
          >
            Create Account
          </Link>

          <p style={{ fontSize: '0.75rem' }} className="text-center text-gray-400 mt-6">
            Demo application · PRz ExamPlanner 2026
          </p>
        </motion.div>
      </div>
    </div>
  );
}