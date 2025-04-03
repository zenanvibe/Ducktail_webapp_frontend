import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProjectStatus from "../../../store/builders/useProjectStatus";
import ProjectTable from "../ProjectTable";

const CompletionRequestTable = () => {
  const navigate = useNavigate();
  const { projects, isLoading, fetchProjects, updateProjectStatus } = useProjectStatus();

  useEffect(() => {
    fetchProjects("upload_document"); // Fetch only projects with upload_document status
  }, [fetchProjects]);

  const handleStatusChange = async (projectId, newStatus) => {
    await updateProjectStatus(projectId, newStatus);
    
    // Navigate based on status change
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
      case 'upload_document':
        navigate('/builder/completionrequest');
        break;
      default:
        fetchProjects("upload_document");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'hold', label: 'Hold' },
    { value: 'completed', label: 'Completed' },
    { value: 'upload_document', label: 'Upload Document' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' }
  ];

  return (
    <ProjectTable 
      title="Completion Requests"
      projects={projects}
      handleStatusChange={handleStatusChange}
      navigate={navigate}
      statusOptions={statusOptions}
    />
  );
};

export default CompletionRequestTable;
