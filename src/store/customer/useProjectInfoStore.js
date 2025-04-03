import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstancev1 } from "../../lib/axiosInstance";
import { toast } from "react-hot-toast";
import useAuthStore from "../useAuthStore";

const useProjectInfoStore = create(
  persist(
    (set, get) => ({
      projectInfo: null,
      holdComments: [],
      isLoading: false,
      error: null,

      fetchProjectInfo: async (projectId) => {
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

          if (response.data.success) {
            const { holds, ...projectDetails } = response.data.project;
            set({ 
              projectInfo: projectDetails,
              holdComments: holds || []
            });
            return response.data.project;
          }

        } catch (error) {
          console.error("Fetch Project Info Error:", error);
          const errorMessage = error.response?.data?.message || "Failed to fetch project information";
          set({ error: errorMessage });
          toast.error(errorMessage);
        } finally {
          set({ isLoading: false });
        }
      },

      getHoldComments: async (projectId) => {
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

          if (response.data.success) {
            set({ holdComments: response.data.project.holds || [] });
            return response.data.project.holds;
          }

        } catch (error) {
          console.error("Fetch Hold Comments Error:", error);
          const errorMessage = error.response?.data?.message || "Failed to fetch hold comments";
          set({ error: errorMessage });
          toast.error(errorMessage);
        } finally {
          set({ isLoading: false });
        }
      }
    }),
    {
      name: "project-info-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useProjectInfoStore;
