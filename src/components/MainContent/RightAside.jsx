import React from "react";
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa6";

const RightAside = () => {
  return (
    <div>
      <div className="join flex-col gap-2 w-full ">
        <button className="btn btn-primary join-item w-full">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn btn-secondary join-item w-full">
          <FaGithub></FaGithub> Login with GitHub
        </button>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Pre-Order Now</h3>
        <p className="text-gray-600 mb-4">Be the first to get exclusive products before they are released.</p>
        <button className="btn btn-success w-full text-white font-medium rounded-md hover:bg-green-600 transition-colors">
          Pre-Order
        </button>
      </div>
    </div>
  );
};

export default RightAside;
