import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useCart = () => {
    const { data: cart = [], isLoading, error, refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            try {
                const res = await axios.get('http://localhost:3200/cart');
                return res.data; // Return the data directly from the response
            } catch (error) {
                throw new Error('Failed to fetch cart data'); // Explicit error handling
            }
        },
    });

    return [cart, isLoading, error, refetch] // Include refetch in the return value
};

export default useCart;