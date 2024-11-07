import React from "react";

import Categorias from "./Categorias.jsx";
import Juguetes from "./Juguetes.jsx";

export default function PageProd() {
  return (
    <div>
      <div className="gap-20  flex flex-wrap  flex-col items-center  bg-LightSkyBlue">
        <Categorias />
        <Juguetes />
      </div>
    </div>
  );
}
