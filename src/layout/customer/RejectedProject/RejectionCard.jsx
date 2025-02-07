import React from "react";
import { Mail, Phone, BadgeX } from "lucide-react";

const RejectionCard = () => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg text-center md:max-w-md">
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="w-12 h-12 rounded-md object-cover"
        />
      </div>
      <h2 className="mt-2 text-lg font-semibold">THE MADE MODEL</h2>
      <div className="mt-4 text-sm text-gray-700 grid grid-cols-2 gap-4 text-left">
        <div>
          <div className="flex items-center gap-2">
            <BadgeX size={16} />
            <span>Company Ducktail Id</span>
          </div>
          <div className="pl-6">
            <span className="text-gray-500 block">12455248</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>Email</span>
          </div>
          <div className="pl-6">
            <span className="text-blue-500 block">Karthick@Gmail.Com</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>Phone Number</span>
          </div>
          <div className="pl-6">
            <span className="text-gray-500 block">9662220001</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <BadgeX size={16} />
            <span>Status</span>
          </div>
          <div className="pl-6">
            <span className="text-red-500 font-semibold block">Rejected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectionCard;
