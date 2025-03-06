import React, {useEffect} from "react";
import { ToggleRightIcon,  User, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import useAuthStore from "../../store/useAuthStore";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate()
  const logoutCustomer = useAuthStore((state) => state.logoutCustomer);
  const userType = useAuthStore((state) => state.userType);

  const handlenav = (path) => {
    navigate(path)
  }

    const handleLogout = () => {
      if (userType === "customer") {
        logoutCustomer();
        navigate("/");
      }
    };
  
    useEffect(() => {
      const handlePopState = () => {
        navigate("/");
      };
  
      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }, [navigate]);

  return (
    <div
      className="h-16 flex bg-white justify-between items-center px-4"
      style={{ borderRadius: "12px" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white lg:hidden"
      >
        {isOpen ? "" : <ToggleRightIcon color="#000000" />}
      </button>
      <div className="text-lg font-semibold"></div>

      <div className="flex items-center space-x-4">
        {/* <button className="w-8 h-8 bg-yellow-400 rounded-full"></button> */}
        {/* <button className="w-8 h-8 bg-red-400 rounded-full flex justify-center items-center">
          <Bell color="#ffffff" />
        </button> */}
        <button
          onClick={() => handlenav("/profile")}
          className="w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center"
        >
          <User color="#ffffff" />
        </button>
        {userType === "customer" && (
          <button
            onClick={handleLogout}
            className="w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center"
          >
            <LogOut color="#ffffff" />
          </button>
        )}


       
      </div>
    </div>
  );
};

export default Navbar;
