import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "../types";
import toast from "react-hot-toast";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;
};

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItem = get().items;
            const existingItem = currentItem.find((item) => item.id === data.id);

            if (existingItem) {
                return toast("Таны сагсанд нэмэгдсэн байна.");
            }

            set({ items: [...get().items, data] });
            toast.success("Сагс руу амжилттай нэмэгдлээ.");
        },
        removeItem: (id: number) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Сагснаас амжилттай устлаа.");
        },
        removeAll: () => set({ items: [] }),
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;