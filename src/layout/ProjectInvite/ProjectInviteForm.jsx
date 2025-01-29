import React from "react";

const ProjectInviteForm = () => {
  return (
    <div className="flex items-center justify-center" style={{ borderRadius: "12px" }}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6" style={{ borderRadius: "12px" }}>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Customer Details
        </h2>
        <form>
          {/* Customer Name */}
          <div className="mb-4">
            <label
              htmlFor="customerName"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              placeholder="Enter Customer Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Customer ID */}
          <div className="mb-4">
            <label
              htmlFor="customerId"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Customer Ducktail's ID
            </label>
            <input
              type="text"
              id="customerId"
              placeholder="Enter Customer ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Project Starting Date */}
          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Project Starting Date
            </label>
            <input
              type="date"
              id="startDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Project Location */}
          <div className="mb-4">
            <label
              htmlFor="projectLocation"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Project Location
            </label>
            <input
              type="text"
              id="projectLocation"
              placeholder="Enter Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Send Invite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectInviteForm;
