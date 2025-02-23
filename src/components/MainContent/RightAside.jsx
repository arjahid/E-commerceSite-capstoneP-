import React from "react";
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa6";

const RightAside = () => {
  return (
    <div>
      <div className="join flex-col gap-2 w-full">
        <button className="btn btn-primary join-item w-full">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn btn-secondary join-item w-full">
          <FaGithub></FaGithub> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default RightAside;
