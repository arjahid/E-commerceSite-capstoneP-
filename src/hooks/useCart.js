import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const useCart = () => {
    const [isLoading, setIsLoading] = useState(false);

    const addToCart = async (item, navigate, refetch) => {
        setIsLoading(true);
        const cartItem = {
            id: item.id,
            image: item.image,
            name: item.name,
            description: item.description,
            brand: item.brand,
            price: item.price,
        };

        try {
            const response = await axios.post('https://trendbazar-server.onrender.com/cart', cartItem);
            console.log('Item added to cart:', response.data);

            // Call refetch if it is provided
            if (refetch) {
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
                // Navigate if navigate function is provided
                if (result.isConfirmed && navigate) {
                    navigate('/addToCart');
                }
            });
        } catch (error) {
            console.error('Error adding item to cart:', error);
            Swal.fire({
                title: "Error",
                text: "Failed to add the item to the cart. Please try again.",
                icon: "error",
                confirmButtonText: "OK"
            });
        } finally {
            setIsLoading(false);
        }
    };

    return { addToCart, isLoading };
};

export default useCart;
