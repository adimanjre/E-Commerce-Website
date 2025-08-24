import { tabbedProducts } from "../../data";
import ProductCard from "../UI/ProductCard";
import Tab from "../UI/Tabs";

const tabList = tabbedProducts.map((tab, index) => {
  return {
    tabId: index,
    tabName: tab.tab,
    tabPane: (
      <ul className="grid grid-cols-3 gap-10">
        {tab.items.map((item) => (
          <ProductCard item={item} col={"grid-1"} key={item.tab} />
        ))}
      </ul>
    ),
  };
});

const Latest = () => {
  return (
    <>
      <Tab tabList={tabList} />
    </>
  );
};

export default Latest;
