import React from "react";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaUndo } from "react-icons/fa";

const Features = () => {
    const features = [
        {
            id: 1,
            icon: <FaShippingFast className="text-4xl text-primary" />,
            title: "Free Shipping",
            description: "On all orders over $50",
        },
        {
            id: 2,
            icon: <FaHeadset className="text-4xl text-primary" />,
            title: "24/7 Support",
            description: "Get help when you need it",
        },
        {
            id: 3,
            icon: <FaShieldAlt className="text-4xl text-primary" />,
            title: "Secure Payment",
            description: "100% secure payment methods",
        },
        {
            id: 4,
            icon: <FaUndo className="text-4xl text-primary" />,
            title: "Easy Returns",
            description: "30-day money back guarantee",
        },
    ];

    return (
        <div className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
                    <p className="text-lg opacity-70">We provide the best experience for our customers</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200">
                            <div className="card-body items-center text-center">
                                <div className="mb-4 p-4 bg-base-200 rounded-full group-hover:bg-primary/10 transition-colors">{feature.icon}</div>
                                <h3 className="card-title text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-base-content/70">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
