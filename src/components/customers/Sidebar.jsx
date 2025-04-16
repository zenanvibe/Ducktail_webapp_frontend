
import React from "react";
import { ToggleLeftIcon } from "lucide-react";
import "../../css/Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`sidebar h-screen ${
        isOpen ? "w-64" : "w-0"
      } lg:w-64 text-white transition-all duration-300 fixed lg:relative z-50 overflow-y-auto py-10`}
      style={{ backgroundColor: "#1F1E1E", borderRadius: "35px" }}
    >
      <div className="flex items-center justify-between h-16 px-4 py-10 mb-5">
        {/* Logo */}
        <img
          src="/assets/Transparent background.png"
          alt="Ducktail Logo"
          className={`h-16 ${isOpen ? "block" : "hidden"} lg:block`}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
        >
          {isOpen ? <ToggleLeftIcon /> : ""}
        </button>
      </div>

      {/* Navigation links */}
      <nav className={`mt-4 ${isOpen ? "block" : "hidden"} lg:block `}>
        
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            <img
              src="/sidebaricons/project invite 1.png"
              alt="Ducktail Logo"
              className="h-7"
            />
          </span>
          <button
            onClick={() => handleNavigation("/customer/projectinvite")}
            className={`block px-16 py-4 w-full text-left hover:bg-[#616161] ${
              isActive("/customer/projectinvite") ? "bg-[#616161]" : ""
            }`}
          >
            Project Invite
          </button>
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            <img
              src="/sidebaricons/Job list3.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <button
            onClick={() => handleNavigation("/customer/livecard")}
            className={`block px-16 py-4 w-full text-left hover:bg-[#616161] ${
              isActive("/customer/livecard") ? "bg-[#616161]" : ""
            }`}
          >
            Live Project
          </button>
        </div>

        {/* Apply the same pattern to all other buttons */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            <img
              src="/sidebaricons/live1.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <button
            onClick={() => handleNavigation("/customer/holdcard")}
            className={`block px-16 py-4 w-full text-left hover:bg-[#616161] ${
              isActive("/customer/holdcard") ? "bg-[#616161]" : ""
            }`}
          >
            Hold Project
          </button>
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            <img
              src="/sidebaricons/rejected1.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <button
            onClick={() => handleNavigation("/customer/rejectcard")}
            className={`block px-16 py-4 w-full text-left hover:bg-[#616161] ${
              isActive("/customer/rejectcard") ? "bg-[#616161]" : ""
            }`}
          >
            Rejection Projects
          </button>
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            <img
              src="/sidebaricons/faq_1761715511.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <button
            onClick={() => handleNavigation("/customer/requestcard")}
            className={`block px-16 py-4 w-full text-left hover:bg-[#616161] ${
              isActive("/customer/requestcard") ? "bg-[#616161]" : ""
            }`}
          >
            Completion Request
          </button>
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            <img
              src="/sidebaricons/Profile 2.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <button
            onClick={() => handleNavigation("/customer/completedcard")}
            className={`block px-16 py-4 w-full text-left hover:bg-[#616161] ${
              isActive("/customer/completedcard") ? "bg-[#616161]" : ""
            }`}
          >
            Completed Projects
          </button>
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            <img
              src="/sidebaricons/Profile1.png"
              alt="Ducktail Logo"
              className="h-6"
            />
          </span>
          <button
            onClick={() => handleNavigation("/customer/profile")}
            className="block px-16 py-4 w-full text-left hover:bg-[#616161]"
          >
            Profile
          </button>
        </div>
       
      </nav>
    </div>
  );
};

export default Sidebar;
