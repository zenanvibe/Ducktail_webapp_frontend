import React from "react";

const ProjectHoldCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 rounded-2xl shadow-lg bg-white flex flex-row gap-4 sm:max-w-full overflow-x-auto justify-start items-center">
      {[1, 2].map((item) => (
        <div key={item} className="p-4 border rounded-lg bg-gray-50 w-80 flex-shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/50"
              alt="Company Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-bold">JK BUILDERS</h2>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                <span>📶</span> Madurai
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                <span>📞</span> 7894561230
              </p>
            </div>
          </div>

          <textarea
            className="w-full p-2 border rounded-md resize-none text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell Me Something About Rejection.."
            rows="2"
          ></textarea>

          <div className="flex justify-between items-center mt-2">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-gray-700 shadow-sm hover:bg-gray-100">
              💬 Chat Us
            </button>
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-gray-700 shadow-sm hover:bg-gray-100">
              💰 Payment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectHoldCard;
