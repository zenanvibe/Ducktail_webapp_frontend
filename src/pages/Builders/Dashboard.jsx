import React from "react";
import Layout from "../../layout/builders/Layout";
import CardTile from "../../layout/builders/CardTile";
import ProjectTiles from "../../layout/builders/Dashboard/ProjectTile";
import ProfileProgress from "../../layout/builders/ProfileDetails/ProfileProgress";

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
      </Layout>
    </div>
  );
};

export default Dashboard;
