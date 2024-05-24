import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleHiddenCart } from "../redux/Cart/cartSlice.js";
import CartBurble from "./CartBurble.jsx";
import Carrito from "./Carrito";
import Modal from "./Modal.jsx";

export default function Header() {
  let [open, setOpen] = useState(false);
  const [carrito, setCarrito] = useState(false);
  const [animarCarrito, setAnimarCarrito] = useState(false);

  const dispatch = useDispatch();
  const handleCarrito = () => {
    setAnimarCarrito((prevAnimarCarrito) => !prevAnimarCarrito);
    setTimeout(() => {
      setCarrito((prevCarrito) => !prevCarrito);
    }, 100);

    dispatch(toggleHiddenCart());
  };

  return (
    <div className="navbar z-50   bg-blue-900">
      <div className="navbar-start ">
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer "
        >
          <div className="text-2xl text-black">
            <ion-icon
              name={open ? "close" : "menu-outline"}
              color="light"
            ></ion-icon>
          </div>
        </div>
        <a className="btn btn-ghost text-3xl text-red-800 font-mono">JN</a>
      </div>
      <div className="navbar-center flex-col lg:flex z-40">
        <ul
          className={`menu absolute text-black md:static gap-3 menu-vertical md:menu-horizontal  px-1 transition-all duration-500 ease-in w-11/12 md:w-full bg-blue-400 md:bg-transparent z-20 border-2 border-slate-700 md:border-none rounded-b-lg ${
            open ? " top-16 " : "top-[-490px]"
          } `}
        >
          <li className=" hover:underline hover:decoration-solid  text-black hover:bg-slate-200   md:bg-[#40e0d0] items-center  ">
            <Link to="/" className="btn-md flex justify-center items-center ">
              Home
            </Link>
          </li>
          <li className=" hover:underline hover:decoration-solid  text-black hover:bg-slate-200 md:bg-[#40e0d0] items-center border-t border-slate-700 md:border-none">
            <Link
              to="juguetes"
              className="btn-md flex justify-center items-center"
            >
              Juguetes
            </Link>
          </li>
          <li className=" hover:underline hover:decoration-solid  text-black hover:bg-slate-200 md:bg-[#40e0d0] items-center border-t border-slate-700 md:border-none">
            <Link
              to="contact"
              className="btn-md flex justify-center items-center"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end text-2xl md:mr-4">
        <CartBurble />
        <ion-icon
          name="cart-sharp"
          color="light"
          onClick={handleCarrito}
        ></ion-icon>
        {carrito && (
          <Carrito
            setCarrito={setCarrito}
            animarCarrito={animarCarrito}
            setAnimarCarrito={setAnimarCarrito}
          />
        )}
      </div>
      <Modal />
    </div>
  );
}
