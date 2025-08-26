import React from "react";
// import { Route } from "react-router-dom";
import headerimg from "/src/assets/images/hero_img.452d72fcc8195340277f.png";


const Home = () => {
  return (
    <>
      {/* heade section */}
      <div className="header flex justify-center  lg:max-w-[1800px] h-[550px]">
        <div className="text-and-image lg:flex    justify-center   border-gray-600 border-[1px]  ">
          <div className="p-10 lg:p-28  ">
            <div className="text-section flex items-center gap-3 justify-center ">
              <p className="w-20 md:w-12 h-[2px] bg-[#414141]"></p>
              <p className="text-gray-700 font-semibold text-2xl sm:text-xl font-mono ">
                {" "}
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="text-gray-700 font-semibold lg:text-5xl mg:text-5xl sm:text-xl font-mono flex justify-end">
              Lastest Arrival
            </h1>
            <div className="text-section flex items-center gap-3 justify-center">
              
              <p className="text-gray-700 font-semibold text-2xl sm:text-xl font-mono ">
                {" "}
               SHOP NN
              </p>
              <p className="w-20 md:w-12 h-[2px] bg-[#414141]"></p>
            </div>
          </div>
          <div className="image-section bg-black  ">
            <div className="image flex justify-end" >
                <img src={headerimg} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
