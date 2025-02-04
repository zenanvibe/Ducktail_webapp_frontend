import React, { useState , useEffect } from 'react';

const HomeLoan = () => {
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
<div className="relative min-h-[80vh] w-full">
  {/* Background Image */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/assets/DUCKTAIL-HOMELOAN.aviF')",
      backgroundSize: 'cover', // Ensures the image covers the entire area
      backgroundPosition: 'center', // Centers the image
      width: '100%', // Ensures the image takes full width
      height: '100%', // Ensures the image takes full height
    }}
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
        {/* Combined Content Section with Show More */}
        <div className="relative z-10 px-6 py-8 bg-white mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Types of Home Loan</h2>
        <div className={`space-y-6 ${showMore ? '' : 'max-h-[60vh] overflow-hidden'}`}>
          {[
            { title: "Home Purchase Loan", items: ["For purchasing a new or resale residential property.", "Covers up to 75%-90% of the property value, depending on eligibility."] },
            { title: "Home Construction Loan", items: ["For constructing a house on your own land.", "Funds disbursed in stages based on construction progress."] },
            { title: "Land or Plot Loan", items: ["For buying a residential plot with intent to build a home.", "Shorter tenure and different interest rates compared to standard home loans."] },
            { title: "Home Improvement Loan", items: ["For renovation, repairs, and home upgrades.", "Covers work like tiling, plumbing, painting, and structural repairs."] },
            { title: "Home Extension Loan", items: ["For adding extra space or rooms in an existing home.", "Ideal for growing families needing more space."] },
            { title: "Balance Transfer Home Loan", items: ["For transferring an existing home loan to a lender with lower interest rates.", "Helps reduce the total interest paid over the tenure."] },
            { title: "NRI Home Loans", items: ["For NRIs looking to invest in property in India.", "Special eligibility criteria and documentation required."] },
            { title: "PMAY Subsidy-Linked Loans", items: ["Offered under Pradhan Mantri Awas Yojana (PMAY).", "Provides interest subsidies for first-time home buyers in specific income groups."] },
            { title: "Top-Up Home Loan", items: ["An additional loan on top of an existing home loan.", "Can be used for home renovation or personal expenses."] },
            { title: "Joint Home Loans", items: ["Taken jointly by two or more people, usually spouses or family members.", "Higher eligibility due to combined income."] }
          ].map((loan, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold">{index + 1}. {loan.title}</h3>
              <ul className="list-disc list-inside pl-3 text-sm">
                {loan.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Key Documents Section inside Show More */}
        {showMore && (
          <>
            <h2 className="text-2xl font-bold text-center mb-4 mt-8">Key Documents for Home Loan</h2>
            {[
              { title: "Identity & Address Proof", items: ["Aadhaar, PAN, Passport, Voter ID, or Driving License."] },
              { title: "Income Proof", items: ["Salaried: Last 3-6 months' salary slips, Form 16, and bank statements.", "Self-Employed: Last 3 years' ITR, audited financials, and business documents."] },
              { title: "Property Documents", items: ["Sale Agreement, Title Deed, EC, Approved Building Plan, and NOC."] },
              { title: "Additional Documents", items: ["Recent photos, loan statements, processing fee cheque.", "Co-applicant’s documents (if applicable)."] }
            ].map((doc, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{index + 1}. {doc.title}</h3>
                <ul className="list-disc list-inside pl-3 text-sm">
                  {doc.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Show Less button below Key Documents */}
            <div className="text-center mt-4">
              <button onClick={() => setShowMore(false)} className="text-orange-500 font-semibold">
                Show Less
              </button>
            </div>
          </>
        )}
        
        {/* Show More button for Types of Home Loan */}
        {!showMore && (
          <div className="text-center mt-4">
            <button onClick={() => setShowMore(true)} className="text-orange-500 font-semibold">
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeLoan;
