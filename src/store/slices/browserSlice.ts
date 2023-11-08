import { DEFAULT_TAB } from "./../../common";
import { StateCreator } from "zustand";
import { BrowserSlice } from "../../types";

export const useBrowserSlice: StateCreator<BrowserSlice> = (set) => ({
  url: "https://www.google.com/",
  webviewRef: null,
  tabs: [DEFAULT_TAB],
  history: [],
  activeTab: "https://www.google.com/",
  favourites: [],
  setActiveTab: (tab) => set(() => ({ activeTab: tab })),
  setUrl: (newUrl) => set(() => ({ url: newUrl })),
  setRef: (ref) => set(() => ({ webviewRef: ref })),
  addTab: (tab) => set((state) => ({ tabs: [...state.tabs, tab] })),
  removeTab: (key) => set((state) => ({ tabs: state.tabs.filter(({ key: k }) => k !== key) })),
  updateTab: (tab) =>
    set((state) => ({
      tabs: state.tabs.map((el) => (el.key === tab.key ? { ...el, ...tab } : el)),
    })),
  addHistory: (history) =>
    set((state) => ({
      history:
        state.history.at(-1)?.url === history.url ? state.history : [...state.history, history],
    })),
  removeHistory: (key) =>
    set((state) => ({ history: state.history.filter(({ key: k }) => k !== key) })),
  eraseHistory: () => set(() => ({ history: [] })),
  addFavourite: (favourite) =>
    set((state) => ({
      favourites: state.favourites.find(({ url: lUrl }) => lUrl === favourite.url)
        ? state.favourites
        : [...state.favourites, favourite],
    })),
  removeFavourite: (key) =>
    set((state) => ({ favourites: state.history.filter(({ key: k }) => k !== key) })),
  eraseFavourites: () => set(() => ({ favourites: [] })),
});
