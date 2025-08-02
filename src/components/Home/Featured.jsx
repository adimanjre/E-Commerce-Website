import { chairsData } from "../../data";
import ProductCard from "../UI/ProductCard";

const Featured = () => {
  return (
    <ul className="grid grid-cols-4 gap-5">
      {chairsData.map((item) => (
        <ProductCard item={item} col="grid-1" />
      ))}
    </ul>
  );
};

export default Featured;
