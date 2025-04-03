import React, { useEffect, useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import useProjectEnqStore from "../../../store/builders/useProjectEnqStore";

const ProjectEnquiryTile = () => {
  const { enquiries, isLoading, fetchEnquiries } = useProjectEnqStore();
  const [filter, setFilter] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000); // Reset after 2 seconds
  };

  useEffect(() => {
    const status = filter === "All" ? null : filter === "Action taken" ? "action_taken" : "action_not_taken";
    fetchEnquiries(status);
  }, [filter, fetchEnquiries]);

  const groupedEnquiries = enquiries.reduce((acc, enquiry) => {
    const dateKey = new Date(enquiry.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(enquiry);
    return acc;
  }, {});

  return (
    <div className="py-2 min-h-screen">
      <div className="bg-white rounded-2xl shadow-md p-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-4">
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === "Action taken" ? "bg-green-500 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setFilter("Action taken")}
            >
              Action taken
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === "Action not taken" ? "bg-red-500 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setFilter("Action not taken")}
            >
              Action not taken
            </button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-full w-full md:w-64 bg-gray-100"
          />
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Time</th>
                <th className="p-2">Customer Name</th>
                <th className="p-2">Customer ID</th>
                <th className="p-2">Phone Number</th>
                <th className="p-2">District</th>
                <th className="p-2">Taluk</th>
                <th className="p-2">Comments</th>
                <th className="p-2">Postcode</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">Loading...</td>
                </tr>
              ) : enquiries.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">No enquiries found</td>
                </tr>
              ) : (
               Object.entries(groupedEnquiries).map(([date, entries], index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td colSpan="7" className="px-2 py-4 text-gray-500 font-semibold">
                        {date}
                      </td>
                    </tr>
                    {entries.map((entry, idx) => (
                      <tr key={idx} className="border-t relative">
                        <td className="p-2">
                          {new Date(entry.created_at).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </td>
                        <td className="p-2">{entry.customer_name}</td>
                        <td className="p-2">
                          <div className="flex items-center gap-2 relative">
                            {entry.customer_ducktail_id}
                            <ClipboardIcon
                              className="w-4 h-4 text-gray-500 cursor-pointer hover:text-black transition-colors duration-200"
                              onClick={() => handleCopy(entry.customer_ducktail_id)}
                            />
                            {copiedId === entry.customer_ducktail_id && (
                              <div 
                                className="absolute left-0 -bottom-8 animate-fade-up"
                                style={{
                                  animation: "fadeUpAndOut 2s ease-out forwards"
                                }}
                              >
                                <div className="bg-green-600 text-white text-xs px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
                                  <svg 
                                    className="w-3 h-3" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={2} 
                                      d="M5 13l4 4L19 7" 
                                    />
                                  </svg>
                                  Copied!
                                </div>
                              </div>
                            )}
                          </div>
                          <style jsx>{`
                            @keyframes fadeUpAndOut {
                              0% {
                                opacity: 0;
                                transform: translateY(10px);
                              }
                              20% {
                                opacity: 1;
                                transform: translateY(0);
                              }
                              80% {
                                opacity: 1;
                                transform: translateY(0);
                              }
                              100% {
                                opacity: 0;
                                transform: translateY(-10px);
                              }
                            }
                          `}</style>
                        </td>
                        <td className="p-2">{entry.phone_number}</td>
                        <td className="p-2 ">{entry.district}</td>
                        <td className="p-2">{entry.taluk}</td>
                        <td className="p-2">{entry.comments}</td>
                        <td className="p-2">{entry.postcode}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectEnquiryTile;
