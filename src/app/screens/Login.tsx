import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChefHat, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PrimaryButton } from '../components/PrimaryButton';

export function Login() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      setStep(2);
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join('').length === 4) {
      navigate('/');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Simple auto focus next logic could be added here
  };

  return (
    <div className="relative flex min-h-full flex-col bg-white px-5 py-6 min-[360px]:p-6">
      <div className="flex flex-1 flex-col items-center justify-center py-6 min-[360px]:py-0 min-[360px]:-mt-12">
        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6">
          <ChefHat size={48} className="text-[#FF6B35]" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-gray-900 min-[360px]:text-3xl">College Canteen</h1>
        <p className="text-gray-500 mb-12 text-center">Order food straight to your table</p>

        {step === 1 ? (
          <form className="w-full space-y-6" onSubmit={handleSendOTP}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <div className="flex bg-gray-50 rounded-xl p-1 border border-gray-200">
                <span className="flex items-center px-4 text-gray-500 font-medium">+91</span>
                <input
                  type="tel"
                  className="flex-1 bg-transparent py-3 px-2 outline-none text-gray-900 font-medium"
                  placeholder="Enter 10 digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  maxLength={10}
                />
              </div>
            </div>
            <PrimaryButton
              type="submit"
              disabled={phone.length !== 10}
              rightIcon={<ArrowRight size={20} />}
            >
              Send OTP
            </PrimaryButton>
          </form>
        ) : (
          <form className="w-full space-y-8" onSubmit={handleVerify}>
            <div className="space-y-4">
              <p className="text-center text-sm text-gray-600">
                Enter the 4-digit code sent to +91 {phone}
              </p>
              <div className="flex justify-center gap-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="h-14 w-12 rounded-xl border border-gray-200 bg-gray-50 text-center text-xl font-bold outline-none transition-all focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] min-[360px]:h-16 min-[360px]:w-14 min-[360px]:text-2xl"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                  />
                ))}
              </div>
            </div>
            <PrimaryButton
              type="submit"
              disabled={otp.join('').length !== 4}
              rightIcon={<CheckCircle2 size={20} />}
            >
              Verify
            </PrimaryButton>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-gray-500 font-medium text-sm hover:text-gray-900"
            >
              Change phone number
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
