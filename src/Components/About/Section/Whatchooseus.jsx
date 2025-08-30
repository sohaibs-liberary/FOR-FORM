import React from 'react'
import { useState } from 'react';

const Whatchooseus = () => {
 
  const cards =[

    {
     title:"Quality Assurance:",
     desciption:"We meticulously select and vet each product to ensure it meets our stringent quality standards.",
    },
    {
     title:"Convenience:",
     desciption:"With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
    },
    {
     title:"Exceptional Customer Service:",
     desciption:"Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.",
    },

  ];

  return (

    <>
    <div className="Whatchooseus">
       <div className="lg:mx-32 mx-9">
          <div className="  flex ">
            <p className="lg:text-3xl text-xl text-gray-500 font-semibold text-center ">
              WHY 
              <span className="text-gray-700"> CHOOSE US</span>
            </p>
            <p className=" w-20 md:w-20 h-[1px] bg-gray-800 lg:my-4 lg:mx-2 "></p>
          </div>
        </div>
      <div className="cards p-5">
        <div className="">
          <ul className='lg:flex lg:justify-center' >
            {
             cards.map((data,index)=>(
              <li key={index} className='border-gray-300 border-[1px] p-24 lg:max-w-[490px] lg:max-h-[390px] 
               w-[500px] '  >
                <p className='text-xl font-bold ' >{data.title}</p>
                <p className=' text-semibold text-gray-800 my-4  ' >{data.desciption}</p>
              </li>

               
            ))}
          </ul>
        </div>


      </div>
    


    </div>
    </>
  )
}

export default Whatchooseus;