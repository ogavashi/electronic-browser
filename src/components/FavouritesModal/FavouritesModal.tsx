import { Button, List, Modal, Tooltip, Typography } from "antd";
import { useStore } from "../../store";
import { DeleteOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { Favourite, Tab } from "../../types";
import { v4 as uuidv4 } from "uuid";

interface FavouritesModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const FavouritesModal: React.FC<FavouritesModalProps> = ({ isModalOpen, toggleModal }) => {
  const { favourites, eraseFavourites, addTab, setActiveTab, removeFavourite } = useStore();

  const formated = useMemo(() => favourites.slice().reverse(), [favourites]);

  const handleClickFavourites = (obj: Favourite) => {
    const key = uuidv4();

    const newTab = { ...obj, key } as Tab;

    toggleModal();
    addTab(newTab);
    setActiveTab(key);
  };

  return (
    <Modal
      title="Favourites"
      open={isModalOpen}
      onOk={toggleModal}
      onCancel={toggleModal}
      footer={
        <Button danger icon={<DeleteOutlined />} onClick={eraseFavourites}>
          Erase favourites
        </Button>
      }
    >
      <List
        bordered
        dataSource={formated}
        renderItem={(favourite) => (
          <List.Item>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Typography.Text
                style={{ fontSize: 24, fontWeight: 600 }}
                onClick={() => handleClickFavourites(favourite)}
              >
                {favourite.label}
              </Typography.Text>
              <Typography.Text style={{ opacity: 0.8 }}>
                {favourite.url.slice(0, 20) + "..."}
              </Typography.Text>{" "}
            </div>
            <Tooltip title="Delete">
              <Button
                shape="circle"
                icon={<MinusCircleOutlined />}
                onClick={() => removeFavourite(favourite.key)}
              />
            </Tooltip>
          </List.Item>
        )}
      />
    </Modal>
  );
};
