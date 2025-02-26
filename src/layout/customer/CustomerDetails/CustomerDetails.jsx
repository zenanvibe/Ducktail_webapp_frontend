import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const CustomerDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className=" ">
      <div className="flex items-center justify-between mb-4 border-b border-gray-400 pb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold">My Details</h2>
          <FaEdit className="cursor-pointer text-gray-500" onClick={toggleEdit} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map(({ label, value }, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-600">{label}</label>
            <input 
              type="text" 
              defaultValue={value} 
              disabled={!isEditing} 
              className={`w-full p-2 mt-1 rounded-md ${isEditing ? "border border-gray-300" : "border-none"}`} 
            />
          </div>
        ))}
      </div>
      
     
      
      {isEditing && (
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-blue-500   text-white rounded-md mr-2" onClick={toggleEdit}>Cancel</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save Changes</button>
        </div>
      )}
    </div>
  );
};

const fields = [
  { label: "Ductail ID", value: "7392836DEH" },
  { label: "Customer Name", value: "Enter Company Name" },
  { label: "Email", value: "Enter Email" },
  { label: "Password", value: "Enter Email" },
  { label: "Phone Number", value: "Enter Phone Number" },
  { label: "What's app Number", value: "Enter WhatsApp Number" },
  { label: "Age", value: "Enter Age" },
  { label: "Gender", value: "Enter Gender" },
];

export default CustomerDetails;
