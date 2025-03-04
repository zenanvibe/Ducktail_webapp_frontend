import React from "react";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";

const CustomerSignup = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(310deg, #555555 4%, white 38%)" }}
    >
      {/* Box Container */}
      <div className="flex flex-col w-full max-w-md p-6 border border-gray-300 bg-white rounded-lg shadow-2xl overflow-hidden items-center">
        {/* Right Section */}
        <div className="flex flex-col justify-center w-full p-8 lg:p-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">SIGNUP</h2>
          <form className="mt-6 w-full">
            {/* Name Input */}
            <div className="mb-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserIcon className="w-5 h-5 text-black" />
                </span>
                <input
                  type="text"
                  className="w-full px-10 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  style={{ backgroundColor: "#dddddd", borderRadius: "24px" }}
                  placeholder="Full Name"
                />
              </div>
            </div>
            
            {/* Email Input */}
            <div className="mb-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-full px-10 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  style={{ backgroundColor: "#dddddd", borderRadius: "24px" }}
                  placeholder="Email ID / Ducktail ID"
                />
              </div>
            </div>
            
            {/* Password Input */}
            <div className="mb-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="w-5 h-5 text-black" />
                </span>
                <input
                  type="password"
                  className="w-full px-10 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  style={{ backgroundColor: "#dddddd", borderRadius: "24px" }}
                  placeholder="Password"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <a href=" " className="text-sm text-gray-500 hover:underline">
                Forget password?
              </a>
            </div>
            
            <div className="flex justify-center">
              <button
                className="w-28 px-4 py-1 mt-4 text-black border-2 transition-all duration-300"
                style={{
                  background: "linear-gradient(310deg, #dddddd 10%, white)",
                  borderRadius: "24px",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background =
                    "linear-gradient(310deg, #cccccc 10%, #f5f5f5)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background =
                    "linear-gradient(310deg, #dddddd 10%, white)")
                }
              >
                SIGNUP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignup;
