import React from 'react';
import NavBar from '../NavBar';
import FashonData from './FashonData';
import Nav2 from './Nav2';

const FashonDetails = () => {
    return (
        <div>
                <div className="container mx-auto">
                    <Nav2></Nav2>
                    <NavBar></NavBar>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6 text-center">Fashon Details</h1>

                    <p className="text-center text-gray-600">No products available at the moment.</p>
                </div>
            </div>
    );
};

export default FashonDetails;