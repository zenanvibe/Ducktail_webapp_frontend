import React, { useState } from "react";

const data = [
  {
    date: "19 Jan 2025",
    entries: [
      {
        time: "5:27 pm",
        name: "Jane Cooper",
        phone: "6382942623",
        district: "Madurai",
        taluk: "Thavanal",
        comments: "Renovation & Remodeling Tasks",
        postcode: "629332",
      },
      {
        time: "6:33 pm",
        name: "Albert Flores",
        phone: "7382938742",
        district: "Chennai",
        taluk: "Koyembedu",
        comments: "Renovation & Remodeling Tasks",
        postcode: "627003",
      },
    ],
  },
  {
    date: "7 Jan 2025",
    entries: [
      {
        time: "9:12 am",
        name: "Leslie Alexander",
        phone: "89938172039",
        district: "Tirchy",
        taluk: "Airport",
        comments: "Renovation & Remodeling Tasks",
        postcode: "763002",
      },
      {
        time: "8:32 am",
        name: "Guy Hawkins",
        phone: "63729371629",
        district: "Dindugal",
        taluk: "Gandhimar",
        comments: "Renovation & Remodeling Tasks",
        postcode: "637448",
      },
    ],
  },
];

const ProjectEnquiryTile = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className="py-2 min-h-screen">
      <div className="bg-white rounded-2xl shadow-md p-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-4">
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-full transition-colors ${filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${filter === "Action taken" ? "bg-green-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              onClick={() => setFilter("Action taken")}
            >
              Action taken
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${filter === "Action not taken" ? "bg-red-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
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
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Time</th>
                <th className="p-2">Customer Name</th>
                <th className="p-2">Phone Number</th>
                <th className="p-2">District</th>
                <th className="p-2">Taluk</th>
                <th className="p-2">Comments</th>
                <th className="p-2">Postcode</th>
              </tr>
            </thead>
            <tbody>
              {data.map((group, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td colSpan="7" className="px-2 py-4  text-gray-500  font-semibold">
                      {group.date}
                    </td>
                  </tr>
                  {group.entries.map((entry, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2">{entry.time}</td>
                      <td className="p-2">{entry.name}</td>
                      <td className="p-2">{entry.phone}</td>
                      <td className="p-2 font-semibold">{entry.district}</td>
                      <td className="p-2">{entry.taluk}</td>
                      <td className="p-2">{entry.comments}</td>
                      <td className="p-2">{entry.postcode}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectEnquiryTile;
