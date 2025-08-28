import React from "react";
import { useState,useEffect } from "react";


const LatestProducts = () => {

const [data,setdata] =useState([])
const [postno,setpostno] = useState(0)

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
            <ul className="postsitems flex " >
              {data? (
                data.map((post) => (
                  <li key={post.id} className="p-4 border rounded-lg shadow">
                    <img src={post.images[0]} alt='image of products ' className="max-w-[290px] max-h-[290px] "/>
                   <h1>${post.price}</h1>
                  <h1>{post.title}</h1>
                  <h1>{post.name}</h1>
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
