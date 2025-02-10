import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen" >
      {/* Sidebar */}
      <div
        className={`fixed md:sticky top-0 h-screen w-64 px-3 pt-4 pb-2 flex-col bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:flex`}
        style={{ backgroundColor: "#E0E0E0" }}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col pl-5">
        {/* Navbar */}
        <div className="fixed md:sticky top-0 z-10 py-4 px-3 w-full  shadow-md md:bg-transparent md:shadow-none">
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Scrollable content */}
        <div className="py-2 px-3 flex-1 overflow-y-auto mt-16 md:mt-0">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
