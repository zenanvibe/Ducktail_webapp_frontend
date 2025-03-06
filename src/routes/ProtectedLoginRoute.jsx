import Loginpage from "../pages/Loginpage";
import useAuthStore from "../store/useAuthStore";
import { Navigate } from "react-router-dom";

const ProtectedLoginRoute = () => {
  const { user, userType } = useAuthStore();

  if (user) {
    console.log(userType);
    return <Navigate to={userType === "builder" ? "/builder/dashboard"  : "/projectinvite"} />;
  }

  return <Loginpage />
};

export default ProtectedLoginRoute;
