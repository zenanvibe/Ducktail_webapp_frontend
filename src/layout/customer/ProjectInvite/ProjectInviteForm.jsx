import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, BadgeCheck, Loader2 } from "lucide-react";
import useProjectEnqStore from "../../../store/customer/useProjectEnqStore";

const ProjectInviteForm = () => {
  const navigate = useNavigate();
  const { fetchCustomerEnquiries, enquiries, isLoading, updateProjectStatus } = useProjectEnqStore();
  const [pendingProjects, setPendingProjects] = useState([]);
  
  // Remove currentEnquiryIndex and refreshTrigger states as they're not needed

  useEffect(() => {
    const loadPendingEnquiries = async () => {
      try {
        await fetchCustomerEnquiries("pending_approval");
      } catch (error) {
        console.error("Error fetching pending enquiries:", error);
      }
    };
    loadPendingEnquiries();
  }, []); // Remove all dependencies to run only once on mount

  // Update pendingProjects when enquiries change
  useEffect(() => {
    const pendingOnly = enquiries.filter(project => project.status === "pending_approval");
    setPendingProjects(pendingOnly);
  }, [enquiries]);

  const handleAccept = async (enquiry) => {
    try {
      const response = await updateProjectStatus(enquiry.id, 'accept');
      if (response.success) {
        navigate("/customer/livecard");
      }
    } catch (error) {
      console.error("Error accepting project:", error);
    }
  };

  const handleDecline = async (enquiry) => {
    try {
      const response = await updateProjectStatus(enquiry.id, 'decline');
      if (response.success) {
        navigate("/customer/rejectcard");
      }
    } catch (error) {
      console.error("Error declining project:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!pendingProjects || pendingProjects.length === 0) {
    return <div className="text-center text-gray-600 p-4">No pending project invitations available at this time.</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pendingProjects.map((enq, index) => (
          <div key={enq.id} className="bg-white rounded-2xl shadow-lg p-6">
            {/* Company Image */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden">
                <img
                  src="/assets/DUCKTAIL-HOMELOAN.aviF"
                  alt="Company Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl font-bold text-center mb-2">
              {enq?.builder_name || "N/A"}
            </h1>

            {/* Subtitle */}
            <p className="text-sm text-gray-600 text-center mb-4">
              Project Name : {enq?.project_name || "N/A"}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Company ID */}
              <div className="flex items-center justify-center gap-2">
                <BadgeCheck className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-xs text-gray-500">Company Ducktail ID</div>
                  <div className="text-sm font-medium">
                    {enq?.builder_ducktail_id || "N/A"}
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="text-xs text-gray-500">Phone Number</div>
                  <div className="text-sm font-medium">
                    {enq?.builder_contact || "N/A"}
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-12">
              <button 
                onClick={() => handleDecline(enq, index)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition"
              >
                DECLINE
              </button>
              <button 
                onClick={() => handleAccept(enq, index)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition"
              >
                ACCEPT
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Support Button */}
      <button
        className="fixed bottom-4 right-4 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
        onClick={() => navigate("/help")}
      >
        <img src="/assets/Support.png" alt="Icon" className="w-12 h-12" />
      </button>
    </div>
  );
};

export default ProjectInviteForm;
