import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Home, ShoppingCart, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function BottomNavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useApp();

  return (
    <nav className="z-50 shrink-0 border-t border-gray-100 bg-white px-4 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-around">
      <button
        onClick={() => navigate('/')}
        className={`flex flex-col items-center gap-1 ${
          location.pathname === '/' || location.pathname === '/menu'
            ? 'text-[#FF6B35]'
            : 'text-gray-400'
        }`}
      >
        <Home size={24} strokeWidth={location.pathname === '/' ? 2.5 : 2} />
        <span className="text-xs font-medium">Home</span>
      </button>

      <button
        onClick={() => navigate('/cart')}
        className={`flex flex-col items-center gap-1 relative ${
          location.pathname === '/cart' ? 'text-[#FF6B35]' : 'text-gray-400'
        }`}
      >
        <ShoppingCart size={24} strokeWidth={location.pathname === '/cart' ? 2.5 : 2} />
        {cartCount > 0 && (
          <div className="absolute -top-1 -right-2 bg-[#FF6B35] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
            {cartCount}
          </div>
        )}
        <span className="text-xs font-medium">Cart</span>
      </button>

      <button
        onClick={() => navigate('/profile')}
        className={`flex flex-col items-center gap-1 ${
          location.pathname.startsWith('/profile') || location.pathname === '/history'
            ? 'text-[#FF6B35]'
            : 'text-gray-400'
        }`}
      >
        <User size={24} strokeWidth={location.pathname.startsWith('/profile') ? 2.5 : 2} />
        <span className="text-xs font-medium">Profile</span>
      </button>
      </div>
    </nav>
  );
}
