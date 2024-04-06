"use client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import AuthManager from "../utils/auth/authManager";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser ] = useState(null);
    const [loading, setLoading ] = useState(true);
  

  const logout = () => {
    AuthManager.logout();
  }

  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (currentUser: any) => {
        if(!user && currentUser) { 
            AuthManager.init();
        }

        setLoading(false);
        setUser(currentUser);
    })

    return () => unSubscribe()
  }, [user])
  return <AuthContext.Provider value={{ user, logout, loading }}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
