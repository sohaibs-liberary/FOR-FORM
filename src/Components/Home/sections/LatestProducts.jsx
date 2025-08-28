import React from "react";
import { useState,useEffect } from "react";


const LatestProducts = () => {

const [data,setdata] =useState([])

  useEffect(() =>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((responsive) => responsive.json())
    .then((data) =>setdata(data))
    .catch((error)=>console.log('this is error during fetch api',error))
  },[]);

  return (
    

    <>

         <div className="py-12">
        <div>
          <div className="flex justify-center gap-4 ">
            <div className="latestpost flex justify-center gap-4 ">
              <p className="text-gray-500 lg:text-4xl font-semibold">
                LATEST
                <span className="text-gray-700"> COLLECTIONS</span>
              </p>
              <p className="w-20 md:w-14 h-[2px] bg-gray-700 lg:my-5 "></p>
            </div>
          </div>
          <p className="flex justify-center my-4 text-gray-600 lg:text-xl sm:text-xs font-normal lg:font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            blanditiis temporibus iure architecto!
          </p>
        </div>

        {/* API IMPORT */}
        <div className="API">
          <div className="fetch-api">
            <ul className="postsitems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 " >
              {data.length>0? (
                data.slice(0,10).map((post) => (
                  <li key={post.id} className=" border rounded-lg shadow m-3 text-center ">
                    <img src={post.images[0]} alt='image of products ' className="max-w-[150px] max-h-[150px] rounded-md mx-10"/>
                   <p className="font-semibold text-center " >${post.price}</p>
                  <h1  className="font-bold text-2xl " >{post.title}</h1>
                  
                  </li>
                ))
              ) : (
                <p className="flex justify-center">Loading...</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
