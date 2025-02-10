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

const BuilderRoutes = () => (
  <Routes>
    <Route path="/builder/dashboard" element={<Dashboard />} />
    <Route path="/builder/liveproject" element={<ProjectLive />} />
    <Route path="/builder/projectinvite" element={<ProjectInvite />} />
    <Route path="/builder/projectservices" element={<Services />} />
    <Route path="/builder/portfolio" element={<Portfolio />} />
    <Route path="/builder/pendingproject" element={<ProjectPending />} />
    <Route path="/builder/holdproject" element={<ProjectHold />} />
    <Route path="/builder/rejectionproject" element={<ProjectRejection />} />
    <Route path="/builder/completionrequest" element={<CompletionRequest />} />
    <Route path="/builder/completedproject" element={<ProjectCompleted />} />
    <Route path="/builder/chat" element={<Chatbox />} />
    <Route path="/builder/payment" element={<Payment />} />
    <Route path="/builder/notification" element={<Notification />} />
    <Route path="/builder/projectenquiry" element={<ProjectEnquiry />} />
    <Route path="/builder/subscription" element={<Subscription />} />
    <Route path="/builder/subscriptionhistory" element={<SubscriptionHistory />} />
    <Route path="/builder/profilecard" element={<ProfileCard />} />
    <Route path="/builder/profile" element={<Profile />} />
    <Route path="/builder/support" element={<Support />} />
  </Routes>
);

export default BuilderRoutes;