// ProjectTable.js (Common Component for Project Tables)
import React, { useState } from "react";
import StatusBadge from "./status/StatusBadge";

const ProjectTable = ({ title, projects = [], handleStatusChange, navigate }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHoldProject, setSelectedHoldProject] = useState(null);

  // Helper function to highlight matched text
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const parts = text.toString().split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === searchTerm.toLowerCase() ? 
        <span key={index} className="bg-yellow-200 font-medium">{part}</span> : part
    );
  };

  // Filter projects based on search query across all columns
  const filteredProjects = Array.isArray(projects) ? projects.filter((project) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      project.customer_name?.toLowerCase().includes(searchTerm) ||
      project.customer_ducktail_id?.toLowerCase().includes(searchTerm) ||
      project.project_location?.toLowerCase().includes(searchTerm) ||
      new Date(project.starting_date)
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "short", 
          day: "numeric"
        })
        .toLowerCase()
        .includes(searchTerm) ||
      project.status?.toLowerCase().includes(searchTerm) ||
      'upload_document'.includes(searchTerm) // Add this to make upload_document searchable
    );
  }) : [];

  return (
    <div className="bg-white shadow rounded-lg p-6 relative">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <input
          type="text"
          placeholder="Search by name, ID, location, date or status..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-lg px-4 py-2 w-1/3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table Section */}
      {filteredProjects.length > 0 ? (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500 border-b">
              <th className="py-2 px-4">Customer Name</th>
              <th className="py-2 px-4">Customer ID</th>
              <th className="py-2 px-4">Started</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr
                key={project.id}
                className="text-sm text-gray-700 border-b hover:bg-gray-50"
              >
                <td className="py-3 px-4">
                  {highlightText(project.customer_name, searchQuery)}
                </td>
                <td className="py-3 px-4">
                  {highlightText(project.customer_ducktail_id, searchQuery)}
                </td>
                <td className="py-3 px-4">
                  {highlightText(
                    new Date(project.starting_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }),
                    searchQuery
                  )}
                </td>
                <td className="py-3 px-4">
                  {highlightText(project.project_location, searchQuery)}
                </td>
                <td className="py-3 px-4">
                  <StatusBadge project={project} handleStatusChange={handleStatusChange} />
                </td>
                <td className="py-3 px-4 flex space-x-2">
                  <button
                    onClick={() => navigate("/builder/chat")}
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                  >
                    💬
                  </button>
                  <button
                    onClick={() => navigate("/builder/payment")}
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                  >
                    📁
                  </button>
                  {project.status === 'hold' && project.holds && project.holds.length > 0 && (
                    <button
                      onClick={() => setSelectedHoldProject(project)}
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                    >
                      📝
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No projects found
        </div>
      )}

      {/* Centered Modal for Hold Comments */}
      {selectedHoldProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[500px] max-h-[80vh] relative">
            <button
              onClick={() => setSelectedHoldProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">Hold Comments History</h3>
            <div className="overflow-y-auto max-h-[60vh]">
              {selectedHoldProject.holds.map((hold, index) => (
                <div key={index} className="border-b border-gray-200 py-3">
                  <p className="text-gray-700">{hold.comment}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(hold.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTable;
