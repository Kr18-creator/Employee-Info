import { create } from "zustand";
import { getUsers } from "./api";

export const useUsersStore = create((set,) => ({
  data: [],
  filteredData:[],
  setFilteredData:(filteredData)=>{
    set({
        filteredData:filteredData
    })
  },
  isLoading: false,
  error: null,
  getUsers: async () => {
    try {
      set({ isLoading: true });
      const response = await getUsers();
      set({ isLoading: false, data: response.data });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  }
}));
