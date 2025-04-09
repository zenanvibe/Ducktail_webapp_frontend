import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import useProfileStore from "../../../store/customer/useProfileStore";

const CustomerDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const { profile, fetchProfile, updateProfile, isLoading, isUpdating } = useProfileStore();

  const loadProfile = async () => {
    await fetchProfile();
  };

  useEffect(() => {
    loadProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const toggleEdit = () => {
    if (isEditing) {
      setFormData(profile);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const success = await updateProfile(formData);
      if (success) {
        loadProfile();
        toggleEdit();
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const fields = [
    { key: "customer_id", label: "Customer ID", editable: false },
    { key: "name", label: "Customer Name", editable: true },
    { key: "email", label: "Email", editable: true },
    { key: "phone_number", label: "Phone Number", editable: true },
    { key: "whatsapp_number", label: "WhatsApp Number", editable: true },
    { key: "age", label: "Age", editable: true },
    { key: "gender", label: "Gender", editable: true },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4 border-b border-gray-400 pb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">My Details</h2>
          <FaEdit 
            className="cursor-pointer text-gray-500 hover:text-blue-500" 
            onClick={toggleEdit} 
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map(({ key, label, editable = true }, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-600">{label}</label>
              <input
                type="text"
                value={formData[key] || ""}
                onChange={(e) => handleInputChange(key, e.target.value)}
                disabled={!editable || !isEditing}
                className={`w-full p-2 mt-1 rounded-md ${
                  !editable ? "bg-gray-100" : 
                  isEditing ? "border border-gray-300" : "border-none bg-gray-50"
                }`}
              />
            </div>
          ))}
        </div>
      )}

      {isEditing && (
        <div className="flex justify-end mt-4">
          <button 
            className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2 hover:bg-gray-600" 
            onClick={toggleEdit}
            disabled={isUpdating}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
            disabled={isUpdating}
          >
            {isUpdating ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
