import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useCart = () => {
    const {user}=useContext(AuthContext)
    const { data: cart = [], isLoading, error, refetch } = useQuery({
        queryKey: ['cart', user?.email],
         enabled: !!user?.email, // Only run the query if user email is available
        queryFn: async () => {
            try {
                const res = await axios.get(`http://localhost:3200/cart?email=${user?.email}`); // Fetch cart data based on user email
                return res.data; // Return the data directly from the response
            } catch (error) {
                throw new Error('Failed to fetch cart data'); // Explicit error handling
            }
        },
    });

    return [cart, isLoading, error, refetch] // Include refetch in the return value
};

export default useCart;