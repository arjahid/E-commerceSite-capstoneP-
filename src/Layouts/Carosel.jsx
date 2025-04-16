import React from 'react';
import img from '../../src/assets/WhatsApp Image 2025-04-16 at 1.16.39 AM.jpeg';
import { NavLink } from 'react-router-dom';

const Carosel = () => {
    return (
        <div className="mx-auto w-7xl px-4 py-2 md:py-16 bg-white">
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden shadow-xl rounded-lg group">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-all duration-1000 group-hover:scale-110 group-hover:translate-y-[-5px] group-hover:brightness-75"
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                        Welcome to Our Store
                    </h1>
                    <p className="text-base sm:text-lg mb-6 max-w-xl drop-shadow-md">
                        Discover the best deals and exclusive products tailored just for you.
                        Shop now and enjoy a seamless shopping experience with us.
                    </p>
                    <NavLink
                        to="/new-arrival"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        Explore Now
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Carosel;