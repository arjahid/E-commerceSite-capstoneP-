import React from 'react';
import Nav2 from '../Nav2';
import NavBar from '../../NavBar';

const Profile = () => {
    return (
       <div>
        <Nav2></Nav2>
        <NavBar></NavBar>
         <div className="container mt-2 mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-100 min-h-screen">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">My Profile</h2>
            <div className="grid gap-10 lg:grid-cols-2">
                {/* User Details */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">User Details</h3>
                    <div className="space-y-5">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Name</p>
                            <p className="text-lg font-medium text-gray-900">John Doe</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Email</p>
                            <p className="text-lg font-medium text-gray-900">johndoe@example.com</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Joined</p>
                            <p className="text-lg font-medium text-gray-900">January 1, 2023</p>
                        </div>
                    </div>
                </div>

                {/* Edit Profile */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Edit Profile</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Profile;