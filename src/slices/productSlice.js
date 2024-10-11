import { createSlice, configureStore } from "@reduxjs/toolkit";
import { fetchData, fetchSingleProduct } from "../actions/actions";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsData: [],
    loading: false,
    error: null,
    singleProduct: {},
    searchQuery: null,
    maxPrice:0,
    minPrice:0,
    product:{categories:[],brands:[]}
  },
  reducers: {
    filterProducts: function (state, action) {
      state.productsData?.filter(val => {
        const isNewCategory = !state.product.categories.includes(val.category);
        const isNewBrand = !state.product.brands.includes(val.brand);
        const maxValue = val.price > state.maxPrice;
        if (isNewCategory) state.product.categories.push(val.category);
        if (isNewBrand) state.product.brands.push(val.brand);
        if (maxValue) {
           state.maxPrice=(val.price)
        }
        return !(isNewCategory && isNewBrand);
    });
    },
    setSearchQuery: function (state, action) {
      state.searchQuery = action.payload;
    },
    setMaxPrice:function(state,action){
      state.maxPrice=action.payload
    },
    setMinPrice:function(state,action){
      state.minPrice=action.payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.productsData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery ,setMaxPrice,setMinPrice,filterProducts} = productsSlice.actions;

export const getSearchQuery = (state) => state.products.searchQuery;
export const getProductData = (state) => state.products.productsData;
export default productsSlice.reducer;
