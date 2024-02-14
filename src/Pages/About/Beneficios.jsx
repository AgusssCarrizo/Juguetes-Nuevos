export default function Beneficios() {
   return (
      <div className="flex flex-col gap-16 items-center py-16 bg-red-700 border-t border-red-200">
         <div className="flex flex-wrap gap-20 relative w-auto bottom-[115px]">
            <div className="rounded-full  h-28 w-28 bg-red-200 border-red-800 border-4 border-dashed animate-spin"></div>
            <div className="rounded-full  h-28 w-28 bg-red-200 border-red-800 border-4 border-dashed animate-spin"></div>
            <div className="hidden md:flex rounded-full h-28 w-28 bg-red-200 border-red-800 border-4 border-dashed animate-spin"></div>
            <div className="hidden md:flex rounded-full h-28 w-28 bg-red-200 border-red-800 border-4 border-dashed animate-spin"></div>
            <div className="hidden lg:flex rounded-full h-28 w-28 bg-red-200 border-red-800 border-4 border-dashed animate-spin"></div>
            <div className="hidden lg:flex rounded-full h-28 w-28 bg-red-200 border-red-800 border-4 border-dashed animate-spin"></div>
            <div className="hidden md:flex rounded-full h-28 w-28 bg-red-200 border-red-800 border-4 border-dashed animate-spin"></div>
         </div>
         <h3
            className=" text-3xl font-bold -mt-20
    ">
            Beneficios
         </h3>
         <div className="flex justify-center items-center gap-24 flex-wrap mx-2">
            <div className="w-52 h-52 bg-slate-200 flex flex-col items-center justify-around rounded p-2 ">
               <div className=" h-14">
                  <img
                     src="src/assets/img/Beneficios/Calidad.png"
                     alt="Calidad"
                     className="h-14"
                  />
               </div>
               <p className="text-black text-xl font-mono">Calidad</p>
               <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 "></span>
            </div>
            <div className="w-52 h-52 bg-slate-200 flex flex-col items-center justify-around rounded p-2 ">
               <div className=" h-14">
                  <img
                     src="src/assets/img/Beneficios/Calidad.png"
                     alt="Calidad"
                     className="h-14"
                  />
               </div>
               <p className="text-black text-xl font-mono">Calidad</p>
               <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 "></span>
            </div>
            <div className="w-52 h-52 bg-slate-200 flex flex-col items-center justify-around rounded p-2 ">
               <div className=" h-14">
                  <img
                     src="src/assets/img/Beneficios/Calidad.png"
                     alt="Calidad"
                     className="h-14"
                  />
               </div>
               <p className="text-black text-xl font-mono">Calidad</p>
               <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 "></span>
            </div>
            <div className="w-52 h-52 bg-slate-200 flex flex-col items-center justify-around rounded p-2 ">
               <div className=" h-14">
                  <img
                     src="src/assets/img/Beneficios/Calidad.png"
                     alt="Calidad"
                     className="h-14"
                  />
               </div>
               <p className="text-black text-xl font-mono">Calidad</p>
               <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 "></span>
            </div>
         </div>
      </div>
   );
}
