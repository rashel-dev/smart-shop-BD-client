"use client";
import React, { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { loginUser, loginWithGoogle } = useAuth();
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await loginUser(email, password);
            router.push("/");
        } catch (error) {
            setError(getErrorMessage(error.code));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError("");
        setLoading(true);

        try {
            await loginWithGoogle();
            router.push("/");
        } catch (error) {
            setError(getErrorMessage(error.code));
        } finally {
            setLoading(false);
        }
    };

    const getErrorMessage = (code) => {
        switch (code) {
            case "auth/invalid-email":
                return "Invalid email address.";
            case "auth/user-disabled":
                return "This account has been disabled.";
            case "auth/user-not-found":
                return "No account found with this email.";
            case "auth/wrong-password":
                return "Incorrect password.";
            case "auth/invalid-credential":
                return "Invalid email or password.";
            default:
                return "An error occurred. Please try again.";
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-4xl font-extrabold">Welcome Back</h2>
                    <p className="mt-2 text-center text-sm opacity-70">Sign in to your account to continue</p>
                </div>

                <div className="card bg-base-100 shadow-2xl border border-base-200">
                    <div className="card-body">
                        {error && (
                            <div className="alert alert-error mb-4">
                                <span>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email Address</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="input input-bordered w-full pr-12"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                <label className="label">
                                    <Link href="/forgot-password" className="label-text-alt link link-hover text-primary">
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                                {loading ? <span className="loading loading-spinner"></span> : "Sign In"}
                            </button>
                        </form>

                        <div className="divider">OR</div>

                        <button onClick={handleGoogleLogin} className="btn btn-outline w-full gap-2" disabled={loading}>
                            <FaGoogle className="text-xl" />
                            Continue with Google
                        </button>

                        <p className="text-center text-sm mt-4">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="link link-primary font-semibold">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
