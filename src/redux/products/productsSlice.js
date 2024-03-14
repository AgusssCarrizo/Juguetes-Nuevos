import {createSlice} from "@reduxjs/toolkit";

import {
   Products,
   TotalProducts,
} from "/Users/agustincarrizo/Desktop/ProgramacionC/Entregas/React/proyecto-uno/src/Pages/Productos/Data/Products.js";

const INITIAL_STATE = {
   products: Products,
   TotalProducts: TotalProducts,
};

export const productsSlice = createSlice({
   name: "juguetes",
   initialState: INITIAL_STATE,
   reducers: {
      getProducts: (state) => {
         return state;
      },
   },
});

export const {getProducts} = productsSlice.actions;

export default productsSlice.reducer;
