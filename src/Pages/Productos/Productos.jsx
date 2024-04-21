import { formatPrice } from "../../Utils/formatPrice.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cart/cartSlice.js";

export default function Productos({ juguete }) {
  const dispatch = useDispatch();
  const { img, title, category, price, id } = juguete;

  return (
    <div
      className="card w-64 md:w-96 h-100 bg-gray-200 shadow-xl mb-6"
      key={id}
    >
      <figure className="flex justify-center items-center">
        <img src={img} alt="Shoes" className="h-[200px] mt-6 rounded" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between h-28 py-auto md:items-center">
          <h2 className="text-black h-full w-1/2 text-lg truncate md:text-pretty font-bold">
            {title}
          </h2>
          <div className="badge h-[30px] bg-red-300 text-black">{category}</div>
        </div>
        <div className="flex items-center">
          <p className="text-base md:text-xl font-semibold text-gray-800">
            {formatPrice(price)}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-warning btn-outline hover:btn-warning"
              onClick={() => dispatch(addToCart({ img, title, price, id }))}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
