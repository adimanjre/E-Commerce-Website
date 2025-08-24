import TabLink from "./TabLink";
import ProductCard from "../../UI/ProductCard";
import { useState } from "react";

const Tab = ({ tabList }) => {
  const [activeTab, setActiveTab] = useState({
    index: tabList[0].tabId,
    tabName: tabList[0].tabName,
  });
  const ActiveTabPane = tabList[activeTab.index].tabPane;

  const handleTabClick = (name, index) => {
    setActiveTab((prev) => {
      const curr = { ...prev };
      curr.tabName = name;
      curr.index = index;
      return curr;
    });
  };
  return (
    <>
      <div className="flex gap-5 justify-center mb-8">
        {tabList.map((item, index) => (
          <TabLink
            key={item.tabName}
            isActive={item.tabName === activeTab.tabName}
            onClick={() => handleTabClick(item.tabName, index)}
          >
            {item.tabName}
          </TabLink>
        ))}
      </div>
      <div>{ActiveTabPane}</div>
    </>
  );
};

export default Tab;
