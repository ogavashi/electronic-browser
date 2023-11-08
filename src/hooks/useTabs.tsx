/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useStore } from "../store";

export const useTabs = () => {
  const { tabs, activeTab, setUrl } = useStore();

  useEffect(() => {
    const curTab = tabs.find(({ key }) => key === activeTab)!;

    setUrl(curTab.url);
  }, [activeTab]);
};
