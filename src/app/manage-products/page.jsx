"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEye, FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/providers/AuthProvider";

const ManageProductsPage = () => {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Protect route - redirect to login if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push("/login");
        }
    }, [user, authLoading, router]);

    // Fetch user's products
    useEffect(() => {
        if (user?.email) {
            fetchProducts();
        } else if (!authLoading) {
            setLoading(false);
        }
    }, [user, authLoading]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/products/user/${user.email}`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Failed to load products");
        } finally {
            setLoading(false);
        }
    };

    // Handle delete product
    const handleDelete = async (productId, productTitle) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: `Do you want to delete "${productTitle}"? This action cannot be undone!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:5000/products/${productId}`);

                // Remove from state
                setProducts(products.filter((product) => product._id !== productId));

                // Show success message
                Swal.fire({
                    title: "Deleted!",
                    text: "Product has been deleted successfully.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
            } catch (error) {
                console.error("Error deleting product:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to delete product. Please try again.",
                    icon: "error",
                });
            }
        }
    };

    // Handle view details
    const handleViewDetails = (productId) => {
        router.push(`/products/${productId}`);
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

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
            <ToastContainer />

            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-base-content mb-4">Manage Products</h1>
                    <p className="text-lg text-base-content/70">View, edit, and manage all your products</p>
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-base-content/70 mb-6">No products found</p>
                        <button onClick={() => router.push("/add-product")} className="btn btn-primary">
                            Add Your First Product
                        </button>
                    </div>
                ) : (
                    <div className="card bg-base-100 shadow-2xl border border-base-200">
                        <div className="card-body p-0">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    {/* Table Head */}
                                    <thead>
                                        <tr className="bg-base-200">
                                            <th>#</th>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Stock</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, index) => (
                                            <tr key={product._id} className="hover">
                                                <td>{index + 1}</td>
                                                <td>
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={product.imageURL} alt={product.title} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="font-bold">{product.title}</div>
                                                    <div className="text-sm opacity-50 line-clamp-1">{product.brand}</div>
                                                </td>
                                                <td>
                                                    <span className="badge badge-primary badge-sm capitalize">{product.category}</span>
                                                </td>
                                                <td className="font-semibold">${product.price}</td>
                                                <td>
                                                    <span className={`badge ${product.currentStock > 0 ? "badge-success" : "badge-error"}`}>
                                                        {product.currentStock > 0 ? `${product.currentStock} in stock` : "Out of stock"}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <button onClick={() => handleViewDetails(product._id)} className="btn btn-sm btn-info btn-outline" title="View Details">
                                                            <FaEye />
                                                        </button>
                                                        <button onClick={() => handleDelete(product._id, product.title)} className="btn btn-sm btn-error btn-outline" title="Delete Product">
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats */}
                {products.length > 0 && (
                    <div className="stats shadow mt-8 w-full">
                        <div className="stat">
                            <div className="stat-title">Total Products</div>
                            <div className="stat-value text-primary">{products.length}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">In Stock</div>
                            <div className="stat-value text-success">{products.filter((p) => p.currentStock > 0).length}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Out of Stock</div>
                            <div className="stat-value text-error">{products.filter((p) => p.currentStock === 0).length}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageProductsPage;
