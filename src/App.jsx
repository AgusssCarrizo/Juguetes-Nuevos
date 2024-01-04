import {useState} from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import Selectores from "./components/Selectores";
import Categorias from "./components/Categorias";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Header />

         <Hero />

         <div className="gap-20 flex flex-wrap  flex-col items-center  bg-gradient-to-r from-am-primary to-am-secondary">
            <Selectores />

            <Categorias />
         </div>

         <Footer />
      </>
   );
}

export default App;
