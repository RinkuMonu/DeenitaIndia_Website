"use client";

import Link from "next/link";
import { CreditCard, Settings, ShieldCheck, Database, UserCheck, Repeat } from "lucide-react";

export default function AboutServices() {
    const services = [
        { title: "Connected Banking", href: "/services/connected-banking", icon: <Database className="w-6 h-6" /> },
        { title: "Utility Services", href: "/services/utility", icon: <Settings className="w-6 h-6" /> },
        { title: "Legal & Compliance Services", href: "/services/legal-compliance", icon: <ShieldCheck className="w-6 h-6" /> },
        { title: "Escrow Service", href: "/services/escrow", icon: <CreditCard className="w-6 h-6" /> },
        { title: "AIGF License Assistance", href: "/services/aigf", icon: <UserCheck className="w-6 h-6" /> },
        { title: "Switch Service", href: "/services/switch", icon: <Repeat className="w-6 h-6" /> },
    ];

    return (
        <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-white to-[#f0f4f8]">
            <div>
                <p className="heading font-semibold mb-8 capitalize">
                    Our Premium<span className="theme-text">&nbsp;Services</span> <br></br>  Explore our wide range
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <Link
                        key={idx}
                        href={service.href}
                        className="group relative block rounded-2xl p-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2"
                    >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#44A5E9]/30 to-[#0E90C9]/30 mb-4 transition-transform duration-500 group-hover:scale-110">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-[#115d8e] mb-2 group-hover:text-[#0E90C9] transition-colors">
                            {service.title}
                        </h3>
                        <span className="inline-flex items-center text-[#115d8e] group-hover:text-[#0E90C9] font-medium mt-2">
                            Learn More
                            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
