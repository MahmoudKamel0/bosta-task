import { create } from "zustand";

interface ProductFilterState {
    price: string;
    category: string;
    setPriceBy: (value: string) => void;
    setCategoryBy: (value: string) => void;
}

export const useProductFilterByStore = create<ProductFilterState>((set) => ({
    price: "",
    category: "",
    setPriceBy: (value) => set({ price: value }),
    setCategoryBy: (value) => set({ category: value }),
}));
