import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useProjectStatus from "../../../store/builders/useProjectStatus";
import ProjectTable from "../ProjectTable";

const CompletedTable = () => {
  const navigate = useNavigate();
  const { projects, isLoading, fetchProjects, updateProjectStatus } = useProjectStatus();
  const [showHoldModal, setShowHoldModal] = useState(false);
  const [holdComment, setHoldComment] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    fetchProjects("completed"); // Fetch only completed projects
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
        fetchProjects("completed");
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

      <ProjectTable 
        title="Completed Projects"
        projects={projects}
        handleStatusChange={handleStatusChange}
        navigate={navigate}
      />
    </>
  );
};

export default CompletedTable;
