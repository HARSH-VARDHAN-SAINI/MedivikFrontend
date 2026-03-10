import React, { useState } from 'react';
import { X, Smartphone, ShieldCheck } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  if (!isOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      setStep(2);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.join('').length === 6) {
      // Success logic here
      setTimeout(() => {
        onClose();
        setStep(1);
        setPhone('');
        setOtp(['', '', '', '', '', '']);
      }, 1000);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Auto focus next input logic would go here
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-800 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              {step === 1 ? <Smartphone className="w-8 h-8 text-primary" /> : <ShieldCheck className="w-8 h-8 text-primary" />}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {step === 1 ? 'Login or Sign Up' : 'Verify OTP'}
            </h2>
            <p className="text-gray-500 text-sm">
              {step === 1 
                ? 'Get access to your orders, lab tests & doctor consultations' 
                : `Enter the 6-digit OTP sent to +91 ${phone}`}
            </p>
          </div>

          {step === 1 ? (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <div className="relative flex rounded-md shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary overflow-hidden">
                  <span className="inline-flex items-center px-4 rounded-l-md border-r border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    className="flex-1 block w-full px-4 py-3 sm:text-sm focus:outline-none"
                    placeholder="Enter mobile number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
              </div>
              <button 
                type="submit" 
                disabled={phone.length !== 10}
                className="w-full btn-primary py-3 flex justify-center text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div className="flex justify-center gap-2 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    required
                  />
                ))}
              </div>
              <button 
                type="submit" 
                disabled={otp.join('').length !== 6}
                className="w-full btn-primary py-3 flex justify-center text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verify & Continue
              </button>
              <div className="text-center text-sm text-gray-500 mt-4">
                Didn't receive code? <button type="button" className="text-primary font-semibold hover:underline" onClick={() => setStep(1)}>Resend OTP</button>
              </div>
            </form>
          )}

          <div className="mt-8 text-center text-xs text-gray-400">
            By continuing, you agree to our <a href="#" className="underline hover:text-gray-600">Terms of Service</a> & <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
