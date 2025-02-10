import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectInviteForm from "../../layout/builders/ProjectInvite/ProjectInviteForm";
import ProjectBanner from "../../layout/builders/ProjectBanner";

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
