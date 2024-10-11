import React from 'react'
import Product from './Product'

const Products = () => {
  return (
    <section class="py-2 relative">
    <div class="w-full max-w-9xl mx-auto px-4 md:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
        </div>
      
        <div class="grid grid-cols-12">
            <div class="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
                <div class="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                    <div class="flex items-center mb-5 gap-1">
                        <div class="relative w-full">
                            <select id="FROM"
                                class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                <option selected>Min</option>
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                          
                        </div>
                        <p class="px-1 font-normal text-sm leading-6 text-gray-600">to</p>
                        <div class="relative w-full">
                            <select id="FROM"
                                class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                <option selected>Max</option>
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                          
                        </div>
                    </div>

                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-600 w-full">Select Range</label>
                    <label className="block mb-2 text-sm text-gray-600">
          Price Range: $0 - $1000
        </label>
        <div className="flex items-center space-x-4 mb-5">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <input
          type="text"
          placeholder="Search by name"
          className="w-full p-2 mb-5 mt-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        //   onChange={(e) => useDispatch(setSearchQuery(e.target.value))}
        />
                    <button
                        class="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  ">
                        Search
                    </button>
                </div>

                <div class="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                    <div class="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                        <p class="font-medium text-base leading-7 text-black ">Filter Plans</p>
                        <p
                            class="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                            RESET</p>
                    </div>


                    <label for="Offer" class="font-medium text-sm leading-6 text-gray-600 mb-1">Availability</label>
                    <div class="relative w-full mb-7">
                        <select id="Offer"
                            class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                            <option selected>ALL</option>
                            <option value="option 1">option 1</option>
                            <option value="option 2">option 2</option>
                            <option value="option 3">option 3</option>
                            <option value="option 4">option 4</option>
                        </select>
                    </div>
                    <label for="Offer" class="font-medium text-sm leading-6 text-gray-600 mb-1">Category</label>
                    <div class="relative w-full mb-7">
                        <select id="Offer"
                            class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                            <option selected>ALL</option>
                            <option value="option 1">option 1</option>
                            <option value="option 2">option 2</option>
                            <option value="option 3">option 3</option>
                            <option value="option 4">option 4</option>
                        </select>
                    </div>
                    <label for="Offer" class="font-medium text-sm leading-6 text-gray-600 mb-1">Brands</label>
                    <div class="relative w-full mb-7">
                        <select id="Offer"
                            class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                            <option selected>ALL</option>
                            <option value="option 1">option 1</option>
                            <option value="option 2">option 2</option>
                            <option value="option 3">option 3</option>
                            <option value="option 4">option 4</option>
                        </select>
                    </div>
                    <p class="font-medium text-sm leading-6 text-black mb-3">Discount</p>
                    <div class="box flex flex-col gap-2">
    <div class="flex items-center">
        <input id="radio-default-1" name="percentage" type="radio" value="20" class="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
        <label for="radio-default-1" class="text-xs font-normal text-gray-600 leading-4 cursor-pointer">20% or more</label>
    </div>
    <div class="flex items-center">
        <input id="radio-default-2" name="percentage" type="radio" value="30" class="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
        <label for="radio-default-2" class="text-xs font-normal text-gray-600 leading-4 cursor-pointer">30% or more</label>
    </div>
    <div class="flex items-center">
        <input id="radio-default-3" name="percentage" type="radio" value="50" class="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
        <label for="radio-default-3" class="text-xs font-normal text-gray-600 leading-4 cursor-pointer">50% or more</label>
    </div>
</div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-9"><Product/></div>
        </div>

    </div>
</section>
                                        
  )
}

export default Products
