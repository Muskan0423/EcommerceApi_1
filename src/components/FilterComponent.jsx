// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getProductData,
//   getSearchQuery,
//   setSearchQuery,
// } from "../slices/productSlice";

// const FilterComponent = () => {
//   return (
//     <div className="max-w-3xl mx-auto p-4 space-y-6">
//       {console.log(product)
//       }
//       <div>
//         <input
//           type="text"
//           placeholder="Search by name"
//           className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onChange={(e) => useDispatch(setSearchQuery(e.target.value))}
//         />
//       </div>
//       <div>
//         <select className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
//         <option value="Category">Category</option>
//           {product.categories?.map((val,index) => {
//             return <option  id={index} value={val}>{val}</option>;
//           })}
//         </select>
//       </div>
//       <div>
//         <select className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
//           <option value="Brands">Brands</option>
//           {product.brands?.map((val,index) => {
//             return <option key={index} value={val}>{val}</option>;
//           })}
//         </select>
//       </div>
//       <div>
//         <label className="block mb-2 text-sm text-gray-600">
//           Price Range: $0 - ${product.max}
//         </label>
//         <div className="flex items-center space-x-4">
//           <input
//             type="range"
//             min="0"
//             max="1000"
//             step="10"
//             className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
//             onChange={handleRange}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;
