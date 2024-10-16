import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = import.meta.env.VITE_EXCHANGE_KEY

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (url="") => {
    const response = await fetch(`https://ecommerce-api-8ga2.onrender.com/api/product${url}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    return data;
  }
);

export const fetchBlog = createAsyncThunk(
    'data/fetchBlog',
    async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    }
  );

  export const fetchSingleProduct = createAsyncThunk(
    'data/fetchSingleProduct',
    async (id) => {
      const response = await fetch(`https://ecommerce-api-8ga2.onrender.com/api/product`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const resultData =data.find((item)=>item._id == id)
      
      return resultData;
    }
  );

  export const fetchSingleBlog = createAsyncThunk(
    'data/fetchSingleBlog',
    async (id) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    }
  );

  export const fetchCurrency  = createAsyncThunk(
    'data/fetchCurrency',
    async()=>{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/INR`);      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    }
  )
