import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaShareAlt } from "react-icons/fa";

const BuildersInfo = () => {
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [rating, setRating] = useState(0);
  
  return (
    <div className="bg-[#E0E0E0] relative p-4">
      {/* Main Container with curved corners and background color */}
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-[#ffffff] shadow-lg relative">
        {/* Social Media Icons fixed inside the white container */}
        <div className="absolute right-6 top-24 z-10 flex flex-col space-y-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 cursor-pointer transition-all duration-300">
            <FaFacebookF size={24} />
          </div>
          <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-700 cursor-pointer transition-all duration-300">
            <FaInstagram size={24} />
          </div>
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-700 cursor-pointer transition-all duration-300">
            <FaYoutube size={24} />
          </div>
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-700 cursor-pointer transition-all duration-300">
            <FaShareAlt size={24} />
          </div>
        </div>

        <div className="p-8">
          {/* Logo and Company Info */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mr-6 bg-white shadow-md">
                <img src="assets/DUCKTAIL-HOMELOAN.aviF" alt="JK Builders Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">JK BUILDERS</h1>
                <p className="text-lg mb-4">DT12345</p>
                <div className="flex items-start mb-2">
                  <span className="mt-1 mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <div className="text-base">
                    <p>B 10 PALAM POLICE QUATERS</p>
                    <p>ANNA NAGAR WEST CROSS</p>
                    <p>CHENNAI -6000028</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <p className="text-lg">7894561322</p>
                </div>
              </div>
            </div>
            
            {/* Empty space to balance the layout */}
            <div className="w-32"></div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-300 mb-8"></div>

          {/* About The Company Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">About The Company</h2>
            <p className="text-lg max-w-4xl mx-auto">
              I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Services</h2>
            <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-4 md:space-y-0">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-black rounded-full mr-3"></div>
                <span className="text-lg">Renovation & Remodeling Tasks</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-black rounded-full mr-3"></div>
                <span className="text-lg">Property Elevation</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-black rounded-full mr-3"></div>
                <span className="text-lg">Structural Dreawing</span>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={`assets/DUCKTAIL-HOMELOAN.aviF`} 
                    alt={`Portfolio item ${item}`} 
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Review Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Review</h2>
              <button 
                className="bg-blue-600 text-white px-4 py-1 rounded text-sm"
                onClick={() => setShowReviewPopup(true)}
              >
                Write a Review
              </button>
            </div>
            
            {/* Reviews */}
            {[1, 2].map((review) => (
              <div key={review} className="flex mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-white">
                  <img 
                    src="assets/DUCKTAIL-HOMELOAN.aviF" 
                    alt={`Reviewer ${review}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">JK BUILDERS</h3>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 mr-1">
                        {star <= 4.5 ? "★" : "☆"}
                      </span>
                    ))}
                    <span className="ml-1">4.5</span>
                  </div>
                  <p className="text-base">
                    I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.
                  </p>
                </div>
              </div>
            ))}
            
            <div className="text-right">
              <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">
                VIEW MORE
              </button>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="mb-12">
            <div className="border border-gray-300 rounded-lg p-8 max-w-xl mx-auto bg-white shadow-md">
              <h2 className="text-2xl font-medium text-center mb-8">Enquiry Us</h2>
              
              <form>
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border-t-0 border-l-0 border-r-0 border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border-t-0 border-l-0 border-r-0 border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  
                  {/* Phone Number Field */}
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full border-t-0 border-l-0 border-r-0 border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  
                  {/* Services Dropdown */}
                  <div className="relative">
                    <div className="flex justify-between items-center w-full border-t-0 border-l-0 border-r-0 border-b border-gray-300 pb-2">
                      <input
                        type="text"
                        placeholder="Services"
                        className="w-full focus:outline-none"
                        readOnly
                      />
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                  
                  {/* District Dropdown */}
                  <div className="relative">
                    <div className="flex justify-between items-center w-full border-t-0 border-l-0 border-r-0 border-b border-gray-300 pb-2">
                      <input
                        type="text"
                        placeholder="District"
                        className="w-full focus:outline-none"
                        readOnly
                      />
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                  
                  {/* Taluk Dropdown */}
                  <div className="relative">
                    <div className="flex justify-between items-center w-full border-t-0 border-l-0 border-r-0 border-b border-gray-300 pb-2">
                      <input
                        type="text"
                        placeholder="Taluk"
                        className="w-full focus:outline-none"
                        readOnly
                      />
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                  
                  {/* Postal Code Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="w-full border-t-0 border-l-0 border-r-0 border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-medium py-2 px-12 rounded"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Review Popup */}
      {showReviewPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">Write a Review</h3>
              <button 
                onClick={() => setShowReviewPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <p className="mb-2 font-medium">Your Rating</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star} 
                    onClick={() => setRating(star)}
                    className="text-2xl mr-1 focus:outline-none"
                  >
                    {star <= rating ? (
                      <span className="text-yellow-400">★</span>
                    ) : (
                      <span className="text-gray-300">☆</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-medium">Your Review</label>
              <textarea 
                className="w-full border border-gray-300 rounded p-2 h-32"
                placeholder="Share your experience with JK Builders..."
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-medium">Your Name</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-medium">Your Email</label>
              <input 
                type="email" 
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="flex justify-end">
              <button 
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                onClick={() => setShowReviewPopup(false)}
              >
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildersInfo;