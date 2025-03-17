import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import useProfileStore from "../../../store/builders/useProfileStore";

const ProfileDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { profile, fetchProfile, isLoading } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing);
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
        {profile && fields.map(({ key, label }, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-600">{label}</label>
            <input
              type="text"
              defaultValue={profile[key] || ""}
              disabled={!isEditing}
              className={`w-full p-2 mt-1 rounded-md ${isEditing ? "border border-gray-300" : "border-none"}`}
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-600">About Company</label>
        <textarea
          defaultValue={profile?.about || ""}
          disabled={!isEditing}
          className={`w-full p-2 mt-1 rounded-md ${isEditing ? "border border-gray-300" : "border-none"}`}
        />
      </div>

      {isEditing && (
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2" onClick={toggleEdit}>Cancel</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Changes</button>
        </div>
      )}
    </div>
  );
};

const fields = [
  { key: "builder_id", label: "Ductail ID" },
  { key: "company_name", label: "Company Name" },
  { key: "establishment_year", label: "Years of Establishment" },
  { key: "contact_number", label: "Phone Number" },
  { key: "email", label: "Email" },
  { key: "whatsapp_number", label: "WhatsApp Number" },
  { key: "engineer_name", label: "Engineer Name" },
  { key: "gender", label: "Gender" },
];

export default ProfileDetails;
