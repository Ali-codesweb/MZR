import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
export const useMainStore = create((set) => ({
  token: JSON.parse(sessionStorage.getItem("mzr_token")),
  role: JSON.parse(sessionStorage.getItem("mzr_role")),
  allocated_budget: JSON.parse(sessionStorage.getItem("mzr_allocated_budget")),
  setToken: (token, role, allocated_budget) =>
    set((state) => ({ token, role, allocated_budget })),
  removeToken: () => set((state) => ({ token: null })),
  setTotalBudget: (amount) => set((state) => ({ allocated_budget:state.allocated_budget-amount })),
}));

mountStoreDevtool("Main Store", useMainStore);
