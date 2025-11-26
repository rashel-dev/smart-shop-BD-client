import React from "react";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-base-100 text-base-content">
            {/* Hero Section */}
            <div className="hero min-h-[60vh] bg-linear-to-br from-primary to-secondary text-primary-content relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="hero-content text-center relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-md">Reimagining Commerce</h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-sm">We are building the future of online shopping, one click at a time.</p>
                        <button className="btn btn-accent btn-lg shadow-lg hover:scale-105 transition-transform rounded-full px-8">Join Our Journey</button>
                    </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            {/* Our Mission */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
                        <p className="text-lg leading-relaxed text-base-content/80">
                            At Smart Shop, we believe that shopping should be effortless, personalized, and enjoyable. Our mission is to connect customers with the products they love through a
                            seamless digital experience powered by cutting-edge technology.
                        </p>
                        <p className="text-lg leading-relaxed text-base-content/80">
                            We are dedicated to quality, sustainability, and customer satisfaction. Every decision we make is centered around improving the lives of our community.
                        </p>
                    </div>
                    <div className="bg-base-200 p-8 rounded-3xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-100">
                            <div className="stat place-items-center">
                                <div className="stat-title">Happy Users</div>
                                <div className="stat-value text-primary">50K+</div>
                                <div className="stat-desc">Growing daily</div>
                            </div>
                            <div className="stat place-items-center">
                                <div className="stat-title">Products</div>
                                <div className="stat-value text-secondary">100K+</div>
                                <div className="stat-desc">Top quality brands</div>
                            </div>
                            <div className="stat place-items-center">
                                <div className="stat-title">Countries</div>
                                <div className="stat-value text-accent">25+</div>
                                <div className="stat-desc">Global shipping</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-base-200">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16">Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation", desc: "Pushing boundaries to create better solutions.", icon: "🚀" },
                            { title: "Integrity", desc: "Honest and transparent in everything we do.", icon: "💎" },
                            { title: "Community", desc: "Building strong relationships with our users.", icon: "🤝" },
                        ].map((value, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-primary">
                                <div className="card-body items-center text-center">
                                    <div className="text-6xl mb-4">{value.icon}</div>
                                    <h3 className="card-title text-2xl mb-2">{value.title}</h3>
                                    <p className="text-base-content/70">{value.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Meet the Minds</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { name: "Alex Morgan", role: "CEO & Founder", color: "from-pink-500 to-violet-500" },
                        { name: "Sarah Chen", role: "CTO", color: "from-blue-500 to-teal-500" },
                        { name: "Mike Ross", role: "Head of Design", color: "from-orange-500 to-red-500" },
                        { name: "Emma Wilson", role: "Marketing Lead", color: "from-green-500 to-emerald-500" },
                    ].map((member, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-3/4 cursor-pointer">
                            {/* Placeholder for team image - using gradient */}
                            <div className={`absolute inset-0 bg-linear-to-tr ${member.color} opacity-90 group-hover:scale-110 transition-transform duration-500`}></div>

                            {/* Overlay content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-linear-to-t from-black/80 via-black/20 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-sm opacity-90 font-medium">{member.role}</p>
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <button className="btn btn-xs btn-ghost text-white border-white hover:bg-white hover:text-black">View Profile</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-content text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Ready to start shopping?</h2>
                    <p className="text-xl mb-8 opacity-90">Experience the difference today with Smart Shop.</p>
                    <button className="btn btn-secondary btn-lg rounded-full px-10 shadow-2xl hover:scale-105 transition-transform">Get Started Now</button>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
