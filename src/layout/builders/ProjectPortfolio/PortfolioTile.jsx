import React, { useState } from "react";

const PortfolioTile = () => {
  const [images, setImages] = useState([]);
  const maxFileSize = 5 * 1024 * 1024; // 5 MB
  const acceptedFormats = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
  const maxUploads = 25;

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    uploadImages(files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    uploadImages(files);
  };

  const uploadImages = (files) => {
    const validFiles = files.filter(
      (file) =>
        acceptedFormats.includes(file.type) &&
        file.size <= maxFileSize &&
        images.length < maxUploads
    );

    if (validFiles.length + images.length > maxUploads) {
      alert(`You can upload up to ${maxUploads} images only.`);
    }

    const newImages = validFiles.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    // Submit the images (e.g., via API)
    alert("Images submitted successfully!");
    console.log(images); // Log the uploaded images
    setImages([]); // Reset the uploader
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      {/* Upload Area */}
      <div
        className="w-full max-w-lg p-6 border-2 border-dashed border-gray-300 rounded-md bg-white flex flex-col items-center justify-center"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="text-center">
          <div className="text-blue-500 text-4xl mb-2">📄</div>
          <h3 className="text-lg font-medium mb-2">Upload your Image</h3>
          <p className="text-sm text-gray-500 mb-4">
            Drag and Drop image here or{" "}
            <label className="text-blue-500 underline cursor-pointer">
              <input
                type="file"
                accept="image/jpeg, image/png, image/webp, image/jpg"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
              upload here
            </label>
          </p>
          <p className="text-sm text-gray-500">
            Accepted Formats: JPG, JPEG, PNG, WEBP <br />
            Max File Size: 5 MB <br />
            Upload Limit: Up to {maxUploads} images at a time
          </p>
        </div>
      </div>

      {/* Uploaded Images */}
      {images.length > 0 && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-24 h-24 bg-gray-100 rounded-md overflow-hidden"
            >
              <img
                src={image.url}
                alt="uploaded"
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                onClick={() => handleRemoveImage(index)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Save Button */}
      {images.length > 0 && (
        <button
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleSave}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default PortfolioTile;
