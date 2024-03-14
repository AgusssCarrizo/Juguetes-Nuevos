import {
   addItemToCart,
   removeItemFromCart,
   resetShippingCart,
} from "./cartUtils";
import {SHIPPING_COST} from "../constants";
import {createSlice} from "@reduxjs/toolkit";

const INITAL_STATE = {
   cartItems: [],
   shippingCost: 0,
   hidden: true,
};

const cartSlice = createSlice({
   name: "cart",
   initialState: INITAL_STATE,
   reducers: {
      addToCart: (state, action) => {
         return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload),
            shippingCost: SHIPPING_COST,
         };
      },
      removeFromCart: (state, action) => {
         return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload),
            shippingCost: resetShippingCart(state.cartItems, SHIPPING_COST),
         };
      },
   },
   clearCart: (state) => {
      return {
         ...state,
         cartItems: [],
         shippingCost: 0,
      };
      toggleHiddenCart: (state) => {
         return {
            hidden: !state.hidden,
         };
      };
   },
});

export const {addToCart, removeFromCart, clearCart, toggleHiddenCart} =
   cartSlice.actions;

export default cartSlice.reducer;
