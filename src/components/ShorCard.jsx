import React from 'react';
import { FaTruck, FaUndo, FaLock, FaHeadset } from 'react-icons/fa';

const ShorCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 border-white bg-white mt-2 p-4">
            <div className="card bg-white shadow-md p-4 rounded-md text-center border border-white hover:shadow-lg hover:bg-gray-100 hover:translate-y-[-5px] transition-all duration-300">
                <FaTruck className="text-3xl text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-black">Fast Delivery</h3>
                <p className="text-black">For all orders over 200tk</p>
            </div>
            <div className="card bg-white shadow-md p-4 rounded-md text-center border border-white hover:shadow-lg hover:bg-gray-100 hover:translate-y-[-5px] transition-all duration-300">
                <FaUndo className="text-3xl text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-black">15 Days Return</h3>
                <p className="text-black">If products have problem</p>
            </div>
            <div className="card bg-white shadow-md p-4 rounded-md text-center border border-white hover:shadow-lg hover:bg-gray-100 hover:translate-y-[-5px] transition-all duration-300">
                <FaLock className="text-3xl text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-black">Secure Payment</h3>
                <p className="text-black">100% Secure Payment</p>
            </div>
            <div className="card bg-white shadow-md p-4 rounded-md text-center border border-white hover:shadow-lg hover:bg-gray-100 hover:translate-y-[-5px] transition-all duration-300">
                <FaHeadset className="text-3xl text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-black">24/7 Fast Support</h3>
                <p className="text-black">Always available for you</p>
            </div>
        </div>
    );
};

export default ShorCard;