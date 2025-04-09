import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftAside = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <nav className="flex flex-col space-y-2">
            {data.map((item, index) => (
                <NavLink  
                    key={index} 
                    to={`/categories/${item.id}`}
                    className="py-2 px-4 rounded bg-lime-600 text-white hover:bg-primary-focus"
                >
                    {item.category}
                </NavLink>
            ))}
        </nav>
    );
};

export default LeftAside;