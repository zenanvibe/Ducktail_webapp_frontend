import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../../views/Homepage";
import HomeLoan from "../../views/HomeLoan";
import Landscaping from "../../views/Landscaping";
import ConstructionConsultation from "../../views/ConstructionConsultation";
import CustomerSupport from "../../views/CustomerSupport";
import ArchiDesign from "../../views/ArchiDesign";
import PremiumConstruction from "../../views/PremiumConstruction";
import DocumentUploadReq from "../../pages/Builders/DocumentUploadReq";
import BuildersInfo from "../../views/BuildersInfo";
import BuildersList from "../../views/BuildersList";
import ProtectedLoginRoute from "../ProtectedLoginRoute";
import TermsCondition from "../../views/TermsCondition";
import PrivacyPolicy from "../../views/PrivacyPolicy";

const LandingRoutes = () => {
  
 return(
  <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/homeloan" element={<HomeLoan />} />
  <Route path="/landscaping" element={<Landscaping />} />
  <Route path="/constructionconsultation" element={<ConstructionConsultation />} />
  <Route path="/support" element={<CustomerSupport />} />
  <Route path="/archidesign" element={<ArchiDesign />} />
  <Route path="/premiumconstruction" element={<PremiumConstruction />} />
  <Route path="/login" element={<ProtectedLoginRoute />} />
  <Route path="/upload-doc/:id" element={<DocumentUploadReq />} />
  <Route path="/buildersinfo" element={<BuildersInfo />} />
  <Route path="/builderslist" element={<BuildersList />} />
  <Route path="/termscondition" element={<TermsCondition/>} />
  <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
</Routes>
 )
};

export default LandingRoutes;
