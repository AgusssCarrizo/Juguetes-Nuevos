import React from "react";
import Productos from "./Productos.jsx";
import {useSelector} from "react-redux";

export default function Juguetes() {
   const juguetes = useSelector((state) => state.juguetes.products);

   return (
      <div className="w-full flex flex-wrap  items-center justify-center gap-5 mt-5">
         {juguetes.map((Product) => (
            <Productos key={Product.id} {...Product} />
         ))}
      </div>
   );
}
