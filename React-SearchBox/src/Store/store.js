import { create } from "zustand";

const STATE = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

const useStore = create((set) => ({
  query: "",
  results: [],
  status: STATE.LOADING,
  cache: {},
  setQuery: (query) => set({ query }),
  setResults: (results) => set({ results }),
  setStatus: (status) => set({ status }),
  setCache: (query, products) =>
    set((state) => ({
      ...state.cache,
      [query]: products,
    })),
}));

export default useStore;
