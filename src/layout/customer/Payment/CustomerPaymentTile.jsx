import React from "react";
import CustomerPaymentRequest from "./CustomerPaymentRequest";
import CustomerHistory from "./CustomerHistrory";
import CustomerPaymentHistory from "./CustomerPaymentHistory";

const CustomerPaymentTile = () => {
  return (
    <>
      <div>
      <CustomerHistory />
      </div>
      <div className="mt-4">
        <CustomerPaymentRequest />
      </div>
      <div className="mt-4">
      <CustomerPaymentHistory />
      </div>
    </>
  );
};

export default CustomerPaymentTile;
