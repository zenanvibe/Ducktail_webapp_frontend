import React from "react";
import { ToggleRightIcon, Bell } from "lucide-react";

const Navbar = ({ isOpen, setIsOpen }) => {
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
        <button className="w-8 h-8 bg-yellow-400 rounded-full"></button>
        <button className="w-8 h-8 bg-red-400 rounded-full flex justify-center items-center">
          <Bell color="#ffffff" />
        </button>
        <button className="w-8 h-8 bg-gray-400 rounded-full"></button>


       
      </div>
    </div>
  );
};

export default Navbar;
