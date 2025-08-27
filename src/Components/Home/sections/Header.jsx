import React from 'react'
import headerimg from "/src/assets/images/hero_img.452d72fcc8195340277f.png";


const Header = () => {
  return (
       <>
      {/* heade section */}
      <div className="header flex justify-center m-14 lg:m-0 lg:max-w-[1800px] lg:h-[600px]  ">

        <div className="text-and-image lg:flex  justify-center   border-gray-700 border-[1px]  ">
          <div className="p-10 lg:p-28 my-32  ">
            <div className="text-section flex items-center  justify-start ">
              <p className="w-20 md:w-12 h-[2px] bg-[#414141]"></p>
              <p className="text-gray-700 font-semibold text-2xl sm:text-xl font-mono ">
                {" "}
                OUR BESTSELLERS
              </p>
              
            </div>
            <h1 className="text-gray-700  lg:text-7xl mg:text-5xl sm:text-xl font-serif flex justify-end">
              Lastest Arrival
            </h1>
            <div className="text-section flex items-center gap-3 justify-start">
              
              <p className="text-gray-700 font-semibold text-2xl sm:text-xl font-mono ">
                {" "}
               SHOP NN
              </p>
              <p className="w-20 md:w-12 h-[2px] bg-[#414141]"></p>
            </div>
          </div>
          <div className="image-section bg-black  ">
            <div className="image flex justify-end"  >
                <img src={headerimg} alt="" className="lg:w-[740px] sm:w-20 "  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header