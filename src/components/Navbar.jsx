import React, { useEffect } from "react";
import { ToggleRightIcon, Bell, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import useAuthStore from "../store/useAuthStore";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const logoutBuilder = useAuthStore((state) => state.logoutBuilder);
  const userType = useAuthStore((state) => state.userType);

  const handleNav = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    if (userType === "builder") {
      logoutBuilder();
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
        <button
          onClick={() => handleNav("/builder/notification")}
          className="w-8 h-8 bg-red-400 rounded-full flex justify-center items-center"
        >
          <Bell color="#ffffff" />
        </button>

        <button
          onClick={() => handleNav("/builder/profile")}
          className="w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center"
        >
          <User color="#ffffff" />
        </button>

        {userType === "builder" && (
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
