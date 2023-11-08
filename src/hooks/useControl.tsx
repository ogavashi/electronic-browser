import { useCallback } from "react";
import { useStore } from "../store";
import { Favourite } from "../types";

export const useControl = () => {
  const { webviewRef, addFavourite, activeTab, tabs } = useStore();

  const handleGoBack = useCallback(() => {
    if (webviewRef?.current) {
      webviewRef.current.goBack();
    }
  }, [webviewRef]);

  const handleGoForward = useCallback(() => {
    if (webviewRef?.current) {
      webviewRef.current.goForward();
    }
  }, [webviewRef]);

  const handleRefresh = useCallback(() => {
    if (webviewRef?.current) {
      webviewRef.current.reload();
    }
  }, [webviewRef]);

  const handleAddFavourite = useCallback(() => {
    const favourite = tabs.find(({ key: k }) => k === activeTab)! as Favourite;

    addFavourite(favourite);
  }, [activeTab, addFavourite, tabs]);

  return { handleGoBack, handleGoForward, handleRefresh, handleAddFavourite };
};
