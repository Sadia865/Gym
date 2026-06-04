import clsx from 'clsx';

interface StatusChipProps {
  status: 'active' | 'expired' | 'pending' | 'failed' | 'success' | 'warning' | 'inactive';
  label?: string;
  size?: 'sm' | 'md';
}

export function StatusChip({ status, label, size = 'md' }: StatusChipProps) {
  const map = {
    active: { bg: 'bg-[rgba(34,211,238,0.1)]', border: 'border-[rgba(34,211,238,0.25)]', text: 'text-cyan-400', dot: 'bg-cyan-400' },
    success: { bg: 'bg-[rgba(34,197,94,0.1)]', border: 'border-[rgba(34,197,94,0.25)]', text: 'text-green-400', dot: 'bg-green-400' },
    expired: { bg: 'bg-[rgba(239,68,68,0.1)]', border: 'border-[rgba(239,68,68,0.25)]', text: 'text-red-400', dot: 'bg-red-400' },
    failed: { bg: 'bg-[rgba(239,68,68,0.1)]', border: 'border-[rgba(239,68,68,0.25)]', text: 'text-red-400', dot: 'bg-red-400' },
    pending: { bg: 'bg-[rgba(251,191,36,0.1)]', border: 'border-[rgba(251,191,36,0.25)]', text: 'text-yellow-400', dot: 'bg-yellow-400' },
    warning: { bg: 'bg-[rgba(251,191,36,0.1)]', border: 'border-[rgba(251,191,36,0.25)]', text: 'text-yellow-400', dot: 'bg-yellow-400' },
    inactive: { bg: 'bg-[rgba(139,156,200,0.1)]', border: 'border-[rgba(139,156,200,0.2)]', text: 'text-slate-400', dot: 'bg-slate-400' },
  };
  const s = map[status] || map.inactive;
  const sizeClass = size === 'sm' ? 'text-[10px] px-2 py-0.5 gap-1' : 'text-xs px-2.5 py-1 gap-1.5';

  return (
    <span className={clsx('inline-flex items-center font-medium rounded-full border', s.bg, s.border, s.text, sizeClass)}>
      <span className={clsx('rounded-full flex-shrink-0', s.dot, size === 'sm' ? 'w-1 h-1' : 'w-1.5 h-1.5')} />
      {label || status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

interface GlowBadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'purple' | 'cyan' | 'green' | 'orange';
  className?: string;
}

export function GlowBadge({ children, color = 'blue', className = '' }: GlowBadgeProps) {
  const map = {
    blue: 'bg-[rgba(79,124,255,0.12)] border-[rgba(79,124,255,0.3)] text-[#60A5FA]',
    purple: 'bg-[rgba(168,85,247,0.12)] border-[rgba(168,85,247,0.3)] text-purple-400',
    cyan: 'bg-[rgba(34,211,238,0.12)] border-[rgba(34,211,238,0.3)] text-cyan-400',
    green: 'bg-[rgba(34,197,94,0.12)] border-[rgba(34,197,94,0.3)] text-green-400',
    orange: 'bg-[rgba(249,115,22,0.12)] border-[rgba(249,115,22,0.3)] text-orange-400',
  };
  return (
    <span className={clsx('inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border', map[color], className)}>
      {children}
    </span>
  );
}

interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: number;
  className?: string;
}

const avatarColors = [
  'from-blue-600 to-indigo-600',
  'from-purple-600 to-pink-600',
  'from-cyan-600 to-blue-600',
  'from-emerald-600 to-teal-600',
  'from-orange-600 to-red-600',
  'from-violet-600 to-purple-600',
];

export function Avatar({ initials, size = 'md', color = 0, className = '' }: AvatarProps) {
  const sizeMap = { sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-12 h-12 text-base', xl: 'w-16 h-16 text-xl' };
  const gradient = avatarColors[color % avatarColors.length];
  return (
    <div className={clsx('rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-br flex-shrink-0', gradient, sizeMap[size], className)}>
      {initials}
    </div>
  );
}

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search...', className = '' }: SearchBarProps) {
  return (
    <div className={clsx('relative', className)}>
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: 'rgba(139,156,200,0.6)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border transition-all duration-200"
        style={{
          background: 'rgba(255,255,255,0.04)',
          borderColor: 'rgba(255,255,255,0.08)',
          color: '#F0F4FF',
        }}
      />
    </div>
  );
}