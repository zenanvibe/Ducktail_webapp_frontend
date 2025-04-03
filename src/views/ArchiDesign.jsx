import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const ArchiDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = ["All", "Residential", "Corporate", "Commercial"];
  const projects = [
    "/assets/450.jpg", "/assets/450.jpg", "/assets/450.jpg", "/assets/450.jpg", "/assets/450.jpg",
    "/assets/450.jpg",
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Added state for services visibility
  const [showAllServices, setShowAllServices] = useState(false);
  const testimonials = [
    {
      text: "Now it’s easy to find nearby qualified builders with a 10-year warranty through Ducktail. I personally appreciate the Ducktail support team for their commitment. I strongly suggest that people join Ducktail as customers through the ''Join Us'' form before choosing their builders for their dream home. It’s really a big help for people like us.",
      name: "Abdul Rahman",
      role: "School teacher",
      rating: 5,
    },
    {
      text: " I learned about Ducktail during its trial phase, even before it officially launched. At first, I had doubts since it was a new platform, but I decided to try it for my house construction. The builder (Habriq Constitution) they suggested was very professional, and the Ducktail team provided full support throughout. Their customer dashboard is very good, with all the details like the 10-year warranty, the documents I signed, and communications with the builder during the project. Now, my house is finished exactly how I wanted, and I feel happy to be one of their early customers.",
      name: "Kishaly ",
      role: "Psychologist",
      rating: 5,
    },
    {
      text: "When I built my home, there was no Ducktail construction platform. I had to rely on a local builder who offered no accountability or clear communication. The process was stressful, with delays and unexpected costs. On top of that, I didn’t get a warranty or any post-construction support. If Ducktail had been available back then, it would have been a game-changer! With Ducktail, you get trusted builders, a 10-year warranty, and dedicated customer service. That level of support just isn’t possible with other builders.",
      name: "Dr. Vijay Kandeepan ",
      role: "Psychologist",
      rating: 5,
    },
    {
      text: "When I built my home, there was no Ducktail construction platform. I had to rely on a local builder who offered no accountability or clear communication. The process was stressful, with delays and unexpected costs. On top of that, I didn’t get a warranty or any post-construction support. If Ducktail had been available back then, it would have been a game-changer! With Ducktail, you get trusted builders, a 10-year warranty, and dedicated customer service. That level of support just isn’t possible with other builders.",
      name: "Dr. Vijay Kandeepan ",
      role: "Psychologist",
      rating: 5,
    },
  ];

  // Services array
  const services = [
    { title: "2D site and floor plan", icon: "🏠" },
    { title: "2.5D Design", icon: "🍽", image: "/path-to-restaurant.jpg" },
    { title: "3D Elevation Design", icon: "🏢" },
    { title: "3D Walkthrough", icon: "🔧" },
    { title: "Structural Plan", icon: "🏠" },
    { title: "Plumbing & Drainage Plan", icon: "🏢" },
    { title: "Interior 2D, 3D Drawings", icon: "💼" },
    { title: "Electrical & Communication Plan", icon: "🔧" },
  ];
  
  // Display only first 6 services initially
  const visibleServices = showAllServices ? services : services.slice(0, 6);

  return (
    <div>
      {/* First Section */}
      <div
        className="h-[66vh]  flex flex-col items-center justify-center text-center bg-cover  relative"
        style={{ backgroundImage: "url('/assets/archi design.png')" }}
      >        <div className="absolute inset-0 bg-black opacity-55"></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
    
        {/* Content */}
        <div className="relative z-10 max-w-5xl text-white flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">ARCHITECTURAL DESIGNS</h1>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            Our expert architects create functional, beautiful spaces that reflect your vision and lifestyle. Let us bring your dream home to life with designs that perfectly blend style and practicality.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          
          <img
            src="/assets/archi sketch.png"
            alt="Interior Design"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 bg-white shadow-lg p-8 md:p-12 relative md:-ml-20 md:mt-0 mt-6 rounded-lg">
          <p className="text-gray-500 text-sm uppercase">Welcome to Archi</p>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight">
            STYLISH DESIGNS, <br /> INNOVATIVE IDEAS
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Far far away, behind the word mountains, far from the countries Vokalia
            and Consonantia, there live the blind texts. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language
            ocean.
          </p>
        </div>
      </div>

      {/* Services Section - UPDATED */}
      <div className="px-6 md:px-16 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold min-w-[200px] mx-auto">SERVICES</h2>
          <p className="text-gray-600 mt-2 max-w-lg mx-auto">
            Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {visibleServices.map((service, index) => (
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
          <button 
            className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition"
            onClick={() => setShowAllServices(!showAllServices)}
          >
            {showAllServices ? "SHOW LESS" : "VIEW ALL"}
          </button>
        </div>
      </div>

      {/* LATEST PROJECT*/}
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
      <section className="py-0">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            OUR TESTIMONIALS
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 20000, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 }, // Show 1 slide for devices <640px
              768: { slidesPerView: 1 }, // Show 2 slides for devices ≥768px
            }}
            className="w-full md:h-[404px]"
          >
            {Array.from(
              { length: Math.ceil(testimonials.length / 2) },
              (_, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-wrap md:flex-nowrap justify-around items-start gap-8">
                    {/* First Testimonial (Left Column) */}
                    <div className="w-full md:w-1/2 md:h-[372px] bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                      <p className="text-gray-700 italic mb-4 text-center">
                        {testimonials[index * 2]?.text}
                      </p>
                      <div className="flex justify-center mb-2">
                        {Array.from(
                          { length: testimonials[index * 2]?.rating || 0 },
                          (_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-orange-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.09 3.26 1.93-6.36-5.09-3.74h6.3L10 2.5 12.95 8.16h6.3l-5.09 3.74 1.93 6.36z" />
                            </svg>
                          )
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 text-center">
                        {testimonials[index * 2]?.name}
                      </h4>
                      <p className="text-sm text-gray-600 text-center">
                        {testimonials[index * 2]?.role}
                      </p>
                    </div>

                    {/* Second Testimonial (Right Column) */}
                    {testimonials[index * 2 + 1] && (
                      <div className="w-full md:w-1/2 md:h-[372px] bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                        <p className="text-gray-700 italic mb-4 text-center">
                          {testimonials[index * 2 + 1]?.text}
                        </p>
                        <div className="flex justify-center mb-2">
                          {Array.from(
                            {
                              length: testimonials[index * 2 + 1]?.rating || 0,
                            },
                            (_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-orange-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.09 3.26 1.93-6.36-5.09-3.74h6.3L10 2.5 12.95 8.16h6.3l-5.09 3.74 1.93 6.36z" />
                              </svg>
                            )
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 text-center">
                          {testimonials[index * 2 + 1]?.name}
                        </h4>
                        <p className="text-sm text-gray-600 text-center">
                          {testimonials[index * 2 + 1]?.role}
                        </p>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </section>

      {/* Get In Touch Section */}
      <div className="px-6 md:px-16 py-12 bg-black text-white">
        <h2 className="text-3xl font-bold">GET IN TOUCH</h2>
        <p className="text-gray-400 mt-2">Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-bold">Ducktail</h3>
            <p className="mt-2">📞 (+62) 81 2345 1234</p>
            <p>✉️ Contact@ducktail.com</p>
            <p>📍 ductail builders website</p>

            <h3 className="text-xl font-bold mt-6">Ducktail</h3>
            <p className="mt-2">📞 (+62) 81 2345 1234</p>
            <p>✉️ Contact@ducktail.comm</p>
            <p>📍 ductail builders website</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Your Name", "Your Email", "Phone Number"].map((placeholder, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={placeholder}
                  className="border p-2 w-full"
                />
              ))}
              
              <select className="border p-2 w-full">
                <option value="">Select State</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
              </select>
              
              <select className="border p-2 w-full">
                <option value="">Select District</option>
                <option value="district1">District 1</option>
                <option value="district2">District 2</option>
              </select>
              
              <select className="border p-2 w-full">
                <option value="">Select Taluk</option>
                <option value="taluk1">Taluk 1</option>
                <option value="taluk2">Taluk 2</option>
              </select>
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