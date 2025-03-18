import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstancev1 } from "../lib/axiosInstance";
import useAuthStore from "./useAuthStore";
import { toast } from "react-hot-toast";

const useFindBuilderStore = create(
  persist(
    (set, get) => ({
      states: [],
      districts: [],
      taluks: [],
      selectedState: "",
      selectedDistrict: "",
      selectedTaluk: "",
      isLoading: false,
      builders: [],
      builder:null,

      setSelectedState: (state) => {
        set({ selectedState: state, selectedDistrict: "", selectedTaluk: "" });
        get().fetchBuilders();
      },
      setSelectedDistrict: (district) => {
        set({ selectedDistrict: district, selectedTaluk: "" });
        get().fetchBuilders();
      },
      setSelectedTaluk: (taluk) => {
        set({ selectedTaluk: taluk });
        get().fetchBuilders();
      },

      fetchLocationData: async () => {
        const token = useAuthStore.getState().token;
        if (!token) return;

        set({ isLoading: true });
        try {
          const response = await axiosInstancev1.get("/address/location-data", {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({
            states: response.data.states.length
              ? response.data.states
              : ["No States Available"],
            districts: response.data.districts.length
              ? response.data.districts
              : ["No Districts Available"],
            taluks: response.data.taluks.length
              ? response.data.taluks
              : ["No Taluks Available"],
          });
        } catch (error) {
          console.error("Error fetching location data:", error);
        } finally {
          set({ isLoading: false });
        }
      },

      fetchBuilders: async () => {
        const token = useAuthStore.getState().token;
        if (!token) return;

        const { selectedDistrict, selectedTaluk } = get();

        // Prevent fetching if no district is selected
        if (!selectedDistrict) {
          console.warn("No district selected. Skipping fetch.");
          toast.error("Select District");
          return;
        }

        const queryParams = new URLSearchParams({
          district: selectedDistrict || "",
          taluk: selectedTaluk || "",
          sortDir: "asc",
          limit: "10",
          page: "1",
        }).toString();

        set({ isLoading: true });

        try {
          console.log("Fetching builders for:", {
            selectedDistrict,
            selectedTaluk,
          });

          const response = await axiosInstancev1.get(
            `/user/builders?${queryParams}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (response.data && response.data.builders) {
            set({ builders: response.data.builders });
          } else {
            console.warn("Unexpected API response structure:", response.data);
            set({ builders: [] });
          }

          console.log("Fetched builders:", response.data.builders);
        } catch (error) {
          console.error("Error fetching builders:", error);
          set({ builders: [] }); // Ensure list is cleared on failure
        } finally {
          set({ isLoading: false });
        }
      },

      fetchBuilderInfo: async (builderId) => {
        const token = useAuthStore.getState().token;
        if (!token) {
          toast.error("Unauthorized. Please log in.");
          return;
        }

        set({ isLoading: true, error: null });

        try {
          const response = await axiosInstancev1.get(
            `/user/builder/${builderId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (response.data) {
            set({ builder: response.data });
            console.log(response.data);
          } else {
            console.warn("Unexpected API response structure:", response.data);
            set({ builder: null });
          }
        } catch (error) {
          console.error("Error fetching builder data:", error);
          set({ error: error.message, builder: null });
          toast.error("Failed to fetch builder data.");
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
