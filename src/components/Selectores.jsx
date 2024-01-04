import React from "react";

export default function Selectores() {
   return (
      <div className="flex gap-2 flex-wrap mt-6">
         <button className="btn-md  text-gray-700 font-bolder text-[1.2rem] border-solid border-[1px] border-black rounded  bg-roj-primary">
            Destacados
         </button>
         <button className="btn-md  text-gray-700 font-bolder text-[1.2rem] border-solid border-[1px] border-black rounded bg-roj-secondary">
            Arrastre
         </button>
         <button className="btn-md  text-gray-700 font-bolder text-[1.2rem] border-solid border-[1px] border-black rounded bg-ros-primary">
            De mesa
         </button>
         <button className="btn-md  text-gray-700 font-bolder text-[1.2rem] border-solid border-[1px] border-black rounded bg-ros-secondary">
            Didácticos
         </button>
      </div>
   );
}
