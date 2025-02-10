import React from "react";
import PaymentValue from "./Payment/PaymentValue";
import PaymentRequest from "./Payment/PaymentRequest";
import PaymentHistory from "./Payment/PaymentHistory";

const PaymentTile = () => {
  return (
    <>
      <div>
        <PaymentValue />
      </div>
      <div className="mt-4">
        <PaymentRequest />
      </div>
      <div className="mt-4">
        <PaymentHistory />
      </div>
    </>
  );
};

export default PaymentTile;
