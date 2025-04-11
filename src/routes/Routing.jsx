import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
// import useAuthStore from "../store/useAuthStore";
// import { LoaderCircle } from "lucide-react";
import BuilderRoutes from "./BuilderRoutes/BuilderRoutes";
import CustomerRoutes from "./CustomerRoutes/CustomerRoutes";
import LandingRoutes from "./LandingRoutes/LandingRoutes";

const Routing = () => {
  // const { isCheckingAuth } = useAuthStore();

  // if (isCheckingAuth) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <LoaderCircle className="size-10 animate-spin" />
  //     </div>
  //   );
  // }
  return (
    <BrowserRouter>
      <AppLayout>
        <LandingRoutes />
        <BuilderRoutes />
        <CustomerRoutes />
      </AppLayout>
    </BrowserRouter>
  );
};

export default Routing;