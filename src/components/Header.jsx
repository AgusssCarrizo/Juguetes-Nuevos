import {useState} from "react";
import {Link} from "react-router-dom";

export default function Header() {
   let [open, setOpen] = useState(false);
   return (
      <div className="navbar   bg-ros-secondary">
         <div className="navbar-start">
            <div
               onClick={() => setOpen(!open)}
               className="md:hidden cursor-pointer">
               <div className="text-2xl text-black">
                  <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
               </div>
            </div>
            <a className="btn btn-ghost text-3xl text-red-800 font-mono">JN</a>
         </div>
         <div className="navbar-center flex-col lg:flex">
            <ul
               className={`menu absolute md:static gap-3 menu-vertical md:menu-horizontal  px-1 transition-all duration-500 ease-in ${
                  open ? "top-20" : "top-[-490px]"
               } `}>
               <li className="h-10 w-18 text-white hover:underline hover:decoration-solid  hover:text-black hover:bg-slate-200 bg-ros-primary">
                  <Link to="/">Home</Link>
               </li>
               <li className="h-10 w-18 text-white hover:underline hover:decoration-solid  hover:text-black hover:bg-slate-200 bg-ros-primary">
                  <Link to="juguetes">Juguetes</Link>
               </li>
               <li className="h-10 w-18 text-white hover:underline hover:decoration-solid  hover:text-black hover:bg-slate-200 bg-ros-primary">
                  <Link to="contact">Contacto</Link>
               </li>
            </ul>
         </div>
         <div className="navbar-end ">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="25"
               height="25"
               className="text-black hover:cursor-pointer mr-4"
               class="bi bi-cart"
               viewBox="0 0 16 16">
               <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
         </div>
      </div>
   );
}
