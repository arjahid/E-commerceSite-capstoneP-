import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
// Import the Firebase app instance

const auth=getAuth(app);

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const provider=new GoogleAuthProvider()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createuser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,provider)


    }
    const logOut=()=>{
        setLoading(true);
        return auth.signOut()
    }

    const authInfo = {
        user,loading,
        createuser,
        signIn,
        googleSignIn,
        logOut
    };

    useEffect(() => {
        const unscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;