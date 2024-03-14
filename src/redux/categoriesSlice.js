import {Categories} from "/Users/agustincarrizo/Desktop/ProgramacionC/Entregas/React/proyecto-uno/src/Pages/Productos/Data/Categories.js";
import {createSlice} from "@reduxjs/toolkit";

const INITAL_STATE = {
   categories: Categories,
};

export const categoriesSlice = createSlice({
   name: "categories",
   initialState: INITAL_STATE,
   reducers: {
      getCategories: (state) => {
         return state;
      },
   },
});

export const {getCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;
