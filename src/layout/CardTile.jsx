import React from 'react';
import "../css/CardTile.css";

const CardTile = () => {
  return (
    <div className="flex items-start h-auto ">
      <div className="custom-card rounded-lg shadow-lg p-6 w-full max-w-sm md:max-w-md text-white">
        <div className="flex justify-between items-center">
          <img
            src="/path-to-ducktail-logo.png"
            alt="Ducktail Logo"
            className="h-8"
          />
          <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-md">
            Active
          </span>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold text-black">Company Name : The Made Model</p>
          <p className="mt-2 text-black">Licence Number : DTCHE1011</p>
          <p className="mt-2 text-black">Valid Till : 30 Feb 2025</p>
        </div>
      </div>
    </div>
  );
};

export default CardTile;
