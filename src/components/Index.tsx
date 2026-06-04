import React from 'react';
import { Inbox } from 'lucide-react';

// ── SkeletonLoader ───────────────────────────────────────────────────────────
interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`skeleton ${className}`} />
);

export const MetricCardSkeleton: React.FC = () => (
  <div className="metric-card rounded-2xl p-5">
    <div className="flex items-start justify-between mb-4">
      <Skeleton className="w-10 h-10 rounded-xl" />
      <Skeleton className="w-12 h-6 rounded-lg" />
    </div>
    <Skeleton className="w-24 h-8 mb-2" />
    <Skeleton className="w-32 h-4" />
  </div>
);

export const TableRowSkeleton: React.FC<{ cols?: number }> = ({ cols = 6 }) => (
  <tr className="border-b border-white/5">
    {Array.from({ length: cols }).map((_, i) => (
      <td key={i} className="py-3 px-4">
        <Skeleton className="h-4 w-full" />
      </td>
    ))}
  </tr>
);

export const CardSkeleton: React.FC = () => (
  <div className="glass-card rounded-2xl p-5">
    <div className="flex items-center gap-3 mb-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <Skeleton className="w-32 h-4 mb-2" />
        <Skeleton className="w-20 h-3" />
      </div>
    </div>
    <Skeleton className="w-full h-3 mb-2" />
    <Skeleton className="w-3/4 h-3" />
  </div>
);

// ── EmptyState ───────────────────────────────────────────────────────────────
interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
}) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 glass">
      {icon ?? <Inbox size={28} className="text-slate-500" />}
    </div>
    <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
    {description && <p className="text-slate-500 text-sm mb-6 max-w-sm">{description}</p>}
    {action}
  </div>
);

// ── AvatarGroup ──────────────────────────────────────────────────────────────
interface AvatarGroupProps {
  avatars: string[];
  max?: number;
  size?: number;
}

const COLORS = ['#4F7CFF', '#6366F1', '#22D3EE', '#a855f7', '#ec4899', '#f97316'];

export const Avatar: React.FC<{ initials: string; size?: number; color?: string }> = ({
  initials,
  size = 36,
  color,
}) => {
  const c = color ?? COLORS[initials.charCodeAt(0) % COLORS.length];
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.35,
        background: `linear-gradient(135deg, ${c}cc, ${c}88)`,
        border: `2px solid ${c}40`,
        boxShadow: `0 0 10px ${c}30`,
      }}
    >
      {initials.slice(0, 2).toUpperCase()}
    </div>
  );
};

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, max = 4, size = 28 }) => {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;
  return (
    <div className="flex items-center">
      {visible.map((av, i) => (
        <div key={i} style={{ marginLeft: i === 0 ? 0 : -8, zIndex: visible.length - i }}>
          <Avatar initials={av} size={size} />
        </div>
      ))}
      {overflow > 0 && (
        <div
          className="rounded-full flex items-center justify-center text-slate-400 text-xs font-semibold bg-white/10 border border-white/20"
          style={{ width: size, height: size, marginLeft: -8 }}
        >
          +{overflow}
        </div>
      )}
    </div>
  );
};