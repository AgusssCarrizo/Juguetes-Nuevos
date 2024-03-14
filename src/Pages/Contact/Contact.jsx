import {useState} from "react";
export default function Contact() {
   const [nombre, setNombre] = useState("");
   const [email, setEmail] = useState("");
   const [telefono, setTelefono] = useState("");
   const [mensaje, setMensaje] = useState("");
   const [error, setError] = useState(false);
   const handleSubmit = (e) => {
      e.preventDefault();
      if (!nombre || !email || !telefono || !mensaje) {
         setError(true);
         return;
      }
      setError(false);
   };

   return (
      <div className="flex flex-col lg:flex-row gap-8 md:gap-0 bg-gradient-to-t from-[#98ff98] to-[#40e0d0] py-10 items-center md:px-4">
         <div className="w-5/12 my-auto">
            <img
               src="https://res.cloudinary.com/diotu9grj/image/upload/v1704406019/TS4-hero_xsx5bv.jpg"
               alt=""
               className=" shadow-lg"
            />
         </div>
         <div className="flex flex-col justify-center mx-auto w-80 gap-6">
            <h2 className="text-3xl font-extrabold text-pink-800 text-center ">
               ¿Querés conocer mas de nuestros catalogo y enterarte de nuestras
               ofertas?
               <span className="text-ros-primary">
                  Comunicate con nosotros.
               </span>
            </h2>
            <form
               className="flex flex-col justify-center gap-2"
               onSubmit={handleSubmit}>
               {error && (
                  <p className="text-red-500 text-center">
                     Todos los campos son obligatorios
                  </p>
               )}
               <input
                  type="text"
                  placeholder="Nombre"
                  className="bg-gray-800 input input-bordered  input-secondary w-full max-w-xs"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
               />
               <input
                  type="text"
                  placeholder=" Email"
                  className="input input-bordered  input-secondary w-full max-w-xs bg-gray-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="text"
                  placeholder="Telefono"
                  className="input input-bordered  input-secondary w-full max-w-xs bg-gray-800"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
               />
               <input
                  type="text"
                  placeholder="Mensaje"
                  className="h-20 input input-bordered  input-secondary w-full max-w-xs bg-gray-800"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
               />
               <button className="btn btn-secondary"> Enviar mensaje </button>
            </form>
         </div>
      </div>
   );
}
