import React from 'react'
import { Routes, Route } from "react-router-dom";
// import { TbRouteSquare } from 'react-icons/tb';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Collection from './Components/Collection/Collection.jsx';
import About from './Components/About/About.jsx';
const App = () => {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/collection' element={<Collection />} />
       <Route path='/about' element={<About />} />
     </Routes>
    <Footer />
    </>
    )
}

export default App