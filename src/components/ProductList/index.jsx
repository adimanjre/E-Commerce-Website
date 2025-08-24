import Container from "../Layout/Container";
import ProductFilterBar from "./ProductFilterBar";
import ProductListBar from "./ProductListBar";
import Products from "./Products";

const ProductList = () => {
  return (
    <Container sectionClass={"py-10"}>
      <ProductListBar />
      <div className="grid grid-cols-3 mt-10">
        <ProductFilterBar />
        <Products />
      </div>
    </Container>
  );
};

export default ProductList;
