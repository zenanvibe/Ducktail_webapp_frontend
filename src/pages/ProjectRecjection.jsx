import React from "react";
import Layout from "../layout/Layout";
import ProjectBanner from "../layout/ProjectBanner";
import RejectionTable from "../layout/ProjectRejection/RejectionTable";

const ProjectRejection = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Rejection Project"
            imageUrl="/assets/450.jpg"
          />
        </div>
        <RejectionTable />
      </Layout>
    </div>
  );
};

export default ProjectRejection;
