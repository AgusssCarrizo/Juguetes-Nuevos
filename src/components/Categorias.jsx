import React from "react";
import {categorias} from "./Data/categorias";
import Productos from "./Productos";

export default function Categorias() {
   return (
      <div className="flex flex-wrap gap-8 justify-center">
         {categorias.map((cat) => (
            <Productos key={cat.id} {...cat} />
         ))}
      </div>
   );
}
