import React from 'react';
import img from '../assets/WhatsApp Image 2025-04-10 at 1.35.47 PM.jpeg';
import { NavLink } from 'react-router-dom';

const Carosel = () => {
    return (
        <div className='mx-auto max-w-7xl mt-6 flex flex-col md:flex-row items-center gap-8 px-4'>
            {/* Left Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-5xl font-extrabold text-green-800 mb-6 leading-tight">
                    Welcome to Our Store
                </h1>
                <p className="text-lg text-lime-600 mb-8">
                    Discover the best deals and exclusive products tailored just for you. 
                    Shop now and enjoy a seamless shopping experience with us.
                </p>
                <NavLink to='/new-arrival' className="btn btn-primary px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    Explore Now
                </NavLink>
            </div>

            {/* Right Side (Carousel) */}
            <div className="w-full md:w-1/2">
                <div className="carousel w-full border rounded-lg shadow-xl overflow-hidden">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src={img}
                            alt="Carousel Item 1"
                            className="w-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                            alt="Carousel Item 2"
                            className="w-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            alt="Carousel Item 3"
                            className="w-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                            alt="Carousel Item 4"
                            className="w-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                {/* Carousel Navigation */}
                <div className="flex w-full justify-center gap-4 py-6">
                    <a href="#item1" className="btn btn-sm btn-primary rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">1</a>
                    <a href="#item2" className="btn btn-sm btn-primary rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">2</a>
                    <a href="#item3" className="btn btn-sm btn-primary rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">3</a>
                    <a href="#item4" className="btn btn-sm btn-primary rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">4</a>
                </div>
            </div>
        </div>
    );
};

export default Carosel;