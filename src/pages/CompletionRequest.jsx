import React from "react";
import Layout from "../layout/Layout";
import ProjectBanner from "../layout/ProjectBanner";
import CompletionRequestTable from "../layout/ProjectCompletionRequest/CompletionReqTable";


const CompletionRequest = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Completion Request "
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <CompletionRequestTable />
      </Layout>
    </div>
  );
};


export default CompletionRequest;
