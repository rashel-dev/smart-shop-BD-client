"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/providers/AuthProvider";

const Navbar = () => {
    const { user, logoutUser, loading } = useAuth();

    const handleLogout = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const navOptions = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/shop">Products</Link>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    {/* menu icon for mobile */}
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    {/* nav menu options for mobile */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                {/* logo and website name  */}
                <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
                    <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
                    <span className="hidden md:block">SmartShopBD</span>
                </Link>
            </div>

            {/* nav menu option for desktop  */}

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">{navOptions}</ul>
            </div>

            {/* login and register button */}
            <div className="navbar-end">
                {loading ? (
                    <div className="skeleton h-10 w-24"></div>
                ) : user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt={user.displayName || "User Avatar"} src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                            </div>
                        </div>

                        {/* user menu options */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="menu-title">{user.displayName || user.email}</li>
                            <li>
                                <Link href="/add-product">Add Product</Link>
                            </li>
                            <li>
                                <Link href="/manage-products">Manage Products</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link href="/login" className="btn btn-ghost">
                            Login
                        </Link>
                        <Link href="/register" className="btn btn-primary">
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
