import React from "react";
import Layout from "../../layout/builders/Layout";
import LiveTable from "../../layout/builders/ProjectLive/LiveTable";
import ProjectBanner from "../../layout/builders/ProjectBanner";

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
