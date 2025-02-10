import React from "react";


import ProjectBanner from "../../layout/builders/ProjectBanner";
import Layout from "../../layout/customer/Layout";
import CompletedCard from "../../layout/customer/CompletedProject/CompletedCard";


const ProjectComplete = () => {
    return (
        <div style={{ backgroundColor: "#E0E0E0" }}>

            <Layout>

                <div>
                    <ProjectBanner
                        title="Completed Project "
                        imageUrl="https://via.placeholder.com/1200x300"
                    />
                </div>
                <div>
                    <CompletedCard/>
                </div>
            </Layout>


        </div>
    );
};

export default ProjectComplete;
