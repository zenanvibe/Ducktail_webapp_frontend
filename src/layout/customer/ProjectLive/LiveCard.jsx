import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Building2, Mail, Phone, Calendar, MapPin, Activity, MessageSquare, Wallet } from 'lucide-react';

const LiveProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projectsData = [
    {
      companyName: "JK BUILDERS",
      companyId: "134253773",
      email: "Karthi@Gmail.Com",
      phoneNumber: "7894561230",
      projectStartDate: "03 Nov 2024",
      liveLocation: "Madurai",
      status: "Active"
    },
    {
      companyName: "SK CONSTRUCTION",
      companyId: "134551774",
      email: "SK.const@Gmail.Com",
      phoneNumber: "7894561231",
      projectStartDate: "15 Nov 2024",
      liveLocation: "Chennai",
      status: "Active"
    },
    {
      companyName: "VR DEVELOPERS",
      companyId: "134551775",
      email: "VR.dev@Gmail.Com",
      phoneNumber: "7894561232",
      projectStartDate: "30 Nov 2024",
      liveLocation: "Coimbatore",
      status: "Active"
    },
    {
      companyName: "PS BUILDERS",
      companyId: "134551776",
      email: "PS.builders@Gmail.Com",
      phoneNumber: "7894561233",
      projectStartDate: "05 Dec 2024",
      liveLocation: "Trichy",
      status: "Active"
    }
  ];

  const handleNavigation = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prevIndex => {
      if (direction === 'next') {
        return prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getCardPosition = (index) => {
    const positions = {
      center: 'translate-x-0 opacity-100 z-30 scale-100',
      left: '-translate-x-[85%] opacity-40 z-20 scale-95 blur-sm',
      right: 'translate-x-[85%] opacity-40 z-20 scale-95 blur-sm',
      hidden: 'translate-x-0 opacity-0 -z-10 scale-90'
    };

    const diff = (index - currentIndex + projectsData.length) % projectsData.length;
    if (diff === 0) return positions.center;
    if (diff === projectsData.length - 1) return positions.left;
    if (diff === 1) return positions.right;
    return positions.hidden;
  };

  const ProjectCard = ({ data, position }) => (
    <div className={`absolute top-0 left-0 w-full bg-white rounded-lg shadow-xl p-6 transition-all duration-500 ease-in-out transform ${position}`}>
      <h2 className="text-xl font-bold text-center mb-6">{data.companyName}</h2>

      <div className="space-y-4">
        {/* Company ID */}
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">Company ID</p>
            <p className="text-sm font-medium">{data.companyId}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="text-sm font-medium">{data.email}</p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">Phone Number</p>
            <p className="text-sm font-medium">{data.phoneNumber}</p>
          </div>
        </div>

        {/* Project Starting Date */}
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">Project Starting Date</p>
            <p className="text-sm font-medium">{data.projectStartDate}</p>
          </div>
        </div>

        {/* Live Location */}
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">Live Location</p>
            <p className="text-sm font-medium">{data.liveLocation}</p>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3">
          <Activity className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">Status</p>
            <p className="text-sm font-medium text-green-500">{data.status}</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 mt-6">
        <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors">
          <MessageSquare className="w-4 h-4" />
          Chat Us
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors">
          <Wallet className="w-4 h-4" />
          Payment
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Navigation buttons */}
        <button 
          onClick={() => handleNavigation('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-gray-50 transition-colors"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Cards container */}
        <div className="relative w-full max-w-md mx-auto h-[600px]">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index} 
              data={project} 
              position={getCardPosition(index)}
            />
          ))}
        </div>

        {/* Right navigation button */}
        <button 
          onClick={() => handleNavigation('next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-gray-50 transition-colors"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default LiveProject;