import React from 'react'

const Filter = () => {
    const Category =[
            {
              name:"Men",
            },
            {
              name:"Women",
            },
            {
              name:"Kids",
            },
    ];
    const Types = [
      {
         name:"Topwear",
      },
      {
         name:"Bottomwear",
      }
      ,{
         name:"Winterwear",
      },
    ];
  return (
    <>
    <div className="filercheckbox hidden lg:block "> {/*filterandcheck box*/}    
          <div className="filter">    
            <h1 className='text-3xl font-semibold text-gray-800' >FILTER</h1>
          </div>
          <div className="Checkbox py-7">

            <div className="Categies border-gray-300 border-[1px] w-[300px]  h-[ 190px] ">
                <div>
                   
                 <ul className='p-4' >
                     <h1 className='text-2xl font-semibold' >Category</h1>

                    {
                        Category.map((box ,index )=>(
                            <li key={index} className='py-1' >
                                <label className='text-xl flex gap-2 text-gray-800' >

                                <input type='checkbox' />
                                {box.name}
                                </label>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
            <div className="Types  my-5">
                <div className="types border-gray-300 border-[1px] w-[300px]  h-[ 190px]">
                    <div>
                   
                 <ul className='p-4' >
                     <h1 className='text-2xl font-semibold' >Types</h1>

                    {
                        Types.map((box ,index )=>(
                            <li key={index} className='py-1' >
                                <label className='text-xl flex gap-2 text-gray-800' >

                                <input type='checkbox'  />
                                {box.name}
                                </label>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                </div>

              

            </div>
            
         </div>
          

    </div>
    </>
  )
}

export default Filter