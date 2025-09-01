import React from "react";
import { IoMdAdd } from "react-icons/io";

import { RiSubtractFill } from "react-icons/ri";

import { useState, useEffect } from "react";

const SingleProductPage = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((responsive) => responsive.json())
      .then((data) => setdata(data))
      .catch((error) => console.log("this is a error in api fetching", error));
  }, []);
//   const [  add,setadd]=useState(1)
       
// const number=[
//   {

//     useEffect(()=>(

//       setadd(useState + 1 )

//     ))
//   }

// ]

   return (
    <>
      <div className="">
        <div className="productpage  ">
          <div className="product  ">
            <div className="">
              <div className="product text-center ">
                <div className=" flex gap-2 justify-center items-center">
                  <p className="lg:text-3xl text-xl text-gray-700 font-semibold text-center ">
                    PRODUCTS
                  </p>
                  <p className=" w-20 md:w-20 h-[1px] bg-gray-800 "></p>
                </div>
              </div>
            </div>
            <div className="details lg:flex lg:justify-around  ">
              <div className="images-section">
                <div className="main-img">
                  {data.length > 0 ? (
                    data
                      .slice(0, 1)
                      .map((detail, index) => (
                        <img
                          key={index}
                          src={detail.images[0]}
                          alt="detailproductimage"
                          className="lg:max-w-[600px] lg:max-h-[600px] max-w-[400px] max-h-[400px] rounded-lg  lg:translate-x-44 mx-7 my-14 "
                        />
                      ))
                  ) : (
                    <p>Loading..............</p>
                  )}
                </div>
                <div className="more-img lg:mx-48  mx-4  my-16">
                  <div className=" bg-slate-300 max-w-[500px] max-h-[490px] rounded-full">
                    <div className="flex justify-around  bg-slate-300 gap-14 lg:px-10  py-2 rounded-full ">
                      {data.length > 0 ? (
                        data.slice(0, 1).map((detail, index) => (
                          <>
                            <img
                              key={index}
                              src={detail.images[0]}
                              alt="detailproductimage"
                              className="max-w-[100px] max-h-[100px] rounded-lg   "
                            />
                            <img
                              src={detail.images[1]}
                              alt="detailproductimage"
                              className="max-w-[100px] max-h-[100px] rounded-lg  "
                            />
                            <img
                              src={detail.images[2]}
                              alt="detailproductimage"
                              className="max-w-[100px] max-h-[100px] rounded-lg   "
                            />
                          </>
                        ))
                      ) : (
                        <p>Loading..........</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-section">
                <div className="text max-w-[700px] my-24 ">
                  {data.length > 0 ? (
                    data.slice(0, 1).map((detail, index) => (
                      <div key={index} className="grid gap-5">
                        <h1 className="title text-4xl font-semibold">
                          {" "}
                          {detail.title}
                        </h1>
                        <h2 className="title text-2xl font-semibold text-gray-500 ">
                          {detail.slug}
                        </h2>
                        <h6 className="title text-2xl  text-gray-500 text-wrap ">
                          {detail.description}
                        </h6>
                      </div>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>

                <div className="incresesanddesreaces p-10">
                  <div className="bg-gray-200 flex justify-between gap-5 max-w-72 px-10 py-5 rounded-full">
                    <div className="icons">
                      <button  className="rounded-l-3xl border-gray-600 border-[1px] px-7 py-2 " 
                      onClick={ + 1 } >

                      <IoMdAdd  className="text-3xl" />

                      </button>
                    </div>
                    <div className="number">

                    </div>
                    <div className="icons">
                      <button className="rounded-r-3xl border-gray-600 border-[1px] px-7 py-2" >

                      <RiSubtractFill className="text-3xl"  />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="btn">
                  <button className="bg-gray-950 text-white text-2xl font-sans py-3 px-32 rounded-md">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
