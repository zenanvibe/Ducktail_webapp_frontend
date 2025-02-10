import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const LiveCard = () => {
  return (
    <div className="max-w-2xl mx-auto relative py-10 px-4 md:px-0">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: -40 },
          1024: { slidesPerView: 2, spaceBetween: -40 }
        }}
        spaceBetween={-20}
        coverflowEffect={{ rotate: 0, stretch: 50, depth: 100, modifier: 2.5 }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        modules={[EffectCoverflow, Navigation]}
        className="w-full"
      >
        {[1, 2, 3].map((item) => (
          <SwiperSlide key={item} className="p-4 bg-white shadow-lg rounded-2xl border border-gray-300">
            <h2 className="text-center text-lg font-semibold mb-3">JK BUILDERS</h2>
            <hr className="mb-3" />
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">📋</span>
                <span className="font-medium">Company ID</span>
              </div>
              <p className="text-blue-600">134253773</p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">✉️</span>
                <span className="font-medium">Email</span>
              </div>
              <p className="text-blue-600">Karthi@Gmail.Com</p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">📞</span>
                <span className="font-medium">Phone Number</span>
              </div>
              <p className="text-gray-800">7894561230</p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">📅</span>
                <span className="font-medium">Project Starting Date</span>
              </div>
              <p className="text-gray-800">03 Nov 2024</p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">📍</span>
                <span className="font-medium">Live Location</span>
              </div>
              <p className="text-blue-600">Madurai</p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">✅</span>
                <span className="font-medium">Status</span>
              </div>
              <p className="text-green-600 font-semibold">Active</p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="flex-1 py-2 border border-gray-400 rounded-lg text-gray-800 font-medium flex items-center justify-center space-x-2">
                <span>💬</span>
                <span>Chat Us</span>
              </button>
              <button className="flex-1 py-2 border border-gray-400 rounded-lg text-gray-800 font-medium flex items-center justify-center space-x-2 ml-2">
                <span>💰</span>
                <span>Payment</span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation Buttons */}
      {/* <button className="swiper-button-prev absolute left-4 md:left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md">
        <ChevronLeft size={24} />
      </button>
      <button className="swiper-button-next absolute right-4 md:right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md">
        <ChevronRight size={24} />
      </button> */}
    </div>
  );
};

export default LiveCard;
