import React, { useState } from 'react';
import Sidebar from '../../components/customers/Sidebar';
import Navbar from '../../components/customers/Navbar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen" >
      {/* Sidebar */}
      <div className="sticky top-0 h-screen flex-shrink-0 px-3 py-4">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 z-10 py-4 px-3">
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Scrollable content */}
        <div className="py-2 px-3 flex-1 overflow-y-auto" >{children}</div>
      </div>  
    </div>
  );
};

export default Layout;
