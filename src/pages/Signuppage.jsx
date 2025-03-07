import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [profileImage, setprofileImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    latitude: "",
    longitude: ""
  });
  const { signupBuilder, isSigningUp } = useAuthStore();
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const markerRef = useRef(null);

  // Initialize Google Map
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      // Check if the script is already loaded
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Create the script element
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      googleMapScript.onload = initializeMap;
      document.body.appendChild(googleMapScript);
    };

    const initializeMap = () => {
      if (currentStep === 1 && mapRef.current && !googleMapRef.current) {
        // Default center (India)
        const defaultLocation = { lat: 20.5937, lng: 78.9629 };
        
        // Create map
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 5,
          center: defaultLocation,
          mapTypeControl: false,
        });
        
        // Create marker
        const marker = new window.google.maps.Marker({
          position: defaultLocation,
          map: map,
          draggable: true,
        });
        
        // Add click listener to map
        map.addListener('click', (e) => {
          const clickedLocation = e.latLng;
          marker.setPosition(clickedLocation);
          updateLocationFields(clickedLocation);
        });
        
        // Add dragend listener to marker
        marker.addListener('dragend', () => {
          const markerPosition = marker.getPosition();
          updateLocationFields(markerPosition);
        });
        
        // Store references
        googleMapRef.current = map;
        markerRef.current = marker;
        
        // If we already have lat/lng in the form, position the marker there
        if (formData.latitude && formData.longitude) {
          const position = {
            lat: parseFloat(formData.latitude),
            lng: parseFloat(formData.longitude)
          };
          marker.setPosition(position);
          map.setCenter(position);
          map.setZoom(15);
        }
      }
    };
    
    if (currentStep === 1) {
      loadGoogleMapsScript();
    }
    
    return () => {
      // Clean up references when component unmounts or step changes
      if (currentStep !== 1) {
        googleMapRef.current = null;
        markerRef.current = null;
      }
    };
  }, [currentStep, formData.latitude, formData.longitude]);

  // Function to update lat/lng fields
  const updateLocationFields = (location) => {
    setFormData({
      ...formData,
      latitude: location.lat().toFixed(6),
      longitude: location.lng().toFixed(6)
    });
  };

  // Function to get current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          setFormData({
            ...formData,
            latitude: currentLocation.lat.toFixed(6),
            longitude: currentLocation.lng.toFixed(6)
          });
          
          // Update map and marker if they exist
          if (googleMapRef.current && markerRef.current) {
            markerRef.current.setPosition(currentLocation);
            googleMapRef.current.setCenter(currentLocation);
            googleMapRef.current.setZoom(15);
          }
          
          toast.success("Location detected successfully!");
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error("Unable to get your location. Please select on the map.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser. Please select on the map.");
    }
  };

  const steps = [
    {
      title: "Company Details",
      fields: [
        {
          label: "Company Name",
          type: "text",
          id: "companyName",
          required: true,
        },
        {
          label: "Establishment Year",
          type: "number",
          id: "establishmentYear",
          required: true,
        },
        {
          label: "Engineer Name",
          type: "text",
          id: "engineerName",
          required: true,
        },
        {
          label: "Gender",
          type: "select",
          id: "gender",
          options: ["Male", "Female", "Other"],
          required: true,
        },
        { label: "Email", type: "email", id: "email", required: true },
        { label: "Password", type: "password", id: "password", required: true },
        { label: "GST", type: "text", id: "gst" },
        {
          label: "Contact Number",
          type: "text",
          id: "contactNumber",
          required: true,
        },
        { label: "WhatsApp Number", type: "text", id: "whatsappNumber" },
      ],
    },
    {
      title: "Address",
      fields: [
        {
          label: "Address Line 1",
          type: "text",
          id: "addressLine1",
          required: true,
        },
        { label: "Address Line 2", type: "text", id: "addressLine2" },
        { label: "Village", type: "text", id: "village" },
        { label: "District", type: "text", id: "district", required: true },
        { label: "Taluk", type: "text", id: "taluk" },
        { label: "Postcode", type: "number", id: "postcode", required: true },
        { label: "Latitude", type: "text", id: "latitude", required: true },
        { label: "Longitude", type: "text", id: "longitude", required: true },
      ],
    },
    {
      title: "Documentation",
      fields: [
        {
          label: "Qualification",
          type: "text",
          id: "qualification",
          required: true,
        },
        {
          label: "Government License",
          type: "file",
          id: "governmentLicense",
          required: true,
        },
        {
          label: "Graduation Certificate",
          type: "file",
          id: "graduationCertificate",
          required: true,
        },
      ],
    },
  ];

  const handleInputChange = (e, id) => {
    setFormData({ ...formData, [id]: e.target.value });
  };

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (file) setFormData({ ...formData, [id]: file });
  };

  const handleprofileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setprofileImage(URL.createObjectURL(file));
      setFormData({ ...formData, profileImage: file });
    }
  };

  const validateStep = () => {
    const stepFields = steps[currentStep].fields;
    for (let field of stepFields) {
      if (
        field.required &&
        (!formData[field.id] || formData[field.id] === "")
      ) {
        toast.error(`Please fill out the ${field.label} field.`);
        return false;
      }
    }
    return true;
  };

  const handleNextStep = () => {
    const stepFields = steps[currentStep].fields;

    // Check for any empty required fields
    const emptyFields = stepFields.some(
      (field) =>
        field.required &&
        (!formData[field.id] || formData[field.id].toString().trim() === " ")
    );

    if (emptyFields) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      await signupBuilder(formData);
      setFormData({});
      setprofileImage(null);
      navigate("/login?type=builder");
      setCurrentStep(0);
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  // Check if we're on the address step
  const isAddressStep = currentStep === 1;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-4xl p-6 border bg-white rounded-lg shadow-lg">
        {/* Stepper UI */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-medium ${
                    index < currentStep
                      ? "bg-green-500"
                      : index === currentStep
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                >
                  {index < currentStep ? "✓" : index + 1}
                </div>
                <span
                  className={`mt-2 text-sm ${
                    index === currentStep
                      ? "text-blue-500 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <div className="relative w-full h-1 bg-gray-200 mt-5">
            <div
              className="absolute h-1 bg-blue-500 transition-all duration-300"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>
        {/* Registration Heading */}
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
          Builder Registration
        </h2>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps[currentStep].fields.map((field, index) => (
              <div className="flex flex-col mb-4" key={index}>
                <label
                  htmlFor={field.id}
                  className="text-gray-700 text-sm font-medium mb-1"
                >
                  {field.label}{" "}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                {field.type === "select" ? (
                  <select
                    id={field.id}
                    className="border rounded-md p-2 w-full"
                    value={formData[field.id] || ""}
                    onChange={(e) => handleInputChange(e, field.id)}
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "file" ? (
                  <input
                    id={field.id}
                    type="file"
                    className="border rounded-md p-2 w-full"
                    onChange={(e) => handleFileChange(e, field.id)}
                  />
                ) : (
                  <input
                    id={field.id}
                    type={field.type}
                    className="border rounded-md p-2 w-full"
                    value={formData[field.id] || ""}
                    onChange={(e) => handleInputChange(e, field.id)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Map for location selection */}
          {isAddressStep && (
            <div className="mt-6">
              <label className="text-gray-700 text-sm font-medium mb-2 block">
                Select Location on Map <span className="text-red-500">*</span>
              </label>
              <div 
                ref={mapRef} 
                className="h-64 w-full border rounded-md overflow-hidden mb-4"
              ></div>
              <p className="text-sm text-gray-500 mb-4">
                Click on the map to select your location or use the button below to get your current location.
              </p>
              <div className="flex justify-center mb-6">
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
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Get Current Location
                </button>
              </div>
            </div>
          )}

          {/* Profile Photo Upload */}
          <div className="flex justify-center mb-6 mt-6">
            <label htmlFor="profileImage" className="relative cursor-pointer">
              <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">Upload</span>
                )}
              </div>
              <input
                id="profileImage"
                type="file"
                className="hidden"
                onChange={handleprofileImageChange}
              />
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 0 && (
              <button
                type="button"
                className="px-6 py-2 border rounded-md"
                onClick={handlePreviousStep}
              >
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                className="bg-blue-500 text-white px-6 py-2 rounded-md"
                onClick={handleNextStep}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md"
                disabled={isSigningUp}
              >
                {isSigningUp ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;