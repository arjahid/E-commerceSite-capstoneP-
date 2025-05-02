import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true} state={{from:location}}></Navigate>
};

export default PrivateRoute;