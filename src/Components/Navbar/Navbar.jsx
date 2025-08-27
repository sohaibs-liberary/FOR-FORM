import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import Logoimg from "/src/assets/images/download.png";

const Mainmenu = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "COLLECTION", link: "/collection" },
  { id: 3, name: "ABOUT", link: "/about" },
  { id: 4, name: "CONTACT", link: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  return (
    <>
      <div className="menu flex justify-around items-center p-8 border-gray-200 border-b">
        {/* Logo */}
        <div className="logo">
          <a href="/#">
            <img src={Logoimg} alt="logo-img" className="lg:h-14 h-9" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex gap-10 text-gray-800 font-mono text-xl">
            {Mainmenu.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-gray-700 pb-1 text-gray-700"
                      : "pb-1 text-gray-700 hover:text-gray-700"
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-6">
          <CiSearch className="text-2xl hidden lg:block cursor-pointer" />
          <CiUser className="text-2xl hidden lg:block cursor-pointer" />
          <IoBagRemoveOutline className="text-2xl hidden lg:block cursor-pointer" />

          {/* Hamburger button (mobile only) */}
          <button
            className="text-3xl lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RiCloseFill /> : <RiMenuFill />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            {Mainmenu.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-gray-500 pb-1 text-gray-600"
                      : "pb-1 text-gray-700 hover:text-gray-500"
                  }
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
