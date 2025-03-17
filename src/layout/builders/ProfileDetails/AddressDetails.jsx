import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import useProfileStore from "../../../store/builders/useProfileStore"; // ✅ Import profile store

const AddressDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { profile, fetchProfile, isLoading } = useProfileStore();

  useEffect(() => {
    fetchProfile(); // ✅ Fetch profile data on component mount
  }, [fetchProfile]);

  // ✅ Set default values from API response or empty strings
  const [address, setAddress] = useState({
    address_line1: profile?.address_line1 || "",
    address_line2: profile?.address_line2 || "",
    district: profile?.district || "",
    taluk: profile?.taluk || "",
    village: profile?.village || "",
    postcode: profile?.postcode || "",
    latitude: profile?.latitude || "",
    longitude: profile?.longitude || "",
  });

  useEffect(() => {
    if (profile) {
      setAddress({
        address_line1: profile.address_line1 || "",
        address_line2: profile.address_line2 || "",
        district: profile.district || "",
        taluk: profile.taluk || "",
        village: profile.village || "",
        postcode: profile.postcode || "",
        latitude: profile.latitude || "",
        longitude: profile.longitude || "",
      });
    }
  }, [profile]);

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div>
      <div className="flex items-center justify-between mb-4 border-b border-gray-400 pb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold">Address Details</h2>
          <FaEdit className="cursor-pointer text-gray-500" onClick={toggleEdit} />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-4">
          <div className="w-10 h-10 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(address).map(([key, value], index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-600">
                {formatLabel(key)}
              </label>
              <input
                type="text"
                value={value}
                disabled={!isEditing}
                className={`w-full p-2 mt-1 rounded-md ${
                  isEditing ? "border border-gray-300" : "border-none"
                }`}
                onChange={(e) =>
                  setAddress((prev) => ({ ...prev, [key]: e.target.value }))
                }
              />
            </div>
          ))}
        </div>
      )}

      {isEditing && (
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-400 text-white rounded-md mr-2" onClick={toggleEdit}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

// ✅ Helper function to format labels from keys
const formatLabel = (key) => {
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

export default AddressDetails;
