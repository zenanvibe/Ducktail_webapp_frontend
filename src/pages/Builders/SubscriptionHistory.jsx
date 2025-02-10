import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import SubscriptionHistoryTile from "../../layout/builders/Subscription/SubscriptionHistoryTile";




const SubscriptionHistory = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Subscription History"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <SubscriptionHistoryTile />
      </Layout>
    </div>
  );
};


export default SubscriptionHistory;
