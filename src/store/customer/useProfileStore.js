import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import axiosInstance from "../../lib/axiosInstance";
import useAuthStore from "../useAuthStore";

const useProfileStore = create(
    persist((set, get) => ({
        isLoading: false,
        profile:null,
        //Get profile
        fetchProfile: async () => {
            set({ isLoading: true });
            const { token } = useAuthStore.getState();
            
            try {
                const response=await axiosInstance.get("customer/profile", {
                 headers: {
                   Authorization: `Bearer ${token}`,
                 },
               });
                 set({ profile:response.data, isLoading: false });
                //   console.log(response.data.profile);
                  
            } catch (error) {
                set({ isLoading: false });
                toast.error(
                  error.response?.data?.message || "Failed to fetch services"
                );
            }
        }
    })
    ));

export default useProfileStore;
