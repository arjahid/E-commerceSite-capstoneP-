import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const ElectrinicsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('e.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1 className="text-lg ml-2 sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-start my-4 sm:my-6 text-green-600 underline decoration-green-500 decoration-4">
                Electronics And Ic
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100">
            {data.slice(0, 6).map((item, index) => (
                <div key={index} className="flex flex-col justify-between h-full p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h2>
                    <img 
                        src={item.image || 'https://via.placeholder.com/150'} 
                        alt={item.title} 
                        className="w-full h-56 object-cover rounded-md mb-4" 
                    />
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <p className="text-xl font-bold text-green-600 mb-4">${item.price}</p>
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <NavLink to='/addToCart' className="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors w-full sm:w-auto">
                            Add to Cart
                        </NavLink>
                        <Link 
                            to={`/electronics/${item.id}`} 
                            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors w-full sm:w-auto text-center"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ElectrinicsData;