import React from "react";
import { ToggleRightIcon, Bell, User } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handlenv = (path) => {
    navigate(path);
  }
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
        <button onClick={() => handlenv("/builder/notification")} className="w-8 h-8 bg-red-400 rounded-full flex justify-center items-center">
          <Bell color="#ffffff" />
        </button>
        <button onClick={() => handlenv("/profile")} className="w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center">
          <User color="#ffffff" />
        </button>


       
      </div>
    </div>
  );
};

export default Navbar;
