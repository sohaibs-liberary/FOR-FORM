import React from 'react'

const Email = () => {
  return (
   <>
   <div className="text-email py-10 ">

    <div className="text">
        <h1 className=' lg:text-3xl text-2xl font-semibold text-center' >Subscribe Now and get 20% off</h1>
        <p className='lg:text-xl text-center text-gray-600 my-2' >In order to take 20% off a price: Take the actual price. Divide the actual price by 100 and multiply it by 20 to calculate the savings.</p> 
    </div>
    <div className="email flex justify-center py-20 ">
        <div className="email   ">
            <input type="email" placeholder='Enter Your Email' className=' h-[70px] lg:w-[450px]  w-[260px] border-gray-500 border-[1px] p-6 ' />
        </div>
        <div className="button">
          <input type="button"  value="Subscibe" className='h-[70px] lg:w-[200px] bg-black  text-white cursor-pointer text-xl  w-[140px] '  />
        </div>
        
    </div>

   </div>
   </> 
  )
}

export default Email