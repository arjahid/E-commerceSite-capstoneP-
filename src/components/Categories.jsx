import React from 'react';
import NavBar from '../NavBar';
import Nav2 from './Nav2';
import { NavLink } from 'react-router-dom';

const categoryData = [
    {
        id: 1,
        name: 'Electronics',
        description: 'Explore the latest gadgets and devices.',
        image: 'https://i.postimg.cc/cCC2vXRy/circuit-board-green-and-gold.webp',
    },
    {
        id: 2,
        name: 'Fashion',
        description: 'Discover trendy clothing and accessories.',
        image: 'https://i.postimg.cc/DZGWHxgk/shirt.webp',
    },
    {
        id: 3,
        name: 'Home Appliances',
        description: 'Upgrade your home with modern appliances.',
        image: 'https://i.postimg.cc/63rVpCyL/kitchen-appliances-blender-toaster-coffee-machine-meat-ginder-microwave-oven-kettle-3d-505080-344.webp',
    },
    {
        id: 4,
        name: 'Books',
        description: 'Find books from various genres and authors.',
        image: 'https://i.postimg.cc/brLQQ80Z/bookshelf-master315.webp',
    },
];

const Categories = () => {
    return (
        <div className='container mx-auto'>
            <Nav2 />
            <NavBar />
            <h1 className="text-3xl font-bold text-center my-6">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryData.map((category) => (
                    <NavLink 
                        to={`/categories/${category.id}`} 
                        key={category.id}
                        className="border p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg bg-white"
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                        <p className="text-gray-600">{category.description}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;