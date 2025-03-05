import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";
import axiosInstance from "../lib/axiosInstance";

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      userType: null, // 'builder' or 'customer'
      token: null,
      isCheckingAuth: false,

      // ✅ Check Authentication (Runs on Page Load)
      checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
          const builderToken = localStorage.getItem("builderToken");
          const customerToken = localStorage.getItem("customerToken");

          if (builderToken) {
            const response = await axiosInstance.get("/api/builder/auth", {
              headers: { Authorization: `Bearer ${builderToken}` },
            });
            set({ user: response.data.user, userType: "builder", token: builderToken });
          } else if (customerToken) {
            const response = await axiosInstance.get("/api/customer/auth", {
              headers: { Authorization: `Bearer ${customerToken}` },
            });
            set({ user: response.data.user, userType: "customer", token: customerToken });
          } else {
            set({ user: null, userType: null, token: null });
          }
        } catch (error) {
          console.error("Auth Check Failed:", error);
          set({ user: null, userType: null, token: null });
        } finally {
          set({ isCheckingAuth: false });
        }
      },

      // ✅ Builder Signup 
      signupBuilder: async (builderData, navigate) => {
        set({ isSigningUp: true });
        try {
          const formData = new FormData();
          Object.keys(builderData).forEach((key) => {
            if (builderData[key] !== "" && builderData[key] !== null && builderData[key] !== undefined) {
              formData.append(key, builderData[key]);
            }
          });

          const res = await axiosInstance.post("/builders/auth/signup", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          set({ authUser: res.data.user });

          if (res.data.token) {
            localStorage.setItem("authToken", res.data.token);
          }

          navigate("/builder/dashboard");
          toast.success("Account created successfully");
        } catch (error) {
          console.error("Signup Error:", error);
          toast.error(error?.response?.data?.message || "Signup failed");
        } finally {
          set({ isSigningUp: false });
        }
      },

      // ✅ Customer Signup (Updated to use axiosInstance)
      customerSignup: async (name, email, password) => {
        try {
          const response = await axiosInstance.post("/api/v2/customer/signup", {
            name,
            email,
            password,
          });

          localStorage.setItem("customerToken", response.data.token);
          set({ user: response.data.user, userType: "customer", token: response.data.token });

          toast.success("Customer Signup Successful!");
        } catch (error) {
          toast.error(error.response?.data?.message || "Customer Signup Failed");
        }
      },

      //✅ Builder Login
      loginBuilder: async (credential,navigate) => {
        try {
          const response = await axiosInstance.post("/builders/auth/login", credential);
          
          localStorage.setItem("builderToken", response.data.token);
          set({ user: response.data.user, userType: "builder", token: response.data.token });
          navigate("/builder/dashboard")
          toast.success("Builder Login Successfully");
        } catch (error) {
          toast.error(error.response?.data?.message || "Builder Login Failed");
        }
      },


      //✅ Customer Login
      customerLogin: async (credential) => {
        
         try {
           const response = await axiosInstance.post("api/v2/customer/login", credential);

           localStorage.setItem("customerToken", response.data.token);
           set({ user: response.data.user, userType: "customer", token: response.data.token });

           toast.success("Customer Login Successfully")
         } catch (error) {
           toast.error(error.response?.data?.message || "Customer Login Failed");
         }
      },
      
      // ✅ Logout (For Both Users)
      logout: () => {
        localStorage.removeItem("builderToken");
        localStorage.removeItem("customerToken");
        set({ user: null, userType: null, token: null });
        toast.info("Logged out successfully");
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
