import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Bell, Search, Navigation, ArrowRight } from 'lucide-react';
import { CAFE_DATA, CATEGORIES, MENU_ITEMS } from '../data';
import { useApp } from '../context/AppContext';
import { FoodCard } from '../components/FoodCard';
import { FoodTypeToggle } from '../components/FoodTypeToggle';

export function Home() {
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway' | 'dine-in'>('dine-in');
  const [popularFoodType, setPopularFoodType] = useState<'all' | 'veg' | 'nonVeg'>('all');
  const { addToCart } = useApp();

  const handleAddToCart = (e: React.MouseEvent, item: typeof MENU_ITEMS[0]) => {
    e.stopPropagation();
    addToCart(item, 1);
  };

  const filteredPopularItems = MENU_ITEMS.filter((item) => {
    const matchesPopular = item.popular;
    const matchesFoodType =
      popularFoodType === 'all' || (popularFoodType === 'veg' ? item.isVeg : !item.isVeg);
    return matchesPopular && matchesFoodType;
  });

  return (
    <div className="flex min-h-full flex-col bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 rounded-b-3xl bg-white px-5 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-5 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
              Your Location
            </span>
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-[#1A1A1A] font-bold text-lg">
                {CAFE_DATA.name}
              </span>
              <Navigation size={14} className="text-[#FF6B35] ml-1" />
            </div>
          </div>
          <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center relative shadow-sm border border-gray-100">
            <Bell size={20} className="text-gray-700" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#FF6B35] rounded-full border border-white"></span>
          </button>
        </div>

        {/* Order Type Tabs */}
        <div className="flex bg-gray-50 rounded-2xl p-1 mb-6 border border-gray-100">
          {/* <button
            onClick={() => setOrderType('delivery')}
            className={`flex-1 py-2.5 flex flex-col items-center justify-center rounded-xl transition-all ${
              orderType === 'delivery' ? 'bg-white shadow-sm' : 'text-gray-500'
            }`}
          >
            <span className={`text-sm font-bold ${orderType === 'delivery' ? 'text-gray-900' : ''}`}>Delivery</span>
            <span className="text-[10px] text-gray-400 font-medium mt-0.5">Your Location</span>
          </button> */}
          <button
            onClick={() => setOrderType('takeaway')}
            className={`flex-1 py-2.5 flex flex-col items-center justify-center rounded-xl transition-all ${
              orderType === 'takeaway' ? 'bg-white shadow-sm' : 'text-gray-500'
            }`}
          >
            <span className={`text-sm font-bold ${orderType === 'takeaway' ? 'text-gray-900' : ''}`}>Takeaway</span>
            {/* <span className="text-[10px] text-gray-400 font-medium mt-0.5">2.6 km</span> */}
          </button>
          <button
            onClick={() => setOrderType('dine-in')}
            className={`flex-1 py-2.5 flex flex-col items-center justify-center rounded-xl transition-all ${
              orderType === 'dine-in' ? 'bg-white shadow-sm' : 'text-gray-500'
            }`}
          >
            <span className={`text-sm font-bold ${orderType === 'dine-in' ? 'text-gray-900' : ''}`}>Dine-in</span>
            <span className="text-[10px] text-gray-400 font-medium mt-0.5">Table {CAFE_DATA.table}</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative flex items-center">
          <div className="absolute left-4 text-gray-400 pointer-events-none">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="What do you want to eat?"
            className="w-full bg-gray-50 py-3.5 pl-11 pr-14 rounded-2xl text-sm outline-none font-medium border border-gray-100 focus:border-orange-200 transition-colors placeholder:text-gray-400"
            onClick={() => navigate('/menu')}
          />
          <button className="absolute right-2 top-1.5 bottom-1.5 bg-[#FF6B35] w-10 flex items-center justify-center rounded-xl text-white shadow-sm shadow-orange-200 hover:bg-orange-600 transition-colors">
            <Search size={16} />
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-8 px-5 pb-8">
        {/* Banner */}
        {/* <div className="relative h-40 cursor-pointer overflow-hidden rounded-3xl bg-red-500 shadow-sm min-[360px]:h-44" onClick={() => navigate('/menu')}>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-500 z-0">
            <img 
              src="https://images.unsplash.com/photo-1719230767180-4bf3e002bea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGZlc3RpdmFsJTIwYmFubmVyJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzMzMDg2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Pasta Day Banner" 
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
            />
          </div>
          <div className="relative z-10 flex h-full max-w-[65%] flex-col justify-center p-5">
            <h2 className="mb-1 text-2xl leading-none font-black tracking-tight text-[#FF6B35] min-[360px]:text-3xl">PASTA</h2>
            <h3 className="text-xl font-bold text-gray-900 leading-none mb-3 tracking-tight">DAY <span className="font-semibold text-sm uppercase text-gray-600">FESTIVAL</span></h3>
            <p className="text-xs font-medium text-gray-600">Get 25% off on purchase*</p>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
          </div>
        </div> */}

        {/* Categories */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">All Categories</h2>
            <button onClick={() => navigate('/menu')} className="text-sm font-semibold text-[#FF6B35] flex items-center">
              See All <ArrowRight size={16} className="ml-0.5" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5 snap-x">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate('/menu')}
                className="flex flex-col items-center gap-2 cursor-pointer snap-start min-w-[72px]"
              >
                <div className="w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 hover:border-orange-200 transition-colors text-3xl">
                  {cat.icon}
                </div>
                <span className="text-xs font-bold text-gray-700">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Food */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Popular Food</h2>
          </div>

          <FoodTypeToggle
            value={popularFoodType}
            onChange={setPopularFoodType}
            className="mb-4"
          />

          <div className="grid grid-cols-1 gap-4 pb-4 min-[360px]:grid-cols-2">
            {filteredPopularItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onClick={() => navigate(`/food/${item.id}`)}
                onAdd={(e) => handleAddToCart(e, item)}
                variant="grid"
              />
            ))}
          </div>

          {filteredPopularItems.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-white/60 p-6 text-center text-sm font-medium text-gray-500">
              No {popularFoodType === 'nonVeg' ? 'Non Veg' : popularFoodType === 'veg' ? 'Veg' : ''} popular items found.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
