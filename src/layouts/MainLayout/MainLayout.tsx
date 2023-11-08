import React, { PropsWithChildren, useCallback, useState } from "react";
import { ControlBlock, HistoryModal, SearchBar, Tabs } from "../../components";
import { Button, Tooltip } from "antd";
import { HeartOutlined, HistoryOutlined } from "@ant-design/icons";
import { FavouritesModal } from "../../components/FavouritesModal";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [showHistory, setShowHistory] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);

  const toggleModal = useCallback(() => {
    setShowHistory((prev) => !prev);
  }, []);

  const toggleFavModal = useCallback(() => {
    setShowFavourites((prev) => !prev);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Tabs />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          paddingInline: 20,
          marginBottom: 10,
        }}
      >
        <ControlBlock />
        <SearchBar />
        <Tooltip title="History">
          <Button shape="circle" icon={<HistoryOutlined />} onClick={toggleModal} />
        </Tooltip>
        <Tooltip title="Favourites">
          <Button shape="circle" icon={<HeartOutlined />} onClick={toggleFavModal} />
        </Tooltip>
      </div>
      <HistoryModal isModalOpen={showHistory} toggleModal={toggleModal} />
      <FavouritesModal isModalOpen={showFavourites} toggleModal={toggleFavModal} />
      <div style={{ height: "100%" }}>{children}</div>
    </div>
  );
};
