import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFindBuilderStore from "../store/useFindBuilderStore.js";

const BuildersInfo = () => {
  const { builder, fetchBuilderInfo, isLoading } = useFindBuilderStore();
  const { builderId } = useParams();

  useEffect(() => {
    if (builderId) fetchBuilderInfo(builderId); 
  }, [fetchBuilderInfo,builderId]);

  if (isLoading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (!builder) {
    return <div className="text-center p-8">No builder data available.</div>;
  }

  return (
    <div className="bg-[#E0E0E0] relative p-4">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-[#ffffff] shadow-lg relative">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mr-6 bg-white shadow-md">
                <img
                  src={builder.profile_image ? builder.profile_image : "assets/DUCKTAIL-HOMELOAN.aviF"}
                  alt="Builder Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">{builder.company_name}</h1>
                <p className="text-lg mb-4">{builder.ducktail_id}</p>
                <div className="text-base">
                  <p>{builder.address_line1}</p>
                  <p>{builder.address_line2}</p>
                  <p>{builder.district} - {builder.postcode}</p>
                </div>
                <p className="text-lg mt-2">{builder.contact_number}</p>
              </div>
            </div>
            <div className="w-32"></div>
          </div>

          <div className="border-t border-gray-300 mb-8"></div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">About The Company</h2>
            <p className="text-lg max-w-4xl mx-auto">
              {builder.engineer_name} is a skilled professional specializing in various construction services. Established in {builder.establishment_year} years.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {builder.services.map((service) => (
                <div key={service.id} className="px-4 py-2 bg-gray-200 rounded-lg">
                  {service.name}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Portfolio</h2>
            {builder.portfolios.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {builder.portfolios.map((portfolio, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <img src={portfolio.image} alt="Portfolio Item" className="w-full h-64 object-cover" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No portfolio items available.</p>
            )}
          </div>

          <div className="mb-12">
            <div className="border border-gray-300 rounded-lg p-8 max-w-xl mx-auto bg-white shadow-md">
              <h2 className="text-2xl font-medium text-center mb-8">Enquiry Us</h2>
              <form>
                <div className="space-y-6">
                  <input type="text" placeholder="Name" className="w-full border-b border-gray-300 pb-2 focus:outline-none" />
                  <input type="email" placeholder="Email" className="w-full border-b border-gray-300 pb-2 focus:outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full border-b border-gray-300 pb-2 focus:outline-none" />
                  <input type="text" placeholder="Postal Code" className="w-full border-b border-gray-300 pb-2 focus:outline-none" />
                  <div className="flex justify-center mt-8">
                    <button type="submit" className="bg-blue-600 text-white font-medium py-2 px-12 rounded">SUBMIT</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildersInfo;
