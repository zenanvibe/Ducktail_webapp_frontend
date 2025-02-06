import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center h-screen bg-[#E0E0E0] text-center px-6">
        <motion.h1
          className="text-9xl font-extrabold text-gray-800"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page not found.</p>
        <p className="text-gray-600 mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <motion.div
          className="mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
          >
            Go Home
          </Link>
        </motion.div>
        <motion.div
          className="absolute bottom-10 flex items-center justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg
            className="w-16 h-16 text-gray-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </div>
    </Router>
  );
};

export default NotFound;
