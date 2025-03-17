import React, {useState} from 'react';

const CustomerSupport = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    taluk: "",
    postcode: "",
    state: "",
    query: "",
  });
  
  // Sample data for dropdowns
  const states = ["Kerala", "Tamil Nadu", "Karnataka", "Maharashtra", "Delhi"];
  const districts = {
    "Kerala": ["Thiruvananthapuram", "Ernakulam", "Kozhikode", "Thrissur", "Kottayam"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tirunelveli"],
    "Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"]
  };
  const taluks = {
    "Thiruvananthapuram": ["Neyyattinkara", "Kattakada", "Chirayinkeezhu", "Nedumangadu", "Varkala"],
    "Ernakulam": ["Aluva", "Kanayannur", "Kochi", "Kothamangalam", "Kunnathunad"],
    "Chennai": ["Ambattur", "Egmore", "Guindy", "Mylapore", "T. Nagar"],
    "Bangalore": ["Bangalore North", "Bangalore South", "Yelahanka", "K.R. Pura", "Bangalore East"],
    "Mumbai": ["Andheri", "Borivali", "Kurla", "Bandra", "Dadar"]
    // Add more taluks for other districts as needed
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Reset dependent fields when state or district changes
    if (name === "state") {
      setFormData(prev => ({...prev, district: "", taluk: ""}));
    } else if (name === "district") {
      setFormData(prev => ({...prev, taluk: ""}));
    }
  };

  const handleBack = () => {
    setUserType("");
  };

  // Get available districts based on selected state
  const getAvailableDistricts = () => {
    return formData.state ? districts[formData.state] || [] : [];
  };
  
  // Get available taluks based on selected district
  const getAvailableTaluks = () => {
    return formData.district ? taluks[formData.district] || [] : [];
  };

  return (
    <div className="relative min-h-[80vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/Ducktail-Banner.jpg"
          alt="Interior Design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[80vh] items-center px-6 py-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Title Section */}
          <div className="text-white flex-1 px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="text-yellow-400">Are you stuck? Let Ducktail clear the way for you! </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-xl">
            Submit your query today, and our expert team will help you navigate through any challenge with ease and expertise
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-2xl "style={{ width: "100%" }}>
            {!userType ? (
           <div className="w-full text-center bg-gray-100 p-4 rounded-2xl shadow-md mb-4" >

             <h2 className="text-1xl font-bold mb-2">Are you a Builder or Customer?</h2>
             <div className="flex justify-center space-x-4">
               <label className="flex items-center space-x-2">
                 <input 
                   type="radio" 
                   name="userType" 
                   value="builder" 
                   className="accent-blue-500" 
                   onChange={(e) => setUserType(e.target.value)} 
                 />
                 <span>Builder</span>
               </label>
               <label className="flex items-center space-x-2">
                 <input 
                   type="radio" 
                   name="userType" 
                   value="customer" 
                   className="accent-blue-500" 
                   onChange={(e) => setUserType(e.target.value)} 
                 />
                 <span>Customer</span>
               </label>
             </div>
           </div>
           
            ) : (
              <div>
                <h2 className="text-1xl font-bold mb-4 text-center">
                  {userType === "builder" ? "Builder Form" : "Customer Form"}
                </h2>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Name *" className="border rounded-xl p-2 w-full" value={formData.name} onChange={handleChange} required />
                  <input type="email" name="email" placeholder="Email *" className="border rounded-xl p-2 w-full" value={formData.email} onChange={handleChange} required />
                  <input type="tel" name="phone" placeholder="Phone Number *" className="border rounded-xl p-2 w-full" value={formData.phone} onChange={handleChange} required />
                  
                  {/* State Dropdown */}
                  <select name="state" className="border rounded-xl p-2 w-full" value={formData.state} onChange={handleChange} required>
                    <option value="">State *</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  
                  {/* District Dropdown */}
                  <select name="district" className="border rounded-xl p-2 w-full" value={formData.district} onChange={handleChange} required disabled={!formData.state}>
                    <option value="">District *</option>
                    {getAvailableDistricts().map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                  
                  {/* Taluk Dropdown */}
                  <select name="taluk" className="border rounded-xl p-2 w-full" value={formData.taluk} onChange={handleChange} required disabled={!formData.district}>
                    <option value="">Taluk *</option>
                    {getAvailableTaluks().map(taluk => (
                      <option key={taluk} value={taluk}>{taluk}</option>
                    ))}
                  </select>
                  
                  <input type="text" name="postcode" placeholder="Postcode *" className="border rounded-xl p-2 w-full" value={formData.postcode} onChange={handleChange} required />
                  <textarea name="query" placeholder="Your Query *" className="border rounded-xl p-2 w-full col-span-1 sm:col-span-2" rows="4" value={formData.query} onChange={handleChange} required></textarea>
                  
                  <div className="grid grid-cols-2 gap-4 col-span-1 sm:col-span-2">
                    <button 
                      type="button" 
                      onClick={handleBack} 
                      className="bg-gray-500 text-white py-2 px-4 rounded-xl w-full h-10"
                    >
                      Back
                    </button>
                    <button 
                      type="submit" 
                      className="bg-blue-500 text-white py-2 px-4 rounded-xl w-full h-10"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;