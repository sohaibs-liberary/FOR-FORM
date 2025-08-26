import React from 'react'
import { Routes, Route } from "react-router-dom";
import { TbRouteSquare } from 'react-icons/tb';
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx';

const App = () => {
  return (
    <>
    
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />

      

    </Routes>

    </>
    )
}

export default App