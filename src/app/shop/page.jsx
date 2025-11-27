import React from "react";
import axios from "axios";
import ProductCard from "@/Components/shared/ProductCard";

export const metadata = {
    title: "Shop - Smart Shop",
    description: "Explore our complete collection of premium products.",
};

async function getProducts() {
    try {
        const res = await axios.get("http://localhost:5000/products");
        return res.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

const ShopPage = async () => {
    const products = await getProducts();

    return (
        <div className="min-h-screen bg-base-100 py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">All Products</h1>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">Explore our complete collection of premium products.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product._id} product={product} priority={index < 2} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
