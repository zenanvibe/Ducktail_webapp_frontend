import React from 'react';

const CardTile = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-gradient-to-br rounded-xl shadow-lg p-3 w-96 overflow-hidden" style={{ backgroundColor: "#D0D0D0" }}>
        {/* Top Section */}
        <div className="flex justify-between items-start mb-6">
          {/* Ducktail Logo */}
          <div>
            <img
              src="/assets/black logo.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </div>
          
          {/* Right side content */}
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-medium tracking-wide text-gray-800">LICENSE CARD</span>
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-md">
              Active
            </span>
          </div>
        </div>

        {/* Main Content Section with Relative Positioning */}
        <div className="relative">
          {/* Company Details */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1 tracking-wide">JK BUILDERS</h1>
            <p className="text-gray-700 tracking-wider">DTCHE1011</p>
          </div>

          {/* Bottom Section with Logo and Date */}
          <div className="flex items-center gap-6">
            {/* Left Logo */}
            <img
              src="/assets/Ducktail-02.png"
              alt="Bottom Left Logo"
              className="h-10"
            />
            
            {/* Validity Date */}
            <p className="text-sm pt-6 text-gray-700 tracking-wide">
              Valid Upto - 01/05/2025
            </p>
          </div>

          {/* Map Design - Positioned Absolutely */}
          <div className="absolute top-0 right-0 w-1/2 h-full flex justify-end items-end opacity-85">
            <img
              src="/assets/image 1.png"
              alt="Map Design"
              className="object-contain"
              style={{ transform: 'scale(1.9) translateX(19%) translateY(10%)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default CardTile;