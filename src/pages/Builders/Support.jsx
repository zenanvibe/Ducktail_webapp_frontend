import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import SupportDesk from "../../layout/builders/Support/SuppportDeck";

const Support = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Support"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <SupportDesk />
      </Layout>
    </div>
  );
};

export default Support;
