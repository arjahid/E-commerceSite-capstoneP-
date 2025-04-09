import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Nav2 = () => {
  return (
    <div className="navbar bg-gradient-to-r from-green-500 to-green-500 shadow-sm flex flex-wrap items-center">
      <div className="flex-1">
        <NavLink to='/' className="btn btn-ghost text-xl bg-white hover:bg-green-100 flex items-center gap-2">
         <span className="text-green-600"> <FaCartShopping /></span> <span className="text-red-600 font-bold">Trend</span> <span className="text-green-600">Bazar</span>
        </NavLink>
      </div>
      <div className="flex justify-center gap-2 w-full md:w-auto mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full md:w-96 bg-white"
        />
      </div>
      <div className="dropdown dropdown-end mt-2 md:mt-0">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav2;
