import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import NotificationTile from "../../layout/builders/NotificationTile";

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
