import React from "react";
import { useState, useEffect } from "react";

const BestSeller = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((responsive) => responsive.json())
      .then((data) => setdata(data))
      .catch((error) => console.log("this is a error in api", error));
  }, []);

  return (
    <>
      <div className="Best-Seller">
        <div className="text">
          <div className=" flex gap-2 justify-center items-center">
            <p className="lg:text-5xl text-xl text-gray-600 font-semibold text-center ">
              Best
              <span className="text-gray-800"> Seller</span>
            </p>
            <p className=" w-20 md:w-14 h-[2px] bg-gray-800  "></p>
          </div>
          <div className="">
            <p className="flex justify-center  my-4 lg:mx-0 mx-3  text-gray-600 lg:text-xl sm:text-xs font-normal lg:font-semibold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              blanditiis temporibus iure architecto!
            </p>
          </div>
        </div>
        <div className="API">
          <div className=" lg:max-w-[1600px] lg:max-h-[1600px] lg:mx-36  ">
            <ul className="lg:flex justify-center   ">
              {data.length > 0 ? (
                data.slice(0, 4).map((post, index) => (
                  <li
                    key={index}
                    className="border-gray-300 shadow border-[1px]  rounded-lg m-4 py-3 px-10"
                  >
                    <img
                      src={post.images[0]}
                      alt="Best Selling Products"
                      className=" flex justify-center max-w-[290px] max-h-[290px] rounded-lg  "
                    />
                    <h1 className="text-center text-2xl text-gray-800 font-semibold py-4 ">
                      {post.title}
                    </h1>
                  </li>
                ))
              ) : (
                <p className="text-center"> Loading....</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
