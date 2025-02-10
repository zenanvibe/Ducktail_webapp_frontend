import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import PendingTable from "../../layout/builders/ProjectPending/PendingTable";

const ProjectPending = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Pending Project"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <PendingTable />
      </Layout>
    </div>
  );
};

export default ProjectPending;
