import React, { useState, useEffect } from "react";
import useServiceStore from "../../../store/builders/useServiceStore";
  
const ServicesTile = () => {
  const { 
    fetchServices, 
    fetchBuilderService, 
    allServices, 
    builderServices, 
    fetchCreateService, 
    deleteService,
    addServiceToBuilder,
    isLoading 
  } = useServiceStore();
  const [services, setServices] = useState([]); 
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [newServiceName, setNewServiceName] = useState("");

  useEffect(() => {
    fetchServices();
    fetchBuilderService();
  }, [fetchServices, fetchBuilderService]);

  // Add selected service to the table
  // Modified addServiceToTable function
  const addServiceToTable = async () => {
    if (selectedService) {
      try {
        // Find the selected service object from allServices
        const serviceToAdd = allServices.find(service => service.name === selectedService);
        if (serviceToAdd) {
          await addServiceToBuilder(serviceToAdd.id);
          await fetchBuilderService(); // Refresh the builder services list
          setSelectedService("");
          setIsPopupOpen(false);
        }
      } catch (error) {
        console.error("Failed to add service", error);
      }
    }
  };
  
  

  const createNewService = async () => {
    if (newServiceName.trim()) {
      try {
        await fetchCreateService({ name: newServiceName.trim() });
  
        // Wait for the creation API call to finish, then re-fetch all services
        await fetchBuilderService();  
        // await fetchServices();
        setNewServiceName("");
        setIsCreatePopupOpen(false);
      } catch (error) {
        console.error("Failed to create service", error);
      }
    }
  };

  const handleDeleteService = async (serviceId) => {
    try {
      await deleteService(serviceId);
      await fetchBuilderService();
    } catch (error) {
      console.error("Failed to delete service", error);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center px-4 py-3">
      {/* Action Buttons */}
      <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 items-center">
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
        </div>
      </div>

      {/* Services */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Services</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="2" className="text-center py-4 text-gray-600">Loading...</td>
              </tr>
            ) : (
              builderServices.map((srv, index) => (
                <tr key={srv.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="px-6 py-3 text-sm text-gray-700">{srv.name}</td>
                  <td className="px-6 py-3">
                    <button
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
                      onClick={() => handleDeleteService(srv.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isPopupOpen && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 overflow-auto">
    <div className="bg-white rounded-lg p-6 shadow-lg w-80 max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">Add Services</h2>
        <button className="text-gray-600 hover:text-gray-800" onClick={() => setIsPopupOpen(false)}>
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
          {isLoading ? (
            <option>Loading...</option>
          ) : (
            allServices.map((srv, index) => (
              <option key={index} value={srv.name}>{srv.name}</option>
            ))
          )}
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
          <div className="bg-white rounded-lg p-6 shadow-lg w-80">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-800">
                Create Service
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

