import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ComputerDetails = () => {
    const data = useLoaderData(); // Fetch data passed by the loader
    console.log('Computer Details:', data);

    return (
        <div className="p-6 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
            <h1 className="text-3xl font-extrabold text-center text-blue-700 underline decoration-yellow-500 mb-6">
                Computer Details
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <div 
                        key={item._id || index} // Use unique `_id` or fallback to index
                        className="relative flex flex-col justify-between h-full p-4 border rounded-lg shadow-lg bg-gradient-to-br from-white via-gray-50 to-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Badge for special items */}
                        {item.isSpecial && (
                            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                Special
                            </span>
                        )}
                        <img 
                            src={item.image || 'https://via.placeholder.com/300'} 
                            alt={item.name || 'No Name Available'} 
                            className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
                        />
                        <div className="flex-1 flex flex-col">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                                {item.name || 'No Name Available'}
                            </h2>
                            <p className="text-sm text-gray-600 mb-3 text-justify">
                                {item.description || 'No Description Available'}
                            </p>
                            <p className="text-lg font-bold text-green-600 mb-3 text-center">
                                Price: ${item.price || 'N/A'}
                            </p>
                            <p className="text-sm text-gray-500 text-center">
                                Brand: {item.brand || 'Unknown'}
                            </p>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-blue-700 transition-colors text-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComputerDetails;