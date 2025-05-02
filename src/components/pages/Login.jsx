import React, { useContext, useEffect } from "react";
import Nav2 from "../Nav2";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../hook/useCart";

const Login = () => {
  const {user}=useContext(AuthContext)
  const [cart, isLoading, error, refetch] = useCart() // Destructure as an array
  const { signIn } = useContext(AuthContext);
  const  location=useLocation();
  const from = location.state?.from?.pathname || "/"; // Use optional chaining to avoid errors
  const navigate = useNavigate(); // Move useContext outside the function

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log("User logged in:", user);
        alert("User logged in successfully!");
       navigate(from, { replace: true }); // Redirect to the previous page or home page
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
        // Handle login error (e.g., show error message)
        alert("Error logging in user:", error.message);
      });
  };
  useEffect(() => {
    if (user?.email) {
      refetch();
    }
  }, [user?.email, refetch]);

  return (
    <div>
      <Nav2></Nav2>
      <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
        <div className="card bg-base-100 w-full lg:w-1/2 max-w-lg shadow-2xl p-6">
          <h1 className="text-4xl font-bold text-center mb-6 text-green-500">
            Login
          </h1>
          <div className="card-body">
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-right">
                <a className="link link-hover text-sm hover:text-green-400">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-neutral w-full mt-4 bg-green-600 font-bold text-xl text-black"
              >
                Login
              </button>
            </form>
            <div className="divider my-6">OR</div>
            <SocialLogin></SocialLogin>
            <div className="flex justify-center">
              {/* Add SocialLogin component or buttons here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
