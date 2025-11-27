import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content pt-10 pb-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="footer grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    {/* Brand Section */}
                    <aside className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Image src="/logo.png" alt="SmartShopBD Logo" width={50} height={50} className="rounded-full" />
                            <span className="text-2xl font-bold">SmartShopBD</span>
                        </div>
                        <p className="text-sm opacity-80">Your one-stop destination for premium tech and lifestyle products. Quality meets affordability.</p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="btn btn-sm btn-circle btn-ghost hover:text-primary transition-colors">
                                <FaFacebook className="text-lg" />
                            </a>
                            <a href="#" className="btn btn-sm btn-circle btn-ghost hover:text-primary transition-colors">
                                <FaTwitter className="text-lg" />
                            </a>
                            <a href="#" className="btn btn-sm btn-circle btn-ghost hover:text-primary transition-colors">
                                <FaInstagram className="text-lg" />
                            </a>
                            <a href="#" className="btn btn-sm btn-circle btn-ghost hover:text-primary transition-colors">
                                <FaLinkedinIn className="text-lg" />
                            </a>
                        </div>
                    </aside>

                    {/* Shop Section */}
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-primary opacity-100 mb-2">Shop Categories</h6>
                        <Link href="/shop?search=electronics" className="link link-hover hover:text-primary transition-colors">
                            Electronics
                        </Link>
                        <Link href="/shop?search=fashion" className="link link-hover hover:text-primary transition-colors">
                            Fashion & Apparel
                        </Link>
                        <Link href="/shop?search=home" className="link link-hover hover:text-primary transition-colors">
                            Home & Living
                        </Link>
                        <Link href="/shop?search=accessories" className="link link-hover hover:text-primary transition-colors">
                            Gadgets & Accessories
                        </Link>
                        <Link href="/shop" className="link link-hover hover:text-primary transition-colors font-semibold text-secondary">
                            Hot Deals
                        </Link>
                    </nav>

                    {/* Support Section */}
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-primary opacity-100 mb-2">Customer Support</h6>
                        <Link href="/contact" className="link link-hover hover:text-primary transition-colors">
                            Contact Us
                        </Link>
                        <Link href="#" className="link link-hover hover:text-primary transition-colors">
                            FAQs
                        </Link>
                        <Link href="#" className="link link-hover hover:text-primary transition-colors">
                            Shipping & Delivery
                        </Link>
                        <Link href="#" className="link link-hover hover:text-primary transition-colors">
                            Returns & Exchanges
                        </Link>
                        <Link href="#" className="link link-hover hover:text-primary transition-colors">
                            Track Your Order
                        </Link>
                    </nav>

                    {/* Newsletter Section */}
                    <form className="flex flex-col gap-2 w-full">
                        <h6 className="footer-title text-primary opacity-100 mb-2">Newsletter</h6>
                        <p className="text-sm mb-2 opacity-80">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <div className="join w-full">
                            <input type="email" placeholder="Enter your email" className="input input-bordered join-item w-full focus:outline-none focus:border-primary" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </form>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-base-300 pt-6 text-center">
                    <p className="text-sm opacity-70">
                        Copyright © {new Date().getFullYear()} - All rights reserved by <span className="font-bold">SmartShopBD Ltd</span>
                    </p>
                    <div className="flex justify-center gap-4 mt-2 text-xs opacity-60">
                        <Link href="/privacy" className="hover:underline">
                            Privacy Policy
                        </Link>
                        <span>|</span>
                        <Link href="/terms" className="hover:underline">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
