import React from "react";
import Productos from "./Productos.jsx";
import { useSelector } from "react-redux";

export default function Juguetes() {
  let juguetes = useSelector((state) => {
    return state.juguetes;
  });
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  // Verificar si juguetes es un array, si no, convertirlo en uno
  if (juguetes && !Array.isArray(juguetes)) {
    juguetes = Object.values(juguetes);
  }

  if (selectedCategory && selectedCategory !== "Todos") {
    juguetes = juguetes
      .flat()
      .filter(
        (juguete) =>
          typeof juguete === "object" &&
          juguete !== null &&
          juguete.category === selectedCategory
      );
  } else {
    // Si selectedCategory es "Todos" o no está definido, mostrar todos los juguetes
    juguetes = juguetes.flat();
  }

  console.log("Después de filtrar:", juguetes, selectedCategory);

  return (
    <div className="flex flex-wrap justify-center gap-20">
      {Array.isArray(juguetes) &&
        juguetes.map((juguete, index) => {
          if (juguete.id || selectedCategory) {
            return <Productos key={index} juguete={juguete} />;
          }
          return null;
        })}
    </div>
  );
}
