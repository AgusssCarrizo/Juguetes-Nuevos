import { formatPrice } from "../Utils/formatPrice";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearItemFromCart,
} from "../redux/Cart/cartSlice";

export default function CartProducto({ img, title, price, quantity, id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center h-32 justify-between">
      <div className="h-full w-1/4 flex flex-wrap justify-center items-center ">
        <img src={img} alt="" className="h-32 w-auto rounded-md ml-8" />
      </div>
      <div className="flex w-9/12 ml-9  justify-between ">
        <div className="w-1/2">
          <h3 className="text-lg  lg:text-2xl max-h-9 w-full  font-bold text-gray-800 truncate">
            {title}
          </h3>
          <p className="text-xl font-semibold text-gray-800">
            {formatPrice(price)}
          </p>
        </div>
        <div className="mr-4 flex flex-row-reverse gap-4 items-end">
          <i
            className="fa-solid fa-trash hover:cursor-pointer justify-end text-red-400"
            onClick={() => dispatch(clearItemFromCart(id))}
          ></i>
          <div className="flex gap-5 justify-center items-center ">
            <button
              onClick={() => dispatch(removeFromCart(id))}
              className="border w-6 h-6 flex justify-center items-center hover:cursor-pointer hover:bg-slate-300 text-black"
            >
              -
            </button>
            <p className="text-xl font-semibold text-gray-800">{quantity}</p>
            <button
              onClick={() => dispatch(addToCart({ img, title, price, id }))}
              className="border w-6 h-6 flex justify-center items-center hover:cursor-pointer hover:bg-slate-300 text-black"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    //minuto 1:31:22
  );
}
