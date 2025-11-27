import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, priority = false }) => {
    return (
        <Link href={`/products/${product._id}`}>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 group cursor-pointer">
                <figure className="relative h-64 w-full overflow-hidden">
                    {product.imageURL ? (
                        <Image
                            src={product.imageURL}
                            alt={product.name || "Product Image"}
                            fill
                            priority={priority}
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                    )}
                </figure>
                <div className="card-body">
                    <h3 className="card-title text-xl font-bold line-clamp-2">{product.title}</h3>
                    <p className="text-base-content/70 line-clamp-2">{product.shortDescription || "No description available."}</p>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-sm rounded-full px-6">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
