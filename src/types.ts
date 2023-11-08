export type Tab = {
  label: string;
  key: string;
  url: string;
};

export type History = {
  label: string;
  key: string;
  url: string;
};

export type Favourite = {
  label: string;
  key: string;
  url: string;
};

export interface BrowserSlice {
  url: string | null;
  setUrl: (url: string | null) => void;
  webviewRef: React.RefObject<Electron.WebviewTag> | null;
  setRef: (webviewRef: React.RefObject<Electron.WebviewTag>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: Tab[];
  addTab: (tab: Tab) => void;
  removeTab: (key: string) => void;
  updateTab: (tab: Tab) => void;
  history: History[];
  addHistory: (history: History) => void;
  removeHistory: (key: string) => void;
  eraseHistory: () => void;
  favourites: Favourite[];
  addFavourite: (favourite: Favourite) => void;
  removeFavourite: (key: string) => void;
  eraseFavourites: () => void;
}
