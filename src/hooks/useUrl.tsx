/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useStore } from "../store";
import { Tab } from "../types";
import { v4 as uuidv4 } from "uuid";

export const useUrl = () => {
  const { webviewRef, setUrl, tabs, activeTab, updateTab, addHistory } = useStore();

  useEffect(() => {
    if (!webviewRef?.current) {
      return;
    }

    const handleInnerUrl = () => {
      const newUrl = webviewRef.current?.getURL();

      const tab = tabs.find(({ key }) => key === activeTab)!;

      const newTabName = webviewRef.current?.getTitle();

      const short = newTabName!.slice(0, 20);

      const label = short.length === newTabName?.length ? short : short + "...";

      const updated = {
        ...tab,
        url: newUrl || null,
        label,
      } as Tab;

      updateTab(updated);
      addHistory({ label, url: newUrl || "No url", key: uuidv4() });

      setUrl(newUrl || null);
    };

    webviewRef.current.addEventListener("did-frame-navigate", handleInnerUrl);

    return () => {
      webviewRef.current?.removeEventListener("did-frame-navigate", handleInnerUrl);
    };
  }, [webviewRef, tabs, activeTab]);
};
