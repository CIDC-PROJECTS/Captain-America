import React from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';
import { CAFE_DATA } from '../data';

export function Success() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-full flex-col overflow-hidden bg-[#FF6B35]">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-2xl"></div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center p-5 text-white min-[360px]:p-6">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl relative">
          <div className="absolute inset-0 bg-orange-100 rounded-full animate-ping opacity-75"></div>
          <CheckCircle2 size={64} className="text-[#FF6B35] relative z-10" />
        </div>
        
        <h1 className="mb-2 text-2xl font-black tracking-tight min-[360px]:text-3xl">Payment Successful!</h1>
        <p className="text-white/80 font-medium mb-10 text-center max-w-[250px] leading-relaxed">
          Your order has been placed successfully and sent to the kitchen.
        </p>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 w-full max-w-sm mb-10">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/20">
            <div className="flex flex-col">
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Order ID</span>
              <span className="font-bold text-lg flex items-center gap-2">
                <FileText size={16} className="text-orange-200" /> #ORD-8492
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Table No</span>
              <span className="font-bold text-lg text-orange-200">{CAFE_DATA.table}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-orange-50">
            <Clock size={24} className="text-orange-200" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white/80">Estimated Preparation Time</span>
              <span className="font-black text-xl tracking-tight">15 - 20 mins</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/tracking')}
          className="w-full max-w-sm bg-white text-[#FF6B35] py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors shadow-lg shadow-black/10"
        >
          Track Order <ArrowRight size={20} />
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="mt-6 text-white/80 font-bold hover:text-white transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
