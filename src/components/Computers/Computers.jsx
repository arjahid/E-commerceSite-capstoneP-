import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Computers = () => {
    const [computers, setComputers] = useState([]);
    const navigate = useNavigate(); // Define navigate for routing

    const handleCart = async (item) => {
        try {
            // Check if the product already exists in the cart
            const response = await axios.get('http://localhost:3200/cart');
            const existingCart = response.data;

            const isProductInCart = existingCart.some(cartItem => cartItem.id === item.id);

            if (isProductInCart) {
                Swal.fire({
                    title: "Already in Cart",
                    text: "This product is already in your cart.",
                    icon: "info",
                    confirmButtonText: "OK"
                });
                return;
            }

            // Add the product to the cart if it doesn't exist
            const cartItem = {
                id: item.id,
                image: item.image,
                name: item.name,
                description: item.description,
                brand: item.brand,
                price: item.price,
            };

            await axios.post('http://localhost:3200/cart', cartItem);
            console.log('Item added to cart:', cartItem);

            Swal.fire({
                title: "Added to Cart",
                text: "Your item has been added to the cart.",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to cart!",
                cancelButtonText: "Stay here"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/addToCart');
                }
            });
        } catch (error) {
            console.error('Error handling cart:', error);
            Swal.fire({
                title: "Error",
                text: "Failed to add the item to the cart. Please try again.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    };

    useEffect(() => {
        fetch('http://localhost:3200/computer')
            .then(res => res.json())
            .then(data => setComputers(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1 className="text-lg ml-2 sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-start my-4 sm:my-6 text-blue-700 underline decoration-green-500 decoration-4">
                Computer Collection
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 p-6 bg-gray-100">
                {computers.map((computer, index) => (
                    <div 
                        key={computer.id || index} // Use computer.id if available, otherwise fallback to index
                        className="relative flex flex-col justify-between h-full p-4 border rounded-lg shadow-md bg-gradient-to-br from-white via-gray-50 to-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Badge for special items */}
                        {computer.isSpecial && (
                            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                Special
                            </span>
                        )}
                        <img 
                            src={computer.image || 'https://via.placeholder.com/150'} 
                            alt={computer.name} 
                            className="w-full h-36 object-cover rounded-lg mb-3 shadow-sm" 
                        />
                        <div className="flex-1 flex flex-col">
                            <h2 className="text-base font-semibold text-gray-800 mb-2 text-center">{computer.name}</h2>
                            <p className="text-xs text-gray-600 mb-3 text-justify">{computer.description}</p>
                            <p className="text-base font-bold text-blue-600 mb-3 text-center">${computer.price}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-2 mt-auto">
                            <NavLink 
                                onClick={() => handleCart(computer)}
                                className="px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-md hover:from-green-500 hover:to-green-700 transition-colors text-center text-sm"
                            >
                                Add to Cart
                            </NavLink>
                            <NavLink 
                                to={`/computers/${computer.id}`} 
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

export default Computers;