import React, { useState , useEffect } from 'react';

const PremiumConstruction = () => {
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-[80vh] w-full">
      {/* Background Image */}
      <div 
  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/assets/Ducktail-Banner.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50"></div>
</div>




      {/* Main Content */}
      <div className="relative z-10 flex min-h-[66vh] items-center px-6 py-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Title Section */}
          <div className="text-white flex-1 px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="text-yellow-400">HOME </span>
              CONSTRUCTION
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-xl">
              For those seeking luxury, DUCKTAIL offers premium construction services. We use premium
              materials and skilled craftsmanship to deliver beautiful, durable results.Let us build your
dream space with the highest standards in mind.
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

      {/* Content Section */}
      <div className="relative z-10 px-6 py-8 bg-white mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Our Premium Construction Services</h2>
        <div className={`space-y-6 ${showMore ? '' : 'max-h-[60vh] overflow-hidden'}`}> 
          {[
            { title: "Luxury Residential Construction", items: ["Custom Homes: High-end finishes and smart home systems.", "Luxury Apartments: Top-tier amenities and prime locations.", "Estate Homes: Opulent residences with premium features."] },
            { title: "Commercial Premium Construction", items: ["Luxury Hotels: Five-star accommodations and premium designs.", "Corporate HQs: Modern offices with high-end finishes.", "Retail Stores: Exclusive commercial spaces for premium brands."] },
            { title: "Premium Green Construction", items: ["Eco-Luxury Homes: Sustainable materials and energy efficiency.", "LEED Buildings: Green-certified commercial projects."] },
            { title: "Heritage and Restoration Projects", items: ["Historical Building Restorations: Preserving and restoring historic buildings with modern materials while maintaining the original aesthetic.", "Architectural Renovations: High-end refurbishments incorporating luxury and historical elements."] },
            { title: "High-Tech Construction", items: ["Smart Homes: AI-controlled lighting, security, climate control, and entertainment for enhanced convenience.", "Technology-Integrated Offices: Workspaces with advanced technology like interactive whiteboards and IT infrastructure."] },
            { title: "Premium Commercial and Industrial Buildings", items: ["Data Centres: Secure, climate-controlled facilities for data storage and processing.", "Premium Warehousing: Advanced inventory management, automation, and energy-efficient distribution centres."] }
          ].map((service, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold">{index + 1}. {service.title}</h3>
              <ul className="list-disc list-inside pl-3 text-sm">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button onClick={() => setShowMore(!showMore)} className="text-orange-500 font-semibold">
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumConstruction;
