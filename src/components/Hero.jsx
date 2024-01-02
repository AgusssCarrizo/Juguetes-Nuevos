import React from "react";

export default function Hero() {
   return (
      <div className="hero min-h-screen bg-roj-secondary ">
         <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse glass">
            <img
               src="src/assets/img/TS4-hero.jpeg"
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
