import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface PremiumButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
}

export default function PremiumButton({
  children, onClick, variant = 'primary', size = 'md',
  icon, iconRight, disabled, className = '', type = 'button', fullWidth,
}: PremiumButtonProps) {
  const sizeMap = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-lg',
    md: 'text-sm px-4 py-2.5 gap-2 rounded-xl',
    lg: 'text-base px-6 py-3 gap-2.5 rounded-xl',
  };

  const variantMap = {
    primary: 'bg-gradient-to-r from-[#4F7CFF] to-[#6366F1] text-white shadow-[0_4px_20px_rgba(79,124,255,0.35)] hover:shadow-[0_6px_30px_rgba(79,124,255,0.55)] hover:from-[#5F8CFF] hover:to-[#7375F5]',
    secondary: 'bg-[rgba(79,124,255,0.1)] text-[#60A5FA] border border-[rgba(79,124,255,0.2)] hover:bg-[rgba(79,124,255,0.18)] hover:border-[rgba(79,124,255,0.35)]',
    ghost: 'bg-transparent text-[#8B9CC8] hover:bg-[rgba(255,255,255,0.06)] hover:text-white',
    danger: 'bg-[rgba(239,68,68,0.1)] text-red-400 border border-[rgba(239,68,68,0.2)] hover:bg-[rgba(239,68,68,0.2)]',
    success: 'bg-[rgba(34,197,94,0.1)] text-green-400 border border-[rgba(34,197,94,0.2)] hover:bg-[rgba(34,197,94,0.2)]',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={clsx(
        'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none',
        sizeMap[size],
        variantMap[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        fullWidth && 'w-full',
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </motion.button>
  );
}