import React from 'react'
import { Routes, Route } from "react-router-dom";
// import { TbRouteSquare } from 'react-icons/tb';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
const App = () => {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
     </Routes>
    <Footer />
    </>
    )
}

export default App