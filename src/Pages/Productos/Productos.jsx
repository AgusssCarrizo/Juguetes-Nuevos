import React from "react";
export default function Productos({img, title, category}) {
   return (
      <div className="card w-64 md:w-96 h-100 bg-gray-200 shadow-xl mb-6">
         <figure>
            <img src={img} alt="Shoes" className="h-[200px] mt-6 rounded" />
         </figure>
         <div className="card-body">
            <div className="flex justify-between">
               <h2 className="card-title  text-black text-ellipsis h-24 w-4/5">
                  {title}
               </h2>
               <div className="badge h-[30px] bg-red-300 text-black ">
                  {category}
               </div>
            </div>
            <p className="text-black">Precio</p>
            <div className="card-actions justify-end">
               <div className="btn btn-warning btn-outline hover:btn-warning">
                  Comprar
               </div>
            </div>
         </div>
      </div>
   );
}
