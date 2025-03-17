import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import axiosInstance from "../../lib/axiosInstance";
import useAuthStore from "../useAuthStore";

const useServiceStore = create(
  persist((set, get) => ({
    isLoading: false,
    service: [],
    //Get all services 
    fetchServices: async () => {
      set({ isLoading: true });
      const { token } = useAuthStore.getState();
      try {
        const response = await axiosInstance.get("builder/services", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        set({ services: response.data.services, isLoading: false });
      } catch (error) {
        set({ isLoading: false });
        toast.error(
          error.response?.data?.message || "Failed to fetch services"
        );
      }
    },
    fetchBuilderservice: async (builderId) => {
      set({ isloading: true });
      const { token } = useAuthStore.getState();
      try {
        const response = await axiosInstance.get(`builder/${builderId}/services`, {
          headers: {
            Authorization:`Bearer ${token}`
          }
        });
        set({ services: response.data.services, isLoading: false });
      } catch (error) {
         set({ isLoading: false });
         toast.error(
           error.response?.data?.message || "Failed to fetch services"
         );
      }
    },
    //Create new services
    createService: async (name) => {
      set({ isLoading: true });
      const { token } = useAuthStore.getState();
      try {
        const response = await axiosInstance.post("api/v1/builder/service",name,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(name);
        
        set((state) => ({
          services: [...state.services, response.data.service],
          isLoading: false,
        }));
        toast.success("service added");
        console.log(response.data.service);
      } catch (error) {
        set({ isLoading: false });
        toast.error(
          error.response?.data?.message || "Failed to create service"
        );
      }
    },
    //Add existing services to builder
    addServiceToBuilder: async (serviceId, builderId) => {
      set({ isLoading: true });
      const { token } = useAuthStore.getState();
      try {
        await axiosInstance.post(
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