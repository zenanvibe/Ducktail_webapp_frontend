import { create } from "zustand";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axiosInstance";

const useAuthStore = create((set, get) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,

  signupBuilder: async (builderData) => {
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
  
      toast.success("Account created successfully");
  
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error(error?.response?.data?.message || "Signup failed");
    } finally {
      set({ isSigningUp: false });
    }
  },
  

  checkAuth: async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (token) {
        set({ authUser: { token }, isCheckingAuth: false });
      } else {
        set({ isCheckingAuth: false });
      }
    } catch (error) {
      set({ isCheckingAuth: false });
    }
  },
}));

export default useAuthStore;
