import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Navbarlanding from "../components/Navbarlanding";
import Homepage from "../views/Homepage";
import Footerlanding from "../components/Footerlanding";
import Loginpage from "../pages/Loginpage";
import useAuthStore from "../store/useAuthStore";
import { LoaderCircle } from "lucide-react";
import Signuppage from "../pages/Signuppage";
import Dashboard from "../pages/Dashboard";
import ProjectLive from "../pages/ProjectLive";
import ProjectIvite from "../pages/ProjectInvite";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import ProjectPending from "../pages/ProjectPending";
import ProjectHold from "../pages/ProjectHold";
import ProjectRejection from "../pages/ProjectRecjection";
import CompletionRequest from "../pages/CompletionRequest";
import ProjectCompleted from "../pages/CompletedProject";
import DocumentUploadReq from "../pages/DocumentUploadReq";
import Profile from "../pages/Profile";
import HomeLoan from "../views/HomeLoan";
import Landscaping from "../views/Landscaping";
import ConstructionConsultation from "../views/ConstructionConsultation";
import ArchiDesign from "../views/ArchiDesign";
import PremiumConstruction from "../views/PremiumConstruction";
import Chatbox from "../pages/Chatbox";
import Payment from "../pages/Payment";
import CustomerSupport from "../views/CustomerSupport";
import SubscriptionTile from "../layout/Subscription/SubscriptionTile";
import Notification from "../pages/Notification";
import NotFound from "../layout/Notfound/Notfound";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const noNavbarFooterPaths = [
    "/login",
    "/signup",
    "/builder/dashboard",
    "/liveproject",
    "/projectinvite",
    "/projectservices",
    "/portfolio",
    "/pendingproject",
    "/holdproject",
    "/rejectionproject",
    "/completionrequest",
    "/completedproject",
    "/upload-doc/:id",
    "/profile",
    "/chat",
    "/payment",
    "/builder/notification"
  ];

  const showNavbarFooter = !noNavbarFooterPaths.includes(location.pathname);

  return (
    <div>
      {showNavbarFooter && <Navbarlanding />}
      {children}
      {showNavbarFooter && <Footerlanding />}
    </div>
  );
};

const Routing = () => {
  const { authUser } = useAuthStore();

  if(authUser){
    return(
      <div className="flex items-center justify-center h-screen">
        <LoaderCircle className="size-10 animate-spin" />
      </div>
    )
  }
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Homepage />} />

          <Route path="/homeloan" element={<HomeLoan />} />
          <Route path="/landscaping" element={<Landscaping />} />
          <Route path="/constructionconsultation" element={<ConstructionConsultation />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="/archidesign" element={<ArchiDesign />} />
          <Route path="/premiumconstruction" element={<PremiumConstruction />} />
          <Route path="/subscriptiontile" element={<SubscriptionTile />} />

          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />

          <Route path="/builder/dashboard" element={<Dashboard />} />
          <Route path="/liveproject" element={<ProjectLive />} />
          <Route path="/projectinvite" element={<ProjectIvite />} />
          <Route path="/projectservices" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pendingproject" element={<ProjectPending />} />
          <Route path="/holdproject" element={<ProjectHold />} />
          <Route path="/rejectionproject" element={<ProjectRejection />} />
          <Route path="/completionrequest" element={<CompletionRequest />} />
          <Route path="/completedproject" element={<ProjectCompleted />} />
          <Route path="/builder/notification" element={<Notification />} />
          
          <Route path="/upload-doc/:id" element={<DocumentUploadReq />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chatbox />} />
          <Route path="/payment" element={<Payment />} />

        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default Routing;
// sdf;l
