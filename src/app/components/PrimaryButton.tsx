import React from 'react';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function PrimaryButton({ 
  children, 
  isLoading, 
  leftIcon, 
  rightIcon, 
  className = '', 
  disabled,
  ...props 
}: PrimaryButtonProps) {
  return (
    <button
      disabled={isLoading || disabled}
      className={`w-full bg-[#FF6B35] text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-orange-600 transition-transform active:scale-[0.98] shadow-sm shadow-orange-200 disabled:opacity-70 disabled:active:scale-100 ${className}`}
      {...props}
    >
      {isLoading ? <Loader2 size={20} className="animate-spin" /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
}
