"use client";
import React, { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { registerUser, loginWithGoogle } = useAuth();
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        return true;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (!validateForm()) return;

        setLoading(true);

        try {
            await registerUser(formData.email, formData.password, formData.name);
            router.push("/");
        } catch (error) {
            setError(getErrorMessage(error.code));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
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
            case "auth/email-already-in-use":
                return "This email is already registered.";
            case "auth/invalid-email":
                return "Invalid email address.";
            case "auth/operation-not-allowed":
                return "Email/password accounts are not enabled.";
            case "auth/weak-password":
                return "Password is too weak.";
            default:
                return "An error occurred. Please try again.";
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-4xl font-extrabold">Create Account</h2>
                    <p className="mt-2 text-center text-sm opacity-70">Join Smart Shop today</p>
                </div>

                <div className="card bg-base-100 shadow-2xl border border-base-200">
                    <div className="card-body">
                        {error && (
                            <div className="alert alert-error mb-4">
                                <span>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleRegister} className="space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your full name" className="input input-bordered w-full" value={formData.name} onChange={handleChange} required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email Address</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Create a password"
                                        className="input input-bordered w-full pr-12"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                <label className="label">
                                    <span className="label-text-alt opacity-70">Must be at least 6 characters</span>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Confirm Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        className="input input-bordered w-full pr-12"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                                {loading ? <span className="loading loading-spinner"></span> : "Create Account"}
                            </button>
                        </form>

                        <div className="divider">OR</div>

                        <button onClick={handleGoogleSignup} className="btn btn-outline w-full gap-2" disabled={loading}>
                            <FaGoogle className="text-xl" />
                            Continue with Google
                        </button>

                        <p className="text-center text-sm mt-4">
                            Already have an account?{" "}
                            <Link href="/login" className="link link-primary font-semibold">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
