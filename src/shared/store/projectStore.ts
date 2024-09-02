import { create } from 'zustand';

interface BearStore {
  activeCategory: number;
  setActiveCategory: (id: number) => void;
}

export const useProjectStore = create<BearStore>((set) => ({
  activeCategory: 0,
  setActiveCategory: (id: number) => set({ activeCategory: id }),
}));
