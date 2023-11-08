import { useBrowserSlice } from "./slices/browserSlice";
import { create } from "zustand";
import { BrowserSlice } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";

export const useStore = create<BrowserSlice>()(
  persist(
    (...a) => ({
      ...useBrowserSlice(...a),
    }),
    {
      name: "broser-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) =>
        Object.fromEntries(Object.entries(state).filter(([key]) => !["webviewRef"].includes(key))),
    }
  )
);
