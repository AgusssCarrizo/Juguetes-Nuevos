import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/About/Home.jsx";
import PageProd from "./Pages/Productos/PageProd.jsx";
import Layout from "./Pages/Layout.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="juguetes" element={<PageProd />} />
               <Route path="contact" element={<Contact />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
