import React from "react";


import ProjectBanner from "../../layout/builders/ProjectBanner";
import Layout from "../../layout/customer/Layout";
import Livecard from "../../layout/customer/ProjectLive/LiveCard";


const ProjectLiveCard = () => {
    return (
        <div style={{ backgroundColor: "#E0E0E0" }}>

            <Layout>

                <div>
                    <ProjectBanner
                        title="  Live Project  "
                        imageUrl="https://via.placeholder.com/1200x300"
                    />
                </div>
                <div>
                    <Livecard/>
                </div>
            </Layout>


        </div>
    );
};

export default ProjectLiveCard;
