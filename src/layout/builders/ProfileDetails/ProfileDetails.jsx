import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import useProfileStore from "../../../store/builders/useProfileStore";

const ProfileDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const { profile, fetchProfile, updateProfile, isLoading } = useProfileStore();

  const loadProfile = async () => {
    await fetchProfile();
  };

  useEffect(() => {
    loadProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (profile?.builder) {
      setFormData(profile.builder);
    }
  }, [profile]);

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  const toggleEdit = () => {
    if (isEditing) {
      // Reset form data to profile data when canceling
      setFormData(profile.builder);
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
      await updateProfile(formData);
      loadProfile(); // Fetch updated profile data after successful update
      toggleEdit();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4 border-b border-gray-400 pb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold">My Details</h2>
          <FaEdit className="cursor-pointer text-gray-500" onClick={toggleEdit} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profile?.builder && fields.map(({ key, label, editable = true }, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-600">{label}</label>
            <input
              type="text"
              value={formData[key] || ""}
              onChange={(e) => handleInputChange(key, e.target.value)}
              disabled={!editable || !isEditing}
              className={`w-full p-2 mt-1 rounded-md ${
                !editable ? "bg-gray-000" : 
                isEditing ? "border border-gray-300" : "border-none bg-gray-50"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-600">About Company</label>
        <textarea
          value={formData.about || ""}
          onChange={(e) => handleInputChange("about", e.target.value)}
          disabled={!isEditing}
          className={`w-full p-2 mt-1 rounded-md ${isEditing ? "border border-gray-300" : "border-none bg-gray-50"}`}
          rows={4}
        />
      </div>

      {isEditing && (
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2 hover:bg-gray-600" onClick={toggleEdit}>Cancel</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

const fields = [
  { key: "builder_id", label: "Ductail ID", editable: false },
  { key: "company_name", label: "Company Name" },
  { key: "establishment_year", label: "Years of Establishment" },
  { key: "contact_number", label: "Phone Number" },
  { key: "email", label: "Email" },
  { key: "whatsapp_number", label: "WhatsApp Number" },
  { key: "engineer_name", label: "Engineer Name" },
  { key: "gender", label: "Gender" },
];

export default ProfileDetails;
