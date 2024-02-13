import React, {useState} from "react";

function MenuHamburgesa() {
   const [clicked, setClicked] = useState(false);
   const handleClick = () => {
      setClicked(!clicked);
   };
   return (
      <div>
         <ul className=" gap-3 px-1 absolute left-0 top-16">
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
         <div></div>
      </div>
   );
}

export default MenuHamburgesa;
