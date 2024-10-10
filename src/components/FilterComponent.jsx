import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductData,
  getSearchQuery,
  setSearchQuery,
} from "../slices/productSlice";

const FilterComponent = () => {
  const produts = useSelector(getProductData);
  const searchQuery = useSelector(getSearchQuery);
  const dispatch = useDispatch();
  let sortList = {};
  produts.filter((val) => {
    if (sortList[val.category]) {
      return false;
    } else {
      sortList[val.category] = -1;
      return true;
    }
  });
  let sortListedArr = Object.keys(sortList);
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <div>
        <input
          type="text"
          placeholder="Search by name"
          className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => useDispatch(setSearchQuery(e.target.value))}
        />
      </div>
      <div>
        <select className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          {/* <option value="">All Types</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home</option>
          <option value="books">Books</option> */}
          {sortListedArr?.map((val) => {
            return <option value={val}>{val}</option>;
          })}
        </select>
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600">
          Price Range: $0 - $1000
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
