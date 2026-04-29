import { useState } from 'react';
import type { FormEvent } from 'react';
import { GraduationCap, Mail, Lock, Eye, EyeOff, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';

const PERKS = [
  'Adaptive weekly study plan',
  '15 knowledge points per subject',
  'Exam countdown & calendar',
  'Progress tracking & statistics',
];

export function Register() {
  const { register } = useApp();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = 'First name is required.';
    if (!lastName.trim()) e.lastName = 'Last name is required.';
    if (!email.includes('@')) e.email = 'Enter a valid email address.';
    if (password.length < 8) e.password = 'Password must be at least 8 characters.';
    if (password !== confirmPassword) e.confirmPassword = 'Passwords do not match.';
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    const ok = await register(firstName.trim(), lastName.trim(), email, password);
    setLoading(false);
    if (ok) navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex w-1/2 bg-[#003366] flex-col justify-between p-12 relative overflow-hidden">
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
              Start your<br />
              <span className="text-[#F4C430]">exam journey</span>
            </h1>
            <p style={{ fontSize: '1rem' }} className="text-white/60 leading-relaxed max-w-sm mb-8">
              Create your free account and get a personalized study plan tailored to your faculty and semester.
            </p>
          </motion.div>

          <div className="space-y-3">
            {PERKS.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#F4C430]/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={14} className="text-[#F4C430]" />
                </div>
                <span style={{ fontSize: '0.9rem' }} className="text-white/70">{perk}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <p style={{ fontSize: '0.78rem' }} className="text-white/30">
            Already have an account?{' '}
            <Link to="/" className="text-[#F4C430] hover:underline">Sign in here</Link>
          </p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#F8F9FB] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md py-8"
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-9 h-9 rounded-xl bg-[#003366] flex items-center justify-center">
              <GraduationCap size={18} className="text-[#F4C430]" />
            </div>
            <span style={{ fontWeight: 700 }} className="text-[#003366]">ExamPlanner PRz</span>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }} className="text-[#003366] mb-1">Create Account</h2>
          <p style={{ fontSize: '0.9rem' }} className="text-gray-500 mb-8">
            Join ExamPlanner with your PRz student email.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600 }} className="block text-gray-600 mb-1.5">
                  First Name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="Jan"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] transition-all"
                    style={{ fontSize: '0.875rem' }}
                  />
                </div>
                {errors.firstName && (
                  <p style={{ fontSize: '0.72rem' }} className="text-red-500 mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600 }} className="block text-gray-600 mb-1.5">
                  Last Name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Kowalski"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] transition-all"
                    style={{ fontSize: '0.875rem' }}
                  />
                </div>
                {errors.lastName && (
                  <p style={{ fontSize: '0.72rem' }} className="text-red-500 mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
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
              {errors.email && (
                <p style={{ fontSize: '0.72rem' }} className="text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
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
                  placeholder="Min. 8 characters"
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
              {/* Password strength bar */}
              {password.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map(level => (
                      <div
                        key={level}
                        className="flex-1 h-1 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor:
                            password.length >= level * 3
                              ? level <= 1 ? '#ef4444'
                              : level <= 2 ? '#f59e0b'
                              : level <= 3 ? '#3b82f6'
                              : '#10b981'
                              : '#e5e7eb',
                        }}
                      />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.7rem' }} className="text-gray-400">
                    {password.length < 4 ? 'Very weak' : password.length < 7 ? 'Weak' : password.length < 10 ? 'Good' : 'Strong'}
                  </p>
                </div>
              )}
              {errors.password && (
                <p style={{ fontSize: '0.72rem' }} className="text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 600 }} className="block text-gray-600 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="Repeat your password"
                  className={`w-full pl-10 pr-10 py-3 rounded-xl border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] transition-all ${
                    confirmPassword && confirmPassword !== password
                      ? 'border-red-300'
                      : confirmPassword && confirmPassword === password
                      ? 'border-green-300'
                      : 'border-gray-200'
                  }`}
                  style={{ fontSize: '0.875rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                {confirmPassword && confirmPassword === password && (
                  <CheckCircle2 size={16} className="absolute right-9 top-1/2 -translate-y-1/2 text-green-500" />
                )}
              </div>
              {errors.confirmPassword && (
                <p style={{ fontSize: '0.72rem' }} className="text-red-500 mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-xl bg-[#F4C430] text-[#003366] flex items-center justify-center gap-2 hover:bg-[#e5b820] transition-colors disabled:opacity-60 mt-2"
              style={{ fontSize: '0.9rem', fontWeight: 700 }}
            >
              {loading ? 'Creating account…' : 'Create Account'}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span style={{ fontSize: '0.75rem' }} className="text-gray-400">already a member?</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Link
            to="/"
            className="mt-4 flex items-center justify-center w-full py-3 px-6 rounded-xl border-2 border-[#003366] text-[#003366] hover:bg-[#003366]/5 transition-colors"
            style={{ fontSize: '0.875rem', fontWeight: 600 }}
          >
            Sign In Instead
          </Link>

          <p style={{ fontSize: '0.75rem' }} className="text-center text-gray-400 mt-6">
            Demo application · PRz ExamPlanner 2026
          </p>
        </motion.div>
      </div>
    </div>
  );
}
