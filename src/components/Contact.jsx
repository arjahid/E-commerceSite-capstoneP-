import React from 'react';
import NavBar from '../NavBar';
import Nav2 from './Nav2';

const Contact = () => {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <Nav2></Nav2>
            <NavBar></NavBar>
            <div className="p-6 bg-white rounded-lg shadow-lg mt-6 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;