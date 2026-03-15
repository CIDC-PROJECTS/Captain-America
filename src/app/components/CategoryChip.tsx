import React from 'react';

interface CategoryChipProps {
  name: string;
  icon?: string;
  isActive: boolean;
  onClick: () => void;
}

export function CategoryChip({ name, icon, isActive, onClick }: CategoryChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
        isActive
          ? 'bg-[#FF6B35] text-white shadow-sm shadow-orange-200'
          : 'bg-white text-gray-500 border border-gray-100 hover:border-gray-200'
      }`}
    >
      {icon && <span>{icon}</span>}
      {name}
    </button>
  );
}
