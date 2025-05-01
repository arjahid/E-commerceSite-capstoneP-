import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const SportsData = () => {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3200/sports')
            .then(res => res.json())
            .then(data => setSports(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
        <h1 className="text-lg ml-2 sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-start my-4 sm:my-6 text-blue-700 underline decoration-green-500 decoration-4">
            Sports Collection
        </h1>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 p-6 bg-gray-100">
            {sports.map((sport, index) => (
                <div 
                    key={index} 
                    className="relative flex flex-col justify-between h-full p-4 border rounded-lg shadow-md bg-gradient-to-br from-white via-gray-50 to-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                    {/* Badge for special items */}
                    {sport.isSpecial && (
                        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            Special
                        </span>
                    )}
                    <img 
                        src={sport.image || 'https://via.placeholder.com/150'} 
                        alt={sport.name} 
                        className="w-full h-36 object-cover rounded-lg mb-3 shadow-sm" 
                    />
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-base font-semibold text-gray-800 mb-2 text-center">{sport.name}</h2>
                        <p className="text-xs text-gray-600 mb-3 text-justify">{sport.description}</p>
                        <p className="text-base font-bold text-blue-600 mb-3 text-center">${sport.price}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 mt-auto">
                        <NavLink 
                            to='/addToCart' 
                            className="px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-md hover:from-green-500 hover:to-green-700 transition-colors text-center text-sm"
                        >
                            Add to Cart
                        </NavLink>
                        <NavLink 
                            to={`/sports/${sport.id}`} 
                            className="px-3 py-1 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-blue-700 transition-colors text-center text-sm"
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

export default SportsData;