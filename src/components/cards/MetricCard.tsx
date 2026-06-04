import React from 'react';
import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  color: string;
}

export default function MetricCard({ title, value, change, icon: Icon, color }: MetricCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="metric-card glass-card p-4 rounded-lg group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider mb-2">{title}</p>
          <p className="font-display font-bold text-2xl text-[var(--text-primary)] mb-3">{value}</p>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <ArrowUpRight size={14} className="text-[#6ee7b7]" />
            ) : (
              <ArrowDownRight size={14} className="text-[#fca5a5]" />
            )}
            <span className={`text-xs font-bold ${isPositive ? 'text-[#6ee7b7]' : 'text-[#fca5a5]'}`}>
              {Math.abs(change)}% vs last month
            </span>
          </div>
        </div>
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor: `${color}15`,
            color: color,
          }}
        >
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}