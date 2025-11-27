"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/services/firebase.config";

// Create Auth Context
const AuthContext = createContext(null);

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register new user with email and password
    const registerUser = async (email, password, displayName) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Update profile with display name
            if (displayName) {
                await updateProfile(userCredential.user, {
                    displayName: displayName,
                });
            }
            return userCredential;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Login user with email and password
    const loginUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Login with Google
    const loginWithGoogle = async () => {
        setLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            return userCredential;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Logout user
    const logoutUser = async () => {
        setLoading(true);
        try {
            await signOut(auth);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Reset password
    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            throw error;
        }
    };

    // Update user profile
    const updateUserProfile = async (updates) => {
        try {
            await updateProfile(auth.currentUser, updates);
            setUser({ ...auth.currentUser });
        } catch (error) {
            throw error;
        }
    };

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        loginWithGoogle,
        logoutUser,
        resetPassword,
        updateUserProfile,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
