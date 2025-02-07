import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import ProjectLive from "../../pages/ProjectLive";
import ProjectInvite from "../../pages/ProjectInvite";
import Services from "../../pages/Services";
import Portfolio from "../../pages/Portfolio";
import ProjectPending from "../../pages/ProjectPending";
import ProjectHold from "../../pages/ProjectHold";
import ProjectRejection from "../../pages/ProjectRecjection";
import CompletionRequest from "../../pages/CompletionRequest";
import ProjectCompleted from "../../pages/CompletedProject";
import Notification from "../../pages/Notification";
import ProjectEnquiry from "../../pages/Builders/ProjectEnquiry";

import SubscriptionHistory from "../../pages/Builders/SubscriptionHistory";
import Subscription from "../../pages/Builders/Subscription";

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
    <Route path="/builder/notification" element={<Notification />} />
    <Route path="/builder/projectenquiry" element={<ProjectEnquiry />} />
    <Route path="/builder/subscription" element={<Subscription />} />
    <Route path="/builder/subscriptionhistory" element={<SubscriptionHistory />} />
  </Routes>
);

export default BuilderRoutes;