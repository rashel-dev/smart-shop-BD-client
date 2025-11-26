import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock, MdPerson, MdImage } from "react-icons/md";

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center py-10 px-4">
            <div className="card w-full max-w-4xl bg-base-100 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 rounded-2xl">

                {/* Left Side */}
                <div className="relative hidden md:flex flex-col justify-center items-center bg-primary text-primary-content p-10 text-center">

                    <div className="relative z-10 bg-black/30 p-6 rounded-xl backdrop-blur-sm">
                        <h3 className="text-3xl font-bold mb-2">Join Us Today</h3>
                        <p className="text-lg">Create an account to start your journey with Smart Shop.</p>
                    </div>
                </div>

                {/* Right Side - Register Form */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-center md:text-left mb-6">
                        <h2 className="text-3xl font-bold text-base-content">Create Account</h2>
                        <p className="text-base-content/60 mt-2">Sign up to get started</p>
                    </div>

                    {/* Register Form */}

                    <form className="flex flex-col gap-4">
                        {/* Name Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Full Name</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                    <MdPerson className="text-xl" />
                                </div>
                                <input type="text" placeholder="John Doe" className="input input-bordered w-full pl-4 focus:input-primary transition-all" />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                    <MdEmail className="text-xl" />
                                </div>
                                <input type="email" placeholder="your@email.com" className="input input-bordered w-full pl-4 focus:input-primary transition-all" />
                            </div>
                        </div>

                        {/* Photo URL Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                    <MdImage className="text-xl" />
                                </div>
                                <input type="url" placeholder="https://example.com/photo.jpg" className="input input-bordered w-full pl-4 focus:input-primary transition-all" />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                    <MdLock className="text-xl" />
                                </div>
                                <input type="password" placeholder="••••••••" className="input input-bordered w-full pl-4 focus:input-primary transition-all" />
                            </div>
                        </div>

                        {/* Register Button */}
                        <button className="btn btn-primary w-full mt-4 text-lg shadow-lg hover:shadow-xl transition-all">Sign Up</button>
                    </form>

                    {/* Social Login */}
                    <div className="divider my-6 text-base-content/50">OR</div>

                    <button className="btn bg-base-100 border-base-300 hover:bg-base-200 text-base-content w-full flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all">
                        <FcGoogle className="text-xl" />
                        Sign up with Google
                    </button>

                    {/* Login Link */}
                    <p className="text-center mt-6 text-base-content/70">
                        Already have an account?{" "}
                        <Link href="/login" className="link link-primary font-bold hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
