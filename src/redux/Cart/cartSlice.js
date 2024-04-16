import { addItemToCart, removeItemFromCart } from "./cartUtils";
import { Products } from "../../Pages/Productos/Data/Products";
import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  cartItems: [],
  hidden: true,
  modalOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    },
    clearItemFromCart: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
      };
    },
    toggleHiddenCart: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleHiddenCart,
  clearItemFromCart,
  openModal,
  closeModal,
} = cartSlice.actions;

export default cartSlice.reducer;
