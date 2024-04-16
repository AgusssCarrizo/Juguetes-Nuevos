import React from "react";
import Productos from "./Productos.jsx";
import {useSelector} from "react-redux";

export default function Juguetes() {
   let juguetes = useSelector((state) => {
      console.log(state.juguetes);
      return state.juguetes;
   });
   const selectedCategory = useSelector(
      (state) => state.categories.selectedCategory
   );

   // Verificar si juguetes es un array, si no, convertirlo en uno
   if (!Array.isArray(juguetes)) {
      juguetes = Object.values(juguetes);
   }

   console.log("Antes de filtrar:", juguetes);

   // Filtrar juguetes solo si selectedCategory no es null
   if (selectedCategory) {
      juguetes = juguetes.filter(
         (juguete) => juguete.category === selectedCategory
      );
   }
   console.log("Después de filtrar:", juguetes, selectedCategory);

   return (
      <div>
         {juguetes &&
            juguetes.map((Product) => {
               return <Productos key={Product.id} product={Product} />;
            })}
      </div>
   );
}
