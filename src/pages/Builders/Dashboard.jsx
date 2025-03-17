import React from "react";
import Layout from "../../layout/builders/Layout";
import CardTile from "../../layout/builders/CardTile";
import ProjectTiles from "../../layout/builders/Dashboard/ProjectTile";
import ProfileProgress from "../../layout/builders/ProfileDetails/ProfileProgress";
import Piechart from "../../layout/builders/Dashboard/Piechart";
import Barchart from "../../layout/builders/Dashboard/Barchart";

const Dashboard = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Layout>
        {/* Card and Profile Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <CardTile className="w-full md:w-2/3" />
          <ProfileProgress progress="80" className="w-full md:w-1/3" />
        </div>

        {/* Project Tiles Section */}
        <div className="mt-5 py-5">
          <ProjectTiles />
        </div>

        {/* Charts Section */}
        <div className="flex flex-col lg:flex-row justify-between mt-6 gap-4">
          <div className="w-full lg:w-2/3">
            <Barchart />
          </div>
          <div className="w-full lg:w-1/3">
            <Piechart />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
