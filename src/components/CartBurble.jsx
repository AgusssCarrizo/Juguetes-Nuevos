import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleHiddenCart} from "../redux/Cart/cartSlice";
export default function CartBurble() {
   const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
      (acc, item) => acc + item.quantity,
      0
   );

   const dispatch = useDispatch();
   return (
      <div
         onClick={() => dispatch(toggleHiddenCart())}
         className="relative rounded-full h-5 w-5 bg-pink-200 flex justify-center items-center -top-5 -right-8">
         <span className=" text-xs text-black">{totalCartItems}</span>
      </div>
   );
}
