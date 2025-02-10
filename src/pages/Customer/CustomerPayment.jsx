import React from "react";
import Layout from "../../layout/customer/Layout";
import CustomerChatBanner from "../../layout/customer/ChatBox.jsx/CustomerChatBanner";
import CustomerPaymentTile from "../../layout/customer/Payment/CustomerPaymentTile";

const CustomerPayment = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        {/* <h2 className="text-2xl font-semibold mb-6">Welcome to the Dashboard</h2> */}
        <div>
          <CustomerChatBanner coverImageUrl="/assets/450.jpg" name="Payment" />
        </div>
        <div className="mt-5">
          < CustomerPaymentTile />
        </div>
      </Layout>
    </div>
  );
};

export default CustomerPayment;
