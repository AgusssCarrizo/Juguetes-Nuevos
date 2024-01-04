import React from "react";

import Categorias from "./Categorias";

export default function Productos({img, title, category}) {
   return (
      <div className="card w-96 bg-base-100 shadow-xl ">
         <figure>
            <img src={img} alt="Shoes" className="h-[200px] mt-6" />
         </figure>
         <div className="card-body ">
            <h2 className="card-title  ">
               {title}
               <div className="badge badge-secondary  ">{category}</div>
            </h2>
            <p>Precio</p>
            <div className="card-actions justify-end">
               <div className="btn btn-outline">Ver más</div>
            </div>
         </div>
      </div>
   );
}
