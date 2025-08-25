import React from 'react'
import Logoimg from "/src/assets/images/download.png";

const Mainmenu = [
  {
    id:1,
    name:"HOME",
    link:"/#",
  }, 

  {
    id:2,
    name:"COLLECTION",
    link:"/collection",
  }, 
  {
    id:3,
    name:"ABOUT",
    link:"/about",
  }, 
  {
    id:4,
    name:"CONTACT",
    link:"/contact",
  },
];



function Header() {



    return (
        <>
        <div className='logo' >
         <a href="/#">
        <img src={Logoimg} alt="logo-img" /></a>
        </div>



        </>
    );
}

export default Header