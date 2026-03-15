import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantityStepperProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export function QuantityStepper({ quantity, onIncrease, onDecrease, size = 'sm' }: QuantityStepperProps) {
  const sizeClasses = {
    sm: { container: 'p-1 gap-3', btn: 'w-6 h-6', icon: 14, text: 'w-3 text-sm' },
    md: { container: 'p-1.5 gap-4 text-base', btn: 'w-8 h-8', icon: 16, text: 'w-4 text-base' },
    lg: { container: 'p-2 gap-5', btn: 'w-10 h-10', icon: 20, text: 'w-6 text-lg' },
  };

  const currentSize = sizeClasses[size] || sizeClasses.sm;

  return (
    <div className={`flex items-center bg-gray-50 rounded-full border border-gray-100 ${currentSize.container}`}>
      <button
        onClick={(e) => { e.stopPropagation(); onDecrease(); }}
        className={`${currentSize.btn} rounded-full flex items-center justify-center bg-white text-gray-900 shadow-sm hover:bg-gray-100 transition-colors`}
      >
        <Minus size={currentSize.icon} strokeWidth={3} />
      </button>
      <span className={`${currentSize.text} text-center font-bold text-gray-900`}>{quantity}</span>
      <button
        onClick={(e) => { e.stopPropagation(); onIncrease(); }}
        className={`${currentSize.btn} rounded-full flex items-center justify-center bg-[#FF6B35] text-white shadow-sm hover:bg-orange-600 transition-colors`}
      >
        <Plus size={currentSize.icon} strokeWidth={3} />
      </button>
    </div>
  );
}
