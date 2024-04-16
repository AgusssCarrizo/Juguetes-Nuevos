import Selectores from "./Selectores";
import {useSelector} from "react-redux";

export default function Categorias() {
   const categories = useSelector((state) => state.categories.categories);

   return (
      <div className="flex flex-wrap gap-8 justify-center">
         {categories.map((category) => (
            <Selectores key={category.id} category={category.category} />
         ))}
      </div>
   );
}
