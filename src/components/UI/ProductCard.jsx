import React from "react";

const ProductCard = ({ item, col, type }) => {
  if (type === "row") {
    return (
      <li
        key={item.id}
        className={`${col} border border-gray-200 rounded-lg w-full`}
      >
        <div className="grid grid-cols-3 items-center gap-2 p-3">
          <div className="grid-1 p-5 bg-blue-50">
            <img src={item.image} alt={item.name} className="h-36 mx-auto" />
          </div>
          <div className="p-5 col-span-2 space-y-1">
            <h4 className="text-pink-500 font-medium text-lg">{item.name}</h4>
            <p className="text-gray-500">Code - {item.code}</p>
            <p className="font-medium">
              {item.price}&nbsp;
              <del className="text-gray-500 text-sm">{item.actualPrice}</del>
            </p>
          </div>
        </div>
      </li>
    );
  }
  return (
    <li key={item.id} className={`${col} shadow-sm rounded-lg w-full`}>
      <div className="w-full p-5 bg-blue-50">
        <img src={item.image} alt={item.name} className="h-36 mx-auto" />
      </div>
      <div className="p-5 space-y-1">
        <h4 className="text-pink-500 font-medium text-lg">{item.name}</h4>
        <p className="text-gray-500">Code - {item.code}</p>
        <p className="font-medium">
          {item.price}&nbsp;
          <del className="text-gray-500 text-sm">{item.actualPrice}</del>
        </p>
      </div>
    </li>
  );
};

export default ProductCard;
