import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../../views/Homepage";
import HomeLoan from "../../views/HomeLoan";
import Landscaping from "../../views/Landscaping";
import ConstructionConsultation from "../../views/ConstructionConsultation";
import CustomerSupport from "../../views/CustomerSupport";
import ArchiDesign from "../../views/ArchiDesign";
import PremiumConstruction from "../../views/PremiumConstruction";
import Loginpage from "../../pages/Loginpage";
import Signuppage from "../../pages/Signuppage";
import Profile from "../../pages/Profile";
import Chatbox from "../../pages/Chatbox";
import Payment from "../../pages/Payment";
import DocumentUploadReq from "../../pages/DocumentUploadReq";

const LandingRoutes = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/homeloan" element={<HomeLoan />} />
    <Route path="/landscaping" element={<Landscaping />} />
    <Route path="/constructionconsultation" element={<ConstructionConsultation />} />
    <Route path="/support" element={<CustomerSupport />} />
    <Route path="/archidesign" element={<ArchiDesign />} />
    <Route path="/premiumconstruction" element={<PremiumConstruction />} />
    <Route path="/login" element={<Loginpage />} />
    <Route path="/signup" element={<Signuppage />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/chat" element={<Chatbox />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/upload-doc/:id" element={<DocumentUploadReq />} />
  </Routes>
);

export default LandingRoutes;
