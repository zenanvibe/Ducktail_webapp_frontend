import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import useProjectStatus from '../../../store/builders/useProjectStatus';
import useAuthStore from '../../../store/useAuthStore';

const ProjectHoldCard = () => {
  const navigate = useNavigate();
  const { projects, fetchProjects, isLoading, error } = useProjectStatus();
  const { user, userType } = useAuthStore();

  useEffect(() => {
    if (userType === "customer" && user?.customerId ) {
      fetchProjects("hold", 10, 1);
    }
  }, [user, userType, fetchProjects]);

  const handlenavigate = (name, path) => {
    console.log(`Navigating to ${name} at ${path}`);
    navigate(path);
  };

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
          Currently, there are no projects on hold in your portfolio. All your projects are proceeding as scheduled.
        </p>
      </div>
    );
  }

  return (
    <>
      {projects.map((project) => (
        <div key={project._id} className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-6 relative mb-6">
          <div className="flex items-start gap-4">
            {/* Left side - Image */}
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/assets/DUCKTAIL-HOMELOAN.aviF"
                alt="Building"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="flex-1">
              {/* Company Name */}
              <h2 className="text-xl font-bold text-gray-900">
                {project.builder_company || "Unknown Builder"}
              </h2>
              
              {/* Location */}
              <div className="flex items-center gap-2 mt-1">
                <Building2 className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">{project.project_location || "N/A"}</span>
              </div>

              {/* Project Name instead of Phone Number */}
              <div className="mt-1">
                <span className="text-gray-600">{project.project_name || "N/A"}</span>
              </div>
            </div>
          </div>

          {/* Hold Comments History */}
          <div className="mt-6 mb-16 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Hold Comments History</h3>
            <div className="space-y-3">
              {project.holds?.map((hold, index) => (
                <div key={index} className="border-b border-gray-200 pb-2">
                  <p className="text-gray-800">{hold.comment}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(hold.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="absolute bottom-3 right-4 flex gap-2">
            <button
              className="w-24 px-3 py-2 bg-white border-2 border-gray-900 rounded-lg text-gray-900 font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
              onClick={() => handlenavigate("Chat", "/chatbox")}
            >
              <span className="text-xl">💬</span> Chat
            </button>

            <button className="w-24 px-3 py-2 bg-white border-2 border-gray-900 rounded-lg text-gray-900 font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
                          onClick={() => handlenavigate("payment", "/paymenthistory")}
                          >
              <span className="text-xl">₹</span> Payment
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectHoldCard;
