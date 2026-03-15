import React from 'react';

type FoodType = 'all' | 'veg' | 'nonVeg';

interface FoodTypeToggleProps {
  value: FoodType;
  onChange: (value: FoodType) => void;
  className?: string;
}

const options: Array<{ value: FoodType; label: string; dotClass: string }> = [
  { value: 'all', label: 'All', dotClass: 'bg-[#FF6B35]' },
  { value: 'veg', label: 'Veg', dotClass: 'bg-green-500' },
  { value: 'nonVeg', label: 'Non Veg', dotClass: 'bg-red-500' },
];

export function FoodTypeToggle({ value, onChange, className = '' }: FoodTypeToggleProps) {
  return (
    <div className={`flex items-center rounded-2xl border border-gray-100 bg-gray-50 p-1 ${className}`}>
      {options.map((option) => {
        const isActive = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all ${
              isActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${option.dotClass}`} />
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
