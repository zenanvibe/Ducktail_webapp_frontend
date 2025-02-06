import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section with Profile Image and ID */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            <img 
              src="assets/DUCKTAIL-HOMELOAN.avif" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold">AKASH S</h2>
          <div className="flex items-center space-x-2">
            {/* Simple ID Card SVG icon */}
            <svg
              className="w-4 h-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="7" y1="9" x2="17" y2="9" />
              <line x1="7" y1="13" x2="17" y2="13" />
              <line x1="7" y1="17" x2="12" y2="17" />
            </svg>
            <span className="text-sm">Ducktail ID</span>
            <span className="font-medium">DTCHE1011</span>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Chat Us
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Payment
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Document
            </button>
          </div>
        </div>

        {/* Vertical Dotted Line Separator */}
        <div className="hidden md:block w-px border-l border-dashed border-gray-300 mx-2"></div>

        {/* Right Section with Details */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Basic Details</h3>
          
          {/* Horizontal Dotted Line */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-sm">Karthick@Gmail.Com</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600">Phone Number</p>
              <p className="text-sm">7894562252</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600">District</p>
              <p className="text-sm">Tirunelveli</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600">Post Code</p>
              <p className="text-sm">627001</p>
            </div>
          </div>

          {/* Horizontal Dotted Line */}
          <div className="border-b border-dashed border-gray-300 my-4"></div>

          <div className="mt-4">
            <p className="text-sm text-gray-600">Address</p>
            <p className="text-sm">B 11 Permal Kovil Street Tirunelveli Junction</p>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600">Project</p>
            <p className="text-sm">Renovation And Remodelling Task</p>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600">Project Location</p>
            <p className="text-sm">Palayamkottai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;