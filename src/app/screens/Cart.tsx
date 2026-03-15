import React from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, ShoppingBag, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PrimaryButton } from '../components/PrimaryButton';
import { CartItemComponent } from '../components/CartItem';

export function Cart() {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, cartTotal } = useApp();

  const tax = Math.round(cartTotal * 0.05); // 5% GST roughly
  const totalAmount = cartTotal + tax;

  return (
    <div className="flex min-h-full flex-col bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-gray-100 bg-white px-5 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-4 shadow-sm">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft size={24} className="text-gray-900" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Cart</h1>
          <div className="w-10"></div> {/* Spacer */}
        </div>
      </div>

      <div className="flex-1 px-5 pt-6 pb-8">
        {cart.length === 0 ? (
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-[#FF6B35]">
              <ShoppingBag size={48} strokeWidth={1.5} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-[200px]">Looks like you haven't added anything to your cart yet.</p>
            <PrimaryButton onClick={() => navigate('/menu')}>
              Start ordering
            </PrimaryButton>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              {cart.map((cartItem) => (
                <CartItemComponent
                  key={cartItem.item.id}
                  item={cartItem.item}
                  quantity={cartItem.quantity}
                  onUpdateQuantity={(q) => updateQuantity(cartItem.item.id, q)}
                  onRemove={() => removeFromCart(cartItem.item.id)}
                />
              ))}
            </div>

            {/* Order Summary Card */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mt-8">
              <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm text-gray-500 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-bold">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax & Fees (5%)</span>
                  <span className="text-gray-900 font-bold">₹{tax}</span>
                </div>
                <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between items-center mt-2">
                  <span className="font-bold text-gray-900">Total Amount</span>
                  <span className="font-black text-xl text-[#FF6B35]">₹{totalAmount}</span>
                </div>
              </div>
            </div>

            <PrimaryButton 
              onClick={() => navigate('/payment')}
              className="mt-6"
              rightIcon={<ArrowRight size={20} />}
            >
              Proceed to Payment
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
}
