import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const Documentation = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4 border-b border-gray-400 pb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold">Documentation</h2>
          <FaEdit className="cursor-pointer text-gray-500" onClick={toggleEdit} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map(({ label, value, isButton }, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-600">{label}</label>
            {isButton ? (
              <button className="mt-1 px-4 py-2 bg-blue-500 text-white rounded-md">{value}</button>
            ) : (
              <input 
                type="text" 
                defaultValue={value} 
                disabled={!isEditing} 
                className={`w-full p-2 mt-1 rounded-md ${isEditing ? "border border-gray-300" : "border-none"}`} 
              />
            )}
          </div>
        ))}
      </div>
      
      {isEditing && (
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2" onClick={toggleEdit}>Cancel</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Changes</button>
        </div>
      )}
    </div>
  );
};

const fields = [
  { label: "Qualification", value: "B.E Computer Science" },
  { label: "Aadhar Number", value: "2854 4588 5552" },
  { label: "Company GST", value: "GS74855255" },
  { label: "Government license", value: "View", isButton: true },
  { label: "Graduation Certificate", value: "View", isButton: true },
];

export default Documentation;
