import React, { useState } from "react";
import logo from "../../assets/images/favicon.png";
import Search from "../ui/Search";
import { RiPokerHeartsLine } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiMenu5Line } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex fixed top-0 left-0 w-full p-3 z-50 bg-white items-center justify-between border-b border-gray-200 px-10">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="rounded-full h-10" />
        <h4 className="font-logo text-xl heading">Varenyam Creations</h4>
      </div>

      <Search />

      <ul className="flex items-center justify-center gap-5">
        <li>
          <Link to="#">
            <CgSearch className="react-icon menu-icon hidden" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <RiPokerHeartsLine className="react-icon" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <CgShoppingCart className="react-icon" />
          </Link>
        </li>
        
        <li className="relative">
          <button onClick={() => setShowDropdown(!showDropdown)}>
            <BsPerson className="react-icon cursor-pointer" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white border shadow-md rounded-md z-50">
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-gray-100 text-sm flex  items-center justify-center border-b-2"
              >
                Login{" "}
                <span>
                  <MdOutlineKeyboardArrowRight className="react-icon" />
                </span>
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 hover:bg-gray-100 text-sm flex  items-center justify-center"
              >
                Sign Up{" "}
                <span>
                  <MdOutlineKeyboardArrowRight className="react-icon" />
                </span>
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link to="#">
            <RiMenu5Line  className="react-icon menu-icon hidden" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
