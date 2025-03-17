import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { axiosInstancev1 } from "../../lib/axiosInstance";
import useAuthStore from "../useAuthStore";

const useServiceStore = create(
  persist((set, get) => ({
    isLoading: false,
    allServices: [], // Stores all services
    builderServices: [], // Stores builder-specific services
    
    // Get all services
    fetchServices: async () => {
      set({ isLoading: true });
      const { token } = useAuthStore.getState();
      try {
        const response = await axiosInstancev1.get("builder/services", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        set({ allServices: response.data, isLoading: false });
      } catch (error) {
        set({ isLoading: false });
        toast.error(
          error.response?.data?.message || "Failed to fetch services"
        );
      }
    },
    
    // Fetch services for a specific builder
    fetchBuilderService: async () => {
      set({ isLoading: true });
      const { token, user: builderId } = useAuthStore.getState(); // Get builderId from useAuthStore

      if (!builderId) {
        set({ isLoading: false });
        toast.error("Builder ID not found");
        return;
      }

      try {
        const response = await axiosInstancev1.get(
          `builder/${builderId}/services`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        set({ builderServices: response.data, isLoading: false });
      } catch (error) {
        set({ isLoading: false });
        toast.error(
          error.response?.data?.message || "Failed to fetch builder services"
        );
      }
    },
    
    // Create new service
    fetchCreateService: async (name) => {
      set({ isLoading: true });
      const { token } = useAuthStore.getState();
      try {
        const response = await axiosInstancev1.post(
          "builder/service",
          name,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        set((state) => ({
          createServices: [...state.allServices, response.data],
          isLoading: false,
        }));
        console.log(response.data);
        toast.success("Service added");
      } catch (error) {
        set({ isLoading: false });
        toast.error(
          error.response?.data?.message || "Failed to create service"
        );
      }
    },
    
    // Add existing services to builder
    addServiceToBuilder: async (serviceId, builderId) => {
      set({ isLoading: true });
      const { token } = useAuthStore.getState();
      try {
        await axiosInstancev1.post(
          `builder/service/add`,
          { serviceId, builderId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        set({ isLoading: false });
        toast.success("Service added to builder successfully");
      } catch (error) {
        set({ isLoading: false });
        toast.error(error.response?.data?.message || "Failed to add service");
      }
    },
  }))
);
export default useServiceStore;
