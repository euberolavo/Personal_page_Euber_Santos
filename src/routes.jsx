import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom';

  import Navbar from './components/Navbar/index.jsx';
  import Footer from "./components/mobile/footer/index.jsx";

import Home from "./pages/home/index.jsx";
import Sobre from "./pages/about/index.jsx";
// import Usuario from "./Usuario";

const AppRoutes = () => {
   return(
       <Router>
         
         <Navbar />

        <Routes>
           <Route element = { <Home /> }  path="/" exact />
           <Route element = { <Sobre /> }  path="/sobre" exact/>
           {/* <Route component = { Usuario }  path="/usuario" /> */}
        </Routes>

        <Footer />
       </Router>
   )
}

export default AppRoutes;