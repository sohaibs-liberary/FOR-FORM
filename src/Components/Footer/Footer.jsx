import React from 'react'
import Logo from "/src/assets/images/download.png"

const  Footer = () => {
    const Links =[
        {
          name:"Home",
        },
         {
          name:"About US",
        },
         {
          name:"Delivery",
        }, 
         {
          name:"Privacy Policy",
        },
    ]
  return (
    <>
    <div className="footer">
        <div className="uperfooter lg:flex lg:justify-around  ">
            <div className="logo"> 
                <div className="img">
                    <img src={Logo} alt="footer-logo"  className='py-4 lg:w-72 lg:h-32 w-40 h-24' />
                </div>
                <div className="text">
                    <p className='text-start text-gray-600 lg:font-semibold font-medium text-wrap line-clamp-2 ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae <br/> quibusdam deleniti exercitationem.</p>
                </div>
            </div>
            <div className="company"> 
                <h1 className='lg:text-2xl text-xl font-semibold' >COMPANY</h1>
                <ul>

                {
                    Links.map(( link ,index)=>(
                        <li key={index}>
                            <h1  className='text-xl text-gray-700 p-2 ' >{link.name}</h1> 
                         </li>
                    )
                )
            }
            </ul>
            </div>
            <div className="get-in-touch"> 
                 <h1 className='text-2xl font-semibold' >GET IN TOUCH</h1>
                 <p className='text-xl text-gray-600 ' >+1-212-456-7890</p>
                 <p className='text-xl text-gray-600 ' >sohaib@forever.com</p>
            </div>
             
        </div>
           <p className='w-full h-[1px] bg-gray-800 my-2' ></p>
        <div className="lowerfooter">
            <h1 className='text-xl text-center py-6' >Copyright 2025@ Sohaib Malik - All Right Reserved.</h1>
        </div>
    </div>
    </>
  )
}

export default Footer