import React from "react";
import { useLocation } from "react-router-dom";
import Navbarlanding from "../../components/Navbarlanding";
import Footerlanding from "../../components/Footerlanding";

const noNavbarFooterPaths = [
  "/login", "/signup", "/profile",  "/upload-doc/:id",
  // Builder Paths
  "/builder/dashboard", "/builder/liveproject", "/builder/projectinvite",
  "/builder/projectservices", "/builder/portfolio", "/builder/pendingproject",
  "/builder/holdproject", "/builder/rejectionproject", "/builder/completionrequest",
  "/builder/completedproject", "/builder/notification", "/builder/projectenquiry",
  "/builder/chat", "/builder/payment","/builder/subscriptionhistory","/builder/subscription",
  "/builder/profile","/builder/support","/builder/profilecard",
  // Customer Paths
  "/projectinvite", "/livecard", "/holdcard", "/requestcard",
   "/completedcard", "/rejectcard" ,"/chatbox" ,"/paymenthistory" ,"/help"
];

const AppLayout = ({ children }) => {
  const location = useLocation();
  const showNavbarFooter = !noNavbarFooterPaths.includes(location.pathname);

  return (
    <div>
      {showNavbarFooter && <Navbarlanding />}
      {children}
      {showNavbarFooter && <Footerlanding />}
    </div>
  );
};

export default AppLayout;