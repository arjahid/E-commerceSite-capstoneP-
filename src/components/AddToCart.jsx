import React from 'react';
import NavBar from '../NavBar';
import Nav2 from './Nav2';
import useCart from '../hook/useCart';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa6';

const AddToCart = () => {
    const [cart, , , refetch] = useCart(); // Destructure cart and refetch from useCart
    console.log('cart details ', cart);

    // Ensure price defaults to 0 if undefined
    const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0), 0);

    const handleRemove = (id) => {
        axios.delete(`http://localhost:3200/cart/${id}`)
            .then(() => {
                Swal.fire({
                    title: "Removed!",
                    text: "Item has been removed from the cart.",
                    icon: "success",
                    confirmButtonText: "OK"
                });
                refetch(); // Refresh the cart data
            })
            .catch(error => {
                console.error('Error removing item from cart:', error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to remove the item. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            });
    };

    return (
        <div>
            <Nav2 />
            <NavBar />
            <div className="pt-5 justify-center items-center flex flex-col">
                <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
                {cart.length > 0 ? (
                    <div className="w-full max-w-4xl">
                        <div className="mb-4 text-right">
                            <p className='text-left'>Total Item :{cart.length}</p>
                            <p className="text-lg font-semibold text-gray-700">
                                Total Price: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
                            </p>
                        </div>
                        {cart.map((item, index) => (
                            <div 
                                key={item.id} 
                                className="flex justify-between items-center p-4 border-b border-gray-300 bg-white rounded-md shadow-sm mb-2"
                            >
                                <p className="text-sm font-bold text-gray-500">{index + 1}.</p>
                                <img 
                                    src={item.image || 'https://via.placeholder.com/100'} 
                                    alt={item.name || 'Product Image'} 
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <div className="flex-1 ml-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{item.name || 'Unnamed Product'}</h2>
                                    <p className="text-sm text-gray-600">{item.description || 'No description available.'}</p>
                                    <p className="text-sm text-gray-500">Brand: {item.brand || 'Unknown'}</p>
                                </div>
                                <p className="text-lg font-bold mr-4 text-green-600">${(item.price || 0).toFixed(2)}</p>
                                <button
                                    onClick={() => handleRemove(item._id)}
                                    className="px-3 py-1 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors text-sm"
                                >
                                    <FaTrash></FaTrash>
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default AddToCart;