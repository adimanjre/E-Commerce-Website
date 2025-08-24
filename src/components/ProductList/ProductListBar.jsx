import { ColumnIcon, GridIcon } from "../Svg/icon";
import Input from "../UI/Input";

const ProductListBar = () => {
  return (
    <div className="flex justify-between items-center mb-5">
      <div>
        <h3 className="text-3xl font-medium">
          Ecommerce Acceories & Fasion Items
        </h3>
        <p className="text-gray-500 mt-2">About 9,260 results(0.62 seconds)</p>
      </div>
      <div>
        <form className="flex gap-3">
          <div>
            <label>Per Page: </label>
            <Input type={"number"} classes={"w-[60px] h-[35px]"} />
          </div>
          <div>
            <label>Sort By: </label>
            <select className="border p-1 border-gray-300 rounded-sm h-[35px]">
              <option value="1" selected>
                Best Value
              </option>
              <option value="2">Best Rate</option>
              <option value=""></option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="box-view">
              <GridIcon />
            </label>
            <input
              type="radio"
              name="grid_view"
              id="box-view"
              className="hidden"
            />
            <label htmlFor="column-view">
              <ColumnIcon />
            </label>
            <input
              type="radio"
              name="grid_view"
              id="column-view"
              className="hidden"
            />
          </div>
          <div>
            <Input type={"text"} classes={"w-[100px] h-[35px]"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductListBar;
