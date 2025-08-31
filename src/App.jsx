import React from 'react'
import { Routes, Route } from "react-router-dom";
// import { TbRouteSquare } from 'react-icons/tb';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Collection from './Components/Collection/Collection.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contant/Contant.jsx';
import SingleProductPage from './Components/SingleProductPage/SingleProductPage.jsx';
const App = () => {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/collection' element={<Collection />} />
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/productpage' element={<SingleProductPage />} />
        </Routes>
    <Footer />
    </>
    )
}

export default App