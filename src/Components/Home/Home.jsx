import React from "react";
// import { Route } from "react-router-dom";
import Header from "./sections/Header";
import LatestProducts from "./sections/LatestProducts";
import BestSeller from './sections/BestSeller.jsx';



const Home = () => {
  return (
     <>
      <Header />
      <LatestProducts />
      <BestSeller />

      

     </>
  );
};

export default Home;
