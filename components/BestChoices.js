"use client";
import Image from 'next/image'
import React from 'react'

function BestChoices() {
    return (
        <>
            <section className='my-24 relative overflow-hidden'>

                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className='container pb-8 relative z-10'>
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16'>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 lg:mb-0 leading-tight" data-aos="fade-left">
                            What Makes Us Your <br className="hidden md:block"/>
                            <span className="bg-clip-text bg-gradient-to-r text-[#115D8E]">
                                Best Choice
                            </span>
                        </h2>
                        <p className='text-lg text-gray-600 max-w-lg' data-aos="fade-right">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: "/images/secure-icon.png", title: "Secure", description: "Bank-level security protocols to protect your data and transactions" },
                            { icon: "/images/regulated-icon.png", title: "Regulated", description: "Fully compliant with all financial regulations and standards" },
                            { icon: "/images/audited-icon.png", title: "Audited", description: "Regular third-party audits ensure complete transparency" },
                            { icon: "/images/secure-icon.png", title: "Reliable", description: "99.9% uptime with redundant systems for maximum reliability" },
                            { icon: "/images/regulated-icon.png", title: "Innovative", description: "Cutting-edge technology for seamless user experience" },
                            { icon: "/images/audited-icon.png", title: "Trusted", description: "Trusted by thousands of customers worldwide" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9E4] to-[#E4EDF3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                                    <div className="mb-6 p-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={48}
                                            height={48}
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#115D8E] mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                    <div className="mt-6 w-30 h-1 bg-gradient-to-r from-[#115D8E] to-[#115D8E] rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </section>
        </>
    )
}

export default BestChoices