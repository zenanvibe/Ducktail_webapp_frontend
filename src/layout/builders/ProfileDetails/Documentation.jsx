import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import useProfileStore from "../../../store/builders/useProfileStore"; 

const Documentation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { profile, fetchProfile, isLoading } = useProfileStore();
  const [selectedDoc, setSelectedDoc] = useState(null); // ✅ Store the selected document
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Track modal state

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const [docs, setDocs] = useState({
    qualification: profile?.qualification || "",
    aadhar_number: profile?.aadhar_number || "",
    company_gst: profile?.gst_number || "",
    government_license: profile?.government_license || "View",
    graduation_certificate: profile?.graduation_certificate || "View",
  });

  useEffect(() => {
    if (profile) {
      setDocs({
        qualification: profile.qualification || "",
        aadhar_number: profile.aadhar_number || "",
        company_gst: profile.gst_number || "",
        government_license: profile.government_license || "View",
        graduation_certificate: profile.graduation_certificate || "View",
      });
    }
  }, [profile]);

  const toggleEdit = () => setIsEditing(!isEditing);

  // ✅ Handle opening the modal
  const handleViewDocument = (docKey) => {
    setSelectedDoc(profile?.[docKey]); // Get document URL from profile
    setIsModalOpen(true);
  };

  // ✅ Close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4 border-b border-gray-400 pb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold">Documentation</h2>
          <FaEdit className="cursor-pointer text-gray-500" onClick={toggleEdit} />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-4">
          <div className="w-10 h-10 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(docs).map(([key, value], index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-600">
                {formatLabel(key)}
              </label>
              {value === "View" ? (
                <button
                  className="mt-1 px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={() => handleViewDocument(key)}
                >
                  {value}
                </button>
              ) : (
                <input
                  type="text"
                  value={value}
                  disabled={!isEditing}
                  className={`w-full p-2 mt-1 rounded-md ${
                    isEditing ? "border border-gray-300" : "border-none"
                  }`}
                  onChange={(e) =>
                    setDocs((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                />
              )}
            </div>
          ))}
        </div>
      )}

      {isEditing && (
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2" onClick={toggleEdit}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Save Changes
          </button>
        </div>
      )}

      {/* ✅ Modal for showing document preview */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Document Preview</h3>
            {selectedDoc ? (
              <img
                src={selectedDoc}
                alt="Document"
                className="w-full h-auto max-h-96 object-cover rounded-lg border"
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

// ✅ Helper function to format labels from keys
const formatLabel = (key) => {
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

export default Documentation;
