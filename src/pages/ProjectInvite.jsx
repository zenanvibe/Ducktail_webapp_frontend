import React from "react";
import Layout from "../layout/Layout";
import ProjectInviteForm from "../layout/ProjectInvite/ProjectInviteForm";
import ProjectBanner from "../layout/ProjectBanner";


const ProjectInvite = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
                  <ProjectBanner
                    title="Project Invite"
                    imageUrl="https://via.placeholder.com/1200x300"
                   />
                </div>
        <div>
          <ProjectInviteForm />
        </div>
        
      </Layout>
    </div>
  );
};

export default ProjectInvite;
