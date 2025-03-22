  import { create } from "zustand";
  import { persist } from "zustand/middleware";
  import { toast } from "react-hot-toast";
  // import { toast } from "react-toast";
  import { axiosInstance } from "../lib/axiosInstance";

  const useAuthStore = create(
    persist(
      (set, get) => ({
        user: null,
        userType: null, // 'builder' or 'customer'
        token: null,
        isCheckingAuth: false,

        // ✅ Builder Signup
        signupBuilder: async (builderData) => {
          set({ isSigningUp: true });
          try {
            const formData = new FormData();
            Object.keys(builderData).forEach((key) => {
              if (
                builderData[key] !== "" &&
                builderData[key] !== null &&
                builderData[key] !== undefined
              ) {
                formData.append(key, builderData[key]);
              }
            });

            const res = await axiosInstance.post(
              "/builders/auth/signup",
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" },
              }
            );

            set({ authUser: res.data.user });

            if (res.data.token) {
              localStorage.setItem("authToken", res.data.token);
            }

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
            const response = await axiosInstance.post("/customer/signup", {
              name,
              email,
              password,
            });

            localStorage.setItem("customerToken", response.data.token);
            set({
              user: {
                name: response.data.name, 
                email: response.data.email,
                customerId: response.data.customerId, 
              },
              userType: "customer",
              token: response.data.token,
            });

            toast.success("Customer Signup Successful!");
          } catch (error) {
            toast.error(
              error.response?.data?.message || "Customer Signup Failed"
            );
          }
        },

        //✅ Builder Login
        loginBuilder: async (credential) => {
          try {
            const response = await axiosInstance.post("/builders/auth/login", credential);
            localStorage.setItem("builderToken", response.data.token);
        
            // Decode JWT to extract builderId
            const tokenPayload = JSON.parse(atob(response.data.token.split(".")[1])); // Decoding JWT
            console.log("Decoded Token Payload:", tokenPayload); // Debugging
        
            set({
              user: tokenPayload.builderId, // ✅ Store builderId explicitly
              userType: "builder",
              token: response.data.token,
            });
        
            toast.success("Builder Login Successfully");
          } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Builder Login Failed");
          }
        },
        
        

        //✅ Customer Login
        customerLogin: async (credential) => {
          try {
            const response = await axiosInstance.post(
              "/customer/login",
              credential
            );
            localStorage.setItem("customerToken", response.data.token);
            // console.log(response.data);
            set({
              user: {
                name: response.data.name, 
                email: response.data.email,
                customerId: response.data.customerId, 
              },
              userType: "customer",
              token: response.data.token,
            });
            toast.success("Customer Login Successfully");
          } catch (error) {
            toast.error(error.response?.data?.message || "Customer Login Failed");
          }
        },

        // ✅ Logout (For Builder Only)
        logoutBuilder: () => {
          if (get().userType === "builder") {
            localStorage.removeItem("builderToken");
            set({ user: null, userType: null, token: null });
            console.log("Builder logged")
            toast.success("Builder logged out successfully");
          }
        },

        // ✅ Logout (For Customer Only)
        logoutCustomer: () => {
          if (get().userType === "customer") {
            localStorage.removeItem("customerToken");
            set({ user: null, userType: null, token: null });
            toast.success("Customer logged out successfully");
          }
        },
      }),
      {
        name: "auth-storage",
        getStorage: () => localStorage,
      }
    )
  );

  export default useAuthStore;
