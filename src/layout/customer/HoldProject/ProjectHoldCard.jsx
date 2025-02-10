import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const ProjectHoldCard = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handlenavigate = (name, path) => {
    console.log(`Navigating to ${name} at ${path}`);
    navigate(path);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-6 relative">
      <div className="flex items-start gap-4">
        {/* Left side - Image */}
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src="/assets/DUCKTAIL-HOMELOAN.aviF"
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1">
          {/* Company Name */}
          <h2 className="text-xl font-bold text-gray-900">JK BUILDERS</h2>
          
          {/* Location */}
          <div className="flex items-center gap-2 mt-1">
            <Building2 className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600">Madurai</span>
          </div>

          {/* Phone Number */}
          <div className="mt-1">
            <span className="text-gray-600">7894561230</span>
          </div>
        </div>
      </div>

      {/* Question Text */}
      <div className="mt-6 mb-16">
        <h3 className="text-xl text-gray-700">Tell Me Something About Rejection..</h3>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-3 right-4 flex gap-2">
        <button
          className="w-24 px-3 py-2 bg-white border-2 border-gray-900 rounded-lg text-gray-900 font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
          onClick={() => handlenavigate("Chat", "/chatbox")}
        >
          <span className="text-xl">💬</span> Chat
        </button>

        <button className="w-24 px-3 py-2 bg-white border-2 border-gray-900 rounded-lg text-gray-900 font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
          <span className="text-xl">₹</span> Payment
        </button>
      </div>
    </div>
  );
};

export default ProjectHoldCard;
