import React from 'react';
import Marquee from 'react-fast-marquee';

const Divider = () => {
    return (
        <div className="py-3 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <Marquee>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-gray-800">
                    🔥 Mega Sale Live! Up to 50% OFF – Shop Now! 🔥
                </h2>
            </Marquee>
        </div>
    );
};

export default Divider;