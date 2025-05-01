import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const ElectrinicsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3200/electronics')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1 className="text-lg ml-2 sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-start my-4 sm:my-6 text-green-600 underline decoration-green-500 decoration-4">
                Electronics And Ic
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 p-6 bg-gray-100">
            {data.map((item, index) => (
                <div 
                    key={index} 
                    className="relative flex flex-col justify-between h-full p-4 border rounded-lg shadow-md bg-gradient-to-br from-white via-gray-50 to-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                    {/* Badge for special items */}
                    {item.isSpecial && (
                        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            Special
                        </span>
                    )}
                    <img 
                        src={item.image || 'https://via.placeholder.com/150'} 
                        alt={item.title} 
                        className="w-full h-36 object-cover rounded-lg mb-3 shadow-sm" 
                    />
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-base font-semibold text-gray-800 mb-2 text-center">{item.title}</h2>
                        <p className="text-xs text-gray-600 mb-3 text-justify">{item.description}</p>
                        <p className="text-base font-bold text-green-600 mb-3 text-center">${item.price}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 mt-auto">
                        <NavLink 
                            to='/addToCart' 
                            className="px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-md hover:from-green-500 hover:to-green-700 transition-colors text-center text-sm"
                        >
                            Add to Cart
                        </NavLink>
                        <Link 
                            to={`/electronics/${item.id}`} 
                            className="px-3 py-1 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-blue-700 transition-colors text-center text-sm"
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