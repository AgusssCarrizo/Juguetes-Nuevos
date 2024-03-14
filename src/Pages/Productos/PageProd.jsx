import React from "react";
import Selectores from "./Selectores.jsx";
import Categorias from "./Categorias.jsx";
import Productos from "./Productos.jsx";
import Juguetes from "./Juguetes.jsx";

export default function PageProd() {
   return (
      <div>
         <div className="gap-20  bg-LightSkyBlue">
            <Categorias />
            <Juguetes />
         </div>
      </div>
   );
}
