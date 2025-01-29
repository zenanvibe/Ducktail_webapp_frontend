import React from "react";
import Layout from "../layout/Layout";
import ProjectBanner from "../layout/ProjectBanner";
import PendingTable from "../layout/ProjectPending/PendingTable";

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
