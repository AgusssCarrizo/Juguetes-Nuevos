import {useState} from "react";
import {Link} from "react-router-dom";
import Carrito from "./Carrito";

export default function Header() {
   let [open, setOpen] = useState(false);
   const [carrito, setCarrito] = useState(false);
   const [animarCarrito, setAnimarCarrito] = useState(false);
   const handleCarrito = () => {
      setCarrito(true);
      setTimeout(() => {
         setAnimarCarrito(true);
      }, 1000);
   };
   return (
      <div className="navbar z-50   bg-blue-800">
         <div className="navbar-start ">
            <div
               onClick={() => setOpen(!open)}
               className="md:hidden cursor-pointer">
               <div className="text-2xl text-black">
                  <ion-icon
                     name={open ? "close" : "menu-outline"}
                     color="light"></ion-icon>
               </div>
            </div>
            <a className="btn btn-ghost text-3xl text-red-800 font-mono">JN</a>
         </div>
         <div className="navbar-center flex-col lg:flex z-40">
            <ul
               className={`menu absolute text-black md:text-white  md:static gap-3 menu-vertical md:menu-horizontal  px-1 transition-all duration-500 ease-in w-11/12 md:w-full bg-blue-400 md:bg-transparent z-20 border-2 border-slate-700 md:border-none rounded-b-lg ${
                  open ? " top-16 " : "top-[-490px]"
               } `}>
               <li className="h-10 w-18 hover:underline hover:decoration-solid  hover:text-black hover:bg-slate-200 md:bg-[#40e0d0] items-center ">
                  <Link className="w-full flex justify-center     " to="/">
                     Home
                  </Link>
               </li>
               <li className="h-10 w-18 hover:underline hover:decoration-solid  hover:text-black hover:bg-slate-200 md:bg-[#40e0d0] items-center border-t border-slate-700 md:border-none">
                  <Link to="juguetes">Juguetes</Link>
               </li>
               <li className="h-10 w-18 hover:underline hover:decoration-solid  hover:text-black hover:bg-slate-200 md:bg-[#40e0d0] items-center border-t border-slate-700 md:border-none">
                  <Link to="contact">Contacto</Link>
               </li>
            </ul>
         </div>
         <div className="navbar-end text-2xl">
            <ion-icon
               name="cart-sharp"
               color="light"
               onClick={handleCarrito}></ion-icon>
            {carrito && (
               <Carrito
                  setCarrito={setCarrito}
                  animarCarrito={animarCarrito}
                  setAnimarCarrito={setAnimarCarrito}
               />
            )}
         </div>
      </div>
   );
}
