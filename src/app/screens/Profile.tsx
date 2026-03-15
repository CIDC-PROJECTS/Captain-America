import React from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, Settings, FileText, Heart, MapPin, LogOut, Bell } from 'lucide-react';

export function Profile() {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'history', icon: <FileText size={20} />, label: 'Order History', action: () => navigate('/history') },
    { id: 'saved', icon: <Heart size={20} />, label: 'Saved Orders', action: () => {} },
    { id: 'address', icon: <MapPin size={20} />, label: 'Saved Addresses', action: () => {} },
    { id: 'settings', icon: <Settings size={20} />, label: 'Settings', action: () => {} },
    { id: 'notifications', icon: <Bell size={20} />, label: 'Notifications', action: () => {} },
  ];

  return (
    <div className="flex min-h-full flex-col bg-gray-50">
      {/* Header Profile Info - Curved Background */}
      <div className="relative overflow-hidden rounded-b-[40px] bg-[#FF6B35] px-5 pt-[calc(1rem+env(safe-area-inset-top))] pb-12 shadow-md shadow-orange-200/50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-2xl"></div>
        
        <div className="relative z-10 flex items-center gap-4 min-[360px]:gap-5">
          <div className="relative h-16 w-16 rounded-full bg-white p-1 shadow-lg min-[360px]:h-20 min-[360px]:w-20">
            <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-[#FF6B35] min-[360px]:h-6 min-[360px]:w-6">
              <span className="text-white text-xs">+</span>
            </div>
          </div>
          <div className="flex-1 text-white">
            <h1 className="mb-1 text-xl font-black tracking-tight min-[360px]:text-2xl">Rahul Kumar</h1>
            <p className="text-white/80 font-medium mb-1">+91 98765 43210</p>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-sm">
              Computer Science, 3rd Year
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 pt-8 pb-8">
        {/* Menu Items */}
        <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 mb-6">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={item.action}
              className={`w-full flex items-center justify-between p-4 transition-colors hover:bg-gray-50 rounded-2xl ${
                index !== menuItems.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF6B35]">
                  {item.icon}
                </div>
                <span className="font-bold text-gray-900">{item.label}</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-white text-red-500 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-red-50 transition-colors shadow-sm border border-red-100 mb-8"
        >
          <LogOut size={20} /> Logout
        </button>
      </div>
    </div>
  );
}
