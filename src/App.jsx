import {useState} from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import Selectores from "./components/selectores";

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
            </div>
         </div>
         <div>
            <Footer />
         </div>
      </>
   );
}

export default App;
