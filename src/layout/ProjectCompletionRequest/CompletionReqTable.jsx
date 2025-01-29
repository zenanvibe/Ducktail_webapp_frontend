import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

const CompletionRequestTable = () => {
  const [completionRequests, setCompletionRequests] = useState([
    {
      name: "Theresa Webb",
      id: "Graphic Design",
      started: "Jan 5, 2025",
      deadline: "Feb 20, 2025",
      location: "New York",
      status: "Active",
      statusColor: "green",
    },
    {
      name: "Albert Flores",
      id: "Frontend Development",
      started: "Dec 1, 2024",
      deadline: "Jan 15, 2025",
      location: "California",
      status: "Active",
      statusColor: "green",
    },
  ]);

  const navigate = useNavigate(); // Hook for navigation

  const statusClasses = {
    green: {
      bg: "bg-green-100",
      text: "text-green-700",
      dot: "bg-green-500",
    },
    gray: {
      bg: "bg-gray-100",
      text: "text-gray-700",
      dot: "bg-gray-500",
    },
  };

  const handleRowClick = (requestId) => {
    // Navigate to document upload page, passing the requestId
    navigate(`/upload-doc/${requestId}`);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Completion Requests</h2>
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
            <th className="py-2 px-4">Started</th>
            <th className="py-2 px-4">Deadline</th>
            <th className="py-2 px-4">Location</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {completionRequests.map((request, index) => (
            <tr
              key={index}
              className="text-sm text-gray-700 border-b hover:bg-gray-50 cursor-pointer"
              onClick={() => handleRowClick(request.id)}
            >
              <td className="py-3 px-4">{request.name}</td>
              <td className="py-3 px-4">{request.id}</td>
              <td className="py-3 px-4">{request.started}</td>
              <td className="py-3 px-4">{request.deadline}</td>
              <td className="py-3 px-4">{request.location}</td>
              <td className="py-3 px-4">
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    statusClasses[request.statusColor]?.bg || "bg-gray-100"
                  } ${statusClasses[request.statusColor]?.text || "text-gray-700"}`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      statusClasses[request.statusColor]?.dot || "bg-gray-500"
                    } mr-2`}
                  ></span>
                  <select
                    value={request.status}
                    onChange={(e) =>
                      setCompletionRequests((prevRequests) =>
                        prevRequests.map((r) =>
                          r.id === request.id
                            ? { ...r, status: e.target.value }
                            : r
                        )
                      )
                    }
                    className="bg-transparent focus:outline-none"
                  >
                    <option value="Active">Active</option>
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

export default CompletionRequestTable;
