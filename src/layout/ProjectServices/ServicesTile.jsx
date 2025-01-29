import React, { useState } from "react";

const ServicesTile = () => {
  const [services, setServices] = useState([
    "Renovation & Remodeling Tasks",
    "Maintenance & Repairing Tasks",
    "Architecture Drawing & Plans",
    "Surveying & Land Assessment",
    "Property Estimation",
    "Structural Drawing",
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [newServiceName, setNewServiceName] = useState("");
  const [allServices, setAllServices] = useState([
    "Services 1",
    "Services 2",
    "Services 3",
    "Services 4",
    "Services 5",
  ]);

  // Add service to table
  const addServiceToTable = () => {
    if (selectedService) {
      setServices((prev) => [...prev, selectedService]);
      setSelectedService("");
      setIsPopupOpen(false); // Close the popup
    }
  };

  // Create new service
  const createNewService = () => {
    if (newServiceName.trim()) {
      setAllServices((prev) => [...prev, newServiceName.trim()]);
      setNewServiceName("");
      setIsCreatePopupOpen(false); // Close the create popup
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-3">
      {/* Action Buttons */}
      <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 items-center justify-start">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => setIsPopupOpen(true)}
            >
              Add Services
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => setIsCreatePopupOpen(true)}
            >
              Create Services
            </button>
          </div>
          <div className="relative flex-grow flex justify-end">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Services Table */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">
                Services
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="px-6 py-3 text-sm text-gray-700">{service}</td>
                <td className="px-6 py-3">
                  <button
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
                    onClick={() =>
                      setServices((prev) =>
                        prev.filter((_, i) => i !== index)
                      )
                    }
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for Adding Services */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-80 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-800">
                Add Services
              </h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsPopupOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="mb-4">
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select a Service</option>
                {allServices.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={addServiceToTable}
            >
              Add Service
            </button>
          </div>
        </div>
      )}

      {/* Popup for Creating Services */}
      {isCreatePopupOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-80 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-800">
                Create Services
              </h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsCreatePopupOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={newServiceName}
                onChange={(e) => setNewServiceName(e.target.value)}
                placeholder="Enter Service Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={createNewService}
            >
              Create Service
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesTile;
