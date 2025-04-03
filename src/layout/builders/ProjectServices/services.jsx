import React, { useState, useEffect } from "react";
import useServiceStore from "../../../store/builders/useServiceStore";

const ServicesTile = () => {
  const { fetchServices, fetchBuilderService, allServices, builderServices, fetchCreateService, deleteService, isLoading } =
    useServiceStore();
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
  const addServiceToTable = () => {
    if (selectedService) {
      setServices((prev) => [...prev, selectedService]);
      setSelectedService("");
      setIsPopupOpen(false);
    }
  };

  const createNewService = async () => {
    if (newServiceName.trim()) {
      try {
        await fetchCreateService({ name: newServiceName.trim() });
        await fetchBuilderService();  
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
    </div>
  );
};

export default ServicesTile;
