import Container from "../Layout/Container";
import { featuredProduct } from "../../data";
import Button from "../UI/Button";

const UniqueTrending = () => {
  return (
    <div className="bg-purple-50">
      <Container>
        <div className="grid grid-cols-2 p-10 items-center">
          <div className="grid-1">
            <img src={featuredProduct.product.image} />
          </div>
          <div className="grid-1">
            <h3 className="text-3xl font-medium">{featuredProduct.title}</h3>
            <ul className="mt-5">
              {featuredProduct.features.map((item) => (
                <li className="flex gap-2 text-gray-800">
                  <span
                    className={`h-2 w-2 inline-block shrink-0 mt-2 rounded-full bg-pink-500`}
                  ></span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-2">
              <Button text={"Add to Cart"} />
              <div className="font-medium">
                <p>{featuredProduct.product.name}</p>
                <p>{featuredProduct.product.price}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UniqueTrending;
