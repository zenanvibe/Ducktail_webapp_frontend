import React from "react";
import Layout from "../layout/Layout";
import ProjectBanner from "../layout/ProjectBanner";
import HoldTable from "../layout/ProjectHold/HoldTable";

const ProjectHold = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Hold Project"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <HoldTable />
      </Layout>
    </div>
  );
};

export default ProjectHold;
