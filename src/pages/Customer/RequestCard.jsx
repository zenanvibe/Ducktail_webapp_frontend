import React from "react";


import ProjectBanner from "../../layout/ProjectBanner";
import Layout from "../../layout/customer/Layout";
import CompleteRequestCard from "../../layout/customer/CompleteRequest/CompleteRequestCard";


const RequestCard = () => {
    return (
        <div style={{ backgroundColor: "#E0E0E0" }}>

            <Layout>

                <div>
                    <ProjectBanner
                        title="Completion Request "
                        imageUrl="https://via.placeholder.com/1200x300"
                    />
                </div>
                <div>
                    <CompleteRequestCard/>
                </div>
            </Layout>


        </div>
    );
};

export default RequestCard;
