import React, { useEffect } from "react";
import { Mail, Phone, BadgeX } from "lucide-react";
import useProjectStatus from "../../../store/builders/useProjectStatus";
import useAuthStore from "../../../store/useAuthStore";

const RejectionCard = () => {
  const { projects, fetchProjects, isLoading, error } = useProjectStatus();
  const { user, userType } = useAuthStore();

  useEffect(() => {
    if (userType === "customer" && user?.customerId) {
      fetchProjects("rejected", 10, 1);
    }
  }, [user, userType, fetchProjects]);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading projects...</p>;
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 text-lg">
          Great news! You currently have no rejected projects. All your project applications are either under review or have been approved.
        </p>
      </div>
    );
  }

  return (
    <>
      {projects.map((project) => (
        <div key={project._id} className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg text-center md:max-w-md mb-6">
          <div className="flex justify-center">
            <img
              src="/assets/DUCKTAIL-HOMELOAN.aviF"
              alt="Profile"
              className="w-16 h-16 rounded-md object-cover"
            />
          </div>
          <h2 className="mt-2 text-lg font-semibold">{project.builder_company || "Unknown Builder"}</h2>
          <div className="mt-4 text-sm text-gray-700 grid grid-cols-2 gap-4 text-left">
            <div>
              <div className="flex items-center gap-2">
                <BadgeX size={16} />
                <span>Project Name</span>
              </div>
              <div className="pl-6">
                <span className="text-gray-500 block">{project.project_name || "N/A"}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>Location</span>
              </div>
              <div className="pl-6">
                <span className="text-blue-500 block">{project.project_location || "N/A"}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>Starting Date</span>
              </div>
              <div className="pl-6">
                <span className="text-gray-500 block">
                  {project.starting_date
                    ? new Date(project.starting_date).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BadgeX size={16} />
                <span>Status</span>
              </div>
              <div className="pl-6">
                <span className="text-red-500 font-semibold block capitalize">{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RejectionCard;
