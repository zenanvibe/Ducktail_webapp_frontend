import React from "react";
import Layout from "../layout/Layout";
import ProjectBanner from "../layout/ProjectBanner";
import NotificationTile from "../layout/NotificationTile";



const Notification = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Notification"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <NotificationTile />
      </Layout>
    </div>
  );
};


export default Notification;
