import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, toggleHiddenCart} from "../Utils/Cart/cartSlice";

function Carrito({animarCarrito, setAnimarCarrito}) {
   const cartItems = useSelector((state) => state.cart);
   const hiddenCart = useSelector((state) => state.cart.hidden);
   const dispatch = useDispatch();
   useEffect(() => {
      if (!hiddenCart) {
         dispatch(toggleHiddenCart());
      } else setAnimarCarrito();
   }, [dispatch, hiddenCart, setAnimarCarrito]);
   const totalPrice = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
   }, 0);
   return (
      <div
         className={`container w-full md:w-1/2  mt-10 -right-[1000px] absolute  top-8 z-40  
            ${
               animarCarrito
                  ? "absolute animate-fade-left animate-duration-[500ms] animate-ease-in right-[0]"
                  : ""
            }
         `}
         onClick={() => dispatch(toggleHiddenCart())}
         isHidden={hiddenCart}>
         <div className="bg-white shadow-md rounded-md ">
            <div className="absolute -left-7 top-3 w-8 h-8 bg-white text-center text-black">
               <i
                  class={`fa-solid fa-angles-right`}
                  onClick={() => dispatch(toggleHiddenCart())}></i>
            </div>
            <div className=" px-6 py-4">
               <h2 className="text-xl font-bold">Carrito de Compras</h2>
            </div>
            <div className="px-6 py-4"></div>
            <div className="px-6 py-4 flex justify-between items-center">
               <div>
                  <span className="text-xl font-semibold">Total:</span>
                  <span className="text-xl font-semibold text-gray-800">
                     $44.98
                  </span>
               </div>
               <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={() => dispatch(toggleHiddenCart())}>
                  Comprar
               </button>
               <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={() => dispatch(clearCart())}>
                  Vaciar Carrito
               </button>
            </div>
         </div>
      </div>
   );
}

export default Carrito;
