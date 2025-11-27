import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaArrowLeft } from "react-icons/fa";

async function getProduct(id) {
    try {
        const res = await fetch(`http://localhost:5000/products/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

const ProductDetailsPage = async ({ params }) => {
    // Await params for Next.js 15+ compatibility
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/shop" className="btn btn-primary">
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    // Render star rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
        }
        return stars;
    };

    const hasDiscount = product.discountedPrice && product.discountedPrice < product.price;
    const discountPercentage = hasDiscount ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) : 0;

    return (
        <div className="min-h-screen bg-base-100 py-12 px-4">
            <div className="container mx-auto">
                {/* Back Button */}
                <Link href="/shop" className="btn btn-ghost gap-2 mb-6">
                    <FaArrowLeft /> Back to Shop
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="relative">
                        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            {product.imageURL ? (
                                <Image src={product.imageURL} alt={product.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                            )}
                            {hasDiscount && <div className="absolute top-4 right-4 badge badge-error badge-lg">{discountPercentage}% OFF</div>}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col gap-6">
                        {/* Category & Brand */}
                        <div className="flex gap-2">
                            {product.category && <span className="badge badge-primary badge-lg capitalize">{product.category}</span>}
                            {product.brand && <span className="badge badge-outline badge-lg">{product.brand}</span>}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold">{product.title}</h1>

                        {/* Rating */}
                        {product.rating && (
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">{renderStars(product.rating)}</div>
                                <span className="text-lg font-semibold">{product.rating}</span>
                                <span className="opacity-70">/ 5</span>
                            </div>
                        )}

                        {/* Short Description */}
                        <p className="text-lg opacity-80">{product.shortDescription}</p>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-bold text-primary">${hasDiscount ? product.discountedPrice : product.price}</span>
                            {hasDiscount && <span className="text-2xl line-through opacity-50">${product.price}</span>}
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Availability:</span>
                            {product.currentStock > 0 ? (
                                <span className="text-success font-semibold">In Stock ({product.currentStock} available)</span>
                            ) : (
                                <span className="text-error font-semibold">Out of Stock</span>
                            )}
                        </div>

                        {/* Add to Cart Button */}
                        <div className="flex gap-4 mt-4">
                            <button className="btn btn-primary btn-lg flex-1 gap-2" disabled={product.currentStock === 0}>
                                <FaShoppingCart className="text-xl" />
                                Add to Cart
                            </button>
                            <button className="btn btn-outline btn-lg">Buy Now</button>
                        </div>

                        {/* Long Description */}
                        <div className="divider"></div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Product Description</h2>
                            <p className="text-base opacity-80 leading-relaxed whitespace-pre-line">{product.longDescription || product.shortDescription}</p>
                        </div>

                        {/* Additional Info */}
                        <div className="divider"></div>
                        <div className="grid grid-cols-2 gap-4">
                            {product.brand && (
                                <div>
                                    <span className="font-semibold">Brand:</span>
                                    <p className="opacity-80">{product.brand}</p>
                                </div>
                            )}
                            {product.category && (
                                <div>
                                    <span className="font-semibold">Category:</span>
                                    <p className="opacity-80 capitalize">{product.category}</p>
                                </div>
                            )}
                            {product.createdAt && (
                                <div>
                                    <span className="font-semibold">Added:</span>
                                    <p className="opacity-80">{new Date(product.createdAt).toLocaleDateString()}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
