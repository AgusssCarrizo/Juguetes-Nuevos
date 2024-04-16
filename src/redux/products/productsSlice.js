import { createSlice } from "@reduxjs/toolkit";

import {
  Products,
  TotalProducts,
  products as ReduceProducts,
} from "../../Pages/Productos/Data/Products.js";

const INITIAL_STATE = {
  products: Products,
  TotalProducts: TotalProducts,
  categorizedProducts: ReduceProducts,
};
export const productsSlice = createSlice({
  name: "juguetes",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => state,
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
