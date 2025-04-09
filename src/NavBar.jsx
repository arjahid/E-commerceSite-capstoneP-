import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const links = (
        <ul className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-2 lg:space-y-0 lg:space-x-6">
            <li><NavLink to="/" className="px-4 py-2 text-center text-lg text-white hover:bg-green-600 transition duration-300 rounded-md">Home</NavLink></li>
            <li><NavLink to="/new-arrival" className="px-4 py-2 text-center text-lg text-white hover:bg-green-600 transition duration-300 rounded-md">New Arrival</NavLink></li>
            <li><NavLink to="/categories" className="px-4 py-2 text-center text-lg text-white hover:bg-green-600 transition duration-300 rounded-md">Categories</NavLink></li>
            <li><NavLink to="/about" className="px-4 py-2 text-center text-lg text-white hover:bg-green-600 transition duration-300 rounded-md">About us</NavLink></li>
            <li><NavLink to="/contact" className="px-4 py-2 text-center text-lg text-white hover:bg-green-600 transition duration-300 rounded-md">Contact</NavLink></li>
        </ul>
    );
    return (
        <div className="navbar bg-gradient-to-r from-green-500 to-lime-500 px-4 sm:px-6 lg:px-8 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
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
                        className="menu menu-sm dropdown-content bg-white rounded-lg z-[1] mt-3 w-52 p-3 shadow-lg">
                        <li className="hover:bg-gray-100 rounded-md">
                            <NavLink to="/" className="block px-4 py-2 text-gray-700 hover:text-green-600 transition duration-300">Home</NavLink>
                        </li>
                        <li className="hover:bg-gray-100 rounded-md">
                            <NavLink to="/new-arrival" className="block px-4 py-2 text-gray-700 hover:text-green-600 transition duration-300">New Arrival</NavLink>
                        </li>
                        <li className="hover:bg-gray-100 rounded-md">
                            <NavLink to="/categories" className="block px-4 py-2 text-gray-700 hover:text-green-600 transition duration-300">Categories</NavLink>
                        </li>
                        <li className="hover:bg-gray-100 rounded-md">
                            <NavLink to="/about" className="block px-4 py-2 text-gray-700 hover:text-green-600 transition duration-300">About us</NavLink>
                        </li>
                        <li className="hover:bg-gray-100 rounded-md">
                            <NavLink to="/contact" className="block px-4 py-2 text-gray-700 hover:text-green-600 transition duration-300">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-blue-500 hover:bg-blue-700 text-white flex items-center space-x-2 px-4 py-2 rounded-md shadow-md transition duration-300">
                    <FaCartShopping className="text-white" />
                    <span>Cart</span>
                </button>
            </div>
        </div>
    );
};

export default NavBar;