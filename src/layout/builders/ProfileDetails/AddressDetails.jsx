import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import useProfileStore from "../../../store/builders/useProfileStore";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Map marker update component for Leaflet
const MarkerPosition = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 15);
    }
  }, [position, map]);

  return null;
};

const AddressDetails = () => {
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
        address_line1: profile.builder.address_line1 || "",
        address_line2: profile.builder.address_line2 || "",
        taluk: profile.builder.taluk || "",
        district: profile.builder.district || "",
        state: profile.builder.state || "",
        postcode: profile.builder.postcode || "",
        latitude: profile.builder.latitude || "",
        longitude: profile.builder.longitude || ""
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
        address_line1: profile.builder.address_line1 || "",
        address_line2: profile.builder.address_line2 || "",
        taluk: profile.builder.taluk || "",
        district: profile.builder.district || "",
        state: profile.builder.state || "",
        postcode: profile.builder.postcode || "",
        latitude: profile.builder.latitude || "",
        longitude: profile.builder.longitude || ""
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

  // Function to get current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          
          setFormData(prev => ({
            ...prev,
            latitude: currentLocation.lat.toFixed(6),
            longitude: currentLocation.lng.toFixed(6),
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4 border-b border-gray-400 pb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold">Address Details</h2>
          <FaEdit className="cursor-pointer text-gray-500" onClick={toggleEdit} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(formData).map(([key, value], index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-600">
              {formatLabel(key)}
            </label>
            <input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(key, e.target.value)}
              disabled={!isEditing}
              className={`w-full p-2 mt-1 rounded-md ${
                isEditing ? "border border-gray-300" : "border-none bg-gray-50"
              }`}
            />
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

      {/* Map Container */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Location on Map
        </label>
        <MapContainer
          center={[20.5937, 78.9629]} // Default center of India
          zoom={5}
          style={{ height: "400px", width: "100%" }}
          className="border rounded-md overflow-hidden mb-4"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {formData.latitude && formData.longitude && (
            <>
              <Marker
                position={[
                  parseFloat(formData.latitude),
                  parseFloat(formData.longitude),
                ]}
                draggable={isEditing}
                eventHandlers={{
                  dragend: (e) => {
                    const marker = e.target;
                    const position = marker.getLatLng();
                    setFormData(prev => ({
                      ...prev,
                      latitude: position.lat.toFixed(6),
                      longitude: position.lng.toFixed(6),
                    }));
                  },
                }}
              />
              <MarkerPosition
                position={[
                  parseFloat(formData.latitude),
                  parseFloat(formData.longitude),
                ]}
              />
            </>
          )}
        </MapContainer>
        {isEditing && (
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
            onClick={getCurrentLocation}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Get Current Location
          </button>
        )}
      </div>
    </div>
  );
};

const formatLabel = (key) => {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default AddressDetails;
