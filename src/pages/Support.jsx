import React from "react";
import Layout from "../layout/Layout";
import ProjectBanner from "../layout/ProjectBanner";
import SupportDesk from "../layout/Support/SuppportDeck";

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
