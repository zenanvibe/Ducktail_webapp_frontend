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

      fetchEnquiries: async (status = null, limit = 10, page = 1) => {
        set({ isLoading: true, error: null });

        try {
          const { token, user } = useAuthStore.getState();
          if (!token) throw new Error("Authentication token missing!");
          if (!user) throw new Error("Builder ID missing in token!");

          const params = new URLSearchParams({
            builderId: user,
            limit,
            page,
          });
          // console.log(user)
          if (status) params.append("status", status);

          const response = await axiosInstancev1.get(
            `/projects/enquiries?${params.toString()}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          set({ enquiries: response.data.enquiries || [] });
          console.log("Fetched Enquiries:", response.data);
        } catch (error) {
          console.error("Fetch Enquiries Error:", error);
          set({
            error: error.response?.data?.message || "Failed to fetch enquiries",
          });
        } finally {
          set({ isLoading: false });
        }
      },

      sendProjectInvite: async (customerDucktailId, projectData) => {
        set({ isLoading: true, error: null });

        try {
          const { token } = useAuthStore.getState();
          if (!token) throw new Error("Authentication token missing!");

          // Find the enquiry matching the customerDucktailId
          const enquiry = get().enquiries.find(
            (enq) => enq.customer_ducktail_id === customerDucktailId
          );

          if (!enquiry) throw new Error("Customer not found in enquiries!");

          const payload = {
            builderId: enquiry.builder_id,
            customerId: enquiry.customer_id,
            status: "pending_approval", // Default status
            ...projectData, // Other project details (name, location, etc.)
          };

          console.log(payload); 

          const response = await axiosInstancev1.post("/projects", payload, {
            headers: { Authorization: `Bearer ${token}` },
          });

          console.log("Project Invite Sent:", response.data);
          toast.success("Project Invite Sent Successfully");
          return response.data;
        } catch (error) {
          console.error("Project Invite Error:", error);
          set({
            error:
              error.response?.data?.message || "Failed to send project invite",
          });
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
