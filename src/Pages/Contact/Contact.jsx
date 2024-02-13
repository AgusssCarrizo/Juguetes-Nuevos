import React from "react";

export default function Contact() {
   return (
      <div className="flex bg-gradient-to-r from-am-primary to-am-secondary">
         <div>
            <img src="src/assets/img/TS4-hero.jpeg" alt="" />
         </div>
         <div className="flex flex-col justify-center mx-auto w-80 gap-6">
            <h2 className="text-3xl font-extrabold text-pink-800 text-center ">
               ¿Querés conocer mas de nuestros catalogo y enterarte de nuestras
               ofertas?
               <span className="text-ros-primary">
                  Comunicate con nosotros.
               </span>
            </h2>
            <input
               type="text"
               placeholder="Nombre"
               className="bg-gray-800 input input-bordered  input-secondary w-full max-w-xs"
            />
            <input
               type="text"
               placeholder=" Email"
               className="input input-bordered  input-secondary w-full max-w-xs bg-gray-800"
            />
            <input
               type="number"
               placeholder="Telefono"
               className="input input-bordered  input-secondary w-full max-w-xs bg-gray-800"
            />
            <input
               type="text"
               placeholder="Mensaje"
               className="h-20 input input-bordered  input-secondary w-full max-w-xs bg-gray-800"
            />
            <button className="btn btn-secondary"> Enviar mensaje </button>
         </div>
      </div>
   );
}
