import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import useProfileStore from "../../../store/builders/useProfileStore";

const Documentation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const { profile, fetchProfile, updateProfile, isLoading } = useProfileStore();
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadProfile = async () => {
    await fetchProfile();
  };

  useEffect(() => {
    loadProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (profile?.builder) {
      setFormData({
        qualification: profile.builder.qualification || "",
        gst_number: profile.builder.gst_number || "",
        government_license: profile.builder.government_license || "View",
        graduation_certificate: profile.builder.graduation_certificate || "View"
      });
    }
  }, [profile]);

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  const toggleEdit = () => {
    if (isEditing) {
      // Reset form data to profile data when canceling
      setFormData({
        qualification: profile.builder.qualification || "",
        gst_number: profile.builder.gst_number || "",
        government_license: profile.builder.government_license || "View",
        graduation_certificate: profile.builder.graduation_certificate || "View"
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

  const handleViewDocument = (docKey) => {
    setSelectedDoc(profile?.builder?.[docKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4 border-b border-gray-400 pb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold">Documentation</h2>
          <FaEdit className="cursor-pointer text-gray-500" onClick={toggleEdit} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(formData).map(([key, value], index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-600">
              {formatLabel(key)}
            </label>
            {key === 'government_license' || key === 'graduation_certificate' ? (
              <button
                className="mt-1 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => handleViewDocument(key)}
              >
                View
              </button>
            ) : (
              <input
                type="text"
                value={value}
                onChange={(e) => handleInputChange(key, e.target.value)}
                disabled={!isEditing}
                className={`w-full p-2 mt-1 rounded-md ${
                  isEditing ? "border border-gray-300" : "border-none bg-gray-50"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2 hover:bg-gray-600" onClick={toggleEdit}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Document Preview</h3>
            {selectedDoc ? (
              <iframe
                src={selectedDoc}
                className="w-full h-96"
                title="Document Preview"
              />
            ) : (
              <p className="text-gray-600">No document available</p>
            )}
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const formatLabel = (key) => {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default Documentation;
