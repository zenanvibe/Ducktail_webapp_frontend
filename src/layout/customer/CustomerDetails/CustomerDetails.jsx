import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import useProfileStore from "../../../store/customer/useProfileStore";

const CustomerDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { profile, fetchProfile, isLoading } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const fields = [
    { label: "Customer ID", value: profile?.customer_id || "" },
    { label: "Customer Name", value: profile?.name || "" },
    { label: "Email", value: profile?.email || "" },
    { label: "Password", value: "" },
    { label: "Phone Number", value: "" },
    { label: "WhatsApp Number", value: "" },
    { label: "Age", value: "" },
    { label: "Gender", value: "" },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4 border-b border-gray-400 pb-2">
        <h2 className="text-xl font-semibold">My Details</h2>
        <FaEdit className="cursor-pointer text-gray-500" onClick={toggleEdit} />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map(({ label, value }, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-600">{label}</label>
              <input
                type="text"
                value={value}
                disabled={!isEditing}
                className={`w-full p-2 mt-1 rounded-md ${
                  isEditing ? "border border-gray-300" : "border-none"
                }`}
                readOnly
              />
            </div>
          ))}
        </div>
      )}

      {isEditing && (
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2" onClick={toggleEdit}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
