import React, { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import useAuthStore from "../store/useAuthStore";
import {  useLocation } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: ""
  });
  const { loginBuilder, customerLogin } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [redirectPath, setRedirectPath] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get the saved path from localStorage (if any)
    const savedPath = localStorage.getItem("redirectAfterLogin");
    if (savedPath) {
      setRedirectPath(savedPath);
    }
  }, []);
  

  // const navigate = useNavigate();
  const location = useLocation();
  
  const userType = new URLSearchParams(location.search).get("type") || "builder";
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      if (userType === "builder") {
        await loginBuilder(credential);
      } else {
        await customerLogin(credential);
      }
  
      setCredential({ email: "", password: "" });
  
      // ✅ Redirect to the saved path after login
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
      localStorage.removeItem("redirectAfterLogin"); // Clear after use
      navigate(redirectPath);
  
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(310deg, #555555 4%, white 38%)" }}
    >
      {/* {redirectPath && <p>You'll be redirected to: {redirectPath}</p>} */}
      <div className="flex flex-col lg:flex-row w-full max-w-4xl p-2 py-5 border border-gray-300 bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col justify-center w-full lg:w-2/3 p-8 lg:p-11">
          <div className="text-start">
            <img
              src="/assets/black logo.png"
              alt="Ducktail Logo"
              className="h-16 lg:h-20 mb-6"
            />
            <p className="text-gray-600 mt-4 text-sm lg:text-base">
              Ducktail - The Construction Platform connects companies with
              skilled professionals, offering reliable solutions for projects of
              all sizes. From renovations to large developments, we ensure
              quality and efficiency.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 lg:p-10">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            LOGIN
          </h2>
          <form className="mt-6">
            <div className="mb-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pt-2">
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
                  name="email"
                  value={credential.email}
                  className="w-full px-10 py-2 mt-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  style={{ backgroundColor: "#dddddd", borderRadius: "24px" }}
                  placeholder="Email ID "
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pt-2">
                  <LockClosedIcon className="w-5 h-5 text-black" />
                </span>
                <input
                  type="password"
                  name="password"
                  value={credential.password}
                  className="w-full px-10 py-2 mt-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  style={{ backgroundColor: "#dddddd", borderRadius: "24px" }}
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* <div className="flex justify-end">
              <a href=" " className="text-sm text-gray-500 hover:underline">
                Forget password?
              </a>
            </div> */}
             <div className="flex justify-center">
    <button
      onClick={handleLogin}
      disabled={loading} // Disable button while loading
      className={`w-28 px-4 py-1 mt-4 text-black border-2 transition-all duration-300 flex items-center justify-center ${
        loading ? "opacity-70 cursor-not-allowed" : ""
      }`}
      style={{
        background: "linear-gradient(310deg, #dddddd 10%, white)",
        borderRadius: "24px",
      }}
      onMouseEnter={(e) =>
        !loading &&
        (e.target.style.background =
          "linear-gradient(310deg, #cccccc 10%, #f5f5f5)")
      }
      onMouseLeave={(e) =>
        !loading &&
        (e.target.style.background =
          "linear-gradient(310deg, #dddddd 10%, white)")
      }
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin text-xl" />
      ) : (
        "LOGIN"
      )}
    </button>
  </div>
            <p className="mt-4 text-center text-sm text-gray-800">
              Not registered yet?{" "}
              <a
                href={userType === "customer" ? "/signup" : "/builder/signup"}
                className="text-blue-600 hover:underline"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
