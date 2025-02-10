import React from "react";
import Layout from "../../layout/builders/Layout";

import ServicesTile from "../../layout/builders/ProjectServices/ServicesTile";
import ProjectBanner from "../../layout/builders/ProjectBanner";

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
