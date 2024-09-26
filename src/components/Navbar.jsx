import React, { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[65px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logo} className="h-[35px]" />

        <div className="hidden  mx-auto justify-between md:flex items-center">
          <ul className="flex gap-24">
            <li className=" cursor-pointer rounded-2xl hover:bg-green-600 px-4 py-2 hover:text-white">
              Home
            </li>
            <li className="cursor-pointer rounded-2xl hover:bg-green-600 px-4 py-2 hover:text-white">
              About
            </li>
            <li className="cursor-pointer rounded-2xl hover:bg-green-600 px-4 py-2 hover:text-white">
              Support
            </li>
            <li className="cursor-pointer rounded-2xl hover:bg-green-600 px-4 py-2 hover:text-white">
              FAQ
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <Link to="/login">
            <button className="px-6 py-3 rounded-md bg-[#20B486] text-white font-bold">
              Log In
            </button>
          </Link>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
