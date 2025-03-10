import { useState,useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import useProfileStore from "../../../store/customer/useProfileStore";
import toast from 'react-hot-toast'
const CustomerDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  
   
   const [profileData, setProfileData] = useState({});
   const [loading, setLoading] = useState(true);
  const { fetchProfile } = useProfileStore();
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const loadProfile = async () => {
    try {
      setLoading(true);
      const profile = await fetchProfile(); // Assume fetchProfile returns data
      setProfileData(profile);
      console.log(profile);
      
    } catch (error) {
      toast.error("Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);


const fields = [
  { label: "Ductail ID", value:  "758976DE" },
  { label: "Customer Name", value: "Enter Company Name" },
  { label: "Email", value: "Enter Email" },
  { label: "Password", value: "Enter Email" },
  { label: "Phone Number", value: "Enter Phone Number" },
  { label: "What's app Number", value: "Enter WhatsApp Number" },
  { label: "Age", value: "Enter Age" },
  { label: "Gender", value: "Enter Gender" },
];

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



export default CustomerDetails;
