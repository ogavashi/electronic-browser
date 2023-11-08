import { Button, Space, Tooltip } from "antd";
import { LeftOutlined, RightOutlined, ReloadOutlined, LikeOutlined } from "@ant-design/icons";
import { useControl } from "../../hooks";

export const ControlBlock = () => {
  const { handleGoBack, handleGoForward, handleRefresh, handleAddFavourite } = useControl();

  return (
    <Space direction="horizontal">
      <Tooltip title="Go back">
        <Button type="default" shape="circle" icon={<LeftOutlined />} onClick={handleGoBack} />
      </Tooltip>
      <Tooltip title="Go forward">
        <Button type="default" shape="circle" icon={<RightOutlined />} onClick={handleGoForward} />
      </Tooltip>
      <Tooltip title="Reload">
        <Button type="primary" shape="circle" icon={<ReloadOutlined />} onClick={handleRefresh} />
      </Tooltip>
      <Tooltip title="Add to favourites">
        <Button
          type="primary"
          shape="circle"
          icon={<LikeOutlined />}
          onClick={handleAddFavourite}
        />
      </Tooltip>
    </Space>
  );
};
