import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstancev1 } from "../../lib/axiosInstance";
import { toast } from "react-hot-toast";
import useAuthStore from "../useAuthStore";

const VALID_STATUSES = [
  'pending_approval',
  'pending_review', 
  'rejected',
  'approved',
  'active',
  'checking',
  'hold',
  'upload_document',
  'completed'
];

const useProjectStatus = create(
  persist(
    (set, get) => ({
      projects: [],
      isLoading: false,
      error: null,
      selectedProject: null,

      fetchProjects: async (status = null, limit = 10, page = 1) => {
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

          if (status) params.append("status", status);

          const response = await axiosInstancev1.get(
            `/projects?${params.toString()}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          set({ projects: response.data.projects || [] });
          console.log("Fetched Projects:", response.data);
        } catch (error) {
          console.error("Fetch Projects Error:", error);
          set({
            error: error.response?.data?.message || "Failed to fetch projects",
          });
          toast.error(error.response?.data?.message || "Failed to fetch projects");
        } finally {
          set({ isLoading: false });
        }
      },

      fetchProjectById: async (projectId) => {
        set({ isLoading: true, error: null });

        try {
          const { token } = useAuthStore.getState();
          if (!token) throw new Error("Authentication token missing!");

          const response = await axiosInstancev1.get(
            `/projects/${projectId}`,
            {
              headers: { Authorization: `Bearer ${token}` }
            }
          );

          set({ selectedProject: response.data });
          console.log("Fetched Project Details:", response.data);
          return response.data;
        } catch (error) {
          console.error("Fetch Project Details Error:", error);
          const errorMessage = error.response?.data?.message || "Failed to fetch project details";
          set({ error: errorMessage });
          toast.error(errorMessage);
        } finally {
          set({ isLoading: false });
        }
      },

      updateProjectStatus: async (projectId, status, holdComment = null) => {
        set({ isLoading: true, error: null });

        try {
          if (!VALID_STATUSES.includes(status)) {
            throw new Error("Invalid status provided");
          }

          if (status === 'hold' && !holdComment) {
            throw new Error("Hold comment is required when status is hold");
          }

          const { token } = useAuthStore.getState();
          if (!token) throw new Error("Authentication token missing!");

          const payload = {
            status,
            ...(status === 'hold' && { holdComment })
          };

          const response = await axiosInstancev1.put(
            `/projects/${projectId}`,
            payload,
            {
              headers: { Authorization: `Bearer ${token}` }
            }
          );

          if (response.data.success) {
            toast.success("Project status updated successfully");
            // Refresh projects list
            await get().fetchProjects();
          }
        } catch (error) {
          console.error("Update Project Status Error:", error);
          const errorMessage = error.response?.data?.message || error.message || "Failed to update project status";
          set({ error: errorMessage });
          toast.error(errorMessage);
        } finally {
          set({ isLoading: false });
        }
      }
    }),
    {
      name: "project-status-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useProjectStatus;
