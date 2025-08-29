import React from "react";
// import { Route } from "react-router-dom";
import Header from "./sections/Header";

import LatestProducts from "./sections/LatestProducts";
import BestSeller from './sections/BestSeller.jsx';
import Services from "./sections/Services.jsx";
import Email from "./sections/Email.jsx";



const Home = () => {
  return (
     <>
     <div className="overflow-x-hidden" >

      <Header />
      <LatestProducts />
      <BestSeller />
      <Services />
      <Email />
     </div>

      

     </>
  );
};

export default Home;
