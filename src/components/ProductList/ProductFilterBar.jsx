import { productFilters } from "../../data";
import Input from "../UI/Input";
import FilterList from "./FilterList";

const ProductFilterItem = ({ title, list }) => {
  return (
    <>
      <h4 className="text-2xl font-medium mb-2 underline underline-offset-8">
        {title}
      </h4>
      <ul className="text-gray-500">
        {list.map((item) => (
          <FilterList
            key={title === "Rating Item" ? item.stars : item}
            name={item}
            title={title}
          />
        ))}
      </ul>
    </>
  );
};

const ProductFilterBar = () => {
  return (
    <div className="grid-1 space-y-4">
      <div>
        <ProductFilterItem
          title={"Product Brand"}
          list={productFilters.productBrand}
        />
      </div>
      <div>
        <ProductFilterItem
          title={"Discount Offer"}
          list={productFilters.discountOffer}
        />
      </div>
      <div>
        <ProductFilterItem
          title={"Rating Item"}
          list={productFilters.ratingItem}
        />
      </div>
      <div>
        <ProductFilterItem
          title={"Categories"}
          list={productFilters.categories}
        />
      </div>
      <div>
        <ProductFilterItem
          title={"Price Filter"}
          list={productFilters.priceFilter}
        />
        <Input type={"search"} placeholder={"$10 - $20000"} classes={"mt-2"} />
      </div>
      <div>
        <ProductFilterItem
          title={"Filter By Color"}
          list={productFilters.filterByColor}
        />
      </div>
    </div>
  );
};

export default ProductFilterBar;
