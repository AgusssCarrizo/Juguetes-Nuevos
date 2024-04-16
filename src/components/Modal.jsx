import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../redux/Cart/cartSlice.js";

function Modal() {
   const isOpen = useSelector((state) => state.cart.modalOpen);
   const dispatch = useDispatch();

   if (!isOpen) {
      return false;
   }

   return (
      <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
         <div className="bg-white p-4 rounded-md w-2/4 h-2/5 display flex flex-col justify-between">
            <h2 className="text-2xl text-center font-extrabold text h-3/4 flex justify-center items-center">
               Compra realizada con éxito
            </h2>
            <div className="flex justify-end w-full">
               <button
                  onClick={() => dispatch(closeModal())}
                  className="bg-LightSkyBlue text-white h-10 w-20">
                  Cerrar
               </button>
            </div>
         </div>
      </div>
   );
}

export default Modal;
