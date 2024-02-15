import Hero from "./Hero";
import Beneficios from "./Beneficios";

export default function Home() {
   return (
      <div className=" bg-fondo bg-no-repeat bg-contain">
         <Hero />
         <Beneficios />
      </div>
   );
}
