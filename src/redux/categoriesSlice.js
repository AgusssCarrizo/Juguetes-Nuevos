import {Categories} from "../Pages/Productos/Data/Categories";
import {createSlice} from "@reduxjs/toolkit";

const INITAL_STATE = {
   categories: Categories,
   selectedCategory: null,
};

export const categoriesSlice = createSlice({
   name: "categories",
   initialState: INITAL_STATE,
   reducers: {
      selectCategory: (state, action) => {
         state.selectedCategory =
            action.payload !== state.selectedCategory ? action.payload : null;
      },
      getCategories: (state) => state.categories,
   },
});

export const {getCategories, selectCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;
