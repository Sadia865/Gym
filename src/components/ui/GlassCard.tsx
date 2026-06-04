import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'blue' | 'cyan' | 'indigo' | 'purple' | 'none';
  onClick?: () => void;
  padding?: string;
  animate?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = '',
  hover = false,
  glow = 'none',
  onClick,
  padding = 'p-4 sm:p-5 lg:p-6',
  animate = true,
  delay = 0,
}: GlassCardProps) {
  const glowMap = {
    blue: 'hover:shadow-[0_0_40px_rgba(79,124,255,0.15)]',
    cyan: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]',
    indigo: 'hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]',
    purple: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]',
    none: '',
  };

  const cardClasses = clsx(
    'rounded-2xl border backdrop-blur-xl transition-all duration-300',
    'bg-[rgba(255,255,255,0.04)]',
    'border-[rgba(255,255,255,0.08)]',
    'overflow-hidden',
    'min-w-0',
    padding,
    hover &&
      'cursor-pointer hover:bg-[rgba(255,255,255,0.06)] lg:hover:-translate-y-1',
    glow !== 'none' && glowMap[glow],
    className
  );

  if (!animate) {
    return (
      <div onClick={onClick} className={cardClasses}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay,
        ease: 'easeOut',
      }}
      onClick={onClick}
      className={cardClasses}
    >
      {children}
    </motion.div>
  );
}