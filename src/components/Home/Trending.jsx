import React from "react";
import Container from "../Layout/Container";
import { tredingData } from "../../data";
import ProductCard from "../UI/ProductCard";

const Trending = () => {
  return (
    <Container sectionClass={"p-10"}>
      <h2 className="text-2xl font-semibold text-center mb-8">
        Latest Products
      </h2>
      <ul className="grid grid-cols-4 gap-5">
        {tredingData.map((item) => (
          <ProductCard item={item} col="grid-1" />
        ))}
      </ul>
    </Container>
  );
};

export default Trending;
