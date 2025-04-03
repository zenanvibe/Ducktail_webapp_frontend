import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFindBuilderStore from "../store/useFindBuilderStore.js";
import { ClipLoader } from "react-spinners";
import useAuthStore from "../store/useAuthStore.js";

const BuildersInfo = () => {
  const {
    builder,
    fetchBuilderInfo,
    isLoading,
    fetchMappedDistricts,
    fetchMappedTaluks,
    mappedDistricts,
    mappedTaluks,
    sendProjectInvite,
  } = useFindBuilderStore();
  const { builderId } = useParams();
  const { user } = useAuthStore();
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [taluk, setTaluk] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (builderId) fetchBuilderInfo(builderId);
    fetchMappedDistricts();
  }, [fetchBuilderInfo, builderId, fetchMappedDistricts]);

  useEffect(() => {
    if (selectedDistrict) fetchMappedTaluks(selectedDistrict);
  }, [selectedDistrict, fetchMappedTaluks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Submit button clicked", builder);

    if (!builder || !builder.builder_id) {
      console.log("There is no builderID");
      return;
    }

    setIsSubmitting(true);

    const inviteData = {
      builderId: builder.builder_id,
      projectName: "",
      projectBudget: "",
      startingDate: new Date().toISOString().split("T")[0],
      projectLocation: "",
      phoneNumber,
      service,
      district: selectedDistrict,
      taluk,
      postalCode,
    };

    // console.log("Calling sendProjectInvite with:", inviteData);
    try {
      await sendProjectInvite(inviteData);
      console.log("Project invite submitted successfully!");
    } catch (error) {
      console.error("Error submitting project invite:", error);
    } finally {
      setIsSubmitting(false); // Stop loading animation
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
      </div>
    );
  }

  if (!builder) {
    return <div className="text-center p-8">No builder data available.</div>;
  }

  console.log(builder);
  return (
    <div className=" relative p-4">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-[#ffffff] shadow-lg relative">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mr-6 bg-white shadow-md">
                <img
                  src={
                    builder.profile_image
                      ? builder.profile_image
                      : "assets/DUCKTAIL-HOMELOAN.aviF"
                  }
                  alt="Builder Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">
                  {builder.company_name}
                </h1>
                <p className="text-lg mb-4">{builder.ducktail_id}</p>
                <div className="text-base">
                  <p>{builder.address_line1}</p>
                  <p>{builder.address_line2}</p>
                  <p>
                    {builder.district} - {builder.postcode}
                  </p>
                </div>
                <p className="text-lg mt-2">{builder.contact_number}</p>
              </div>
            </div>
            <div className="w-32"></div>
          </div>

          <div className="border-t border-gray-300 mb-8"></div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">
              About The Company
            </h2>
            <p className="text-lg max-w-4xl mx-auto">
              {/* {builder.engineer_name} is a skilled professional specializing in
              various construction services. Established in{" "}
              {builder.establishment_year} years. */}
              {builder.about}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {builder.services.map((service) => (
                <div
                  key={service.id}
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                >
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
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <img
                      src={portfolio.image}
                      alt="Portfolio Item"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No portfolio items available.
              </p>
            )}
          </div>

          <div className="mb-12">
            <div className="border border-gray-300 rounded-lg p-8 max-w-xl mx-auto bg-white shadow-md">
              <h2 className="text-2xl font-medium text-center mb-8">
                Enquiry Us
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    defaultValue={user?.name || ""}
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none text-gray-600"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue={user?.email || ""}
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none text-gray-600"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none text-gray-600"
                  />
                  <select
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none bg-transparent text-gray-600"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-gray-400"
                    >
                      Service
                    </option>
                    {builder.services && builder.services.length > 0 ? (
                      builder.services.map((service) => (
                        <option
                          key={service.id}
                          value={service.id}
                          className="text-black"
                        >
                          {service.name}
                        </option>
                      ))
                    ) : (
                      <option disabled className="text-gray-400">
                        No services available
                      </option>
                    )}
                  </select>

                  <select
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none bg-transparent text-gray-600"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Select District
                    </option>
                    {Array.isArray(mappedDistricts.districts) &&
                      mappedDistricts.districts.map((district) => (
                        <option
                          key={district}
                          value={district}
                          className="text-black"
                        >
                          {district}
                        </option>
                      ))}
                  </select>

                  <select
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none bg-transparent text-gray-600"
                    value={taluk}
                    onChange={(e) => setTaluk(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Select Taluk
                    </option>
                    {Array.isArray(mappedTaluks.taluks) &&
                      mappedTaluks.taluks.map((taluk) => (
                        <option
                          key={taluk}
                          value={taluk}
                          className="text-black"
                        >
                          {taluk}
                        </option>
                      ))}
                  </select>

                  <input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none text-gray-600"
                  />

                  <input
                    type="text"
                    placeholder="Project Location"
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none text-gray-600"
                  />

                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className={`bg-blue-600 text-white font-medium py-2 px-12 rounded flex items-center justify-center ${
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-blue-700"
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                          </svg>
                          Processing...
                        </div>
                      ) : (
                        "SUBMIT"
                      )}
                    </button>
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
