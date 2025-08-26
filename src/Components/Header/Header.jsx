import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Logoimg from "/src/assets/images/download.png";
import { CiUser } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";

const Mainmenu = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },

  {
    id: 2,
    name: "COLLECTION",
    link: "/collection",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/about",
  },
  {
    id: 4,
    name: "CONTACT",
    link: "/contact",
  },
];
// {Mainmenu.map((menu) => {
//   console.log(menu);
// })}
function  Header() {
  return (
    <>
      <div className="menu  flex justify-around p-7  border-gray-200 border-[1px] " >

        <div className="logo">
          <a href="/#">
            <img src={Logoimg} alt="logo-img " className=" lg:h-14 h-9" />
          </a>
        </div>
        <div className="menu hidden lg:block" >
          <ul className="flex justify-start gap-10 text-gray-800 font-mono text-xl my-4  " >

          {Mainmenu.map((menu)=>(

              <li key={menu.id}  >
                <Link to={menu.link} className="" >{menu.name}

                </Link>
              </li>
              ))
              
          }

          </ul>
        </div>
        <span className="flex gap-7 " >
         <a><CiSearch  className=" text-3xl font-bold curser-pointer my-4 hidden lg:block sm:block "/> </a>
          <CiUser className=" text-3xl font-bold my-4 hidden lg:block sm:block" />
          <IoBagRemoveOutline className=" text-3xl font-bold my-4 hidden lg:block sm:block" />
           <RiMenuFill className=" text-3xl font-bold my-4  lg:hidden " />

          

        </span>
        
      </div>
    </>
  );
}

export default Header;


