import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstancev1 } from "../../lib/axiosInstance";
import { toast } from "react-hot-toast";
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
            customerId,
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

      // Rest of your code remains the same
      // ...
    }),
    {
      name: "project-enquiries-storage", 
      getStorage: () => localStorage,
    }
  )
);

export default useProjectEnqStore;