import React from 'react';
import img from '../assets/WhatsApp Image 2025-04-10 at 1.35.47 PM.jpeg';

const Carosel = () => {
    return (
        <div className='mx-auto max-w-7xl mt-3 flex flex-col md:flex-row items-center gap-6'>
            {/* Left Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold text-green-700 mb-4">Welcome to Our Store</h1>
                <p className="text-lime-500 mb-6">
                    Discover the best deals and exclusive products tailored just for you. 
                    Shop now and enjoy a seamless shopping experience.
                </p>
                <button className="btn btn-primary rounded-lg shadow-md hover:shadow-lg">
                    Explore Now
                </button>
            </div>

            {/* Right Side (Carousel) */}
            <div className="w-full md:w-1/2">
                <div className="carousel w-full border rounded-lg shadow-lg overflow-hidden">
                    <div id="item1" className="carousel-item w-full transition-transform duration-500 ease-in-out">
                        <img
                            src={img}
                            alt="Carousel Item 1"
                            className="w-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div id="item2" className="carousel-item w-full transition-transform duration-500 ease-in-out">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                            alt="Carousel Item 2"
                            className="w-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div id="item3" className="carousel-item w-full transition-transform duration-500 ease-in-out">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            alt="Carousel Item 3"
                            className="w-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div id="item4" className="carousel-item w-full transition-transform duration-500 ease-in-out">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                            alt="Carousel Item 4"
                            className="w-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-4">
                    <a href="#item1" className="btn btn-xs btn-primary rounded-full shadow-md hover:shadow-lg">1</a>
                    <a href="#item2" className="btn btn-xs btn-primary rounded-full shadow-md hover:shadow-lg">2</a>
                    <a href="#item3" className="btn btn-xs btn-primary rounded-full shadow-md hover:shadow-lg">3</a>
                    <a href="#item4" className="btn btn-xs btn-primary rounded-full shadow-md hover:shadow-lg">4</a>
                </div>
            </div>
        </div>
    );
};

export default Carosel;