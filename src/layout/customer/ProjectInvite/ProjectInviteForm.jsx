import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, BadgeCheck } from "lucide-react";
import useProjectEnqStore from "../../../store/customer/useProjectEnqStore";

const ProjectInviteForm = () => {
  const navigate = useNavigate();
  const { fetchCustomerEnquiries, enquiries, isLoading, updateProjectStatus } = useProjectEnqStore();
  const [currentEnquiryIndex, setCurrentEnquiryIndex] = useState(0);

  useEffect(() => {
    fetchCustomerEnquiries();
  }, [fetchCustomerEnquiries]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!enquiries || enquiries.length === 0) {
    return <div className="text-center text-gray-600 p-4">No project invitations available at this time.</div>;
  }

  const enquiry = enquiries[currentEnquiryIndex];

  const handleAccept = async () => {
    await updateProjectStatus(enquiry.project_id, 'accept');
    if (currentEnquiryIndex < enquiries.length - 1) {
      setCurrentEnquiryIndex(currentEnquiryIndex + 1);
    }
    navigate("/livecard");
  };

  const handleDecline = async () => {
    await updateProjectStatus(enquiry.project_id, 'decline');
    if (currentEnquiryIndex < enquiries.length - 1) {
      setCurrentEnquiryIndex(currentEnquiryIndex + 1);
    }
    navigate("/rejectcard");
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 w-full">
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
        {enquiry?.builder_name || "N/A"}
      </h1>

      {/* Subtitle */}
      <p className="text-sm text-gray-600 text-center mb-4">
      {enquiry?.comments || "N/A"}
      </p>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Company ID */}
        <div className="flex items-center justify-center gap-2">
          <BadgeCheck className="w-5 h-5 text-green-500" />
          <div>
            <div className="text-xs text-gray-500">Company Ducktail ID</div>
            <div className="text-sm font-medium">
              {enquiry?.builder_ducktail_id || "N/A"}
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-5 h-5 text-blue-500" />
          <div>
            <div className="text-xs text-gray-500">Phone Number</div>
            <div className="text-sm font-medium">
              {enquiry?.builder_contact || "N/A"}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-12">
        <button 
          onClick={handleDecline}
          className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition"
        >
          DECLINE
        </button>
        <button 
          onClick={handleAccept}
          className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition"
        >
          ACCEPT
        </button>
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
