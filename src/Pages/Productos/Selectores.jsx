export default function Selectores({category}) {
   return (
      <div className="flex gap-2 flex-wrap mt-6 justify-center">
         <button className="btn-md  text-gray-700 font-bolder text-[1.2rem] border-solid border-[1px] border-black rounded  bg-roj-primary">
            {category}
         </button>
      </div>
   );
}
