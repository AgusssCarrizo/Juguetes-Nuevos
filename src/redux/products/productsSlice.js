import {createSlice} from "@reduxjs/toolkit";

import {
   Products as ImportedProducts,
   TotalProducts as ImportedTotalProducts,
   products as ImportedCategorizedProducts,
} from "../../Pages/Productos/Data/Products.js";

const INITIAL_STATE = {
   products: ImportedProducts,
   TotalProducts: ImportedTotalProducts,
   categorizedProducts: ImportedCategorizedProducts,
};
export const productsSlice = createSlice({
   name: "juguetes",
   initialState: INITIAL_STATE,
   reducers: {
      getProducts: (state) => state.products,
   },
});

export default productsSlice.reducer;
