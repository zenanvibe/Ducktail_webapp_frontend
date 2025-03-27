import React, { useState, useEffect, useRef, useCallback } from "react";
import toast from "react-hot-toast";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

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

const SignupPage = () => {
  const [profileImage, setprofileImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
    agreementConfirmed: false,
    privacyPolicyConfirmed: false,
    warrantyConfirmed: false,
    aadhaarNumber: "",
    aadhaarOtp: "",
    aadhaarRefId: "",
    aadhaarVerified: false,
    gstVerified: false,
  });

  const { signupBuilder, isSigningUp } = useAuthStore();
  const navigate = useNavigate();
  const mapRef = useRef(null);

  // Function to verify Aadhaar
  const verifyAadhaar = async () => {
    try {
      const response = await axios.post(
        "https://sandbox.cashfree.com/verification/offline-aadhaar/otp",
        {
          aadhaar_number: formData.aadhaarNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-client-id": process.env.REACT_APP_CASHFREE_CLIENT_ID,
            "x-client-secret": process.env.REACT_APP_CASHFREE_CLIENT_SECRET,
          },
        }
      );

      if (response.data.status === "SUCCESS") {
        setFormData({ ...formData, aadhaarRefId: response.data.ref_id });
        toast.success("OTP sent successfully");
      }
    } catch (error) {
      toast.error("Failed to send Aadhaar OTP");
    }
  };

  // Function to verify Aadhaar OTP
  const verifyAadhaarOTP = async () => {
    try {
      const response = await axios.post(
        "https://sandbox.cashfree.com/verification/offline-aadhaar/verify",
        {
          otp: formData.aadhaarOtp,
          ref_id: formData.aadhaarRefId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-client-id": process.env.REACT_APP_CASHFREE_CLIENT_ID,
            "x-client-secret": process.env.REACT_APP_CASHFREE_CLIENT_SECRET,
          },
        }
      );

      if (response.data.status === "VALID") {
        setFormData({
          ...formData,
          aadhaarVerified: true,
          name: response.data.name,
          gender: response.data.gender === "M" ? "Male" : "Female",
          addressLine1: response.data.split_address.house,
          addressLine2: response.data.split_address.street,
          district: response.data.split_address.dist,
          postcode: response.data.split_address.pincode,
        });
        toast.success("Aadhaar verified successfully");
      }
    } catch (error) {
      toast.error("Failed to verify Aadhaar OTP");
    }
  };

  // Function to verify GST
  const verifyGST = async () => {
    try {
      const response = await axios.post(
        "https://sandbox.cashfree.com/verification/gstin",
        {
          GSTIN: formData.gst,
          business_name: formData.companyName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-client-id": process.env.REACT_APP_CASHFREE_CLIENT_ID,
            "x-client-secret": process.env.REACT_APP_CASHFREE_CLIENT_SECRET,
          },
        }
      );

      if (response.data.valid) {
        setFormData({
          ...formData,
          gstVerified: true,
          companyName: response.data.legal_name_of_business,
          addressLine1:
            response.data.principal_place_split_address.building_name,
          addressLine2: response.data.principal_place_split_address.street,
          district: response.data.principal_place_split_address.district,
          postcode: response.data.principal_place_split_address.pincode,
          latitude: response.data.principal_place_split_address.latitude,
          longitude: response.data.principal_place_split_address.longitude,
        });
        toast.success("GST verified successfully");
      }
    } catch (error) {
      toast.error("Failed to verify GST");
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

          setFormData({
            ...formData,
            latitude: currentLocation.lat.toFixed(6),
            longitude: currentLocation.lng.toFixed(6),
          });

          toast.success("Location detected successfully!");
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error("Unable to get your location. Please select on the map.");
        }
      );
    } else {
      toast.error(
        "Geolocation is not supported by your browser. Please select on the map."
      );
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
        {
          label: "GST",
          type: "text",
          id: "gst",
          verifyButton: true,
          verifyFunction: verifyGST,
        },
        {
          label: "Aadhaar Number",
          type: "text",
          id: "aadhaarNumber",
          required: true,
          verifyButton: true,
          verifyFunction: verifyAadhaar,
        },
        {
          label: "Aadhaar OTP",
          type: "text",
          id: "aadhaarOtp",
          required: true,
          verifyButton: true,
          verifyFunction: verifyAadhaarOTP,
          showWhenVerifying: true,
        },
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
    const value = e.target.value;
    setFormData({ ...formData, [id]: value });
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

  const handleCheckboxChange = (id) => {
    setFormData({
      ...formData,
      [id]: !formData[id],
    });
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

    // Check for agreements on first step
    if (currentStep === 0) {
      if (!formData.agreementConfirmed) {
        toast.error(
          "Please confirm that you agree to the Terms and Conditions."
        );
        return false;
      }
      if (!formData.privacyPolicyConfirmed) {
        toast.error("Please confirm that you agree to the Privacy Policy.");
        return false;
      }
      if (!formData.warrantyConfirmed) {
        toast.error(
          "Please confirm that you agree to provide the warranty service."
        );
        return false;
      }
    }

    return true;
  };

  const handleNextStep = () => {
    if (!validateStep()) {
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
          {/* Map for location selection - Moved before form fields */}
          {isAddressStep && (
            <div className="mb-6">
              <label className="text-gray-700 text-sm font-medium mb-2 block">
                Select Location on Map <span className="text-red-500">*</span>
              </label>
              <MapContainer
                center={[20.5937, 78.9629]}
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
                      draggable={true}
                      eventHandlers={{
                        dragend: (e) => {
                          const marker = e.target;
                          const position = marker.getLatLng();
                          setFormData({
                            ...formData,
                            latitude: position.lat.toFixed(6),
                            longitude: position.lng.toFixed(6),
                          });
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
              <p className="text-sm text-gray-500 mb-4">
                Click on the map to select your location or use the button below
                to get your current location.
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
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Get Current Location
                </button>
              </div>
            </div>
          )}

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
                <div className="flex">
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
                    <>
                      <input
                        id={field.id}
                        type={field.type}
                        className={`border rounded-md p-2 ${
                          field.verifyButton ? "w-3/4" : "w-full"
                        }`}
                        value={formData[field.id] || ""}
                        onChange={(e) => handleInputChange(e, field.id)}
                      />
                      {field.verifyButton && (
                        <button
                          type="button"
                          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                          onClick={field.verifyFunction}
                        >
                          Verify
                        </button>
                      )}
                    </>
                  )}
                </div>
                {field.id === "aadhaarNumber" && formData.aadhaarVerified && (
                  <span className="text-green-500 text-sm mt-1">Verified</span>
                )}
                {field.id === "gst" && formData.gstVerified && (
                  <span className="text-green-500 text-sm mt-1">Verified</span>
                )}
              </div>
            ))}
          </div>

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

          {/* Agreement Checkboxes - only shown on first step and moved below profile photo */}
          {currentStep === 0 && (
            <div className="mt-6 space-y-4 border-t pt-4">
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="warrantyConfirmed"
                  className="mt-1"
                  checked={formData.warrantyConfirmed || false}
                  onChange={() => handleCheckboxChange("warrantyConfirmed")}
                />
                <label
                  htmlFor="warrantyConfirmed"
                  className="text-sm text-gray-700"
                >
                  <strong>10 years warranty</strong>
                  <br />I agree to provide a 10-year warranty service,
                  guaranteeing long-term quality and structural integrity for
                  all construction projects that I build.
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="agreementConfirmed"
                  className="mt-1"
                  checked={formData.agreementConfirmed || false}
                  onChange={() => handleCheckboxChange("agreementConfirmed")}
                />
                <label
                  htmlFor="agreementConfirmed"
                  className="text-sm text-gray-700"
                >
                  <strong>Terms and conditions (Builders & customers)</strong>
                  <br />I read the above and hereby confirm that the above terms
                  and conditions are agreed, upon to the best of my knowledge
                  and belief.
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacyPolicyConfirmed"
                  className="mt-1"
                  checked={formData.privacyPolicyConfirmed || false}
                  onChange={() =>
                    handleCheckboxChange("privacyPolicyConfirmed")
                  }
                />
                <label
                  htmlFor="privacyPolicyConfirmed"
                  className="text-sm text-gray-700"
                >
                  <strong>Privacy policy</strong>
                  <br />I hereby confirm that I have read and agree to the above
                  Privacy Policy to the best of my knowledge and belief.
                </label>
              </div>
            </div>
          )}

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
