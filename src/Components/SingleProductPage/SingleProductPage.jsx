import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams(); // 👈 yahan se dynamic id milegi
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((product) => setData(product))
      .catch((error) =>
        console.log("this is an error in api fetching", error)
      );
  }, [id]); // 👈 id change hogi to dobara fetch karega

  return (
    <div className="productpage">
      <div className="product">
        <div className="product text-center">
          <div className="flex gap-2 justify-center items-center">
            <p className="lg:text-3xl text-xl text-gray-700 font-semibold text-center">
              PRODUCTS
            </p>
            <p className="w-20 md:w-20 h-[1px] bg-gray-800"></p>
          </div>
        </div>

        <div className="details lg:flex lg:justify-around">
          {/* Images Section */}
          <div className="images-section">
            <div className="main-img">
              {data ? (
                <img
                  src={data.images[0]}
                  alt="detailproductimage"
                  className="lg:max-w-[600px] lg:max-h-[600px] max-w-[400px] max-h-[400px] rounded-lg lg:translate-x-44 mx-7 my-14"
                />
              ) : (
                <p>Loading..............</p>
              )}
            </div>

            <div className="more-img lg:mx-48 mx-4 my-16">
              <div className="bg-slate-300 max-w-[500px] max-h-[490px] rounded-full">
                <div className="flex justify-around bg-slate-300 gap-14 lg:px-10 py-2 rounded-full">
                  {data ? (
                    <>
                      <img
                        src={data.images[0]}
                        alt="detailproductimage"
                        className="max-w-[100px] max-h-[100px] rounded-lg"
                      />
                      <img
                        src={data.images[1]}
                        alt="detailproductimage"
                        className="max-w-[100px] max-h-[100px] rounded-lg"
                      />
                      <img
                        src={data.images[2]}
                        alt="detailproductimage"
                        className="max-w-[100px] max-h-[100px] rounded-lg"
                      />
                    </>
                  ) : (
                    <p>Loading..........</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-section">
            <div className="text max-w-[700px] my-24">
              {data ? (
                <div className="grid gap-5">
                  <h1 className="title text-4xl font-semibold">{data.title}</h1>
                  <h2 className="title text-2xl font-semibold text-gray-500">
                    {data.slug}
                  </h2>
                  <h6 className="title text-2xl text-gray-500 text-wrap">
                    {data.description}
                  </h6>
                  <h6 className="title text-3xl  text-gray-800 text-wrap">
                    ${data.price}
                  </h6>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>

            {/* Counter Section */}
            <div className="incresesanddesreaces p-10">
              <div className="bg-gray-200 flex justify-between gap-8 max-w-80 px-10 py-5 rounded-full">
                <div className="icons">
                  <button
                    className="rounded-l-3xl border-gray-600 border-[1px] px-7 py-2"
                    onClick={() => setCount(count + 1)}
                  >
                    <IoMdAdd className="text-3xl" />
                  </button>
                </div>

                <div className="number flex items-center">
                  <p className="text-2xl font-bold">{count}</p>
                </div>

                <div className="icons">
                  <button
                    className="rounded-r-3xl border-gray-600 border-[1px] px-7 py-2"
                    onClick={() => setCount( count - 1 )}
                  >
                    <RiSubtractFill className="text-3xl" />
                  </button>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="btn">
              <button className="bg-gray-950 text-white text-2xl font-sans py-3 px-32 rounded-md">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
