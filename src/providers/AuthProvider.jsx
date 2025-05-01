import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const createuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }




    
    const authInfo = {
        
    };
    useEffect(()=>{
        const unscribe=onAuthStateChanged(auth)
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;