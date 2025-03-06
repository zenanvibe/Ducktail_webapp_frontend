import React, { useState } from "react";
import "../css/Navbarlanding.css";
import { useNavigate } from "react-router-dom";

const Navbarlanding = () => {
  const [activeLink, setActiveLink] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    // setIsDropdownOpen((prev) => !prev);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoginRedirect = (userType) => {
    navigate(`/login?type=${userType}`);
    setIsDropdownOpen(false);
  };


  const toggleMenu = () => {
    if (isMobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
      }, 1000); // Duration of the reverse animation
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const handleActiveLink = (navlink, event) => {
    event.preventDefault();
    console.log(navlink);
    setActiveLink(navlink);
  };
  return (
    <nav className="bg-white shadow-md ">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              src="/assets/white background.jpg"
              alt="Ducktail"
              className="h-8 sm:h-12" // Smaller logo size on mobile
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-3 items-center">
            <a
              href=" "
              onClick={(e) => handleActiveLink("HOME", e)}
              className={`relative px-4 py-2 text-[14px] font-bold transition-all hover:rounded-full duration-300 hover:text-gray-500 hover:bg-gray-100 ${
                activeLink === "HOME" ? "text-gray-500" : "text-black"
              }`}
            >
              HOME
            </a>

            <a
              href="#services"
              onClick={(e) => handleActiveLink("SERVICES", e)}
              className={`relative px-4 py-2 text-[14px] font-bold transition-all hover:rounded-full duration-300 hover:text-gray-500 hover:bg-gray-100 ${
                activeLink === "SERVICES" ? "text-gray-500" : "text-black"
              }`}
            >
              SERVICES
            </a>

            <div className="relative">
              <a
                href=" "
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
                className="relative px-4 py-2 text-[14px] font-bold transition-all hover:rounded-full duration-300 hover:text-gray-500 hover:bg-gray-100"
              >
                JOIN US
              </a>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-gray-100 rounded shadow-lg">
                  <button
                    onClick={() => handleLoginRedirect("builder")}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Builder
                  </button>
                  <button
                    onClick={() => handleLoginRedirect("customer")}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Customer
                  </button>
                </div>
              )}
            </div>

            <a
              href=" "
              onClick={(e) => handleActiveLink("CAREER", e)}
              className={`relative px-4 py-2 text-[14px] font-bold transition-all hover:rounded-full duration-300 hover:text-gray-500 hover:bg-gray-100 ${
                activeLink === "CAREER" ? "text-gray-500" : "text-black"
              }`}
            >
              CAREER
            </a>

            <a
              href=" "
              onClick={(e) => handleActiveLink("SUPPORT", e)}
              className={`relative px-4 py-2 text-[14px] font-bold transition-all hover:rounded-full duration-300 hover:text-gray-500 hover:bg-gray-100 ${
                activeLink === "SUPPORT" ? "text-gray-500" : "text-black"
              }`}
            >
              SUPPORT
            </a>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            {" "}
            {/* Hide on small screens */}
            <a
              href=" "
              className="bg-blue-600 text-white font-bold px-6 py-2 rounded-full hover:bg-blue-700"
            >
              LOGIN
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                ""
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="menu-overlay">
          <div className={`black-shade ${isClosing ? "slide-out" : ""}`}></div>
          <div className={`menu-content ${isClosing ? "slide-out" : ""}`}>
            {/* Close Button */}
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            {/* Navigation Links */}
            <a href=" " className="block mt-8 text-black font-bold">
              HOME
            </a>
            <a href=" " className="block mt-4 text-black font-bold">
              SERVICES
            </a>
            <a href=" " className="block mt-4 text-black font-bold">
              JOIN US
            </a>
            <a href=" " className="block mt-4 text-black font-bold">
              CAREER
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbarlanding;
