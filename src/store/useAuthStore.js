import { create } from "zustand";

const useAuthStore = create(() => ({
  useAuth: null,
}));

export default useAuthStore;
