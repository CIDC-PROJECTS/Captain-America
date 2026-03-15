import React from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, RefreshCcw } from 'lucide-react';
import { CAFE_DATA } from '../data';

export function History() {
  const navigate = useNavigate();

  const pastOrders = [
    {
      id: '#ORD-8492',
      date: 'Today, 12:30 PM',
      items: '1x Veg Burger, 1x Cold Coffee',
      amount: 147,
      status: 'Delivered',
    },
    {
      id: '#ORD-8450',
      date: 'Yesterday, 01:15 PM',
      items: '1x Pepperoni Pizza',
      amount: 126,
      status: 'Delivered',
    },
    {
      id: '#ORD-8321',
      date: '10 Oct, 11:45 AM',
      items: '2x Grilled Sandwich',
      amount: 105,
      status: 'Cancelled',
    },
  ];

  return (
    <div className="flex min-h-full flex-col bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-gray-100 bg-white px-5 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft size={24} className="text-gray-900" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Order History</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="flex-1 px-5 pt-6 pb-8">
        <div className="space-y-4">
          {pastOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{order.id}</h3>
                  <p className="text-xs text-gray-500 font-medium">{order.date}</p>
                </div>
                <div className="text-right">
                  <span className="font-black text-[#FF6B35] text-lg block mb-1">₹{order.amount}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    order.status === 'Delivered' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 min-[360px]:flex-row min-[360px]:items-end min-[360px]:justify-between">
                <div className="flex-1 min-[360px]:pr-4">
                  <p className="text-sm font-medium text-gray-700 leading-snug">{order.items}</p>
                  <p className="text-xs text-gray-400 mt-1">{CAFE_DATA.name}</p>
                </div>
                {order.status === 'Delivered' && (
                  <button className="flex items-center gap-1.5 text-sm font-bold text-[#FF6B35] bg-orange-50 px-4 py-2 rounded-xl hover:bg-orange-100 transition-colors">
                    <RefreshCcw size={14} /> Reorder
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
