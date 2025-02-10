import React from "react";
import Layout from "../../layout/customer/Layout";
import CustomerChatTile from "../../layout/customer/ChatBox.jsx/CustomerChatTile";
import CustomerChatBanner from "../../layout/customer/ChatBox.jsx/CustomerChatBanner";

const CustomerChatBox = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        {/* <h2 className="text-2xl font-semibold mb-6">Welcome to the Dashboard</h2> */}
        <div>
            <CustomerChatBanner
              coverImageUrl="/assets/450.jpg" 
              name="Chat"/>
        </div>
        <div className="mt-5">
          <CustomerChatTile />
        </div>
      </Layout>
    </div>
  );
};

export default CustomerChatBox;
