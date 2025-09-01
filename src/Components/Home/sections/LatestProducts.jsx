import React from "react";
import { useState, useEffect } from "react";

const LatestProducts = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((responsive) => responsive.json())
      .then((data) => setdata(data))
      .catch((error) => console.log("this is error during fetch api", error));
  }, []);

  return (
    <>
      <div className="py-12">
        <div>
          <div className="flex justify-center gap-4 ">
            <div className="latestpost flex justify-center  items-center gap-4 ">
              <p className="text-gray-500 lg:text-4xl font-semibold">
                LATEST
                <span className="text-gray-700"> COLLECTIONS</span>
              </p>
              <p className="w-20 md:w-14 h-[2px] bg-gray-700"></p>
            </div>
          </div>
          <p className="flex justify-center my-4 lg:mx-0 mx-3  text-gray-600 lg:text-xl sm:text-xs font-normal lg:font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            blanditiis temporibus iure architecto!
          </p>
        </div>

        {/* API IMPORT */}
        <div className="API lg:translate-x-40">
          <div className="posts lg:h-[400px ] lg:w-[1400px]  lg:items-center  lg:flex lg:justify-center ">
            <ul className="postsitems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5  ">
              {data.length > 0 ? (
                data.slice(0, 10).map((post) => (
                  <li
                    key={post.id}
                    className=" border rounded-lg shadow m-3  cursor-pointer "
                    onClick={()=>{
                      window.location.href = `/products/${post.id}`;
                    }}
                  >
                    <img
                      src={post.images[0]}
                      alt="image of products "
                    />
                    <h6 className="font-semibold text my-2 mx-7">{post.title}</h6>
                    <p className="font-semibold text-xl  my-2 mx-7">
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
  );
};

export default LatestProducts;
