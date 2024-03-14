function Carrito({setCarrito, animarCarrito, setAnimarCarrito}) {
   const ocultarCarrito = () => {
      setAnimarCarrito(false);

      setTimeout(() => {
         setCarrito(false);
      }, 1000);
   };
   return (
      <div
         className={`container w-full md:w-1/2  mt-10 -right-[1000px] absolute  top-8 z-40  
            ${
               animarCarrito
                  ? "absolute animate-fade-left animate-duration-[500ms] animate-ease-in right-[0]"
                  : ""
            }
         `}>
         <div className="bg-white shadow-md rounded-md ">
            <div className="absolute -left-7 top-3 w-8 h-8 bg-white text-center text-black">
               <i
                  class={`fa-solid fa-angles-right`}
                  onClick={ocultarCarrito}></i>
            </div>
            <div className=" px-6 py-4">
               <h2 className="text-xl font-bold">Carrito de Compras</h2>
            </div>
            <div className="px-6 py-4">
               <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
                  <div className="flex items-center space-x-4">
                     <img
                        src="https://via.placeholder.com/50"
                        alt="Product Image"
                        className="w-12 h-12 rounded-md"
                     />
                     <div>
                        <h3 className="font-semibold">Nombre del Producto</h3>
                        <p className="text-gray-600">
                           Descripción corta del producto
                        </p>
                     </div>
                  </div>
                  <div>
                     <span className="text-gray-600">$19.99</span>
                  </div>
               </div>
               <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
                  <div className="flex items-center space-x-4">
                     <img
                        src="https://via.placeholder.com/50"
                        alt="Product Image"
                        className="w-12 h-12 rounded-md"
                     />
                     <div>
                        <h3 classNamelass="font-semibold">
                           Nombre del Producto
                        </h3>
                        <p className="text-gray-600">
                           Descripción corta del producto
                        </p>
                     </div>
                  </div>
                  <div>
                     <span className="text-gray-600">$24.99</span>
                  </div>
               </div>
            </div>
            <div className="px-6 py-4 flex justify-between items-center">
               <div>
                  <span className="text-xl font-semibold">Total:</span>
                  <span className="text-xl font-semibold text-gray-800">
                     $44.98
                  </span>
               </div>
               <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                  Comprar
               </button>
               <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                  Vaciar Carrito
               </button>
            </div>
         </div>
      </div>
   );
}

export default Carrito;
