import { Navigate } from "react-router-dom";
import Loginpage from "../pages/Loginpage";
import useAuthStore from "../store/useAuthStore";

const ProtectedLoginRoute = () => {
  const { user, userType, token } = useAuthStore();

  // Check both user and token existence
  if (user && token) {
    // Redirect based on userType
    if (userType === "builder") {
      return <Navigate to="/builder/dashboard" replace />;
    }
    if (userType === "customer") {
      return <Navigate to="/" replace />;
    }
  }

  return <Loginpage />;
};

export default ProtectedLoginRoute;
