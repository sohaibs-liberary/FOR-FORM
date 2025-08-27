import React from 'react'
import { useState,useEffect } from 'react'
import LatestProducts from '../Home/sections/LatestProducts'


const Apistore = () => {
  const [data,setdata] =useState({})

  useEffect(() =>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((responsive) => responsive.json())
    .then((data) =>setdata(data))
    .catch((error)=>console.log(error))
  },[])


  return <LatestProducts posts={poducts} />
}

export default Apistore