import React from 'react';
import { CalendarDays, MapPin, FileText } from 'lucide-react';

const CompleteRequestCard = () => {
  return (
    <div className="bg-white rounded-3xl p-6 relative max-w-md mx-auto shadow-lg overflow-hidden">
      {/* Curved edge decoration */}
      <div className="absolute right-6 top-1/2 -translate-y-10 h-20 w-16 bg-[rgb(224_224_224)] -mr-6 rounded-l-full" />

      
      {/* Circular navigation button */}
      <button className="absolute right-5 top-1/2 -translate-y-1/2 -mr-4 h-12 w-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10">
        <span className="text-lg font-bold text-gray-600">&gt;&gt;</span>
      </button>

      {/* Centered Title with Line */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">JK BUILDERS</h2>
        <div className="w-full h-px bg-black"></div>
      </div>

      {/* Project Status */}
      <div className="flex items-center gap-4 mb-4">
        <FileText className="w-6 h-6 text-gray-600" />
        <div>
          <div className="font-semibold">Project Status</div>
          <div className="text-gray-600">Completion_Request</div>
        </div>
      </div>

      {/* Project Starting Date */}
      <div className="flex items-center gap-4 mb-4">
        <CalendarDays className="w-6 h-6 text-gray-600" />
        <div>
          <div className="font-semibold">Project Starting Date</div>
          <div className="text-gray-600">05 Nov 2020</div>
        </div>
      </div>

      {/* Project Location */}
      <div className="flex items-center gap-4">
        <MapPin className="w-6 h-6 text-gray-600" />
        <div>
          <div className="font-semibold">Project Location</div>
          <div className="text-gray-600">Madurai</div>
        </div>
      </div>
    </div>
  );
};

export default CompleteRequestCard;
