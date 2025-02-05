import React, { useState } from 'react';
import { ChevronRight, } from 'lucide-react';

const SubscriptionTile = () => {
  const [phone, setPhone] = useState('+1');

  return (
    <div className="min-h-screen bg-[#0A0B14] flex flex-col md:flex-row">
      {/* Left Column - Price Display */}
      <div className="w-full md:w-1/2 p-6 md:p-8 bg-cover bg-center" style={{ backgroundImage: "url('/assets/subcrptionbg.jpg')" }}>
        {/* Logo */}
        <div className="mb-8 flex justify-center md:justify-start">
          <img 
            src="/assets/Transparent background.png" 
            alt="Ducktail Logo" 
            className="w-48 md:w-64 h-12 md:h-16 object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-md mx-auto md:mx-0 text-center md:text-left">
          {/* Price */}
          <div className="mb-6 text-gray-400 text-sm">
            Pay (BlueRenext)
            <div className="text-3xl md:text-4xl font-bold text-white mt-1">$169.00</div>
          </div>

          {/* Product Card */}
          <div className="bg-[#1A1B25] rounded-xl p-6 mb-6 relative">
            <h2 className="text-lg md:text-xl font-bold mb-1 text-white">Pangea Design System</h2>
            <div className="text-sm text-blue-400">v3.0</div>
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <h3 className="text-sm text-gray-400">Summary</h3>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Items Subtotal:</span>
              <span className="text-white">$169.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Tax:</span>
              <span className="text-white">$1.00</span>
            </div>
            <div className="flex justify-between text-sm font-medium pt-4 border-t border-gray-700">
              <span className="text-gray-400">Order Total:</span>
              <span className="text-white">$170.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Subscription Form */}
      <div className="w-full md:w-1/2 p-6 md:p-8 bg-[#111528]">
        {/* Progress Steps */}
        <div className="flex flex-wrap justify-between mb-6 text-xs md:text-sm">
          <div className="flex items-center text-blue-500">
            <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">1</span>
            <span className="ml-2">Info</span>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-500 hidden md:inline" />
          </div>
          <div className="flex items-center text-gray-500">
            <span className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-500 flex items-center justify-center">2</span>
            <span className="ml-2">Payment</span>
            <ChevronRight className="w-4 h-4 mx-2 hidden md:inline" />
          </div>
          <div className="flex items-center text-gray-500">
            <span className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-500 flex items-center justify-center">3</span>
            <span className="ml-2">Confirm</span>
          </div>
        </div>

        {/* Form Title */}
        <h1 className="text-xl md:text-2xl font-bold text-white mb-6">Information</h1>

        {/* Form Fields */}
        <form className="space-y-4 md:space-y-6">
  <div>
    <label className="block text-gray-300 mb-2">
      Name <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      placeholder="Full Name"
      className="w-full bg-[#1A1F35] border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-blue-500"
    />
  </div>
  <div>
    <label className="block text-gray-300 mb-2">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      placeholder="hi@example.com"
      className="w-full bg-[#1A1F35] border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-blue-500"
    />
  </div>
  <div>
    <label className="block text-gray-300 mb-2">
      Phone <span className="text-red-500">*</span>
    </label>
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <select className="w-full md:w-auto bg-[#1A1F35] border border-gray-700 rounded-lg px-3 py-2 md:py-3 text-white focus:outline-none focus:border-blue-500">
        <option value="+1">🇺🇸 +1</option>
      </select>
      <input
        type="tel"
        placeholder="(123) 456-7890"
        className="w-full bg-[#1A1F35] border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-blue-500"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  </div>
  <button
    type="submit"
    className="w-full bg-blue-500 text-white rounded-lg py-2 md:py-3 font-medium hover:bg-blue-600 transition-colors"
  >
    Continue
  </button>
</form>

      </div>
    </div>
  );
};

export default SubscriptionTile;
