import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Computers = () => {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        fetch('c.json')
            .then(res => res.json())
            .then(data => setComputers(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1 className="text-lg ml-2 sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-start my-4 sm:my-6 text-blue-700 underline decoration-green-500 decoration-4">
                Computer Collection
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100">
                {computers.slice(0, 6).map((computer, index) => (
                    <div key={index} className="flex flex-col justify-between h-full p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{computer.name}</h2>
                        <img 
                            src={computer.image || 'https://via.placeholder.com/150'} 
                            alt={computer.name} 
                            className="w-full h-56 object-cover rounded-md mb-4" 
                        />
                        <p className="text-gray-600 mb-4">{computer.description}</p>
                        <p className="text-xl font-bold text-green-600 mb-4">${computer.price}</p>
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <NavLink to='/addToCart' className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors w-full sm:w-auto">
                                Add to Cart
                            </NavLink>
                            <NavLink 
                                to={`/computers/${computer.id}`} 
                                className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors w-full sm:w-auto text-center"
                            >
                                View Details
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Computers;