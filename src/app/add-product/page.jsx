"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBoxOpen, FaLayerGroup, FaDollarSign, FaTag, FaStar, FaImage, FaAlignLeft } from "react-icons/fa";
import { useAuth } from "@/providers/AuthProvider";

const AddProductPage = () => {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        brand: "",
        price: "",
        discountedPrice: "",
        currentStock: "",
        imageURL: "",
        shortDescription: "",
        longDescription: "",
        rating: "",
    });

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    // Redirect if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push("/login");
        }
    }, [user, authLoading, router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Prepare product data with user email
            const productData = {
                ...formData,
                price: parseFloat(formData.price),
                discountedPrice: formData.discountedPrice ? parseFloat(formData.discountedPrice) : null,
                currentStock: parseInt(formData.currentStock),
                rating: formData.rating ? parseFloat(formData.rating) : null,
                userEmail: user.email,
                createdAt: new Date().toISOString(),
            };

            const response = await axios.post(`${apiBaseUrl}/products`, productData);

            if (response.data.insertedId) {
                // Show success toast
                toast.success("Product added successfully! 🎉", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                // Reset form
                setFormData({
                    title: "",
                    category: "",
                    brand: "",
                    price: "",
                    discountedPrice: "",
                    currentStock: "",
                    imageURL: "",
                    shortDescription: "",
                    longDescription: "",
                    rating: "",
                });

                // Redirect to manage products page after 2 seconds
                setTimeout(() => {
                    router.push("/manage-products");
                }, 2000);
            }
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error(error.response?.data?.error || "Failed to add product. Please try again.", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    if (authLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
            {/* Toast Container */}
            <ToastContainer />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-base-content mb-4">Add New Product</h1>
                    <p className="text-lg text-base-content/70">Expand your inventory by adding the latest items to your store.</p>
                </div>

                <div className="card bg-base-100 shadow-2xl border border-base-200 overflow-hidden">
                    {/* Decorative header */}
                    <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>

                    <div className="card-body p-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Product Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Product Title *</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                            <FaBoxOpen />
                                        </div>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            placeholder="e.g. Dell XPS 13"
                                            className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Brand *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleChange}
                                        placeholder="e.g. Dell"
                                        className="input input-bordered w-full focus:input-primary transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Category */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Category *</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                        <FaLayerGroup />
                                    </div>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="select select-bordered w-full pl-10 focus:select-primary transition-all"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Category
                                        </option>
                                        <option value="electronics">Electronics</option>
                                        <option value="fashion">Fashion</option>
                                        <option value="home">Home & Living</option>
                                        <option value="sports">Sports</option>
                                        <option value="books">Books</option>
                                    </select>
                                </div>
                            </div>

                            {/* Price and Discount */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Price *</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                            <FaDollarSign />
                                        </div>
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                            step="0.01"
                                            min="0"
                                            className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Discounted Price</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                            <FaDollarSign />
                                        </div>
                                        <input
                                            type="number"
                                            name="discountedPrice"
                                            value={formData.discountedPrice}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                            step="0.01"
                                            min="0"
                                            className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Stock Quantity *</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                            <FaTag />
                                        </div>
                                        <input
                                            type="number"
                                            name="currentStock"
                                            value={formData.currentStock}
                                            onChange={handleChange}
                                            placeholder="0"
                                            min="0"
                                            className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Rating (0-5)</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                        <FaStar />
                                    </div>
                                    <input
                                        type="number"
                                        name="rating"
                                        value={formData.rating}
                                        onChange={handleChange}
                                        placeholder="4.5"
                                        step="0.1"
                                        min="0"
                                        max="5"
                                        className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                                    />
                                </div>
                            </div>

                            {/* Image URL */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Product Image URL *</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                        <FaImage />
                                    </div>
                                    <input
                                        type="url"
                                        name="imageURL"
                                        value={formData.imageURL}
                                        onChange={handleChange}
                                        placeholder="https://example.com/image.jpg"
                                        className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Short Description */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Short Description *</span>
                                </label>
                                <input
                                    type="text"
                                    name="shortDescription"
                                    value={formData.shortDescription}
                                    onChange={handleChange}
                                    placeholder="Brief product description (1-2 sentences)"
                                    className="input input-bordered w-full focus:input-primary transition-all"
                                    required
                                />
                            </div>

                            {/* Long Description */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Long Description *</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 pointer-events-none text-base-content/50">
                                        <FaAlignLeft />
                                    </div>
                                    <textarea
                                        name="longDescription"
                                        value={formData.longDescription}
                                        onChange={handleChange}
                                        className="textarea textarea-bordered h-32 w-full pl-10 focus:textarea-primary transition-all"
                                        placeholder="Detailed product description with specifications..."
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary btn-lg w-full shadow-lg hover:scale-[1.01] transition-transform" disabled={loading}>
                                    {loading ? <span className="loading loading-spinner"></span> : "Add Product"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
