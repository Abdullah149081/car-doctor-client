/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from "../../../../public/logo.svg";

const Header = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>About</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="car-container md:py-0 px-0">
      <div className="navbar py-6  px-0 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost pl-0  mr-5 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <img className="w-11 h-11 lg:w-28 lg:h-20" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
        </div>
        <div className="navbar-end  space-x-5">
          <HiOutlineShoppingBag className="w-6 h-6" />
          <FaSearch className="w-5 h-5" />
          <button type="button" className="lg:block hidden">
            <a className="btn car-btn  ">Appointment</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
