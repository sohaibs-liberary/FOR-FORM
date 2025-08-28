import React, { useState, useEffect } from 'react'
import LatestProducts from '../Home/sections/LatestProducts'

const Apistore = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Suleman Check API", data)  // ✅ Yahan log hoga
        setData(data)
      })
      .catch((error) => console.log('this is error during fetch api', error))
  }, [])

  // ✅ Yahan pe bhi log kar sakte ho
  console.log("Sohaib check api", data)

  return (
    <>
      <LatestProducts posts={data} />
    </>
  )
}

export default Apistore
