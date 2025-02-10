import React from "react";
import { Routes, Route } from "react-router-dom";
import ProjectInvite from "../../pages/Customer/ProjectInvite";
import ProjectLiveCard from "../../pages/Customer/ProjectLiveCard";
import HoldCard from "../../pages/Customer/HoldCard";
import RequestCard from "../../pages/Customer/RequestCard";
import CustomerProfile from "../../pages/Customer/CustomerProfile";
import ProjectComplete from "../../pages/Customer/ProjectComplete";
import ProjectReject from "../../pages/Customer/ProjectReject";

const CustomerRoutes = () => (
  <Routes>
    <Route path="/projectinvite" element={<ProjectInvite />} />
    <Route path="/livecard" element={<ProjectLiveCard />} />
    <Route path="/holdcard" element={<HoldCard />} />
    <Route path="/requestcard" element={<RequestCard />} />
    <Route path="/profile" element={<CustomerProfile />} />
    <Route path="/completedcard" element={<ProjectComplete />} />
    <Route path="/rejectcard" element={<ProjectReject />} />
  </Routes>
);

export default CustomerRoutes;
