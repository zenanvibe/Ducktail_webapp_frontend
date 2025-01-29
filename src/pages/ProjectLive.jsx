import React from "react";
import Layout from "../layout/Layout";
import LiveTable from "../layout/ProjectLive/LiveTable";
import ProjectBanner from "../layout/ProjectBanner";

const ProjectLive = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Live Projects"
            imageUrl="https://via.placeholder.com/1200x300"
           />
        </div>
        <LiveTable />
        <LiveTable />
        <LiveTable />
      </Layout>
    </div>
  );
};

export default ProjectLive;
