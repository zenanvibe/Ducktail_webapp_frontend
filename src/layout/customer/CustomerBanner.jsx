import React, { useState } from "react";
import CustomerDetails from "./CustomerDetails/CustomerDetails";
import CustomerAddress from "./CustomerDetails/CustomerAddress";


const CustomerBanner = ({
  coverImageUrl,
  profileImageUrl,
  name,
  role,
  location,
  progress,
}) => {
  const [activeTab, setActiveTab] = useState("profile"); // State for active section

  return (
    <>
      <div className="bg-gray-100 overflow-hidden shadow rounded-2xl">
        {/* Cover Section */}
        <div
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url('${coverImageUrl}')` }}
        >
          <button className="absolute top-2 right-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md">
            Edit Cover
          </button>
        </div>

        {/* Profile Details Section */}
        <div className="relative px-9 py-3 bg-white">
          {/* Profile Image */}
          <div className="absolute -top-7 left-4">
            <img
              src={profileImageUrl}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* User Info */}
          <div className="ml-32 pt-0">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600 flex items-center space-x-2">
              <span>{role}</span>
              <span>•</span>
              <span>{location}</span>
            </p>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="h-2 bg-gray-200 rounded-full w-40">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{progress}%</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="relative bg-white">
          <ul className="flex justify-start gap-10 text-gray-600 w-full px-8">
            <li
              className={`cursor-pointer px-4 py-2 h-full ${
                activeTab === "profile" ? "bg-gray-300" : "hover:bg-[#E0E0E0]"
              }`}
              style={{ borderRadius: "10px 10px 0 0" }}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </li>
            <li
              className={`cursor-pointer px-4 py-2 h-full ${
                activeTab === "address" ? "bg-gray-300" : "hover:bg-[#E0E0E0]"
              }`}
              style={{ borderRadius: "10px 10px 0 0" }}
              onClick={() => setActiveTab("address")}
            >
              Address
            </li>
           
          </ul>
        </div>
      </div>

      {/* Dynamic Section - Placed Outside with Gap */}
      <div className="mt-6 p-6 bg-white shadow-md rounded-2xl">
        {activeTab === "profile" && <CustomerDetails />}
        {activeTab === "address" && <CustomerAddress />}
  
      </div>
    </>
  );
};

export default CustomerBanner;
