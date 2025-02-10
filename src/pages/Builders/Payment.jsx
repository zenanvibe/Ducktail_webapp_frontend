import React from "react";
import Layout from "../../layout/builders/Layout";

import ChatBanner from "../../layout/builders/Chatbox/ChatBanner";
import PaymentTile from "../../layout/builders/PaymentTile";

const Payment = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        {/* <h2 className="text-2xl font-semibold mb-6">Welcome to the Dashboard</h2> */}
        <div>
          <ChatBanner coverImageUrl="/assets/450.jpg" name="Payment" />
        </div>
        <div className="mt-5">
          <PaymentTile />
        </div>
      </Layout>
    </div>
  );
};

export default Payment;
