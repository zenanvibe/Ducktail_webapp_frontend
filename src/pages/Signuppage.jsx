import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";

const SignupPage = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { signupBuilder } = useAuthStore();

  const steps = [
    {
      title: "Company Details",
      fields: [
        { label: "Company Name", type: "text", id: "companyName", required: true },
        { label: "Establishment Year", type: "number", id: "establishmentYear", required: true },
        { label: "Engineer Name", type: "text", id: "engineerName", required: true },
        { label: "Gender", type: "select", id: "gender", options: ["Male", "Female", "Other"], required: true },
        { label: "Email", type: "email", id: "email", required: true },
        { label: "Password", type: "password", id: "password", required: true },
        { label: "GST", type: "text", id: "gst" },
        { label: "Contact Number", type: "text", id: "contactNumber", required: true },
        { label: "WhatsApp Number", type: "text", id: "whatsappNumber" },
      ],
    },
    {
      title: "Address",
      fields: [
        { label: "Address Line 1", type: "text", id: "addressLine1", required: true },
        { label: "Address Line 2", type: "text", id: "addressLine2" },
        { label: "Village", type: "text", id: "village" },
        { label: "District", type: "text", id: "district", required: true },
        { label: "Taluk", type: "text", id: "taluk" },
        { label: "Postcode", type: "number", id: "postcode", required: true },
        { label: "Latitude", type: "text", id: "latitude" },
        { label: "Longitude", type: "text", id: "longitude" },
        { label: "Map", type: "text", id: "map" },
      ],
    },
    {
      title: "Documentation",
      fields: [
        { label: "Qualification", type: "text", id: "qualification", required: true },
        { label: "Government License", type: "file", id: "governmentLicense", required: true },
        { label: "Graduation Certificate", type: "file", id: "graduationCertificate", required: true },
      ],
    },
  ];

  const handleInputChange = (e, id) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: e.target.value,
    }));
  };

  // const handleFileChange = (e, id) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [id]: file,
  //     }));
  //   }
  // };

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

  const validateStep = () => {
    const stepFields = steps[currentStep].fields;
    for (let field of stepFields) {
      if (field.required && (!formData[field.id] || formData[field.id] === "")) {
        alert(`Please fill out the ${field.label} field.`);
        return false;
      }
    }
    return true;
  };

  // const handleNextStep = () => {
  //   if (validateStep()) {
  //     setCurrentStep((prev) => prev + 1);
  //   }
  // };

  const handlePreviousStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      await signupBuilder(formData);
      setFormData({});
      setProfilePhoto(null);
      setCurrentStep(0);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-4xl p-6 border bg-white rounded-lg shadow-lg">
        
        {/* Step Indicator */}
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
                <span className={`mt-2 text-sm ${index === currentStep ? "text-blue-500 font-medium" : "text-gray-500"}`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div> 

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            
            {steps[currentStep].fields.map((field, index) => (
              <div key={index} className="flex flex-col mb-4">
                <label htmlFor={field.id} className="text-gray-700 text-sm font-medium mb-1">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                <input id={field.id} type={field.type} className="border rounded-md p-2 w-full" value={formData[field.id] || ""} onChange={(e) => handleInputChange(e, field.id)} />
              </div>
            ))}

            {/* Profile Photo (shown only in "Company Details") */}
            {currentStep === 0 && (
              <div className="flex flex-col mb-4 mt-4">
                <label htmlFor="profilePhoto" className="text-gray-700 text-sm font-medium mb-2">
                  Profile Photo
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border">
                    <img
                      src={profilePhoto || "https://via.placeholder.com/150?text=Photo"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <label htmlFor="profilePhoto" className="text-blue-500 cursor-pointer hover:underline">
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

          </div>

          <div className="flex justify-between mt-8">
            <button type="button" className="px-6 py-2 border border-gray-300 rounded-md" onClick={handlePreviousStep} disabled={currentStep === 0}>
              Previous
            </button>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
