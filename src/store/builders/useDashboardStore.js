import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../lib/axiosInstance";
import useAuthStore from "../useAuthStore";

const useDashboardStore = create(
  persist(
    (set, get) => ({
      cardTile: null,
      projectTile: null,
      isLoading: false,

      // Fetch License Card Data
      getCardTile: async () => {
        set({ isLoading: true });

        const { token, user: builderId } = useAuthStore.getState(); // Fetch builderId from useAuthStore
        console.log(builderId);

        if (!token || !builderId) {
          toast.error("Unauthorized: Login required.");
          set({ isLoading: false });
          return;
        }

        try {
          const response = await axiosInstance.get(
            `/builders/dashboard/${builderId}/license`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          set({ cardTile: response.data });
          console.log(response.data);
          
        } catch (error) {
          console.error("Card Tile Fetch Error:", error);
          toast.error(error.response?.data?.message || "Failed to load card data");
        } finally {
          set({ isLoading: false });
        }
      },

      // Fetch Project Statistics
      getProjectTile: async () => {
        set({ isLoading: true });

        const { token, user: builderId } = useAuthStore.getState(); // Fetch builderId from useAuthStore

        if (!token || !builderId) {
          toast.error("Unauthorized: Please log in.");
          set({ isLoading: false });
          return;
        }

        try {
          const response = await axiosInstance.get(
            `/builders/dashboard/${builderId}/statistics`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          set({ projectTile: response.data });

        } catch (error) {
          console.error("Project Tile Fetch Error:", error);
          toast.error(error.response?.data?.message || "Failed to load project data");
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "dashboard-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useDashboardStore;
