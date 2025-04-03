import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { axiosInstancev1 } from "../../lib/axiosInstance";
import useAuthStore from "../useAuthStore";

const useProfileStore = create(
  persist(
    (set, get) => ({
      profile: null,
      isLoading: false,

      // ✅ Fetch Profile Data
      fetchProfile: async () => {
        set({ isLoading: true });

        // 🔹 Get user type, token and builderId from Zustand store
        const { userType, token, user } = useAuthStore.getState();

        // 🔹 Ensure only builders can fetch this profile data
        if (userType !== "builder" || !token) {
          toast.error("Unauthorized: Builder login required.");
          set({ isLoading: false });
          return;
        }

        try {
          const response = await axiosInstancev1.get(`/user-info/builder/${user}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          set({ profile: response.data });
          console.log(response.data);
        } catch (error) {
          console.error("Profile Fetch Error:", error);
          toast.error(error.response?.data?.message || "Failed to load profile");
        } finally {
          set({ isLoading: false });
        }
      },

      // ✅ Update Profile Data
      updateProfile: async (profileData) => {
        set({ isLoading: true });

        // 🔹 Get user type, token and builderId from Zustand store
        const { userType, token, user } = useAuthStore.getState();

        // 🔹 Ensure only builders can update profile data
        if (userType !== "builder" || !token) {
          toast.error("Unauthorized: Builder login required.");
          set({ isLoading: false });
          return;
        }

        try {
          const response = await axiosInstancev1.put(`/user-info/builder/${user}`, profileData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
          });

          set({ profile: response.data });
          toast.success("Profile updated successfully");
          console.log(response.data);
        } catch (error) {
          console.error("Profile Update Error:", error);
          toast.error(error.response?.data?.message || "Failed to update profile");
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "profile-storage", 
      getStorage: () => localStorage,
    }
  )
);

export default useProfileStore;
