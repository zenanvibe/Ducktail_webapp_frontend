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
              <span className="text-yellow-400">PREMIUM </span>
              CONSTRUCTION
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-xl">
            With Ducktail's premium construction services, we craft residential, commercial, and sustainable spaces that blend expert craftsmanship with innovative design to bring your vision to life.

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

      {/* Types of Home Loan Section */}
      <div className="relative z-10 px-6 py-8 bg-white mt-6">
        <div className={`space-y-8 ${showMore ? '' : 'max-h-[60vh] overflow-hidden'}`}>
          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>1. Luxury Residential Construction</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>Custom Homes: Tailored to your exact specifications, our custom homes are designed with high-end finishes and premium materials, featuring advanced technology like smart home systems that elevate convenience and comfort.


</li>
              <li style={{ fontSize: "16px" }}>High-End Apartments and Condominiums: We create luxurious apartments and condos with top-tier amenities, including fitness centers, swimming pools, panoramic views, and prime location advantages.
</li>
              <li style={{ fontSize: "16px" }}>Estate Homes: For those seeking ultimate luxury, we build expansive estate homes on large plots of land, complete with private pools, home theaters, gardens, and other opulent features that cater to your every need.
</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>2. Commercial Premium Construction</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>Luxury Hotels and Resorts: We design five-star hotels and resorts that offer world-class services, including spas, gourmet restaurants, and luxury suites, all crafted with the finest materials and attention to detail.
</li>
              <li style={{ fontSize: "16px" }}>Corporate Headquarters: Our premium office buildings are designed to foster productivity and comfort, featuring high-end finishes, modern technology, and energy-efficient systems for a sustainable, state-of-the-art work environment.

</li>
              <li style={{ fontSize: "16px" }}> Retail Flagship Stores: For high-end brands, we create premium commercial spaces with exclusive architectural features and custom-designed interiors that reflect the brand's identity and cater to a luxury clientele.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>3. Premium Green or Sustainable Construction</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>Eco-Luxury Homes: Ducktail embraces eco-friendly construction by building homes with sustainable materials and energy-efficient designs. Our homes include features such as solar panels, rainwater harvesting systems, and advanced insulation to minimize environmental impact while offering the luxury of modern living.


</li>
              <li style={{ fontSize: "16px" }}>LEED-Certified Buildings: We create green commercial buildings that meet LEED certification standards, utilizing energy-efficient construction methods and sustainable practices to deliver high-performance, environmentally friendly spaces.</li>
             
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>4. Heritage and Restoration Projects</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>Historical Building Restorations: We specialize in preserving and restoring historic buildings, combining modern materials and techniques to maintain the aesthetic and architectural integrity of the original structure while bringing it up to contemporary standards.
</li>
              <li style={{ fontSize: "16px" }}>Architectural Renovations: Our team refurbishes classic buildings, blending historical elements with luxurious, modern upgrades, ensuring that the timeless beauty of the structure is preserved while providing enhanced functionality. </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>5. High-Tech Construction</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>Smart Homes: Ducktail designs homes equipped with the latest in automation technology, including AI-controlled lighting, security systems, climate control, and entertainment systems, offering the ultimate in convenience and modern living. 
</li>
              <li style={{ fontSize: "16px" }}>Technology-Integrated Offices: We create workspaces that embrace the future with advanced technology, such as interactive whiteboards, automated lighting systems, and IT infrastructure to optimize productivity and business operations.

</li>
 
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>6. Premium Commercial and Industrial Buildings</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li style={{ fontSize: "16px" }}>Data Centres: Our data centers are state-of-the-art facilities designed to meet the demands of modern data storage and processing, incorporating high-end security systems, climate control, and reliable power backup to ensure optimal performance.
 
</li>
              <li style={{ fontSize: "16px" }}>Premium Warehousing: We offer high-end commercial and industrial spaces, including advanced systems for inventory management, automation, and energy-efficient features to streamline operations and ensure sustainability in warehousing.

