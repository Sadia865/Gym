import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  actions?: ReactNode;
  color?: string;
}

export default function PageHeader({
  title,
  subtitle,
  icon,
  actions,
  color = '#4F7CFF',
}: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5 mb-5 sm:mb-6"
    >
      {/* Left Side */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        {icon && (
          <div
            className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}30`,
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-30 blur-xl"
              style={{
                background: color,
              }}
            />

            <span
              className="relative z-10"
              style={{
                color,
              }}
            >
              {icon}
            </span>
          </div>
        )}

        <div className="min-w-0">
          <h1
            className="text-xl sm:text-2xl lg:text-3xl font-bold truncate"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#F0F4FF',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="text-xs sm:text-sm mt-1 truncate"
              style={{
                color: 'rgba(139,156,200,0.75)',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Right Side Actions */}
      {actions && (
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto">
          {actions}
        </div>
      )}
    </motion.div>
  );
}