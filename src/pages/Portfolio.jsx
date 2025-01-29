import React from "react";
import Layout from "../layout/Layout";
import ProjectBanner from "../layout/ProjectBanner";
import PortfolioTile from "../layout/ProjectPortfolio/PortfolioTile";

const Portfolio = () => {
  return (
    <div  style={{ backgroundColor: "#E0E0E0" }}>
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
