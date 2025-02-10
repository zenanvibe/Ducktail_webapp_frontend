import React from "react";


import ProjectBanner from "../../layout/builders/ProjectBanner";
import Layout from "../../layout/customer/Layout";
import ProjectHoldCard from "../../layout/customer/HoldProject/ProjectHoldCard";


const HoldCard = () => {
    return (
        <div style={{ backgroundColor: "#E0E0E0" }}>

            <Layout>

                <div>
                    <ProjectBanner
                        title=" Hold Project  "
                        imageUrl="https://via.placeholder.com/1200x300"
                    />
                </div>
                <div>
                    <ProjectHoldCard />
                </div>
            </Layout>


        </div>
    );
};

export default HoldCard;
