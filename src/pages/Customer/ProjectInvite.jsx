import React from "react";


import ProjectBanner from "../../layout/builders/ProjectBanner";
import Layout from "../../layout/customer/Layout";
import ProjectInviteForm from "../../layout/customer/ProjectInvite/ProjectInviteForm";


const ProjectInvite = () => {
    return (
        <div style={{ backgroundColor: "#E0E0E0" }}>

            <Layout>

                <div>
                    <ProjectBanner
                        title=" Project Invite "
                        imageUrl="https://via.placeholder.com/1200x300"
                    />
                </div>
                <div>
                    <ProjectInviteForm />
                </div>
            </Layout>


        </div>
    );
};

export default ProjectInvite;
