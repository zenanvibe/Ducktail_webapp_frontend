import React from "react";
import Layout from "../../layout/builders/Layout";
import SubscriptionTile from "../../layout/builders/Subscription/SubscriptionTile";





const Subscription = () => {
    return (
        <div style={{ backgroundColor: "#E0E0E0" }}>
            <Layout>

                <SubscriptionTile />
            </Layout>
        </div>
    );
};


export default Subscription;
