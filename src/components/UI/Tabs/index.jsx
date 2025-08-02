import TabLink from "./TabLink";
import { tabbedProducts } from "../../../data";
import ProductCard from "../../UI/ProductCard";
import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState({
    index: 0,
    tabName: tabbedProducts[0].tab,
  });
  const activeTabPane = tabbedProducts[activeTab.index];

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
        {tabbedProducts.map((item, index) => (
          <TabLink
            key={item.tab}
            isActive={item.tab === activeTab.tabName}
            onClick={() => handleTabClick(item.tab, index)}
          >
            {item.tab}
          </TabLink>
        ))}
      </div>
      <ul className="grid grid-cols-3 gap-10">
        {activeTabPane.items.map((item) => (
          <ProductCard item={item} col={"grid-1"} key={item.tab} />
        ))}
      </ul>
    </>
  );
};

export default Tab;
