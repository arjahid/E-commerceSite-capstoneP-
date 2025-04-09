import React from 'react';
import NavBar from '../../NavBar';
import Nav2 from '../Nav2';

const Setting = () => {
    return (
        <div>
            <Nav2></Nav2>
            <NavBar></NavBar>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-2 bg-gray-100 min-h-screen">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Account Settings</h2>
            <div className="grid gap-8 lg:grid-cols-2">
                {/* Update User Information */}
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Update Information</h3>
                    <form className="space-y-5">
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

                {/* Change Password */}
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Change Password</h3>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="current-password">Current Password</label>
                            <input
                                type="password"
                                id="current-password"
                                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter current password"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="new-password">New Password</label>
                            <input
                                type="password"
                                id="new-password"
                                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter new password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Update Password
                        </button>
                    </form>
                </div>

                {/* Preferences */}
                <div className="bg-white p-8 rounded-xl shadow-md lg:col-span-2">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Preferences</h3>
                    <form className="space-y-5">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="newsletter"
                                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">Subscribe to newsletter</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Save Preferences
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Setting;