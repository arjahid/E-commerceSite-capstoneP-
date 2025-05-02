import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Nav2 = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
        alert("User logged out successfully!");
        navigate("/login"); // Redirect to home page after successful logout
      })
      .catch((error) => {
        console.error("Error logging out user:", error);
        alert("Error logging out user:", error.message);
      });
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-lime-500 shadow-md px-4 sm:px-6 lg:px-10 py-3 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-50">
      {/* Logo */}
      <NavLink
      onClick={() => window.scrollTo(0, 0)}
        to="/"
        className="flex items-center gap-2 text-white bg-white px-4 py-2 rounded-full shadow hover:shadow-md hover:bg-green-100 transition"
      >
        <FaCartShopping className="text-green-600 text-lg" /> 
        <span className="text-xl font-bold text-red-600">Trend</span>
        <span className="text-xl font-bold text-green-600">Bazar</span>
      </NavLink>

      {/* Search */}
      <div className="w-full md:w-auto flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Search for products..."
          className="input input-bordered w-full sm:w-80 md:w-96 max-w-full rounded-full px-4 py-2 focus:outline-none bg-white shadow-inner"
        />
        <button
          type="button"
          className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
        >
          Search
        </button>
      </div>

      {/* Login and Register Links */}
      <div className="flex gap-4 justify-center items-center">
        {user ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-red-700 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink
              to="/login"
              className="px-4 py-2 bg-lime-800 text-white rounded shadow hover:bg-blue-700 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-4 py-2 bg-lime-800 text-white rounded shadow hover:bg-gray-700 transition"
            >
              Register
            </NavLink>
          </>
        )}
      </div>

      {/* Profile Dropdown */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar hover:scale-105 transition"
        >
          <div className="w-10 rounded-full ring ring-white ring-offset-2 ring-offset-green-500">
            <img
              alt="User Avatar"
              src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-44 sm:w-52 text-sm sm:text-base"
        >
          <li>
            <NavLink to="/profile" className="hover:bg-green-100 transition px-2 rounded">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="hover:bg-green-100 transition px-2 rounded">
              Settings
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:bg-red-100 transition px-2 rounded"
            >
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav2;
