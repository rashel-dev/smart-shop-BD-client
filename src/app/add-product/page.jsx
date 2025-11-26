"use client";
import React from "react";
import { FaBoxOpen, FaTag, FaImage, FaAlignLeft, FaDollarSign, FaLayerGroup } from "react-icons/fa";

const AddProductPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-base-content mb-4">Add New Product</h1>
                    <p className="text-lg text-base-content/70">Expand your inventory by adding the latest items to your store.</p>
                </div>

                <div className="card bg-base-100 shadow-2xl border border-base-200 overflow-hidden">
                    {/* Decorative header */}
                    <div className="h-2 bg-linear-to-r from-primary via-secondary to-accent"></div>

                    <div className="card-body p-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Product Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Product Name</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                            <FaBoxOpen />
                                        </div>
                                        <input type="text" placeholder="e.g. Wireless Headphones" className="input input-bordered w-full pl-10 focus:input-primary transition-all" />
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Category</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                            <FaLayerGroup />
                                        </div>
                                        <select className="select select-bordered w-full pl-10 focus:select-primary transition-all">
                                            <option disabled selected>
                                                Select Category
                                            </option>
                                            <option>Electronics</option>
                                            <option>Fashion</option>
                                            <option>Home & Living</option>
                                            <option>Sports</option>
                                            <option>Books</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Price and Stock */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Price</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                            <FaDollarSign />
                                        </div>
                                        <input type="number" placeholder="0.00" className="input input-bordered w-full pl-10 focus:input-primary transition-all" />
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Stock Quantity</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                            <FaTag />
                                        </div>
                                        <input type="number" placeholder="Available stock" className="input input-bordered w-full pl-10 focus:input-primary transition-all" />
                                    </div>
                                </div>
                            </div>

                            {/* Image URL */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Product Image URL</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                                        <FaImage />
                                    </div>
                                    <input type="url" placeholder="https://example.com/image.jpg" className="input input-bordered w-full pl-10 focus:input-primary transition-all" />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Description</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 pointer-events-none text-base-content/50">
                                        <FaAlignLeft />
                                    </div>
                                    <textarea className="textarea textarea-bordered h-32 w-full pl-10 focus:textarea-primary transition-all" placeholder="Detailed product description..."></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary btn-lg w-full shadow-lg hover:scale-[1.01] transition-transform">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
