import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

// Fetch data directly in the server component
async function getProducts() {
    try {
        // Assuming the server is running locally on port 5000
        const res = await axios.get("http://localhost:5000/products");
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
                    {popularProducts.map((product) => (
                        <div key={product._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 group">
                            <figure className="relative h-64 w-full overflow-hidden">
                                {product.imageURL ? (
                                    <Image
                                        src={product.imageURL}
                                        alt={product.name || "Product Image"}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                                )}
                                <div className="absolute top-4 right-4 badge badge-secondary badge-lg shadow-md">New</div>
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl font-bold">{product.title}</h3>
                                <p className="text-base-content/70 line-clamp-2">{product.shortDescription || "No description available."}</p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-sm rounded-full px-6">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
