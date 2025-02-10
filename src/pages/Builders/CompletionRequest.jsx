import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import CompletionRequestTable from "../../layout/builders/ProjectCompletionRequest/CompletionReqTable";

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
