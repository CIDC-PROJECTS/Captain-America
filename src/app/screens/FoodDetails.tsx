import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, Heart, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { useApp } from '../context/AppContext';
import { PrimaryButton } from '../components/PrimaryButton';
import { QuantityStepper } from '../components/QuantityStepper';

export function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useApp();

  const item = MENU_ITEMS.find((i) => i.id === id);

  if (!item) {
    return (
      <div className="flex min-h-full flex-col items-center justify-center bg-gray-50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Item not found</h2>
        <button onClick={() => navigate(-1)} className="px-6 py-2 bg-[#FF6B35] text-white rounded-full font-bold">
          Go Back
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(item, quantity);
    navigate('/cart');
  };

  return (
    <div className="relative flex min-h-full flex-col bg-gray-50">
      {/* Top Header overlaying image */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent px-5 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <Heart size={20} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-white'} />
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative h-[35vh] w-full overflow-hidden rounded-b-[40px] bg-gray-200 shadow-sm min-[360px]:h-[42vh]">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pt-6 pb-32">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight w-[70%]">{item.name}</h1>
          <span className="text-2xl font-black text-[#FF6B35] tracking-tight">₹{item.price}</span>
        </div>
        
        <div className="flex gap-4 mb-6">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">
            {item.category}
          </span>
          <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-100 px-3 py-1 rounded-full flex items-center gap-1">
             🔥 Popular
          </span>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Description</h3>
          <p className="text-gray-500 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
          <span className="font-bold text-gray-900">Quantity</span>
          <QuantityStepper
            size="md"
            quantity={quantity}
            onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
            onIncrease={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-md rounded-t-3xl border-t border-gray-100 bg-white px-5 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <PrimaryButton
          onClick={handleAddToCart}
          leftIcon={<ShoppingBag size={20} />}
        >
          Add to Cart (₹{item.price * quantity})
        </PrimaryButton>
      </div>
    </div>
  );
}
