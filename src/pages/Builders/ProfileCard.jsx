import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import ProfileCard from "../../layout/builders/ProfileCard/ProfileCard";

const ProjectCard = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Hold Project"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <ProfileCard />
      </Layout>
    </div>
  );
};

export default ProjectCard;
