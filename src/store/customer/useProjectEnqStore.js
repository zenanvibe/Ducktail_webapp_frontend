import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstancev1 } from "../../lib/axiosInstance";
// import { toast } from "react-hot-toast";
import useAuthStore from "../useAuthStore";

import { jwtDecode } from "jwt-decode"; // Note the named import instead of default import

const useProjectEnqStore = create(
  persist(
    (set, get) => ({
      enquiries: [],
      isLoading: false,
      error: null,

      fetchCustomerEnquiries: async (status = null, limit = 10, page = 1) => {
        if (get().isLoading) return; // Prevent multiple simultaneous calls
        set({ isLoading: true, error: null });

        try {
          const { token } = useAuthStore.getState();
          const customerToken = localStorage.getItem('customerToken');
          
          if (!token || !customerToken) {
            throw new Error("Authentication tokens missing!");
          }

          const decodedToken = jwtDecode(customerToken);
          const customerId = decodedToken?.customerId;
          
          if (!customerId) {
            throw new Error("Customer ID missing from token!");
          }

          const params = new URLSearchParams({
            customerId,
            limit,
            page,
            ...(status && { status })
          });

          const response = await axiosInstancev1.get(
            `/projects?${params.toString()}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          const projects = response.data.projects || [];
          set({ enquiries: projects });
          return projects;

        } catch (error) {
          const errorMessage = error.response?.data?.message || "Failed to fetch projects";
          set({ error: errorMessage, enquiries: [] });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

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
            // Fetch updated list with same status
            const currentStatus = get().enquiries[0]?.status || 'pending_approval';
            await get().fetchCustomerEnquiries(currentStatus);
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