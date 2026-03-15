import React from 'react';
import { Trash2 } from 'lucide-react';
import { QuantityStepper } from './QuantityStepper';
import { MENU_ITEMS } from '../data';

interface CartItemProps {
  item: typeof MENU_ITEMS[0];
  quantity: number;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export function CartItemComponent({ item, quantity, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="bg-white rounded-3xl p-3 flex gap-4 items-center shadow-sm border border-gray-100 relative overflow-hidden">
      <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0 relative">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0 pr-2 py-1">
        <h3 className="font-bold text-sm text-gray-900 truncate mb-0.5">{item.name}</h3>
        <p className="text-xs text-gray-400 font-medium mb-2">{item.category}</p>
        <span className="font-black text-[#FF6B35]">₹{item.price}</span>
      </div>
      <div className="flex flex-col items-end justify-between h-full py-1 gap-3">
        <button
          onClick={onRemove}
          className="text-gray-300 hover:text-red-500 transition-colors p-1"
        >
          <Trash2 size={16} strokeWidth={2.5} />
        </button>
        <QuantityStepper 
          quantity={quantity}
          onDecrease={() => onUpdateQuantity(quantity - 1)}
          onIncrease={() => onUpdateQuantity(quantity + 1)}
          size="sm"
        />
      </div>
    </div>
  );
}
