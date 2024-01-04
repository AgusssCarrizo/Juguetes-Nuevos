import {useState} from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import Selectores from "./components/Selectores";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Header />

         <Hero />

         <div className="gap-20 flex flex-wrap  flex-col items-center p-20 bg-gradient-to-r from-am-primary to-am-secondary ">
            <Selectores />
            <div className="flex flex-wrap gap-8 justify-center">
               <Productos />
               <Productos />
            </div>
         </div>

         <Footer />
      </>
   );
}

export default App;
