import ProductCard from "../UI/ProductCard";
import { chairsData } from "../../data";

const Products = () => {
  return (
    <div className="col-span-2">
      <ul className="grid grid-cols-3 gap-5">
        {chairsData.map((item) => (
          <ProductCard item={item} col={"col-span-3"} type="row" />
        ))}
      </ul>
    </div>
  );
};

export default Products;
