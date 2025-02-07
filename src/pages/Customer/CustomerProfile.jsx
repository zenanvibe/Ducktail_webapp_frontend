import React from "react";


import Layout from "../../layout/customer/Layout";
import CustomerBanner from "../../layout/customer/CustomerBanner";



const CustomerProfile = () => {
    return (
        <div style={{ backgroundColor: "#E0E0E0" }}>

            <Layout>

                <div>
                <CustomerBanner
            coverImageUrl="/assets/450.jpg" // Local cover image
            profileImageUrl="/assets/images.jpg" // Local profile image
            name="John Doe"
            role="UX Designer"
            location="San Francisco"
            progress={75}
          />
                </div>
                
            </Layout>


        </div>
    );
};

export default CustomerProfile;
