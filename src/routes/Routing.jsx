import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import BuilderRoutes from "./BuilderRoutes/BuilderRoutes";
import CustomerRoutes from "./CustomerRoutes/CustomerRoutes";
import LandingRoutes from "./LandingRoutes/LandingRoutes";

const Routing = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {/* Landing routes */}
          <Route path="/*" element={<LandingRoutes />} />
          {/* Customer routes with /customer prefix */}
          <Route path="/customer/*" element={<CustomerRoutes />} />
          {/* Builder routes */}
          <Route path="/builder/*" element={<BuilderRoutes />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default Routing;