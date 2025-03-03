import React, { useState } from 'react';
import { Search } from 'lucide-react';

const BuildersList = () => {
  // State for dropdown selections
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [taluk, setTaluk] = useState('');
  
  // Sample builder data
  const builders = Array(9).fill({
    name: 'JK BUILDERS',
    tagline: 'Join Us To Build An Innovative Project!',
    rating: '4.6',
    id: 'DTC5001',
    address: 'Meenakshi Amman Road, Madurai'
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"
          style={{
            backgroundImage: "url('/assets/Ducktail-Banner.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
             <div className="absolute inset-0 bg-black opacity-55"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full w-full px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 tracking-wide">
              Find The Trusted Company For Your Project
            </h1>
          </div>
        </div>
      </div>

      {/* Builders Listing Section */}
      <div className="w-full bg-white py-8 px-4 md:px-8">
        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            {/* State Dropdown */}
            <div className="relative w-full md:w-64">
              <label className="text-xs text-gray-500 absolute top-0 left-3">State</label>
              <select 
                className="appearance-none border rounded-md w-full py-3 px-3 pt-4 text-gray-700"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value=""></option>
                <option value="state1">Tamil Nadu</option>
                <option value="state2">Karnataka</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            
            {/* District Dropdown */}
            <div className="relative w-full md:w-64">
              <label className="text-xs text-gray-500 absolute top-0 left-3">District</label>
              <select 
                className="appearance-none border rounded-md w-full py-3 px-3 pt-4 text-gray-700"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value=""></option>
                <option value="district1">Madurai</option>
                <option value="district2">Coimbatore</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            
            {/* Taluk Dropdown */}
            <div className="relative w-full md:w-64">
              <label className="text-xs text-gray-500 absolute top-0 left-3">Taluk</label>
              <select 
                className="appearance-none border rounded-md w-full py-3 px-3 pt-4 text-gray-700"
                value={taluk}
                onChange={(e) => setTaluk(e.target.value)}
              >
                <option value=""></option>
                <option value="taluk1">Taluk 1</option>
                <option value="taluk2">Taluk 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
        
        {/* Builder Cards Grid - 3x3 format with horizontal layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {builders.map((builder, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow border border-gray-100 p-4 relative">
              {/* Verified Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-green-500 p-1 rounded-md">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Card Layout - Horizontal with image left, content right */}
              <div className="flex flex-col md:flex-row h-full gap-4">
                {/* Builder Image */}
                <div className="w-full md:w-2/5">
                  <div className="rounded-lg overflow-hidden h-full">
                    <img 
                      src="../assets/Ducktail-Banner.jpg"
                      alt="Builder property"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Builder Details */}
                <div className="w-full md:w-3/5 flex flex-col">
                  <h3 className="font-bold text-xl text-black">{builder.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{builder.tagline}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium flex items-center">
                      {builder.rating} <span className="text-yellow-300 ml-1">★</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Ratings</span>
                  </div>
                  
                  {/* ID */}
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                    <span>{builder.id}</span>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{builder.address}</span>
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex-1 text-center text-sm">VIEW MORE</button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded flex-1 text-center text-sm">ENQUIRE US</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildersList;