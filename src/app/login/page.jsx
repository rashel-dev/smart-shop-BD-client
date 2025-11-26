import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock } from "react-icons/md";

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center py-10 px-4">
            <div className="card w-full max-w-4xl bg-base-100 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 rounded-2xl">
                {/* Left Side - Image/Gradient */}
                <div className="relative hidden md:flex flex-col justify-center items-center bg-primary text-primary-content p-10 text-center">
                    <Image src="/loginPageBanner.jpg" alt="Login Page Banner" fill className="object-cover" />
                </div>

                {/* Right Side - Login Form */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-center md:text-left mb-8">
                        <h2 className="text-3xl font-bold text-base-content">Login</h2>
                        <p className="text-base-content/60 mt-2">Enter your details to sign in to your account</p>
                    </div>

                    <form className="flex flex-col gap-4">
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
                                <label className="label">
                                    <Link href="/forgot-password" className="label-text-alt link link-hover text-primary">
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button className="btn btn-primary w-full mt-2 text-lg">Sign In</button>
                    </form>

                    {/* Social Login */}
                    <div className="divider my-6">OR</div>

                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <FcGoogle className="text-lg" />
                        Login with Google
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-center mt-8 text-base-content/70">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="link link-primary font-bold">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
