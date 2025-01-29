import React from "react";
import Layout from "../layout/Layout";

import ServicesTile from "../layout/ProjectServices/ServicesTile";
import ProjectBanner from "../layout/ProjectBanner";

const Services = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Services"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <ServicesTile />
      </Layout>
    </div>
  );
};

export default Services;
