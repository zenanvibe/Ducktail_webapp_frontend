import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstancev1 } from "../lib/axiosInstance";
import useAuthStore from "./useAuthStore";

const useFindBuilderStore = create(
  persist(
    (set, get) => ({
      states: [],
      districts: [],
      taluks: [],
      isLoading: false,

      fetchLocationData: async () => {
        const token = useAuthStore.getState().token; // Get auth token
        if (!token) return;

        set({ isLoading: true });
        try {
          const response = await axiosInstancev1.get("/address/location-data", {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({
            states: response.data.states.length ? response.data.states : ["No States Available"],
            districts: response.data.districts.length ? response.data.districts : ["No Districts Available"],
            taluks: response.data.taluks.length ? response.data.taluks : ["No Taluks Available"],
          });
          console.log(response.data.taluks)
        } catch (error) {
          console.error("Error fetching location data:", error);
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "find-builder-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useFindBuilderStore;
