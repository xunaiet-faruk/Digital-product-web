"use client";

import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    const logout = async () => {
        return await signOut(auth);
    };

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("user present here",currentUser);
            setLoading(false);
        });

        return () => unsub();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, signup, login , logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);