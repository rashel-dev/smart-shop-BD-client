import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-base-100 text-base-content">
            {/* Hero Section */}
            <div className="hero min-h-[40vh] bg-linear-to-br from-primary to-secondary text-primary-content relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="hero-content text-center relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Get in Touch</h1>
                        <p className="text-xl opacity-90">
                            We&apos;d love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                        </p>
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            </div>

            {/* Main Contact Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-primary">Contact Information</h2>
                            <p className="text-base-content/70 mb-8 text-lg">Fill up the form and our Team will get back to you within 24 hours.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <FaPhoneAlt className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Phone</h3>
                                    <p className="text-base-content/70">+1 (555) 123-4567</p>
                                    <p className="text-base-content/70">+1 (555) 987-6543</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email</h3>
                                    <p className="text-base-content/70">support@smartshop.com</p>
                                    <p className="text-base-content/70">info@smartshop.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Office</h3>
                                    <p className="text-base-content/70">
                                        123 Commerce Blvd, Suite 100
                                        <br />
                                        Tech City, TC 90210
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="pt-8">
                            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="btn btn-circle btn-outline btn-primary hover:btn-active transition-colors">
                                    <FaFacebookF className="text-xl" />
                                </a>
                                <a href="#" className="btn btn-circle btn-outline btn-primary hover:btn-active transition-colors">
                                    <FaTwitter className="text-xl" />
                                </a>
                                <a href="#" className="btn btn-circle btn-outline btn-primary hover:btn-active transition-colors">
                                    <FaLinkedinIn className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card bg-base-100 shadow-2xl border border-base-200">
                        <div className="card-body p-8">
                            <h2 className="card-title text-2xl mb-6">Send us a Message</h2>
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <input type="text" placeholder="John" className="input input-bordered w-full focus:input-primary" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" placeholder="Doe" className="input input-bordered w-full focus:input-primary" />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="john@example.com" className="input input-bordered w-full focus:input-primary" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <select className="select select-bordered w-full focus:select-primary" defaultValue="Select a topic">
                                        <option disabled>Select a topic</option>
                                        <option>General Inquiry</option>
                                        <option>Support</option>
                                        <option>Sales</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>

                                <div className="form-control ">
                                    <label className="label block">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-32 focus:textarea-primary" placeholder="How can we help you?"></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary w-full text-lg">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-base-200">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What are your support hours?", a: "Our support team is available 24/7 to assist you with any inquiries or issues you may have." },
                            { q: "How long does it take to get a response?", a: "We aim to respond to all inquiries within 24 hours. For urgent matters, please use our live chat feature." },
                            { q: "Do you offer international shipping?", a: "Yes, we ship to over 25 countries worldwide. Shipping times and rates vary by location." },
                            { q: "Where can I track my order?", a: "Once your order ships, you will receive a tracking number via email. You can also track it in your account dashboard." },
                        ].map((faq, index) => (
                            <div key={index} className="collapse collapse-plus bg-base-100 shadow-md rounded-xl">
                                <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
                                <div className="collapse-title text-xl font-medium">{faq.q}</div>
                                <div className="collapse-content">
                                    <p className="text-base-content/80">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
