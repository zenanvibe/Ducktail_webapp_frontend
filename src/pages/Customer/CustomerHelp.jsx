import React from "react";


import ProjectBanner from "../../layout/builders/ProjectBanner";
import Layout from "../../layout/customer/Layout";
import HelpDesk from "../../layout/customer/HelpDesk/HelpDesk";


const CustomerHelp = () => {
    return (
        <div style={{ backgroundColor: "#E0E0E0" }}>

            <Layout>

                <div>
                    <ProjectBanner
                        title="Support"
                        imageUrl="https://via.placeholder.com/1200x300"
                    />
                </div>
                <div>
                    <HelpDesk />
                </div>
            </Layout>


        </div>
    );
};

export default CustomerHelp;
