import { useCallback } from "react";
import { Tabs as ATabs } from "antd";
import { useStore } from "../../store";
import { DEFAULT_TAB } from "../../common";
import { v4 as uuidv4 } from "uuid";

export const Tabs = () => {
  const { tabs, activeTab, addTab, removeTab, setActiveTab } = useStore();

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    if (action === "add") {
      const key = uuidv4();
      addTab({ ...DEFAULT_TAB, key });
      setActiveTab(key);
    } else {
      removeTab(targetKey as string);

      if ((targetKey as string) === activeTab) {
        setActiveTab(tabs[tabs.length - 2].key);
      }
    }
  };

  const handleClick = useCallback(
    (key: string) => {
      setActiveTab(key);
    },
    [setActiveTab]
  );

  return (
    <ATabs
      type="editable-card"
      activeKey={activeTab}
      onEdit={onEdit}
      items={tabs.map((tab) => (tabs.length === 1 ? { ...tab, closable: false } : tab))}
      onChange={handleClick}
    />
  );
};
