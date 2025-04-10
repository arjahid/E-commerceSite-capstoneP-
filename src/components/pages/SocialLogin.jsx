import React from 'react';
import { FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div>
            <button className="btn btn-primary join-item w-full bg-green-500 flex items-center justify-center gap-2">
                <FaGoogle className="text-xl" />
                <span className="font-bold">Login with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;