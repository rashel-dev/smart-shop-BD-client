import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../shared/ProductCard";

// Fetch data directly in the server component
async function getProducts() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    try {
        const res = await axios.get(`${apiBaseUrl}/products`);
        return res.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

const PopularProducts = async () => {
    const products = await getProducts();

    // Take only the first 6 products
    const popularProducts = products.slice(0, 6);

    return (
        <section className="py-20 px-4 bg-base-100">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Popular Products</h2>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">Check out our most sought-after items, curated just for you. Grab them before they&apos;re gone!</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {popularProducts.map((product, index) => (
                        <ProductCard key={product._id} product={product} priority={index < 2} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/shop" className="btn btn-outline btn-lg rounded-full px-10 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;
