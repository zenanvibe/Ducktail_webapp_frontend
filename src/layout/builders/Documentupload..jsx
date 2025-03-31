import React, { useState } from "react";
import { AiOutlineFile } from "react-icons/ai";
import useProjectStatus from "../../store/builders/useProjectStatus";
import { useParams } from "react-router-dom";

const DocumentUpload = ({ onBack }) => {
  const { projectId } = useParams();
  const { uploadCompletionDocuments } = useProjectStatus();
  const [documents, setDocuments] = useState({
    specificationReport: null,
    warrantyDocument: null,
    completionCertificate: null,
    siteImage: null,
  });

  const handleFileChange = (e, docType) => {
    setDocuments({
      ...documents,
      [docType]: e.target.files[0],
    });
  };

  const handleSubmit = async () => {
    try {
      await uploadCompletionDocuments(projectId, documents);
      onBack(); // Navigate back on success
    } catch (error) {
      console.error("Error uploading documents:", error);
    }
  };

  const allFilesUploaded = Object.values(documents).every((file) => file !== null);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-3/4">
        <h2 className="text-xl font-semibold mb-6 text-center">Upload your Document</h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
            <AiOutlineFile className="text-blue-500 text-4xl mx-auto mb-2" />
            <h3 className="font-medium mb-2">Specification Report</h3>
            <p className="text-sm text-gray-600">Max Size: 5 MB</p>
            <p className="text-sm text-gray-600">Upload File: PDF, DOCX only</p>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => handleFileChange(e, "specificationReport")}
              className="mt-4"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
            <AiOutlineFile className="text-blue-500 text-4xl mx-auto mb-2" />
            <h3 className="font-medium mb-2">Warranty Document</h3>
            <p className="text-sm text-gray-600">Max Size: 5 MB</p>
            <p className="text-sm text-gray-600">Upload File: PDF, DOCX only</p>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => handleFileChange(e, "warrantyDocument")}
              className="mt-4"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
            <AiOutlineFile className="text-blue-500 text-4xl mx-auto mb-2" />
            <h3 className="font-medium mb-2">Completion Certificate</h3>
            <p className="text-sm text-gray-600">Max Size: 5 MB</p>
            <p className="text-sm text-gray-600">Upload File: PDF, DOCX only</p>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => handleFileChange(e, "completionCertificate")}
              className="mt-4"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
            <AiOutlineFile className="text-blue-500 text-4xl mx-auto mb-2" />
            <h3 className="font-medium mb-2">Site Image</h3>
            <p className="text-sm text-gray-600">Max File Size: 5 MB</p>
            <p className="text-sm text-gray-600">Formats: JPG, JPEG, PNG, WEBP</p>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              onChange={(e) => handleFileChange(e, "siteImage")}
              className="mt-4"
            />
          </div>
        </div>

        {allFilesUploaded && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="font-medium mb-2">Overview</h3>
            <ul className="text-sm text-gray-700">
              {Object.entries(documents).map(([key, file]) => (
                <li key={key} className="mb-1">
                  <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            onClick={onBack}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded-md text-white ${
              allFilesUploaded ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={handleSubmit}
            disabled={!allFilesUploaded}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
