import React from "react";
import Selectores from "./Selectores.jsx";
import Categorias from "./Categorias.jsx";

export default function PageProd() {
   return (
      <div>
         {" "}
         <div className="gap-20 flex flex-wrap  flex-col items-center  bg-LightSkyBlue">
            <Selectores />
            <Categorias />
         </div>
      </div>
   );
}
