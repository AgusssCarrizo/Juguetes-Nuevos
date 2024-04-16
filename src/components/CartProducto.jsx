import {formatPrice} from "../Utils/formatPrice";
import {useDispatch} from "react-redux";
import {
   addToCart,
   removeFromCart,
   clearItemFromCart,
} from "../redux/Cart/cartSlice";

export default function CartProducto({img, title, price, quantity, id}) {
   const dispatch = useDispatch();
   return (
      <div className="flex items-center h-32">
         <div className="h-full w-2/5">
            <img src={img} alt="" className="h-32 w-auto rounded-md ml-8" />
         </div>
         <div className="flex w-3/5 justify-between">
            <div>
               <h3>{title}</h3>
               <p>{formatPrice(price)}</p>
            </div>
            <div className="mr-4 flex flex-col gap-4 items-end">
               <i
                  className="fa-solid fa-trash hover:cursor-pointer justify-end"
                  onClick={() => dispatch(clearItemFromCart(id))}></i>
               <div className="flex gap-5 ">
                  <button
                     onClick={() => dispatch(removeFromCart(id))}
                     className="bg-red-200 w-5">
                     -
                  </button>
                  <p>{quantity}</p>
                  <button
                     onClick={() =>
                        dispatch(addToCart({img, title, price, id}))
                     }>
                     +
                  </button>
               </div>
            </div>
         </div>
      </div>
      //minuto 1:31:22
   );
}
