import React from 'react'
import { useState, useEffect} from "react"

const Allcollection = () => {

  const  [data, setData]=useState([]);
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((responsive)=>responsive.json())
    .then((data )=>setData(data))
    .catch((error)=>console.log("this is error in api",error))
  })


  return (
    <>
     <div className="Allcollections">
        <div className="text flex justify-center lg:gap-5 gap-3 ">
            <h1 className='lg:text-3xl font-semibold text-gray-500' >ALL 
                <span className='text-gray-700 ' >COLLECTIONS</span>
            </h1>
            <p className='lg:w-[100px] w-[60px] h-[1px]  bg-gray-700 lg:my-4 my-3' ></p>
        </div>
        {/* Api Intrrigated */}
       <div className="API ">
          <div className="posts lg:h-[400px ] lg:w-[900px]  lg:items-center   lg:flex lg:justify-center ">
            <ul className="postsitems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
              {data.length > 0 ? (
                data.slice(0,).map((post) => (
                  <li
                    key={post.id}
                    className=" border rounded-lg shadow  m-2 "
                  >
                    <img
                      src={post.images[0]}
                      alt="image of products "
                      className="  "
                    />
                    <h1 className="font-semibold text-xl my-2 ">{post.title}</h1>
                    <p className="font-semibold my-2">
                      ${post.price}
                    </p>
                  </li>
                ) )
              ) : (
                <p className="flex justify-center">Loading...</p>
              )}
            </ul>
          </div>
        </div>
     </div>
     </>
  )
}

export default Allcollection