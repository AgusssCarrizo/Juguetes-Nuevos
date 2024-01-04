import React from "react";

export default function Hero() {
   return (
      <div className="hero min-h-screen bg-red-800">
         <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse glass shadow-md">
            <img
               src="https://res.cloudinary.com/diotu9grj/image/upload/v1704406019/TS4-hero_xsx5bv.jpg"
               className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
               <h1 className="text-7xl font-bold text-am-primary">
                  ¡Juguetes nuevos!
               </h1>
               <p className="py-6 text-black">Esta es una tienda de juguetes</p>
               <button className="btn  btn-outline btn-info hover:btn-info ">
                  Get Started
               </button>
            </div>
         </div>
      </div>
   );
}
