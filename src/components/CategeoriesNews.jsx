import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategeoriesNews = () => {
    const data=useLoaderData();
    console.log('cat',data)
    
    return (
        <div className='container mx-auto'>
            <h2 className='text-black'>Here is the specefic category data</h2>
        </div>
    );
};

export default CategeoriesNews;