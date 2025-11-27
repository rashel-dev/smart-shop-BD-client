"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "@/Components/shared/ProductCard";

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const fetchProducts = async (searchTerm = "") => {
        setLoading(true);
        try {
            const res = await axios.get(`${apiBaseUrl}/products`, {
                params: searchTerm ? { search: searchTerm } : {},
            });
            setProducts(res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(search);
    }, [search]);

    return (
        <div className="min-h-screen bg-base-100 py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">All Products</h1>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">Explore our complete collection of premium products.</p>
                </div>
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search products by name, brand, or category..."
                        className="input input-bordered w-full max-w-md"
                    />
                </div>
                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.length === 0 ? (
                            <div className="col-span-full text-center text-lg opacity-70">No products found.</div>
                        ) : (
                            products.map((product, index) => <ProductCard key={product._id} product={product} priority={index < 2} />)
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopPage;
