import React from "react";
import Layout from "../../layout/builders/Layout";
import ProjectBanner from "../../layout/builders/ProjectBanner";
import DocumentUpload from "../../layout/builders/Documentupload.";

const DcoumentUploadReq = () => {
  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProjectBanner
            title="Upload Documents"
            imageUrl="https://via.placeholder.com/1200x300"
          />
        </div>
        <DocumentUpload />
      </Layout>
    </div>
  );
};

export default DcoumentUploadReq;
