import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import useProfileStore from "../../../store/builders/useProfileStore";

const SocialMedia = () => {
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
      setFormData({
        facebook_url: profile.builder.facebook_url || "",
        linkedin_url: profile.builder.linkedin_url || "",
        youtube_url: profile.builder.youtube_url || "",
        instagram_url: profile.builder.instagram_url || ""
      });
    }
  }, [profile]);

  const toggleEdit = () => {
    if (isEditing) {
      // Reset form data to profile data when canceling
      setFormData({
        facebook_url: profile.builder.facebook_url || "",
        linkedin_url: profile.builder.linkedin_url || "",
        youtube_url: profile.builder.youtube_url || "",
        instagram_url: profile.builder.instagram_url || ""
      });
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

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4 border-b border-gray-400 pb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold">Social Media</h2>
          <FaEdit className="cursor-pointer text-gray-500" onClick={toggleEdit} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map(({ key, label }, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-600">{label}</label>
            <input 
              type="text"
              value={formData[key] || ""}
              onChange={(e) => handleInputChange(key, e.target.value)}
              disabled={!isEditing}
              className={`w-full p-2 mt-1 rounded-md ${isEditing ? "border border-gray-300" : "border-none bg-gray-50"}`}
            />
          </div>
        ))}
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
  { key: "facebook_url", label: "Facebook URL" },
  { key: "linkedin_url", label: "LinkedIn URL" },
  { key: "instagram_url", label: "Instagram URL" }
];

export default SocialMedia;