</li>
             
            </ul>
          </div>

        </div>

        {/* Key Documents Section inside Show More */}
        {showMore && (
          <>
            {/* <h2 className="text-3xl font-bold text-center mb-6 mt-8" style={{ fontSize: "32px" }}>Key Documents for Home Loan</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>1. Identity & Address Proof</h3>
                <h4 className="text-lg font-medium ml-4 mb-2" style={{ fontSize: "18px" }}>Applicants must provide valid identity and address proof, which can include:</h4>
<ul className="list-disc pl-8 space-y-2">
                  <li style={{ fontSize: "16px" }}>Aadhaar Card</li>
                  <li style={{ fontSize: "16px" }}>PAN Card</li>
                  <li style={{ fontSize: "16px" }}>Passport</li>
                  <li style={{ fontSize: "16px" }}>Voter ID</li>
                  <li style={{ fontSize: "16px" }}>Driving License</li>
                  <li style={{ fontSize: "16px" }}>These establish personal details and residential address</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>2. Income Proof</h3>
                <h4 className="text-lg font-medium ml-4 mb-2" style={{ fontSize: "18px" }}>For Salaried Individuals:</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li style={{ fontSize: "16px" }}>Last 3 to 6 months' salary slips</li>
                  <li style={{ fontSize: "16px" }}>Latest Form 16 or Income Tax Return (ITR)</li>
                  <li style={{ fontSize: "16px" }}>Bank statements (last 6 months) showing salary credits</li>
                </ul>
                
                <h4 className="text-lg font-medium ml-4 mb-2 mt-4" style={{ fontSize: "18px" }}>For Self-Employed Individuals & Business Owners:</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li style={{ fontSize: "16px" }}>Last 3 years' Income Tax Returns (ITR)</li>
                  <li style={{ fontSize: "16px" }}>Audited financial statements (Profit & Loss, Balance Sheet)</li>
                  <li style={{ fontSize: "16px" }}>Business registration documents (GST certificate, Trade License, etc.)</li>
                  <li style={{ fontSize: "16px" }}>Bank statements (last 12 months)</li>
                </ul>
              </div>

              <div>
               
                <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>3. Property Documents</h3>
                <h4 className="text-lg font-medium ml-4 mb-2" style={{ fontSize: "18px" }}>To verify legal ownership and ensure that the property is free from disputes, the following property-related documents are required:</h4>
                <ul className="list-disc pl-8 space-y-2">
                  <li style={{ fontSize: "16px" }}>Sale Agreement (Proof of property purchase)</li>
                  <li style={{ fontSize: "16px" }}>Title Deed (Legal ownership document)</li>
                  <li style={{ fontSize: "16px" }}>Encumbrance Certificate (EC) (Ensures no pending legal dues)</li>
                  <li style={{ fontSize: "16px" }}>Approved Building Plan (Issued by the municipal authority)</li>
                  <li style={{ fontSize: "16px" }}>No Objection Certificate (NOC) from relevant authorities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontSize: "24px", color: "#2563EB" }}>4. Additional Documents</h3>
                <h4 className="text-lg font-medium ml-4 mb-2" style={{ fontSize: "18px" }}>Banks may also ask for:</h4>
 <ul className="list-disc pl-8 space-y-2">
                  <li style={{ fontSize: "16px" }}>Recent passport-size photographs</li>
                  <li style={{ fontSize: "16px" }}>Existing loan/credit card statements (if any)</li>
                  <li style={{ fontSize: "16px" }}>Processing fee cheque for loan application</li>
                  <li style={{ fontSize: "16px" }}>Co-applicants documents (if applying for a joint loan)</li>
                </ul>
              </div>
            </div> */}

            {/* Show Less button below Key Documents */}
            <div className="text-center mt-6">
              <button 
                onClick={() => setShowMore(false)} 
                className="text-orange-500 font-semibold" 
                style={{ fontSize: "18px" }}
              >
                Show Less
              </button>
            </div>
          </>
        )}

        {/* Show More button for Types of Home Loan */}
        {!showMore && (
          <div className="text-center mt-6">
            <button 
              onClick={() => setShowMore(true)} 
              className="text-orange-500 font-semibold" 
              style={{ fontSize: "18px" }}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumConstruction;
