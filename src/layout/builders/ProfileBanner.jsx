import React, { useState, useEffect } from "react";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import AddressDetails from "./ProfileDetails/AddressDetails";
import SocialMedia from "./ProfileDetails/SocialMedia";
import Documentation from "./ProfileDetails/Documentation";
import useProfileStore from "../../store/builders/useProfileStore"; 

const ProfileBanner = ({ coverImageUrl, name, role, location, progress }) => {
  const [activeTab, setActiveTab] = useState("profile");
  const { profile, fetchProfile, isLoading } = useProfileStore();

  useEffect(() => {
    fetchProfile(); // ✅ Fetch profile data on mount
  }, [fetchProfile]);

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
            {isLoading ? (
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex items-center justify-center bg-gray-200">
                <div className="w-10 h-10 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <img
                src={profile?.profile_image} // ✅ Use fetched profile image
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
            )}
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
            <li
              className={`cursor-pointer px-4 py-2 h-full ${
                activeTab === "documentation" ? "bg-gray-300" : "hover:bg-[#E0E0E0]"
              }`}
              style={{ borderRadius: "10px 10px 0 0" }}
              onClick={() => setActiveTab("documentation")}
            >
              Documentation
            </li>
            <li
              className={`cursor-pointer px-4 py-2 h-full ${
                activeTab === "social" ? "bg-gray-300" : "hover:bg-[#E0E0E0]"
              }`}
              style={{ borderRadius: "10px 10px 0 0" }}
              onClick={() => setActiveTab("social")}
            >
              Social Media
            </li>
          </ul>
        </div>
      </div>

      {/* Dynamic Section - Placed Outside with Gap */}
      <div className="mt-6 p-6 bg-white shadow-md rounded-2xl">
        {activeTab === "profile" && <ProfileDetails />}
        {activeTab === "address" && <AddressDetails />}
        {activeTab === "documentation" && <Documentation />}
        {activeTab === "social" && <SocialMedia />}
      </div>
    </>
  );
};

export default ProfileBanner;
