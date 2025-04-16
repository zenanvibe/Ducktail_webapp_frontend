import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Builders/Dashboard";
import ProjectLive from "../../pages/Builders/ProjectLive";
import ProjectInvite from "../../pages/Builders/ProjectInvite";
import Services from "../../pages/Builders/Services";
import Portfolio from "../../pages/Builders/Portfolio";
import ProjectPending from "../../pages/Builders/ProjectPending";
import ProjectHold from "../../pages/Builders/ProjectHold";
import ProjectRejection from "../../pages/Builders/ProjectRecjection";
import CompletionRequest from "../../pages/Builders/CompletionRequest";
import ProjectCompleted from "../../pages/Builders/CompletedProject";
import Notification from "../../pages/Builders/Notification";
import ProjectEnquiry from "../../pages/Builders/ProjectEnquiry";
import SubscriptionHistory from "../../pages/Builders/SubscriptionHistory";
import Subscription from "../../pages/Builders/Subscription";
import ProfileCard from "../../pages/Builders/ProfileCard";
import Chatbox from "../../pages/Builders/Chatbox";
import Payment from "../../pages/Builders/Payment";
import Profile from "../../pages/Builders/Profile";
import Support from "../../pages/Builders/Support";
import Signuppage from "../../pages/Signuppage";

const BuilderRoutes = () => {
  return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/liveproject" element={<ProjectLive />} />
        <Route path="/projectservices" element={<Services />} />
        <Route path="/projectinvite" element={<ProjectInvite />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pendingproject" element={<ProjectPending />} />
        <Route path="/holdproject" element={<ProjectHold />} />
        <Route path="/rejectionproject" element={<ProjectRejection />} />
        <Route path="/completionrequest" element={<CompletionRequest />} />
        <Route path="/completedproject" element={<ProjectCompleted />} />
        <Route path="/chat" element={<Chatbox />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/projectenquiry" element={<ProjectEnquiry />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/subscriptionhistory" element={<SubscriptionHistory />} />
        <Route path="/profilecard" element={<ProfileCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<Signuppage />} />
      </Routes>
  );
};

export default BuilderRoutes;
