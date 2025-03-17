import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import axiosInstance from "../../lib/axiosInstance";
import useAuthStore from "../useAuthStore"; // ✅ Import useAuthStore to get the token

const useProfileStore = create(
  persist(
    (set, get) => ({
      profile: null,
      isLoading: false,

      // ✅ Fetch Profile Data
      fetchProfile: async () => {
        set({ isLoading: true });

        // 🔹 Get user type and tokens from Zustand store
        const { userType, token } = useAuthStore.getState();

        // 🔹 Ensure only builders can fetch this profile data
        if (userType !== "builder" || !token) {
          toast.error("Unauthorized: Builder login required.");
          set({ isLoading: false });
          return;
        }

        try {
          const response = await axiosInstance.get("/builders/auth/profile", {
            headers: {
              Authorization: `Bearer ${token}`, // 🔹 Use builder's token
            },
          });

          set({ profile: response.data.profile });
          console.log(response.data);
        } catch (error) {
          console.error("Profile Fetch Error:", error);
          toast.error(error.response?.data?.message || "Failed to load profile");
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
