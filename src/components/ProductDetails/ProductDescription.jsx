import { RatingStart } from "../Svg/icon";

const ProductDescription = ({ product }) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {Array(5)
          .fill()
          .map((_, i) => (
            <RatingStart
              key={i}
              color={`${i < product.rating.stars ? "#FFC416" : "#B2B2B2"}`}
            />
          ))}
        <span className="text-sm text-gray-500 ml-1">
          ({product.rating.count})
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-lg font-bold text-blue-700">
          ${product.price.current}
        </span>
        <span className="text-lg text-red-500 line-through">
          ${product.price.current}
        </span>
      </div>

      {/* Color */}
      <div className="mb-4">
        <span className="block font-semibold mb-1">Color</span>
        <p className="text-gray-500">{product.description}</p>
      </div>

      {/* Add to cart */}
      <div className="flex items-center gap-4 mb-6">
        <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
          Add To Cart
        </button>
        <button className="text-gray-500 hover:text-red-500 text-xl">
          {/* <FaRegHeart /> */}
        </button>
      </div>

      {/* Categories & Tags */}
      <div className="text-sm text-gray-500 mb-4">
        <p>
          <span className="font-semibold">Categories:</span> —
        </p>
        <p>
          <span className="font-semibold">Tags:</span> —
        </p>
      </div>

      {/* Share */}
      <div className="flex items-center gap-4">
        <span className="font-semibold">Share</span>
        {/* <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaPinterest className="cursor-pointer hover:text-red-500" />
            <FaFacebook className="cursor-pointer hover:text-blue-500" /> */}
      </div>
    </div>
  );
};

export default ProductDescription;
