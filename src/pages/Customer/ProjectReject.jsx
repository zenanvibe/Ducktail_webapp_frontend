import React from "react";


import ProjectBanner from "../../layout/builders/ProjectBanner";
import Layout from "../../layout/customer/Layout";
import RejectionCard from "../../layout/customer/RejectedProject/RejectionCard";


const ProjectReject = () => {
    return (
        <div style={{ backgroundColor: "#E0E0E0" }}>

            <Layout>

                <div>
                    <ProjectBanner
                        title="Rejected Project "
                        imageUrl="https://via.placeholder.com/1200x300"
                    />
                </div>
                <div>
                    <RejectionCard />
                </div>
            </Layout>


        </div>
    );
};

export default ProjectReject;
