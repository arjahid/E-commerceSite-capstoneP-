import React from 'react';
import Nav2 from '../Nav2';
import NavBar from '../../NavBar';
import SocialLogin from './SocialLogin';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Form submitted:', data);
    }
    return (
        <div>
            <Nav2></Nav2>
            
            <div className="hero bg-base-200 mt-4 min-h-screen flex items-center justify-center">
          <div className="card bg-base-100 w-full lg:w-1/2 max-w-lg shadow-2xl p-6">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">Register now!</h1>
            <div className="card-body">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="input input-bordered w-full"
                    placeholder="Enter your full name"
                  />
                </div>
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
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="input input-bordered w-full"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                  />
                </div>
               
               
                <button className="btn btn-neutral w-full mt-4 bg-lime-600 font-bold text-xl text-white">Register</button>
              </form>
              <div className="divider my-6">OR</div>
              <SocialLogin></SocialLogin>
              <div>Already Have an account? <NavLink to='/login' className='text-green-500'>Login</NavLink></div>
              <div className="flex justify-center">
                {/* Add SocialLogin component or buttons here */}
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Register;