import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstancev1 } from "../../lib/axiosInstance";
// import useAuthStore from "../useAuthStore";

const useProjectEnqStore = create(
  persist(
    (set, get) => ({
      isLoading: false,
      error: null,

      updateProjectStatus: async (projectId, key, holdComment = "") => {
        if (get().isLoading) return; // Prevent multiple simultaneous calls
        set({ isLoading: true, error: null });

        try {
          const customerToken = localStorage.getItem('customerToken');
          if (!customerToken) {
            throw new Error("Customer token missing!");
          }

          const status = key === 'accept' ? 'active' : key === 'decline' ? 'rejected' : key;

          const response = await axiosInstancev1.put(
            `/projects/${projectId}/status-by-key`,
            { key, status, holdComment },
            {
              headers: { 
                Authorization: `Bearer ${customerToken}`,
                'Content-Type': 'application/json'
              }
            }
          );

          if (response.data.success) {
            return response.data;
          }
          
          throw new Error(response.data.message || "Failed to update project status");

        } catch (error) {
          const errorMessage = error.response?.data?.message || "Failed to update project status";
          set({ error: errorMessage });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "project-enquiries-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useProjectEnqStore;