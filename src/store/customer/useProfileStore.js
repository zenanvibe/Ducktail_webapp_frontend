import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { axiosInstancev1 } from "../../lib/axiosInstance";
import useAuthStore from "../useAuthStore";

const useProfileStore = create(
    persist((set, get) => ({
        isLoading: false,
        isUpdating: false,
        profile: null,
        //Get profile
        fetchProfile: async () => {
            set({ isLoading: true });
            const { token, user } = useAuthStore.getState();
            
            try {
                const customerId = user.customerId;
                const response = await axiosInstancev1.get(`user-info/customer/${customerId}`, {
                 headers: {
                   Authorization: `Bearer ${token}`,
                 },
               });
                 set({ profile: response.data.customer, isLoading: false });
                 console.log(response.data.customer); 
                  
            } catch (error) {
                set({ isLoading: false });
                toast.error(
                  error.response?.data?.message || "Failed to fetch profile"
                );
            }
        },
        
        //Update profile
        updateProfile: async (profileData) => {
            set({ isUpdating: true });
            const { token, user } = useAuthStore.getState();
            
            try {
                const customerId = user.customerId;
                const response = await axiosInstancev1.put(`user-info/customer/${customerId}`, profileData, {
                 headers: {
                   Authorization: `Bearer ${token}`,
                 },
               });
                 
                set({ profile: response.data.customer, isUpdating: false });
                toast.success("Profile updated successfully");
                return true;
                  
            } catch (error) {
                set({ isUpdating: false });
                toast.error(
                  error.response?.data?.message || "Failed to update profile"
                );
                return false;
            }
        }
    })
    ));

export default useProfileStore;
