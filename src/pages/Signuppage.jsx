import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";

const SignupPage = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({}); // State to store all form data
  const { signupBuilder, isSigningUp } = useAuthStore(); // Destructure the signupBuilder function and loading state

  const steps = [
    {
      title: "Company Details",
      fields: [
        { label: "Company Name", type: "text", id: "companyName" },
        { label: "Establishment Year", type: "number", id: "establishmentYear" },
        { label: "Engineer Name", type: "text", id: "engineerName" },
        { label: "Gender", type: "select", id: "gender", options: ["Male", "Female", "Other"] },
        { label: "Email", type: "email", id: "email" },
        { label: "Password", type: "password", id: "password" },
        { label: "GST", type: "text", id: "gst" },
        { label: "Contact Number", type: "text", id: "contactNumber" },
        { label: "WhatsApp Number", type: "text", id: "whatsappNumber" },
      ],
    },
    {
      title: "Address",
      fields: [
        { label: "Address Line 1", type: "text", id: "addressLine1" },
        { label: "Address Line 2", type: "text", id: "addressLine2" },
        { label: "Village", type: "text", id: "village" },
        { label: "District", type: "text", id: "district" },
        { label: "Taluk", type: "text", id: "taluk" },
        { label: "Postcode", type: "number", id: "postcode" },
        { label: "Latitude", type: "text", id: "latitude" },
        { label: "Longitude", type: "text", id: "longitude" },
        { label: "Map", type: "text", id: "map" },
      ],
    },
    {
      title: "Documentation",
      fields: [
        { label: "Qualification", type: "text", id: "qualification" },
        { label: "Government License", type: "file", id: "governmentLicense" },
        { label: "Graduation Certificate", type: "file", id: "graduationCertificate" },
      ],
    },
  ];

  // Handle input changes for text, number, email, and select fields
  const handleInputChange = (e, id) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle file uploads (profile photo, government license, etc.)
  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        [id]: file,
      }));
    }
  };

  // Handle profile photo upload
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
      setFormData((prevData) => ({
        ...prevData,
        profilePhoto: file,
      }));
    }
  };

  // Handle next step
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  // Handle previous step
  const handlePreviousStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the signupBuilder function from useAuthStore
      await signupBuilder(formData);

      // Reset form data and state after successful submission
      setFormData({});
      setProfilePhoto(null);
      setCurrentStep(0);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(310deg, #555555 4%, white 38%)" }}>
      <div className="w-full max-w-4xl p-6 border border-gray-300 bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Step Indicator moved to the top */}
        <div className="mb-8">

          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${
                    index < currentStep ? "bg-green-500" : 
                    index === currentStep ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  {index < currentStep ? "✓" : index + 1}
                </div>
                <span
                  className={`mt-2 text-sm text-center ${
                    index === currentStep ? "text-blue-500 font-medium" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute h-1 bg-gray-300" style={{
                
                  }}></div>
                )}
              </div>
            ))}
          </div>
          <div className="relative w-full h-1 bg-gray-200 mt-5">
            <div 
              className="absolute h-1 bg-blue-500 transition-all duration-300" 
              style={{ 
                width: `${((currentStep) / (steps.length - 1)) * 100}%` 
              }}
            ></div>
          </div>
        </div> 

        {/* Form Fields below the step indicator */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps[currentStep].fields.map((field, index) => (
              <div className="flex flex-col mb-4" key={index}>
                <label
                  htmlFor={field.id}
                  className="text-gray-700 text-sm font-medium mb-1"
                >
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    id={field.id}
                    className="border rounded-md p-2 w-full focus:outline-blue-500"
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
                    className="border rounded-md p-2 w-full focus:outline-blue-500"
                    onChange={(e) => handleFileChange(e, field.id)}
                  />
                ) : (
                  <input
                    id={field.id}
                    type={field.type}
                    className="border rounded-md p-2 w-full focus:outline-blue-500"
                    value={formData[field.id] || ""}
                    onChange={(e) => handleInputChange(e, field.id)}
                    placeholder={`Enter ${field.label}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Profile Photo (shown only in "Company Details") */}
          {currentStep === 0 && (
            <div className="flex flex-col mb-4 mt-4">
              <label
                htmlFor="profilePhoto"
                className="text-gray-700 text-sm font-medium mb-2"
              >
                Profile Photo
              </label>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border">
                  <img
                    src={
                      profilePhoto ||
                      "https://via.placeholder.com/150?text=Photo"
                    }
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <label
                  htmlFor="profilePhoto"
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Click to upload photo
                  <input
                    id="profilePhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePhotoChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              className={`px-6 py-2 rounded-md ${
                currentStep === 0
                  ? "text-gray-400 cursor-not-allowed bg-gray-100"
                  : "text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
              onClick={handlePreviousStep}
              disabled={currentStep === 0}
            >
              Previous
            </button>
            
            {currentStep === steps.length - 1 ? (
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                disabled={isSigningUp}
              >
                {isSigningUp ? "Submitting..." : "Submit"}
              </button>
            ) : (
              <button
                type="button"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                onClick={handleNextStep}
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;