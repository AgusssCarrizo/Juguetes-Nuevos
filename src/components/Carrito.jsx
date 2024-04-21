import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  toggleHiddenCart,
  openModal,
} from "../redux/Cart/cartSlice.js";
import CartProducto from "./CartProducto.jsx";

function Carrito({ animarCarrito }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();
  useEffect(() => {
    if (hiddenCart) {
      dispatch(toggleHiddenCart());
    } else;
  }, [dispatch, hiddenCart]);
  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0)
    : 0;

  return (
    <div
      className={`container w-full md:w-[60%] lg:w-[40%] mt-10 overflow-hidden  absolute  top-8 z-40  
            ${
              animarCarrito
                ? "absolute animate-fade-left overflow-visible animate-duration-[500ms] animate-ease-in "
                : ""
            }
         `}
    >
      <div className="bg-white shadow-md rounded-md ">
        <div className=" px-6 py-4">
          <h2 className="text-2xl font-bold">Carrito de Compras</h2>
        </div>
        {cartItems.length ? (
          cartItems.map((item) => <CartProducto key={item.id} {...item} />)
        ) : (
          <p className="pl-5 font-semibold text-lg">Carrito vacío</p>
        )}

        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-xl font-semibold">Total:</span>{" "}
            <span className="text-xl font-semibold text-gray-800">
              ${totalPrice}
            </span>
          </div>
          <div className="flex gap-10">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm lg:text-2xl px-4 py-2 rounded-md"
              onClick={(event) => {
                event.stopPropagation();
                dispatch(toggleHiddenCart());
                dispatch(clearCart());
                dispatch(openModal());
              }}
            >
              Comprar
            </button>
            <button
              className="bg-red-400 hover:bg-red-600 text-white text-sm lg:text-2xl px-4 py-2 rounded-md"
              onClick={(event) => {
                event.stopPropagation();
                dispatch(clearCart());
              }}
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
