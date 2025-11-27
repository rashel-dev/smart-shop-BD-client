import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Verified Buyer",
            image: "https://i.pravatar.cc/150?img=1",
            content: "The quality of products is amazing! I ordered a laptop and it arrived within 2 days. Customer support was super helpful throughout the process.",
            rating: 5,
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Tech Enthusiast",
            image: "https://i.pravatar.cc/150?img=11",
            content: "Best prices I've found online. The 'Smart Shop' experience is real - everything is so intuitive and easy to find. Highly recommended!",
            rating: 5,
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Fashion Blogger",
            image: "https://i.pravatar.cc/150?img=5",
            content: "I love the fashion collection here. Trendy styles at affordable prices. The return policy gives me peace of mind when shopping.",
            rating: 4.5,
        },
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => <FaStar key={index} className={`${index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} text-lg`} />);
    };

    return (
        <div className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
                    <p className="text-lg opacity-70">Trusted by thousands of happy shoppers worldwide</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="card bg-base-100 shadow-xl border border-base-200 relative">
                            <div className="absolute -top-6 left-8 bg-primary text-white p-4 rounded-full shadow-lg">
                                <FaQuoteLeft className="text-xl" />
                            </div>
                            <div className="card-body pt-12">
                                <div className="flex gap-1 mb-4">{renderStars(testimonial.rating)}</div>
                                <p className="text-base-content/80 mb-6 italic">"{testimonial.content}"</p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="avatar">
                                        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={testimonial.image} alt={testimonial.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                        <span className="text-sm opacity-60">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
