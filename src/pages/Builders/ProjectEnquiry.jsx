import React from "react";
import Layout from "../../layout/Layout";
import ProjectBanner from "../../layout/ProjectBanner";
import ProjectEnquiryTile from "../../layout/builders/ProjectEnquiry/ProjectEnquiryTile";



const ProjectEnquiry = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Project Enquiry"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <ProjectEnquiryTile />
      </Layout>
    </div>
  );
};


export default ProjectEnquiry;
