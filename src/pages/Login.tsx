import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState('admin@gymflow.com');
  const [password, setPassword] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-base)] via-[var(--bg-primary)] to-[var(--bg-secondary)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute w-96 h-96 bg-gradient-to-br from-[var(--accent-primary)] to-transparent opacity-10 rounded-full -top-48 -left-48 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-br from-[var(--accent-cyan)] to-transparent opacity-10 rounded-full -bottom-48 -right-48 blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-cyan)] rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          <h1 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary-lt)] to-[var(--accent-cyan)]">
            GymFlow
          </h1>
          <p className="text-sm text-[var(--text-muted)] mt-2">Gym Management System</p>
        </div>

        {/* Login Card */}
        <div className="glass-card p-8 rounded-2xl mb-6">
          <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-1">Welcome Back</h2>
          <p className="text-sm text-[var(--text-muted)] mb-8">Sign in to your GymFlow account</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:bg-[rgba(79,124,255,0.08)] focus:border-[rgba(79,124,255,0.5)] focus:outline-none focus:ring-1 focus:ring-[rgba(79,124,255,0.3)] transition"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:bg-[rgba(79,124,255,0.08)] focus:border-[rgba(79,124,255,0.5)] focus:outline-none focus:ring-1 focus:ring-[rgba(79,124,255,0.3)] transition"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-[var(--text-muted)] cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-[var(--accent-primary)] hover:text-[var(--accent-primary-lt)] transition">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-purple)] text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-[rgba(79,124,255,0.4)] transition disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.05)]"></div>
            <span className="text-xs text-[var(--text-muted)]">Demo Credentials</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.05)]"></div>
          </div>

          {/* Demo Info */}
          <div className="bg-[rgba(79,124,255,0.1)] border border-[rgba(79,124,255,0.2)] rounded-lg p-3">
            <p className="text-xs text-[var(--text-secondary)]">
              <strong>Email:</strong> admin@gymflow.com<br />
              <strong>Password:</strong> password
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-[var(--text-muted)]">
          <p>Don't have an account? <a href="#" className="text-[var(--accent-primary)] hover:text-[var(--accent-primary-lt)] transition">Sign up</a></p>
          <p className="mt-4">© 2024 GymFlow. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;