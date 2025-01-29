import React, { useState } from "react";

const PendingTable = () => {
  const [pendingProjects, setPendingProjects] = useState([
    {
      name: "Annette Black",
      id: "UI/UX Design",
      inviteDate: "Jan 15, 2025",
      deadline: "Mar 10, 2025",
      location: "Mumbai",
      status: "Pending Approval",
      statusColor: "orange",
    },
    {
      name: "Cody Fisher",
      id: "Backend Development",
      inviteDate: "Feb 10, 2025",
      deadline: "Apr 5, 2025",
      location: "Delhi",
      status: "Pending Review",
      statusColor: "blue",
    },
  ]);

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
    gray: {
      bg: "bg-gray-100",
      text: "text-gray-700",
      dot: "bg-gray-500",
    },
  };

  const handleStatusChange = (project, newStatus) => {
    setPendingProjects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === project.id ? { ...p, status: newStatus } : p
      )
    );
    console.log("Updated project status:", project.name, "to", newStatus);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Pending Projects</h2>
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
            <th className="py-2 px-4">Project Invite Date</th>
            <th className="py-2 px-4">Deadline</th>
            <th className="py-2 px-4">Location</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {pendingProjects.map((project, index) => (
            <tr
              key={index}
              className="text-sm text-gray-700 border-b hover:bg-gray-50"
            >
              <td className="py-3 px-4">{project.name}</td>
              <td className="py-3 px-4">{project.id}</td>
              <td className="py-3 px-4">{project.inviteDate}</td>
              <td className="py-3 px-4">{project.deadline}</td>
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
                    <option value="Pending Approval">Pending Approval</option>
                    <option value="Pending Review">Pending Review</option>
                    <option value="Approved">Approved</option>
                    <option value="Hold">Hold</option>
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

export default PendingTable;