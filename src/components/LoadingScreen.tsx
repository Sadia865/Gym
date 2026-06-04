import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onDone: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onDone }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing...');

  const steps = [
    'Initializing workspace...',
    'Loading member data...',
    'Syncing attendance...',
    'Preparing dashboard...',
    'Almost ready...',
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 15;
        if (next >= 100) {
          clearInterval(t);
          setStatusText('Ready!');
          return 100;
        }
        setStatusText(steps[Math.floor((next / 100) * steps.length)] ?? steps[steps.length - 1]);
        return next;
      });
    }, 120);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => onDone(), 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onDone]);

  const pct = Math.min(progress, 100);

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#050816',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999,
      overflow: 'hidden',
    }}>
      {/* Grid background — matches .bg-grid in index.css */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
      }} />

      {/* Ambient orbs — mirrors .bg-orb-1/2/3 */}
      <div style={{
        position: 'absolute',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(79,124,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        top: -200, left: -200,
        filter: 'blur(80px)',
        pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: -100, right: -100,
        filter: 'blur(80px)',
        pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite reverse',
      }} />
      <div style={{
        position: 'absolute',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '50%', left: '40%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        animation: 'float 12s ease-in-out infinite',
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33%       { transform: translateY(-20px) translateX(10px); }
          66%       { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(79,124,255,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(79,124,255,0); }
        }
        @keyframes shimmer-bar {
          0%   { background-position: -400% 0; }
          100% { background-position:  400% 0; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Logo card — glass style from index.css */}
      <div style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        marginBottom: 48,
        animation: 'fadeSlideUp 0.6s ease-out forwards',
      }}>
        {/* Icon wrapper with glow-blue */}
        <div style={{
          width: 76, height: 76,
          borderRadius: 20,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24,
          boxShadow: '0 0 30px rgba(79,124,255,0.4), 0 0 60px rgba(79,124,255,0.1)',
          animation: 'pulse-ring 3s ease-in-out infinite',
        }}>
          {/* Dumbbell icon */}
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4h2v16H6V4zm10 0h2v16h-2V4zM3 10h4v4H3v-4zm14 0h4v4h-4v-4zM8 11h8v2H8v-2z"
              fill="url(#iconGrad)" />
            <defs>
              <linearGradient id="iconGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F7CFF" />
                <stop offset="1" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* App name — gradient-text-blue from index.css */}
        <div style={{
          fontSize: 30, fontWeight: 700,
          letterSpacing: 0.5,
          background: 'linear-gradient(135deg, #4F7CFF, #22D3EE)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: 8,
        }}>
          GymFlow AI
        </div>

        <div style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: 3,
          textTransform: 'uppercase',
          fontWeight: 500,
        }}>
          Premium Gym Management
        </div>
      </div>

      {/* Progress section */}
      <div style={{
        width: 240,
        animation: 'fadeSlideUp 0.6s 0.15s ease-out both',
      }}>
        {/* Track */}
        <div style={{
          height: 3,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 10,
          overflow: 'hidden',
          marginBottom: 12,
          border: '1px solid rgba(255,255,255,0.04)',
        }}>
          {/* Fill bar with shimmer */}
          <div style={{
            height: '100%',
            borderRadius: 10,
            width: `${pct}%`,
            transition: 'width 0.15s ease',
            background: 'linear-gradient(90deg, #4F7CFF 0%, #6366F1 50%, #22D3EE 100%)',
            backgroundSize: '400% 100%',
            animation: pct < 100 ? 'shimmer-bar 2s linear infinite' : 'none',
            boxShadow: '0 0 10px rgba(79,124,255,0.6)',
          }} />
        </div>

        {/* Status row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{
            fontSize: 11,
            color: 'rgba(139,156,200,0.8)',  /* --text-secondary */
            letterSpacing: 0.5,
          }}>
            {statusText}
          </span>
          <span style={{
            fontSize: 11,
            color: '#4F7CFF',
            fontWeight: 600,
            letterSpacing: 0.5,
            fontVariantNumeric: 'tabular-nums',
          }}>
            {Math.round(pct)}%
          </span>
        </div>
      </div>

      {/* Spinning accent dot */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        display: 'flex', gap: 6, alignItems: 'center',
      }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: i === 1 ? 8 : 5,
            height: i === 1 ? 8 : 5,
            borderRadius: '50%',
            background: i === 1
              ? 'linear-gradient(135deg, #4F7CFF, #22D3EE)'
              : 'rgba(79,124,255,0.25)',
            boxShadow: i === 1 ? '0 0 8px rgba(79,124,255,0.6)' : 'none',
            animation: `dotPulse ${1.5 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
          }} />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;