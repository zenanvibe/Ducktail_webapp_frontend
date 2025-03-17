import { Navigate, useLocation } from "react-router-dom";
import Loginpage from "../pages/Loginpage";
import useAuthStore from "../store/useAuthStore";

const ProtectedLoginRoute = () => {
  const { user, userType } = useAuthStore();
  const location = useLocation(); // Get current route

  if (user) {
    //  Ensure builders 
    if (userType === "builder") {
      return <Navigate to="/builder/dashboard" replace />;
    }

    // Redirect non-builders to their stored route or default
    const redirectPath = localStorage.getItem("redirectAfterLogin") || "/projectinvite";
    localStorage.removeItem("redirectAfterLogin"); // Clear after use
    return <Navigate to={redirectPath} replace />;
  }

  // Save attempted route for redirection after login
  localStorage.setItem("redirectAfterLogin", location.pathname);

  return <Loginpage />;
};

export default ProtectedLoginRoute;
