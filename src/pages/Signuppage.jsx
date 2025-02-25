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
      <div className="flex flex-col lg:flex-row w-full max-w-4xl p-2 py-5 border border-gray-300 bg-white rounded-lg shadow-2xl overflow-hidden"p>
        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                  index === currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`ml-2 text-sm ${
                  index === currentStep ? "text-black" : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className="w-10 h-px bg-gray-300 mx-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          {steps[currentStep].fields.map((field, index) => (
            <div className="flex items-center gap-2 mb-4" key={index}>
              <label
                htmlFor={field.id}
                className="w-48 text-gray-700 text-sm font-medium"
              >
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  id={field.id}
                  className="border rounded-md p-2 flex-grow focus:outline-blue-500"
                  value={formData[field.id] || ""}
                  onChange={(e) => handleInputChange(e, field.id)}
                >
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
                  className="border rounded-md p-2 flex-grow focus:outline-blue-500"
                  onChange={(e) => handleFileChange(e, field.id)}
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  className="border rounded-md p-2 flex-grow focus:outline-blue-500"
                  value={formData[field.id] || ""}
                  onChange={(e) => handleInputChange(e, field.id)}
                />
              )}
            </div>
          ))}

          {/* Profile Photo (shown only in "Company Details") */}
          {currentStep === 0 && (
            <div className="flex items-center gap-2 mb-4">
              <label
                htmlFor="profilePhoto"
                className="w-48 text-gray-700 text-sm font-medium"
              >
                Profile Photo
              </label>
              <label
                htmlFor="profilePhoto"
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border">
                  <img
                    src={
                      profilePhoto ||
                      "https://via.placeholder.com/150?text=Photo"
                    }
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-blue-500 underline">Click to replace</span>
                <input
                  id="profilePhoto"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePhotoChange}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6">
            {currentStep !== steps.length - 1 ? (
              <>
                <button
                  type="button"
                  className={`border px-4 py-2 rounded-md ${
                    currentStep === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={handlePreviousStep}
                  disabled={currentStep === 0}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className={`border px-4 py-2 rounded-md ${
                    currentStep === steps.length - 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </>
            ) : (
              <div className="flex justify-between items-center mt-6 w-full">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="border px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  disabled={isSigningUp} // Disable button while signing up
                >
                  {isSigningUp ? "Submitting..." : "Submit"}
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;