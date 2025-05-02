import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate(); // Moved useNavigate to the top level

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log('User logged in with Google:', user);
                alert('User logged in successfully!');
                navigate('/'); // Redirect to home page after successful login
            })
            .catch((error) => {
                console.error('Error logging in with Google:', error);
                alert('Error logging in with Google:', error.message);
            });
    };

    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                className="btn btn-primary join-item w-full bg-green-500 flex items-center justify-center gap-2"
            >
                <FaGoogle className="text-xl" />
                <span className="font-bold">Login with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;