import React from 'react';

const Landscaping = () => {


  return (
    <div className="relative min-h-[80vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/Landscaping.png"
          alt="Interior Design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[80vh] items-center px-6 py-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Title Section */}
          <div className="text-white flex-1 px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="text-yellow-400"> Landscaping </span>
              
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-xl">
            At Ducktail Construction, we create serene outdoor spaces with elegant pools, fountains, and regional flora, blending artistry and nature to craft your perfect haven.

            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email" className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="tel" placeholder="Phone Number" className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <select className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select State</option>
              </select>
              <select className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select District</option>
              </select>
              <select className="w-full p-2 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Taluk</option>
              </select>
              <textarea placeholder="Your Query" rows="2" className="col-span-2 w-full p-2 h-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
              <button className="col-span-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landscaping;
