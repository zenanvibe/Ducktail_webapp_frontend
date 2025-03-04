import React, { useState } from "react";
import toast from "react-hot-toast";
import useAuthStore from "../store/useAuthStore";

const SignupPage = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { signupBuilder, isSigningUp } = useAuthStore();

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

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
      setFormData({ ...formData, profilePhoto: file });
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
    const emptyFields = stepFields.some((field) => 
      field.required && (!formData[field.id] || formData[field.id].toString().trim() === " ")
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
      toast.success("Account created successfully!");
      setFormData({});
      setProfilePhoto(null);
      setCurrentStep(0);
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-4xl p-6 border bg-white rounded-lg shadow-lg">
        {/* Stepper UI */}
        <div className="mb-8">
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
            {/* Profile Photo Upload */}
            <div className="flex justify-center mb-6">
              <label htmlFor="profilePhoto" className="relative cursor-pointer">
                <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                  {profilePhoto ? (
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500">Upload</span>
                  )}
                </div>
                <input
                  id="profilePhoto"
                  type="file"
                  className="hidden"
                  onChange={handleProfilePhotoChange}
                />
              </label>
            </div>
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
