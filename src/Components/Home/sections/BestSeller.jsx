import React from 'react'

const BestSeller = () => {
  return (
    <>
    <div className="Best-Seller">

      <div className="text">
        <div className=" flex gap-2 justify-center items-center">
          <p className='text-5xl text-gray-600 font-semibold text-center ' >Best
            <span className='text-gray-800' > Seller</span>
          </p>
           <p className="w-20 md:w-14 h-[2px] bg-gray-800  "></p>
        </div>
        <div className="">
          <p className="flex justify-center my-4 text-gray-600 lg:text-xl sm:text-xs font-normal lg:font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            blanditiis temporibus iure architecto!
          </p>
        </div>
      </div>
      <div className="API"></div>
       
    </div>
    </>
  )
}

export default BestSeller;