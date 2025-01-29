import React from "react";

const LiveTable = () => {
  const projects = [
    {
      name: "Jane Cooper",
      id: "Web & Mobile Design",
      started: "Nov 18, 2024",
      location: "Chennai",
      status: "Active",
      statusColor: "green",
    },
    {
      name: "Albert Flores",
      id: "Graphics Design",
      started: "Dec 18, 2024",
      location: "Chennai",
      status: "Checking",
      statusColor: "orange",
    },
    {
      name: "Leslie Alexander",
      id: "Figma",
      started: "Feb 18, 2024",
      location: "Chennai",
      status: "Mark as Completed",
      statusColor: "blue",
    },
  ];

  // Mapping for Tailwind classes
  const statusClasses = {
    green: {
      bg: "bg-green-100",
      text: "text-green-700",
      dot: "bg-green-500",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-700",
      dot: "bg-orange-500",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      dot: "bg-blue-500",
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Projects Live</h2>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 w-1/3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table Section */}
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
          {projects.map((project, index) => (
            <tr
              key={index}
              className="text-sm text-gray-700 border-b hover:bg-gray-50"
            >
              <td className="py-3 px-4">{project.name}</td>
              <td className="py-3 px-4">{project.id}</td>
              <td className="py-3 px-4">{project.started}</td>
              <td className="py-3 px-4">{project.location}</td>
              <td className="py-3 px-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    statusClasses[project.statusColor].bg
                  } ${statusClasses[project.statusColor].text}`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      statusClasses[project.statusColor].dot
                    } mr-2`}
                  ></span>
                  {project.status}
                </span>
              </td>
              <td className="py-3 px-4 flex space-x-2">
                <button className="text-blue-500 hover:text-blue-700">
                  💬
                </button>
                <button className="text-blue-500 hover:text-blue-700">
                  📁
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LiveTable;
