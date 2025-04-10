import React from "react";
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const RightAside = () => {
  return (
    <div>
      <div className="join flex-col gap-2 w-full ">
        
       
      </div>
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Pre-Order Now</h3>
        <p className="text-gray-600 mb-4">Be the first to get exclusive products before they are released.</p>
        <button className="btn btn-success w-full text-white font-medium rounded-md hover:bg-green-600 transition-colors">
          Pre-Order
        </button>
      </div>
      <div className="mt-8 p-4 bg-gray-800 text-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">Our Brand</h3>
        <p className="text-gray-300 mb-4">
          At <span className="font-semibold text-green-400">E-CommerceSite</span>, we are committed to delivering quality and innovation. 
          Join us to experience the best in online shopping.
        </p>
        <div className="flex items-center gap-4">
          <FaInstagram className="text-2xl text-pink-500" />
          <span className="text-gray-300">Follow us on Instagram for updates!</span>
        </div>
      </div>
    </div>
  );
};

export default RightAside;
