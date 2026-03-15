import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, CreditCard, Smartphone, Building, CheckCircle2, ChevronRight, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PrimaryButton } from '../components/PrimaryButton';

export function Payment() {
  const navigate = useNavigate();
  const { cartTotal, clearCart } = useApp();
  const [method, setMethod] = useState('upi');

  const tax = Math.round(cartTotal * 0.05);
  const totalAmount = cartTotal + tax;

  const handlePay = () => {
    clearCart();
    navigate('/success');
  };

  const paymentMethods = [
    { id: 'upi', name: 'UPI Payment', icon: <Smartphone size={24} />, description: 'Google Pay, PhonePe, Paytm' },
    { id: 'card', name: 'Credit / Debit Card', icon: <CreditCard size={24} />, description: 'Visa, MasterCard, RuPay' },
    { id: 'net', name: 'Net Banking', icon: <Building size={24} />, description: 'All major banks supported' },
  ];

  return (
    <div className="relative flex min-h-full flex-col bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-gray-100 bg-white px-5 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft size={24} className="text-gray-900" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Payment</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="flex-1 px-5 pt-6 pb-32">
        {/* Total Amount Card */}
        <div className="bg-[#FF6B35] rounded-3xl p-6 text-white mb-8 shadow-md shadow-orange-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-8 -mb-8 blur-xl"></div>
          
          <div className="relative z-10">
            <p className="text-white/80 font-medium text-sm mb-1 uppercase tracking-wider">Total Amount To Pay</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black">₹{totalAmount}</span>
            </div>
            <p className="text-white/70 text-xs mt-3 flex items-center gap-1">
              <CheckCircle2 size={12} /> Includes all taxes and fees
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <h3 className="font-bold text-gray-900 mb-4 text-lg tracking-tight">Select Payment Method</h3>
        <div className="space-y-4">
          {paymentMethods.map((pm) => (
            <label
              key={pm.id}
              className={`flex items-center gap-4 p-4 rounded-3xl border-2 transition-all cursor-pointer shadow-sm ${
                method === pm.id ? 'border-[#FF6B35] bg-orange-50/50' : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#FF6B35]">
                {pm.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-sm mb-0.5">{pm.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{pm.description}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                method === pm.id ? 'border-[#FF6B35] bg-[#FF6B35]' : 'border-gray-300'
              }`}>
                {method === pm.id && <Check size={14} className="text-white stroke-[3]" />}
              </div>
              <input
                type="radio"
                name="payment"
                value={pm.id}
                checked={method === pm.id}
                onChange={() => setMethod(pm.id)}
                className="hidden"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-md rounded-t-3xl border-t border-gray-100 bg-white px-5 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <PrimaryButton
          onClick={handlePay}
          rightIcon={<ChevronRight size={20} />}
        >
          Pay Now (₹{totalAmount})
        </PrimaryButton>
      </div>
    </div>
  );
}
