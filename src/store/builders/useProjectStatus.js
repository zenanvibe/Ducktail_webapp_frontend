import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstancev1 } from "../../lib/axiosInstance";
import { toast } from "react-hot-toast";
import useAuthStore from "../useAuthStore";

const useProjectStatus = create(
  persist(
    (set, get) => ({
      projects: [],
      isLoading: false,
      error: null,

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
    }),
    {
      name: "project-status-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useProjectStatus;
