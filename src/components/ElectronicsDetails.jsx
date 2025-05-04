import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Nav2 from './Nav2';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';
import axios from 'axios'; // Ensure axios is imported
import useCart from '../hook/useCart';

const ElectronicsDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const [cart, isLoading, error, refetch] = useCart(); // Destructure as an array

    const handleCart = async (item) => {
        try {
            // Check if the product already exists in the cart
            const response = await axios.get('https://trendbazar-server.onrender.com/cart');
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

            await axios.post('https://trendbazar-server.onrender.com/cart', cartItem);
            console.log('Item added to cart:', cartItem);

            if (typeof refetch === 'function') {
                refetch();
            }

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
                if (result.isConfirmed && typeof navigate === 'function') {
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

    if (!data || Object.keys(data).length === 0) {
        return (
            <div className="bg-gray-100 min-h-screen">
                <Nav2 />
                <NavBar />
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Electronics Details</h1>
                    <p className="text-gray-600">No product details available.</p>
                </div>
            </div>
        );
    }
    

    return (
        <div className="bg-gray-50 min-h-screen">
            <Nav2 />
            <NavBar />
            <div className="container mx-auto px-4 py-10">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <img
                        src={data.image || 'https://via.placeholder.com/600x400'}
                        alt={data.name || 'Product Image'}
                        className="w-6/12 h-52 object-cover"
                    />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.name}</h2>
                        <p className="text-sm text-gray-500 mb-4">Brand: <span className="font-medium">{data.brand || 'N/A'}</span></p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {data.description || 'No description available.'}
                        </p>
                        <div className="flex items-center justify-between mt-6">
                            <span className="text-xl font-bold text-green-600">Price: ${data.price || 'N/A'}</span>
                            <button
                                onClick={() => handleCart(data)}
                                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded transition-all duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectronicsDetails;
