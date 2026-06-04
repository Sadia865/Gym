import React from 'react';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headerRight?: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  headerRight,
}) => (
  <div className={`glass-card rounded-2xl p-5 ${className}`}>
    <div className="flex items-start justify-between mb-5">
      <div>
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        {subtitle && <p className="text-slate-500 text-xs mt-0.5">{subtitle}</p>}
      </div>
      {headerRight && <div>{headerRight}</div>}
    </div>
    {children}
  </div>
);