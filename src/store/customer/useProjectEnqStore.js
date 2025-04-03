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
        set({ isLoading: true, error: null });

        try {
          const { token } = useAuthStore.getState();
          if (!token) throw new Error("Authentication token missing!");
          
          // Get customerToken from localStorage and decode it
          const customerToken = localStorage.getItem('customerToken');
          if (!customerToken) throw new Error("Customer token missing!");
          
          // Decode the JWT token to get user information
          const decodedToken = jwtDecode(customerToken);
          const customerId = decodedToken.customerId;
          
          if (!customerId) throw new Error("Customer ID missing from token!");

          const params = new URLSearchParams({
            customerId: customerId,
            limit,
            page,
          });

          if (status) params.append("status", status);

          const response = await axiosInstancev1.get(
            `/projects?${params.toString()}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          set({ enquiries: response.data.projects || [] });
          console.log("Fetched Customer Projects:", response.data);
          return response.data.projects[0]?.id; // Return first project ID
        } catch (error) {
          console.error("Fetch Customer Projects Error:", error);
          set({
            error: error.response?.data?.message || "Failed to fetch projects",
          });
        } finally {
          set({ isLoading: false });
        }
      },

      updateProjectStatus: async (projectId, key, holdComment = "") => {
        set({ isLoading: true, error: null });

        try {
          const { token } = useAuthStore.getState();
          if (!token) throw new Error("Authentication token missing!");

          const customerToken = localStorage.getItem('customerToken');
          if (!customerToken) throw new Error("Customer token missing!");

          // Map the key to the appropriate status
          const status = key === 'accept' ? 'active' : key === 'decline' ? 'rejected' : key;

          const response = await axiosInstancev1.put(
            `/projects/${projectId}/status-by-key`,
            {
              key,
              status,
              holdComment
            },
            {
              headers: { 
                Authorization: `Bearer ${customerToken}`,
                'Content-Type': 'application/json'
              }
            }
          );

          if (response.data.success) {
            // Refresh the enquiries list after successful update
            await get().fetchCustomerEnquiries();
            console.log("Project status updated:", response.data);
            return response.data;
          } else {
            throw new Error(response.data.message || "Failed to update project status");
          }

        } catch (error) {
          console.error("Update Project Status Error:", error);
          set({
            error: error.response?.data?.message || "Failed to update project status",
          });
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