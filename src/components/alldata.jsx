import React from 'react';

const alldata = () => {
    return (
        <div className="p-6 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-blue-600 underline decoration-yellow-500 mb-4">
                I am from All Data
            </h1>
            <p className="text-lg text-gray-700 text-center mb-6">
                This is a placeholder component for displaying all data. You can customize it further as needed.
            </p>
            <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                Learn More
            </button>
        </div>
    );
};

export default alldata;