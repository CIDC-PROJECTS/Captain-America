import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Filter, Search } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data';
import { useApp } from '../context/AppContext';
import { FoodCard } from '../components/FoodCard';
import { CategoryChip } from '../components/CategoryChip';
import { FoodTypeToggle } from '../components/FoodTypeToggle';

export function Menu() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [foodType, setFoodType] = useState<'all' | 'veg' | 'nonVeg'>('all');
  const { addToCart } = useApp();

  const handleAddToCart = (e: React.MouseEvent, item: typeof MENU_ITEMS[0]) => {
    e.stopPropagation();
    addToCart(item, 1);
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFoodType = foodType === 'all' || (foodType === 'veg' ? item.isVeg : !item.isVeg);
    return matchesCategory && matchesSearch && matchesFoodType;
  });

  return (
    <div className="flex min-h-full flex-col bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white px-5 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-4 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft size={24} className="text-gray-900" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Menu</h1>
          <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <Filter size={20} className="text-gray-900" />
          </button>
        </div>

        <div className="relative flex items-center mb-6">
          <div className="absolute left-4 text-gray-400 pointer-events-none">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 py-3.5 pl-11 pr-4 rounded-2xl text-sm outline-none font-medium border border-gray-100 focus:border-orange-200 transition-colors placeholder:text-gray-400"
          />
        </div>

        {/* Veg / Non-Veg Toggle */}
        <FoodTypeToggle
          value={foodType}
          onChange={setFoodType}
          className="mb-5"
        />

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-5 px-5 pb-2">
          <CategoryChip
            name="All"
            isActive={activeCategory === 'All'}
            onClick={() => setActiveCategory('All')}
          />
          {CATEGORIES.map((cat) => (
            <CategoryChip
              key={cat.id}
              name={cat.name}
              icon={cat.icon}
              isActive={activeCategory === cat.name}
              onClick={() => setActiveCategory(cat.name)}
            />
          ))}
        </div>
      </div>

      {/* Food Grid */}
      <div className="flex-1 px-5 pt-6 pb-8">
        <div className="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2">
          {filteredItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onClick={() => navigate(`/food/${item.id}`)}
              onAdd={(e) => handleAddToCart(e, item)}
              variant="grid"
            />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center h-40 mt-10 text-gray-400">
            <Search size={48} className="mb-4 opacity-20" />
            <p className="font-medium">No food found</p>
          </div>
        )}
      </div>
    </div>
  );
}
