import React from "react";

import Categorias from "./Categorias";

export default function Productos({img, title, category}) {
   return (
      <div className="card w-72 md:w-96 bg-roj-secondary shadow-xl mb-6">
         <figure>
            <img src={img} alt="Shoes" className="h-[200px] mt-6" />
         </figure>
         <div className="card-body ">
            <h2 className="card-title  text-black">
               {title}
               <div className="badge badge-secondary  ">{category}</div>
            </h2>
            <p>Precio</p>
            <div className="card-actions justify-end">
               <div className="btn btn-info btn-outline hover:btn-info">
                  Comprar
               </div>
            </div>
         </div>
      </div>
   );
}
