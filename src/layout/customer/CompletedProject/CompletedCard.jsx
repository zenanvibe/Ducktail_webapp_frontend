import React, { useState } from "react";
import { CalendarDays, MapPin, FileText } from "lucide-react";

const CompletedCard = () => {
  const [showDocuments, setShowDocuments] = useState(false);
  const [showRejection, setShowRejection] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto p-6">
      {/* Left Section - Project Details */}
      <div className="bg-white rounded-3xl p-6 relative max-w-md shadow-lg overflow-hidden flex-1">
        {/* Curved Edge Decoration */}
        <div className="absolute right-6 top-1/2 -translate-y-10 h-20 w-16 bg-[rgb(224_224_224)] -mr-6 rounded-l-full" />

        {/* Circular Navigation Button */}
        <button
          className="absolute right-5 top-1/2 -translate-y-1/2 -mr-4 h-12 w-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          onClick={() => setShowDocuments(true)}
        >
          <span className="text-lg font-bold text-gray-600">&gt;&gt;</span>
        </button>

        {/* Centered Title with Line */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">JK BUILDERS</h2>
          <div className="w-full h-px bg-black"></div>
        </div>

        {/* Project Status */}
        <div className="flex items-center gap-4 mb-4">
          <FileText className="w-6 h-6 text-gray-600" />
          <div>
            <div className="font-semibold">Project Status</div>
            <div className="text-gray-600">Completion_Request</div>
          </div>
        </div>

        {/* Project Starting Date */}
        <div className="flex items-center gap-4 mb-4">
          <CalendarDays className="w-6 h-6 text-gray-600" />
          <div>
            <div className="font-semibold">Project Starting Date</div>
            <div className="text-gray-600">05 Nov 2020</div>
          </div>
        </div>

        {/* Project Location */}
        <div className="flex items-center gap-4">
          <MapPin className="w-6 h-6 text-gray-600" />
          <div>
            <div className="font-semibold">Project Location</div>
            <div className="text-gray-600">Madurai</div>
          </div>
        </div>
      </div>

      {/* Right Section - Documents (Visible on Button Click) */}
      {showDocuments && (
        <div className="bg-white p-6 rounded-2xl shadow-lg flex-1">
          <h3 className="text-lg font-bold border-b pb-2">DOCUMENTS</h3>
          <div className="mt-2  w-full">
            {["Specification Report", "Warranty Documents", "Completion Certificate", "Site Image"].map((doc, index) => (
              <div
                key={index}
                className={`flex justify-between py-3 px-4 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <span className="w-1/12 font-medium">{["I", "II", "III", "IV"][index]}</span>
                <span className="w-1/2">{doc}</span>
                <a href="#" className="text-blue-500">
                  View
                </a>
                <a href="#" className="text-blue-500">
                  Download
                </a>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <button className="px-6 py-2 bg-green-500 text-white rounded">ACCEPT</button>
            <button
              className="px-6 py-2 bg-red-500 text-white rounded"
              onClick={() => setShowRejection(!showRejection)}
            >
              REJECT
            </button>
          </div>
          {showRejection && (
            <div className="mt-4">
              <h3 className="text-lg font-bold border-b pb-2">REASON FOR REJECTION</h3>
              <textarea
                className="w-full mt-2 p-3 border rounded bg-gray-100"
                placeholder="Tell Me Something About Rejection.."
                rows="4"
              ></textarea>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CompletedCard;
