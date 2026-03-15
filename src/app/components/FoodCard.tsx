import React from 'react';
import { Plus } from 'lucide-react';
import { MENU_ITEMS } from '../data';

interface FoodCardProps {
  item: typeof MENU_ITEMS[0];
  onClick: () => void;
  onAdd: (e: React.MouseEvent) => void;
  variant?: 'grid' | 'carousel';
}

export function FoodCard({ item, onClick, onAdd, variant = 'grid' }: FoodCardProps) {
  if (variant === 'carousel') {
    return (
      <div
        onClick={onClick}
        className="w-[44vw] min-w-[160px] max-w-[180px] snap-start cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white pb-3 shadow-sm"
      >
        <div className="h-28 w-full bg-gray-100 overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
        </div>
        <div className="p-3 flex-1 flex flex-col">
          <h3 className="font-bold text-sm text-gray-900 mb-1 truncate">{item.name}</h3>
          <div className="flex items-end justify-between mt-auto">
            <span className="font-bold text-base text-[#FF6B35]">₹{item.price}</span>
            <button 
              onClick={onAdd}
              className="w-7 h-7 bg-[#FF6B35] text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 pb-4 relative flex flex-col cursor-pointer active:scale-[0.98] transition-transform"
    >
      <div className="relative h-32 w-full overflow-hidden bg-gray-100 min-[390px]:h-36">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="px-3 pt-3 flex-1 flex flex-col">
        <h3 className="font-bold text-sm text-gray-900 mb-1 leading-tight">{item.name}</h3>
        <p className="text-[10px] text-gray-500 line-clamp-2 mb-3 leading-snug">{item.description}</p>
        <div className="flex items-end justify-between mt-auto pt-2 border-t border-gray-50">
          <span className="font-bold text-lg text-[#FF6B35] tracking-tight">₹{item.price}</span>
          <button 
            onClick={onAdd}
            className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Plus size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}
