import {useDispatch, useSelector} from "react-redux";
import {selectCategory} from "../../redux/categoriesSlice";

export default function Selectores({category}) {
   const {selectedCategory} = useSelector((state) => state.categories);
   console.log(selectedCategory);
   const dispatch = useDispatch();
   return (
      <div className="flex gap-2 flex-wrap mt-6 justify-center">
         <button
            className={`btn-md text-gray-700 font-bolder text-[1.2rem] border-solid border-[1px] border-black rounded ${
               category === selectedCategory ? "bg-roj-primary" : ""
            }`}
            onClick={(e) => dispatch(selectCategory(category))}>
            {category}
         </button>
      </div>
   );
}
