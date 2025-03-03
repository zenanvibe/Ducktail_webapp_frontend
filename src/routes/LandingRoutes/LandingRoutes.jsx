import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../../views/Homepage";
import HomeLoan from "../../views/HomeLoan";
import Landscaping from "../../views/Landscaping";
import ConstructionConsultation from "../../views/ConstructionConsultation";
import CustomerSupport from "../../views/CustomerSupport";
import ArchiDesign from "../../views/ArchiDesign";
import PremiumConstruction from "../../views/PremiumConstruction";
import Loginpage from "../../pages/Loginpage";
import Signuppage from "../../pages/Signuppage";
import useAuthStore from "../../store/useAuthStore";
import DocumentUploadReq from "../../pages/Builders/DocumentUploadReq";
import BuildersInfo from "../../views/BuildersInfo";
import BuildersList from "../../views/BuildersList";

const LandingRoutes = () => {
  const {useAuth,checkAuth} = useAuthStore();

  useEffect(() => {
    checkAuth(); 
  }, [checkAuth]);

  


 return(
  <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/homeloan" element={<HomeLoan />} />
  <Route path="/landscaping" element={<Landscaping />} />
  <Route path="/constructionconsultation" element={<ConstructionConsultation />} />
  <Route path="/support" element={<CustomerSupport />} />
  <Route path="/archidesign" element={<ArchiDesign />} />
  <Route path="/premiumconstruction" element={<PremiumConstruction />} />
  <Route path="/login" element={<Loginpage />} />
  <Route path="/signup" element={!useAuth ? <Signuppage /> : <Navigate to="/" />} />
  <Route path="/upload-doc/:id" element={<DocumentUploadReq />} />
  <Route path="/buildersinfo" element={<BuildersInfo />} />
  <Route path="/builderslist" element={<BuildersList />} />

</Routes>
 )
};

export default LandingRoutes;
