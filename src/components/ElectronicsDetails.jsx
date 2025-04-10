import React from 'react';
import Nav2 from './Nav2';
import NavBar from '../NavBar';
import { useLoaderData } from 'react-router-dom';

const ElectronicsDetails = () => {
    const { data } = useLoaderData();
    console.log(data);

    if (!data || data.length === 0) {
        return (
            <div>
                <Nav2></Nav2>
                <NavBar></NavBar>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6 text-center">Electronics Details</h1>
                    <p className="text-center text-gray-600">No products available at the moment.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Nav2></Nav2>
            <NavBar></NavBar>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Electronics Details</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="text-lg font-bold text-green-600 mb-4">${product.price}</p>
                            <button className="btn btn-primary w-full">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ElectronicsDetails;