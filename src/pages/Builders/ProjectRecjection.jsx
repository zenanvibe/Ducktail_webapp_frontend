import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import RejectionTable from "../../layout/builders/ProjectRejection/RejectionTable";

const ProjectRejection = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner title="Rejection Project" imageUrl="/assets/450.jpg" />
        </div>
        <RejectionTable />
      </Layout>
    </div>
  );
};

export default ProjectRejection;
