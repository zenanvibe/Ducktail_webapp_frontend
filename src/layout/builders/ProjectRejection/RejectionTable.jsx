import React, { useState } from "react";

const RejectionTable = () => {
  const [rejectedProjects, setRejectedProjects] = useState([
    {
      name: "Theresa Webb",
      id: "Graphic Design",
      inviteDate: "Jan 5, 2025",
      project: "Website Redesign",
      location: "New York",
      status: "Rejected",
      statusColor: "red",
    },
    {
      name: "Albert Flores",
      id: "Frontend Development",
      inviteDate: "Dec 1, 2024",
      project: "App Development",
      location: "California",
      status: "Rejected",
      statusColor: "red",
    },
  ]);

  const statusClasses = {
    red: {
      bg: "bg-red-100",
      text: "text-red-700",
      dot: "bg-red-500",
    },
    gray: {
      bg: "bg-gray-100",
      text: "text-gray-700",
      dot: "bg-gray-500",
    },
  };

  const handleStatusChange = (project, newStatus) => {
    setRejectedProjects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === project.id ? { ...p, status: newStatus } : p
      )
    );
    console.log("Updated project status:", project.name, "to", newStatus);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Rejection Table</h2>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 w-1/3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left text-sm font-medium text-gray-500 border-b">
            <th className="py-2 px-4">Customer Name</th>
            <th className="py-2 px-4">Customer ID</th>
            <th className="py-2 px-4">Invite Date</th>
            <th className="py-2 px-4">Project</th>
            <th className="py-2 px-4">Location</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {rejectedProjects.map((project, index) => (
            <tr
              key={index}
              className="text-sm text-gray-700 border-b hover:bg-gray-50"
            >
              <td className="py-3 px-4">{project.name}</td>
              <td className="py-3 px-4">{project.id}</td>
              <td className="py-3 px-4">{project.inviteDate}</td>
              <td className="py-3 px-4">{project.project}</td>
              <td className="py-3 px-4">{project.location}</td>
              <td className="py-3 px-4">
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    statusClasses[project.statusColor]?.bg || "bg-gray-100"
                  } ${statusClasses[project.statusColor]?.text || "text-gray-700"}`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      statusClasses[project.statusColor]?.dot || "bg-gray-500"
                    } mr-2`}
                  ></span>
                  <select
                    value={project.status}
                    onChange={(e) => handleStatusChange(project, e.target.value)}
                    className="bg-transparent focus:outline-none"
                  >
                    <option value="Rejected">Rejected</option>
                    <option value="Revert">Revert</option>
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RejectionTable;
