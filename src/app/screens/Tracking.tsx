import React from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, ChefHat, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { CAFE_DATA } from '../data';
import { OrderStatusTimeline, TimelineStep } from '../components/OrderStatusTimeline';

export function Tracking() {
  const navigate = useNavigate();
  const currentStep = 2;

  const steps: TimelineStep[] = [
    { id: 1, title: 'Order Received', desc: 'We have received your order', time: '12:30 PM', icon: <CheckCircle2 size={24} /> },
    { id: 2, title: 'Preparing', desc: 'Your food is being prepared', time: '12:35 PM', icon: <ChefHat size={24} /> },
    { id: 3, title: 'Ready', desc: 'Your order is ready for pickup', time: '12:50 PM', icon: <CheckCircle2 size={24} /> },
    { id: 4, title: 'Delivered', desc: 'Enjoy your meal!', time: '12:55 PM', icon: <CheckCircle2 size={24} /> },
  ];

  return (
    <div className="flex min-h-full flex-col bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-gray-100 bg-white px-5 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/')} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft size={24} className="text-gray-900" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Track Order</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="flex-1 px-5 pt-6 pb-8">
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF6B35]">
            <ChefHat size={24} />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 mb-0.5">Estimated Time</h2>
            <p className="text-[#FF6B35] font-black text-xl">15 - 20 mins</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="mb-6 flex justify-between items-center pb-6 border-b border-gray-100">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Order ID</p>
              <p className="font-bold text-gray-900">#ORD-8492</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 font-medium mb-1">Table</p>
              <p className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-lg inline-block">{CAFE_DATA.table}</p>
            </div>
          </div>

          <OrderStatusTimeline steps={steps} currentStep={currentStep} />
        </div>

        {/* Contact Support */}
        <div className="mt-6 bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Campus Cafe</h3>
              <p className="text-sm text-gray-500 font-medium">Canteen Staff</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-orange-50 text-[#FF6B35] rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors">
              <MessageCircle size={20} />
            </button>
            <button className="w-10 h-10 bg-[#FF6B35] text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-sm">
              <Phone size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
