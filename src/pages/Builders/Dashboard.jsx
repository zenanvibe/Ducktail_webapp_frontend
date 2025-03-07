import React from "react";
import Layout from "../../layout/builders/Layout";
import CardTile from "../../layout/builders/CardTile";
import ProjectTiles from "../../layout/builders/Dashboard/ProjectTile";
import ProfileProgress from "../../layout/builders/ProfileDetails/ProfileProgress";
import Piechart from "../../layout/builders/Dashboard/Piechart";
import Barchart from "../../layout/builders/Dashboard/Barchart";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        {/* <h2 className="text-2xl font-semibold mb-6">Welcome to the Dashboard</h2> */}
        <div className="flex items-start justify-between">
          <CardTile />
          <div className="mt-7 ">
            <ProfileProgress progress="80" />
          </div>
        </div>
        <div className="mt-5 py-5">
          <ProjectTiles />
        </div>
        <div className="flex justify-between">
          <div className="mt-3 py-5">
            <Barchart />
          </div>
          <div className="mt-3 py-5">
            <Piechart />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
