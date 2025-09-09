// components/AboutHero.js
"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
    const stats = [
        { value: "2000+", label: "Distributors" },
        { value: "100,000+", label: "Retailers" },
        { value: "800+", label: "Districts" },
    ];

    return (
        <section className="relative overflow-hidden bg-white text-black" style={{ backgroundImage: "url(/Newimg/herosection/hero_bg_2.webp)", backgroundRepeat: "no-repeat" }}>
            <div className="container mx-auto px-6 md:px-10 lg:px-14 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* LEFT: content */}
                    <div>
                        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                            Creating connections <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#115D8E] to-[#046eb4]">
                                through impactful experiences
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-600">
                            We turn bold ideas into impactful results through design,
                            strategy, and innovation.
                        </p>

                        {/* CTA */}
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#115D8E] to-[#046eb4] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#115D8E]"
                            >
                                Get started
                            </Link>
                        </div>

                        {/* stats */}
                        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-2xl bg-gray-50 border border-gray-200 p-6 shadow-sm"
                                >
                                    <div className="text-md sm:text-4xl md:text-sm font-extrabold text-[#115D8E]">
                                        {s.value}
                                    </div>
                                    <div className="mt-1 text-gray-600">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: image */}
                    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
                        <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#115D8E] to-[#046eb4] opacity-80" />

                        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-[#046eb4] to-[#115D8E] opacity-80" />

                        <div className="absolute top-6 right-6 w-0 h-0 
                              border-l-[40px] border-l-transparent 
                              border-r-[40px] border-r-transparent 
                              border-b-[70px] border-b-[#115D8E]/70 
                              opacity-90" />

                        <div className="absolute top-1/2 -left-6 w-16 h-16 bg-gradient-to-r from-[#115D8E] to-[#046eb4] rotate-12 rounded-md opacity-90" />

                        <Image
                            src="/Newimg/about/hero-bg.jpg"
                            alt="About our company"
                            fill
                            priority
                            className="object-cover rounded-3xl relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
