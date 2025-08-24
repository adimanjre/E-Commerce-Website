import React from "react";
import Input from "../UI/Input";
import { RatingStart } from "../Svg/icon";

const FilterList = ({ title, name }) => {
  if (title === "Rating Item") {
    return (
      <li className="flex items-center gap-2">
        <Input type={"checkbox"} checked={false} />
        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => {
                const color = index + 1 <= name.stars ? "#FFC107" : "#B2B2B2";
                return (
                  <li key={index}>
                    <RatingStart color={color} />
                  </li>
                );
              })}
          </ul>
          <p>({name.count})</p>
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2">
      <Input type={"checkbox"} checked={false} />
      <p>{name}</p>
    </li>
  );
};

export default FilterList;
