  import { create } from "zustand";
  import toast from "react-hot-toast";
  import axiosInstance from "../lib/axiosInstance";

  const useAuthStore = create((set, get) => ({
    useAuth: null,
    isCheckingAuth: true,
    isSigningUp: false,

    signupBuilder: async (builderData) => {
      set({ isSigningUp: true });
      try {
        // Create FormData dynamically
        const formData = new FormData();
        Object.keys(builderData).forEach((key) => {
          if (builderData[key]) {
            // Check if the value is a file (for file uploads)
            if (builderData[key] instanceof File) {
              formData.append(key, builderData[key]);
            } else {
              formData.append(key, builderData[key]);
            }
          }
        });

        // Send request to the signup API
        const res = await axiosInstance.post("/auth/signup", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        // Store user data in Zustand state
        set({ authUser: res.data });

        // Show success message
        toast.success("Account created successfully");
      } catch (error) {
        // Show error message
        toast.error(error.response?.data?.message || "Signup failed");
      } finally {
        // Reset signup state
        set({ isSigningUp: false });
      }
    },
    
    checkAuth: async () => {
      try {
        // Here you can add logic to check if the user is authenticated, like checking a token
        const token = localStorage.getItem('authToken');
        if (token) {
          set({ authUser: { token }, isCheckingAuth: false }); // Set the authUser if token exists
        } else {
          set({ isCheckingAuth: false }); // Set the auth check to false if no token found
        }
      } catch (error) {
        set({ isCheckingAuth: false });
      }
    },
  }));

  export default useAuthStore;
