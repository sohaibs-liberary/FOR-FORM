import React from "react";
import { CiSearch } from "react-icons/ci";
import Logoimg from "/src/assets/images/download.png";
import { CiUser } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";

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
      <div className="menu  flex justify-around p-7 " >
        <div className="logo">
          <a href="/#">
            <img src={Logoimg} alt="logo-img " className="h-14" />
          </a>
        </div>
        <div className="menu" >
          <ul className="flex justify-start gap-10 text-gray-800 font-mono text-xl " >

          {Mainmenu.map((menu)=>(

              <li key={menu.id}  >
                <a href={menu.link} className="" >{menu.name}

                </a>
              </li>
              ))
              
          }

          </ul>
        </div>
        <span className="flex gap-7 " >
         <a><CiSearch  className=" text-3xl font-bold curser-pointer"/> </a>
          <CiUser className=" text-3xl font-bold" />
          <IoBagRemoveOutline className=" text-3xl font-bold" />
          

        </span>
        
      </div>
    </>
  );
}

export default Header;


