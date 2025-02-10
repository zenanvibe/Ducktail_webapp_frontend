import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import CompletedTable from "../../layout/builders/ProjectCompleted/CompletedTable";

const ProjectCompleted = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Completed Project"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <CompletedTable />
      </Layout>
    </div>
  );
};

export default ProjectCompleted;
