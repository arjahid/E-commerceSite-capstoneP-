import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const links = (
        <ul className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-2 lg:space-y-0 lg:space-x-2">
            <li><NavLink to="/" className="px-4 py-2 text-center text-lg text-white hover:bg-green-400 rounded-md">Home</NavLink></li>
            <li><NavLink to="/new-arrival" className="px-4 py-2 text-center text-lg text-white hover:bg-green-400 rounded-md">New Arrival</NavLink></li>
            <li><NavLink to="/categories" className="px-4 py-2 text-center text-lg text-white hover:bg-green-400 rounded-md">Categories</NavLink></li>
            <li><NavLink to="/about" className="px-4 py-2 text-center text-lg text-white hover:bg-green-400 rounded-md">About us</NavLink></li>
            <li><NavLink to="/contact" className="px-4 py-2 text-center text-lg text-white hover:bg-green-400 rounded-md">Contact</NavLink></li>
        </ul>
    );
    return (
        <div className="navbar bg-gradient-to-r from-green-500 to-green-500 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
   
  </div>
</div>
    );
};

export default NavBar;