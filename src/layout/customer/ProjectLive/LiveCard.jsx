import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import useProjectStatus from "../../../store/builders/useProjectStatus";
import useAuthStore from "../../../store/useAuthStore";
import { useNavigate } from 'react-router-dom';

const LiveCard = () => {
  const { projects, fetchProjects, isLoading, error } = useProjectStatus();
  const { user, userType } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const loadActiveProjects = async () => {
      try {
        if (userType === "customer" && user?.customerId) {
          await fetchProjects("active", 10, 1);
        }
      } catch (error) {
        console.error("Error fetching active projects:", error);
      }
    };
    loadActiveProjects();
  }, [user, userType, fetchProjects]);

  const handlenavigate = (name, path) => {
    console.log(`Navigating to ${name} at ${path}`);
    navigate(path);
  };

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto relative py-10 px-4 md:px-0">
      {isLoading ? (
        <p className="text-center text-gray-500">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-gray-500">No live projects found.</p>
      ) : (
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
          {projects.map((project) => (
            <SwiperSlide
              key={project._id}
              className="p-4 bg-white shadow-lg rounded-2xl border border-gray-300"
            >
              <h2 className="text-center text-lg font-semibold mb-3">
                {project.builder_company || "Unknown Builder"}
              </h2>
              <hr className="mb-3" />
              <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                  <span className="text-gray-600">📋</span>
                  <span className="font-medium">Company ID</span>
                </div>
                <p className="text-blue-600">{project.builder_ducktail_id || "N/A"}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">📋</span>
                  <span className="font-medium">Email</span>
                </div>
                <p className="text-blue-600">{project.builder_email|| "N/A"}</p><div className="flex items-center space-x-2">
                  <span className="text-gray-600">📋</span>
                  <span className="font-medium">Phone Number</span>
                </div>
                <p className="text-blue-600">{project.builder_contact || "N/A"}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">📋</span>
                  <span className="font-medium">Project Name</span>
                </div>
                <p className="text-blue-600">{project.project_name || "N/A"}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">📍</span>
                  <span className="font-medium">Project Location</span>
                </div>
                <p className="text-blue-600">{project.project_location || "N/A"}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">📅</span>
                  <span className="font-medium">Project Starting Date</span>
                </div>
                <p className="text-gray-800">
                  {project.starting_date 
                    ? new Date(project.starting_date).toLocaleDateString()
                    : "N/A"}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">✅</span>
                  <span className="font-medium">Status</span>
                </div>
                <p className="text-green-600 font-semibold capitalize">
                  {project.status || "N/A"}
                </p>
                {project.status === 'hold' && project.holdComment && (
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">📝</span>
                      <span className="font-medium">Hold Reason</span>
                    </div>
                    <p className="text-red-500">{project.holdComment}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <button className="flex-1 py-2 border border-gray-400 rounded-lg text-gray-800 font-medium flex items-center justify-center space-x-2"
                 onClick={() => handlenavigate("chat", "/chatbox")}>
                  <span>💬</span>
                  <span>Chat Us</span>
                </button>
                <button className="flex-1 py-2 border border-gray-400 rounded-lg text-gray-800 font-medium flex items-center justify-center space-x-2 ml-2"
                 onClick={() => handlenavigate("payment", "/paymenthistory")}>
                  <span>💰</span>
                  <span>Payment</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default LiveCard;
