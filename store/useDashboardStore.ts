import { create } from "zustand";

interface DashboardState {
  dateRange: "7d" | "30d" | "12m";
  userType: "all" | "free" | "premium" | "enterprise";
  setDateRange: (range: "7d" | "30d" | "12m") => void;
  setUserType: (type: "all" | "free" | "premium" | "enterprise") => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  dateRange: "30d",
  userType: "all",
  setDateRange: (range) => set({ dateRange: range }),
  setUserType: (type) => set({ userType: type }),
}));
