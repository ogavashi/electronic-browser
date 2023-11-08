import { Button, List, Modal, Tooltip, Typography } from "antd";
import { useStore } from "../../store";
import { DeleteOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { History, Tab } from "../../types";
import { v4 as uuidv4 } from "uuid";

interface HistoryModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({ isModalOpen, toggleModal }) => {
  const { history, removeHistory, addTab, setActiveTab, eraseHistory } = useStore();

  const formated = useMemo(() => history.slice().reverse(), [history]);

  const handleClickHistory = (obj: History) => {
    const key = uuidv4();

    const newTab = { ...obj, key } as Tab;

    toggleModal();
    addTab(newTab);
    setActiveTab(key);
  };

  return (
    <Modal
      title="History"
      open={isModalOpen}
      onOk={toggleModal}
      onCancel={toggleModal}
      footer={
        <Button danger icon={<DeleteOutlined />} onClick={eraseHistory}>
          Erase history
        </Button>
      }
    >
      <List
        bordered
        dataSource={formated}
        renderItem={(historyObj) => (
          <List.Item>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Typography.Text
                style={{ fontSize: 24, fontWeight: 600 }}
                onClick={() => handleClickHistory(historyObj)}
              >
                {historyObj.label}
              </Typography.Text>
              <Typography.Text style={{ opacity: 0.8 }}>
                {historyObj.url.slice(0, 20) + "..."}
              </Typography.Text>{" "}
            </div>
            <Tooltip title="Delete">
              <Button
                shape="circle"
                icon={<MinusCircleOutlined />}
                onClick={() => removeHistory(historyObj.key)}
              />
            </Tooltip>
          </List.Item>
        )}
      />
    </Modal>
  );
};
