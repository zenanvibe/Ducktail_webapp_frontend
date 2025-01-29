import React from "react";
import Layout from "../layout/Layout";
import ProjectBanner from "../layout/ProjectBanner";
import DocumentUpload from "../layout/Documentupload.";


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
