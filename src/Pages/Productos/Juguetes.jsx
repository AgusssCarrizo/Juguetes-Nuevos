import React from "react";
import Productos from "./Productos.jsx";
import { useSelector } from "react-redux";

export default function Juguetes() {
  let juguetes = useSelector((state) => state.juguetes.products);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

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
    juguetes = juguetes.flat();
  }

  console.log("Después de filtrar:", juguetes, selectedCategory);

  return (
    <div className="flex flex-wrap justify-center gap-20">
      {Array.isArray(juguetes) &&
        juguetes.map((juguete, index) => {
          return <Productos key={index} juguete={juguete} />;
        })}
    </div>
  );
}
