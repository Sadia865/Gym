import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ReactNode, useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  footer?: ReactNode;
}

export default function Modal({ open, onClose, title, children, size = 'md', footer }: ModalProps) {
  const sizeMap = { sm: 'max-w-md', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl' };

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
            style={{ background: 'rgba(5,8,22,0.85)', backdropFilter: 'blur(8px)' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`relative w-full ${sizeMap[size]} rounded-2xl border overflow-hidden`}
            style={{ background: '#0A1330', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <h2 className="text-lg font-semibold" style={{ color: '#F0F4FF', fontFamily: 'Space Grotesk, sans-serif' }}>{title}</h2>
              <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10" style={{ color: 'rgba(139,156,200,0.8)' }}>
                <X size={16} />
              </button>
            </div>
            {/* Body */}
            <div className="px-6 py-5 max-h-[70vh] overflow-y-auto">
              {children}
            </div>
            {/* Footer */}
            {footer && (
              <div className="px-6 py-4 border-t flex items-center justify-end gap-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface FormFieldProps {
  label: string;
  children: ReactNode;
  required?: boolean;
}

export function FormField({ label, children, required }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium tracking-wide" style={{ color: 'rgba(139,156,200,0.9)' }}>
        {label}{required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border transition-all duration-200 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        borderColor: 'rgba(255,255,255,0.08)',
        color: '#F0F4FF',
        ...props.style,
      }}
    />
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export function Select({ children, className = '', ...props }: SelectProps & { className?: string }) {
  return (
    <select
      {...props}
      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border transition-all duration-200 ${className}`}
      style={{ background: '#0A1330', borderColor: 'rgba(255,255,255,0.08)', color: '#F0F4FF' }}
    >
      {children}
    </select>
  );
}