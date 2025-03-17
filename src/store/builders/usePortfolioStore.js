import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../lib/axiosInstance";
import useAuthStore from "../useAuthStore";

const usePortfolioStore = create(
  persist(
    (set, get) => ({
      portfolios: [],
      isUploading: false,

      // ✅ Upload Portfolio Image
      uploadPortfolioImage: async (file, description) => {
        const token = useAuthStore.getState().token;
        if (!token) {
          toast.error("Unauthorized: Please log in");
          return;
        }

        const formData = new FormData();
        formData.append("portfolioImage", file);
        formData.append("description", description);

        try {
          set({ isUploading: true });
          const response = await axiosInstance.post("/builder/portfolio", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          });

          set((state) => ({
            portfolios: [...state.portfolios, { id: response.data.portfolioId, file, description }],
          }));
console.log(response.data)
          toast.success("Portfolio image uploaded successfully");
        } catch (error) {
          console.error("Upload Error:", error);
          toast.error(error.response?.data?.message || "Failed to upload portfolio image");
        } finally {
          set({ isUploading: false });
        }
      },
    }),
    {
      name: "portfolio-storage",
      getStorage: () => localStorage,
    }
  )
);

export default usePortfolioStore;
