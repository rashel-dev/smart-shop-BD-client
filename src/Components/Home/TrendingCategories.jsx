import React from "react";
import Link from "next/link";
import { FaLaptop, FaTshirt, FaCouch, FaGamepad } from "react-icons/fa";

const TrendingCategories = () => {
    const categories = [
        {
            id: 1,
            name: "Electronics",
            icon: <FaLaptop className="text-5xl mb-4 text-white" />,
            description: "Latest gadgets & devices",
            bgClass: "bg-gradient-to-br from-blue-500 to-blue-700",
            link: "/shop?search=electronics",
        },
        {
            id: 2,
            name: "Fashion",
            icon: <FaTshirt className="text-5xl mb-4 text-white" />,
            description: "Trendy clothing & accessories",
            bgClass: "bg-gradient-to-br from-pink-500 to-rose-700",
            link: "/shop?search=fashion",
        },
        {
            id: 3,
            name: "Home & Living",
            icon: <FaCouch className="text-5xl mb-4 text-white" />,
            description: "Decor for your sweet home",
            bgClass: "bg-gradient-to-br from-green-500 to-emerald-700",
            link: "/shop?search=home",
        },
        {
            id: 4,
            name: "Gaming",
            icon: <FaGamepad className="text-5xl mb-4 text-white" />,
            description: "Consoles & accessories",
            bgClass: "bg-gradient-to-br from-purple-500 to-indigo-700",
            link: "/shop?search=gaming",
        },
    ];

    return (
        <div className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Trending Categories</h2>
                    <p className="text-lg opacity-70">Explore our most popular collections</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link href={category.link} key={category.id} className="group">
                            <div
                                className={`h-64 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:-translate-y-2 shadow-xl ${category.bgClass}`}
                            >
                                <div className="transform transition-transform duration-300 group-hover:scale-110">{category.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                                <p className="text-white/80">{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingCategories;
