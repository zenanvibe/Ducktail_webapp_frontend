import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import PortfolioTile from "../../layout/builders/ProjectPortfolio/PortfolioTile";

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Portfolio"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <div>
          <PortfolioTile />
        </div>
      </Layout>
    </div>
  );
};

export default Portfolio;
