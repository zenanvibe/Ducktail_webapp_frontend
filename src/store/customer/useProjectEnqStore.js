import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstancev1 } from "../../lib/axiosInstance";
import { toast } from "react-hot-toast";
import useAuthStore from "../useAuthStore";

const useProjectEnqStore = create(
  persist(
    (set, get) => ({
      enquiries: [],
      isLoading: false,
      error: null,

      fetchCustomerEnquiries: async (status = null, limit = 10, page = 1) => {
        set({ isLoading: true, error: null });

        try {
          const { token, user } = useAuthStore.getState();
          if (!token) throw new Error("Authentication token missing!");
          if (!user?.customerId) throw new Error("Customer ID missing!");

          const params = new URLSearchParams({
            // customerId: user.customerId,
            customerId:3,
            limit,
            page,
          });

          console.log(params.toString()); 

          if (status) params.append("status", status);

          const response = await axiosInstancev1.get(
            `/projects/enquiries?${params.toString()}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          set({ enquiries: response.data.enquiries || [] });
          console.log("Fetched Customer Enquiries:", response.data);
          return response.data.enquiries[0]?.id; // Return first enquiry ID
        } catch (error) {
          console.error("Fetch Customer Enquiries Error:", error);
          set({
            error: error.response?.data?.message || "Failed to fetch enquiries",
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

          // Get latest project ID from enquiries
          const latestProjectId = await get().fetchCustomerEnquiries();
          if (!latestProjectId) throw new Error("No project ID found!");

          const payload = {
            key,
            holdComment
          };

          const response = await axiosInstancev1.put(
            `/projects/${latestProjectId}/status-by-key`,
            payload,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          console.log("Project Status Updated:", response.data);
          const successMessage = key === 'accept' ? 'Project Accepted Successfully' : 'Project Declined Successfully';
          toast.success(successMessage);
          
          // Refresh enquiries after status update
          await get().fetchCustomerEnquiries();
          
          return response.data;
        } catch (error) {
          console.error("Update Project Status Error:", error);
          const errorMessage = error.response?.data?.message || `Failed to ${key} project`;
          set({ error: errorMessage });
          toast.error(errorMessage);
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
