import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useProjectStatus from "../../../store/builders/useProjectStatus";
import ProjectTable from "../ProjectTable";
// import StatusBadge from "../status/StatusBadge";

const HoldTable = () => {
  const navigate = useNavigate();
  const { projects, isLoading, fetchProjects, updateProjectStatus } = useProjectStatus();
  const [showHoldModal, setShowHoldModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [holdComment, setHoldComment] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    fetchProjects("hold"); // Fetch only hold projects
  }, [fetchProjects]);

  const handleStatusChange = async (projectId, newStatus) => {
    if (newStatus === 'hold') {
      setSelectedProjectId(projectId);
      setShowHoldModal(true);
      return;
    }
    
    await updateProjectStatus(projectId, newStatus);
    // Navigate to respective pages based on status
    switch(newStatus) {
      case 'active':
        navigate('/builder/liveproject');
        break;
      case 'hold':
        navigate('/builder/holdproject');
        break;
      case 'completed':
        navigate('/builder/completedproject');
        break;
      case 'approved':
        navigate('/builder/pendingproject');
        break;
      case 'rejected':
        navigate('/builder/rejectionproject');
        break;
      default:
        fetchProjects("hold");
    }
  };

  const handleHoldSubmit = async () => {
    if (!holdComment.trim()) return;
    
    await updateProjectStatus(selectedProjectId, 'hold', holdComment);
    setShowHoldModal(false);
    setHoldComment("");
    setSelectedProjectId(null);
    navigate('/builder/holdproject');
  };

  const handleViewComment = async (projectId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/projects/${projectId}`, {
        headers: {
          'accept': '*/*',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJjdXN0b21lcklkIjoiQ1VTVC04MzQ3NDQtNjMwOSIsImVtYWlsIjoiYWthc2hAZ21haWwuY29tIiwibmFtZSI6IlNpdGhpcmkgIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzQzMDU2NjM1LCJleHAiOjE3NDM2NjE0MzV9.23GlbDqhJ1lUrDxSPetEilYjP420l-8wRT4V_nD5m6I'
        }
      });
      const data = await response.json();
      setProjectDetails(data.project);
      setShowCommentModal(true);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* Hold Modal */}
      {showHoldModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl transform transition-all">
            <h3 className="text-lg font-semibold mb-4">Add Hold Comment</h3>
            <textarea
              value={holdComment}
              onChange={(e) => setHoldComment(e.target.value)}
              placeholder="Enter reason for holding the project..."
              className="w-full h-32 p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowHoldModal(false);
                  setHoldComment("");
                  setSelectedProjectId(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleHoldSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comment History Modal */}
      {showCommentModal && projectDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[600px] shadow-xl transform transition-all">
            <h3 className="text-xl font-semibold mb-4">Hold Comments History</h3>
            <div className="mb-4">
              <p className="font-medium">Project: {projectDetails.project_name}</p>
              <p className="text-gray-600">Location: {projectDetails.project_location}</p>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              {projectDetails.holds.map((hold) => (
                <div key={hold.id} className="border-b py-3">
                  <p className="text-gray-800">{hold.comment}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(hold.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowCommentModal(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <ProjectTable 
        title="Hold Projects"
        projects={projects}
        handleStatusChange={handleStatusChange}
        navigate={navigate}
        extraActions={(project) => (
          <button
            onClick={() => handleViewComment(project.id)}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors duration-200"
          >
            View Comments
          </button>
        )}
      />
    </>
  );
};

export default HoldTable;
