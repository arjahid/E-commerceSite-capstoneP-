import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftAside = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3200/products')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <nav className="flex flex-col space-y-2">
            {[...new Set(data.map(item => item.category))].map((category, index) => (
                <NavLink  
                    key={index} 
                    to={`/categories/${category}`}
                    className="py-2 px-4 rounded bg-lime-600 text-white hover:bg-primary-focus"
                >
                    {category}
                </NavLink>
            ))}
        </nav>
    );
};

export default LeftAside;
