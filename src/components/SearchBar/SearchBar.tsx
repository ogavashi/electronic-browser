import { Input } from "antd";
import { useStore } from "../../store";
import { ChangeEvent, useEffect, useState } from "react";

const { Search } = Input;

export const SearchBar = () => {
  const { setUrl, url } = useStore();

  const [searchValue, setSearchValue] = useState(url || "");

  useEffect(() => {
    setSearchValue(url || "");
  }, [url]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleEnter = () => {
    setUrl(searchValue);
  };

  return (
    <div style={{ width: "100%" }}>
      <Search
        placeholder="Enter url..."
        allowClear
        enterButton="Go"
        size="large"
        value={searchValue}
        onChange={handleInputChange}
        onSearch={handleEnter}
      />
    </div>
  );
};
