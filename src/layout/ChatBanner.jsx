import React, { useState } from "react";
import { useNavigate } from "react-router";

const ChatBanner = ({ coverImageUrl,name }) => {
  const [activeTab, setActiveTab] = useState("Chat");
  const navigate = useNavigate();

  const handlenavigate = (tab,path) => {
    setActiveTab(tab);
    navigate(path);
  }
  return (
    <div className="bg-gray-100 overflow-hidden shadow " style={{ borderRadius: "12px" }}>
      {/* Cover Section */}
      <div
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url('${coverImageUrl}')` }}
      >
        <button className="absolute top-2 right-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md">
          Edit Cover
        </button>
      </div>

      {/* Heading Section */}
      <div className="px-5 py-3 bg-white">
        <h2 className="text-xl font-semibold">Live Project - {name}</h2>
      </div>

      {/* Navigation Link */}
      <div className="relative bg-white">
      <ul className="flex justify-start gap-10 text-gray-600 w-full px-3">
        <li
          className={`cursor-pointer px-4 py-2 h-full ${activeTab === "Chat" ? "bg-[#E0E0E0]" : "hover:bg-[#E0E0E0] active:bg-[#E0E0E0]"}`}
          style={{ borderRadius: "10px 10px 0 0" }}
          onClick={() => handlenavigate("Chat", "/chat")}
        >
          Chat
        </li>
        <li
          className={`cursor-pointer px-4 py-2 h-full ${activeTab === "Payment" ? "bg-[#E0E0E0]" : "hover:bg-[#E0E0E0] active:bg-[#E0E0E0]"}`}
          style={{ borderRadius: "10px 10px 0 0" }}
          onClick={() => handlenavigate("Payment", "/payment")}
        >
          Payment
        </li>
      </ul>
      </div>
    </div>
  );
};

export default ChatBanner;
