import React ,{useState} from 'react';

const CustomerSupport = () => {
  const [userType, setUserType] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [formData, setFormData] = useState({
    ducktailId: "",
    name: "",
    email: "",
    phone: "",
    district: "",
    taluk: "",
    postcode: "",
    state: "",
    query: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
              <span className="text-yellow-400">Support </span>
              
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-xl">
            At Ducktail Construction, we craft relaxing outdoor spaces that bring your vision of a
royal garden experience to life.
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-2xl">
      <div className="text-center bg-gray-100 p-4 rounded-2xl shadow-md mb-4">
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

      <div className="text-center bg-gray-100 p-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-1xl font-bold mb-2">Are you a New Customer or a Ducktail Registered Customer?</h2>
        <div className="flex justify-center space-x-4">
          <label className="flex items-center space-x-2">
            <input 
              type="radio" 
              name="customerType" 
              value="new" 
              className="accent-blue-500" 
              onChange={(e) => setCustomerType(e.target.value)} 
            />
            <span>New Customer</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="radio" 
              name="customerType" 
              value="registered" 
              className="accent-blue-500" 
              onChange={(e) => setCustomerType(e.target.value)} 
            />
            <span>Ducktail Registered Customer</span>
          </label>
        </div>
      </div>

      {userType && customerType && (
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {customerType === "registered" && (
            <input 
              type="text" 
              name="ducktailId" 
              placeholder="Ducktail ID *" 
              className="border rounded-xl p-2 w-full" 
              value={formData.ducktailId}
              onChange={handleChange}
              required 
            />
          )}
          <input type="text" name="name" placeholder="Name *" className="border rounded-xl p-2 w-full" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email *" className="border rounded-xl p-2 w-full" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number *" className="border rounded-xl p-2 w-full" value={formData.phone} onChange={handleChange} required />
          <select name="district" className="border rounded-xl p-2 w-full" value={formData.district} onChange={handleChange} required>
            <option value="">District *</option>
            <option value="district1">District 1</option>
            <option value="district2">District 2</option>
         </select>
          <input type="text" name="taluk" placeholder="Taluk *" className="border rounded-xl p-2 w-full" value={formData.taluk} onChange={handleChange} required />
          <input type="text" name="postcode" placeholder="Postcode *" className="border rounded-xl p-2 w-full" value={formData.postcode} onChange={handleChange} required />
          <input type="text" name="state" placeholder="State *" className="border rounded-xl p-2 w-full" value={formData.state} onChange={handleChange} required />
          <textarea name="query" placeholder="Your Query *" className="border rounded-xl p-2 w-full col-span-1 sm:col-span-2" rows="4" value={formData.query} onChange={handleChange} required></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-xl col-span-1 sm:col-span-2">Submit</button>
        </form>
      )}
    </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
