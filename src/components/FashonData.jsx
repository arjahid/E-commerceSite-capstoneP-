import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const FashonData = () => {
    const [fashonData, setFashonData] = useState([]);
    const navigate = useNavigate(); // Define navigate for routing

    const handleCart = (item) => {
        const cartItem = {
            id: item.id,
            image: item.image,
            name: item.name,
            description: item.description,
            brand: item.brand,
            price: item.price,
        };

        axios.post('http://localhost:3200/cart', cartItem)
            .then(response => {
                console.log('Item added to cart:', response.data);
                Swal.fire({
                    title: "Added to Cart",
                    text: "Your item has been added to the cart.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Go to cart!",
                    cancelButtonText: "Stay here"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/addToCart'); // Navigate to the cart page if confirmed
                    } else {
                        console.log('User chose to stay on the current page.');
                    }
                });
            })
            .catch(error => {
                console.error('Error adding item to cart:', error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to add the item to the cart. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            });
    };

    useEffect(() => {
        fetch('http://localhost:3200/fashon')
            .then(res => res.json())
            .then(data => setFashonData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1 className="text-lg ml-2 sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-start my-4 sm:my-6 text-pink-700 underline decoration-yellow-500 decoration-4">
                Fashion Collection
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 p-6 bg-gray-100">
                {fashonData.map((item, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col justify-between h-full p-4 border rounded-lg shadow-md bg-gradient-to-br from-white via-gray-50 to-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Badge for special items */}
                        {item.isSpecial && (
                            <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                            <p className="text-base font-bold text-pink-600 mb-3 text-center">${item.price}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-2 mt-auto">
                            <NavLink 
                                onClick={() => handleCart(item)}
                                className="px-3 py-1 bg-gradient-to-r from-pink-400 to-pink-600 text-white font-medium rounded-md hover:from-pink-500 hover:to-pink-700 transition-colors text-center text-sm"
                            >
                                Add to Cart
                            </NavLink>
                            <NavLink 
                                to={`/fashion/${item.id}`} 
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

export default FashonData;