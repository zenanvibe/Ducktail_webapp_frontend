import React, { useState } from "react";

const notifications = [
  { title: "Customer Query", message: "You Have Received A New Customer Query", time: "1 month ago" },
  { title: "Customer Query", message: "You Have Received A New Customer Query", time: "1 month ago" },
  { title: "Home Loan", message: "You Have Received A New Customer Query", time: "1 month ago" },
  { title: "Home Loan", message: "You Have Received A New Customer Query", time: "1 month ago" },
  { title: "Customer Query", message: "You Have Received A New Customer Query", time: "1 month ago" },
  { title: "Customer Query", message: "You Have Received A New Customer Query", time: "1 month ago" },
  { title: "Home Loan", message: "You Have Received A New Customer Query", time: "1 month ago" },
  { title: "Home Loan", message: "You Have Received A New Customer Query", time: "1 month ago" },
];

const NotificationTile = () => {
  const [activeTab, setActiveTab] = useState("Read");

  return (
    <div className="p-4 bg-gray-100  shadow-md max-w-full mx-auto" style={{borderRadius: '12px'}}>
      <div className="flex space-x-2 mb-4">
        <button
          className={`px-4 py-2 rounded-md ${activeTab === "Read" ? "bg-black text-white" : "bg-gray-300"}`}
          onClick={() => setActiveTab("Read")}
        >
          Read
        </button>
        <button
          className={`px-4 py-2 rounded-md ${activeTab === "Unread" ? "bg-black text-white" : "bg-gray-300"}`}
          onClick={() => setActiveTab("Unread")}
        >
          Unread
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        {notifications.map((notification, index) => (
          <div key={index} className="p-4 border-b last:border-none flex justify-between">
            <div>
              <p className="font-semibold">{notification.title}</p>
              <p className="text-gray-500 text-sm">{notification.message}</p>
            </div>
            <span className="text-gray-400 text-sm">{notification.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationTile;
