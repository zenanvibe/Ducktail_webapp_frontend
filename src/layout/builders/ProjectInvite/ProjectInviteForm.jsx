import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useProjectEnqStore from "../../../store/builders/useProjectEnqStore";

const ProjectInviteForm = () => {
  const { enquiries, sendProjectInvite, isLoading } = useProjectEnqStore();
  const [customerDucktailId, setCustomerDucktailId] = useState("");
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectLocation: "",
    projectBudget: "",
    startingDate: "",
    deadlineDate: "",
  });

  const handleChange = (e) => {
    setProjectData({ ...projectData, [e.target.id]: e.target.value });
  };

  const handleCustomerIdChange = (e) => {
    setCustomerDucktailId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerDucktailId) {
      toast.error("Please enter a Customer Ducktail ID.");
      return;
    }

    const enquiry = enquiries.find(
      (enq) => enq.customer_ducktail_id === customerDucktailId
    );

    if (!enquiry) {
      toast.error("Invalid Customer Ducktail ID.");
      return;
    }

    await sendProjectInvite(customerDucktailId, projectData);
    toast.success("Project invite sent successfully!");

    // Reset all fields after success
    setCustomerDucktailId("");
    setProjectData({
      projectName: "",
      projectLocation: "",
      projectBudget: "",
      startingDate: "",
      deadlineDate: "",
    });
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Project Invitation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Ducktail ID - Full Width */}
          <div>
            <label htmlFor="customerId" className="block text-sm font-medium text-gray-600 mb-1">
              Customer Ducktail's ID
            </label>
            <input
              type="text"
              id="customerId"
              value={customerDucktailId}
              onChange={handleCustomerIdChange}
              placeholder="Enter Customer ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Grid Layout for Other Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Name */}
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-600 mb-1">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                value={projectData.projectName}
                onChange={handleChange}
                placeholder="Project Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Project Location */}
            <div>
              <label htmlFor="projectLocation" className="block text-sm font-medium text-gray-600 mb-1">
                Project Location
              </label>
              <input
                type="text"
                id="projectLocation"
                value={projectData.projectLocation}
                onChange={handleChange}
                placeholder="Enter Location"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Project Budget */}
            <div>
              <label htmlFor="projectBudget" className="block text-sm font-medium text-gray-600 mb-1">
                Project Budget
              </label>
              <input
                type="text"
                id="projectBudget"
                value={projectData.projectBudget}
                onChange={handleChange}
                placeholder="Project Budget"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Project Starting Date */}
            <div>
              <label htmlFor="startingDate" className="block text-sm font-medium text-gray-600 mb-1">
                Project Starting Date
              </label>
              <input
                type="date"
                id="startingDate"
                value={projectData.startingDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Project Deadline Date */}
            <div>
              <label htmlFor="deadlineDate" className="block text-sm font-medium text-gray-600 mb-1">
                Deadline Date
              </label>
              <input
                type="date"
                id="deadlineDate"
                value={projectData.deadlineDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Invite"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectInviteForm;
