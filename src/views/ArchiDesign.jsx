import React , { useEffect , useState} from "react";

const ArchiDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = ["All", "Residential", "Corporate", "Restaurant", "Commercial"];
  const projects = [
    "/assets/450.jpg","/assets/450.jpg","/assets/450.jpg","/assets/450.jpg","/assets/450.jpg",
    "/assets/450.jpg",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div>
    {/* First Section */}
    <div className="relative w-full h-[66vh] md:h-[66vh] bg-cover bg-center flex items-center justify-center px-6 md:px-16" style={{ backgroundImage: "url('/assets/Ducktail-Banner.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-55"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
  
      {/* Content */}
      <div className="relative z-10 max-w-5xl text-white flex flex-col items-center justify-center h-full text-center p-4">
  <h1 className="text-3xl md:text-5xl font-bold">ARCHITECTURAL DESIGNS</h1>
  <p className="mt-4 text-sm md:text-base text-gray-300">
    At Ducktail, we believe that architecture brings your dream of your home to life. Our architectural experts design spaces that are as functional as they are beautiful. We focus on your vision, needs, and lifestyle, crafting designs that blend style with practicality. Let us bring your dream home to life with precision and care.
  </p>
  <button className="mt-6 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
    VIEW PORTFOLIO
  </button>
</div>
      </div>

      {/* Second Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12">
  {/* Image Section */}
  <div className="w-full md:w-1/2 relative">
    <img
      src="/assets/DUCKTAIL-HOMELOAN.avif"
      alt="Interior Design"
      className="w-full h-auto"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 bg-white shadow-lg p-8 md:p-12 relative md:-ml-20 md:mt-0 mt-6 rounded-lg">
    <p className="text-gray-500 text-sm uppercase">/ Welcome to Inner</p>
    <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight">
      STYLISH DESIGNS, <br /> INNOVATIVE IDEAS
    </h2>
    <p className="mt-4 text-gray-600 text-sm md:text-base">
      Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts. Separated they live in
      Bookmarksgrove right at the coast of the Semantics, a large language
      ocean.
    </p>
    <button className="mt-6 px-6 py-2 bg-black text-white hover:bg-gray-800 transition">
      READ MORE
    </button>
  </div>
</div>


      {/* Services Section */}
      <div className="px-6 md:px-16 py-12">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold min-w-[200px] mx-auto">SERVICES</h2>
    <p className="text-gray-600 mt-2 max-w-lg mx-auto">
      Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    {[
      { title: "2D site and floor plan", icon: "🏠" },
      { title: "2.5D Design", icon: "🍽", image: "/path-to-restaurant.jpg" },
      { title: "3D Elevation Design", icon: "🏢" },
      { title: "3D Walkthrough", icon: "🔧" },
      { title: "Structural Plan", icon: "🏠" },
      { title: "Plumbing & Drainage Plan", icon: "🏢" },
      { title: "Interior 2D, 3D Drawings", icon: "💼" },
      { title: "Electrical & Communication Plan", icon: "🔧" },
    ].map((service, index) => (
      <div
        key={index}
        className="relative p-6 bg-white shadow-lg flex flex-col items-start transition hover:bg-black hover:text-white hover:cursor-pointer"
        style={{
          backgroundImage: service.image ? `url(${service.image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition"></div>
        <div className="relative z-10">
          <span className="text-xl">{service.icon}</span>
          <h3 className="mt-2 text-lg font-bold">{service.title}</h3>
          <p className="mt-1 text-sm">We bring the right people together to challenge established thinking and drive transform in 2020</p>
        </div>
      </div>
    ))}
  </div>

  <div className="text-center mt-8">
    <button className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition">
      VIEW ALL
    </button>
  </div>
</div>

{/* LASTEST PROJECT*/}
<div className="px-4 md:px-16 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">LATEST PROJECTS</h2>
        <p className="text-gray-600 mt-2 max-w-lg mx-auto">
          Far far away behind the word mountains far from the countries Vokalia
          and Consonantia there live the blind texts.
        </p>
      </div>

      <div className="flex justify-center space-x-2 mb-6 overflow-x-auto md:overflow-visible">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 border transition whitespace-nowrap ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-white text-black border-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-4">
        {projects.map((image, index) => (
          <div
            key={index}
            className="w-64 h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto"
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>

      {/* Testimonial Section */}
      <div className="px-6 md:px-16 py-12 bg-white text-black">
        <h2 className="text-3xl font-bold text-center">TESTIMONIALS</h2>
        <p className="mt-2 text-gray-600 text-center">Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.</p>
        <div className="mt-6 flex flex-col items-center">
          <img src="/assets/450.jpg" alt="Bailey Dupont" className="w-16 h-16 rounded-full mb-4" />
          <p className="text-gray-800 italic max-w-xl text-center">My soul is filled with a beautiful tranquility, reminiscent of the gentle mornings of spring that I embrace wholeheartedly, awakening a profound sense of contentment within me.</p>
          <p className="mt-2 font-bold">Bailey Dupont <span className="text-gray-500 text-sm">Designer</span></p>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="px-6 md:px-16 py-12 bg-black text-white">
        <h2 className="text-3xl font-bold">GET IN TOUCH</h2>
        <p className="text-gray-400 mt-2">Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-bold">Ubud, Bali</h3>
            <p className="mt-2">📞 (+62) 81 2345 1234</p>
            <p>✉️ Contact@domain.com</p>
            <p>📍 Jl. Seminyak No.19, Badung, Bali</p>

            <h3 className="text-xl font-bold mt-6">Denpasar, Bali</h3>
            <p className="mt-2">📞 (+62) 81 2345 1234</p>
            <p>✉️ Contact@domain.com</p>
            <p>📍 Jl. Niti Mandala, Renon, Bali</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Your Name", "Your Email", "Phone Number", "State", "District", "Taluk"].map((placeholder, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={placeholder}
                  className="border p-2 w-full"
                />
              ))}
            </div>
            <textarea className="border p-2 w-full mt-4" placeholder="Your Message" rows="4"></textarea>
            <button className="mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800 transition w-full">SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiDesign;
