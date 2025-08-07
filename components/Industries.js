import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

function Industries() {
    const sections = [
        {
            title: 'Gaming',
            content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditilis praesentium voluptatum deleniti atque corrupti quos dolores et quas`,
            icon: '🎮',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            textColor: 'text-blue-600'
        },
        {
            title: 'Real Estate',
            content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditilis praesentium voluptatum deleniti atque corrupti quos dolores et quas`,
            icon: '🏢',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200',
            textColor: 'text-amber-600'
        },
        {
            title: 'NBFCs',
            content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas`,
            icon: '💰',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
            textColor: 'text-green-600'
        }
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className=" mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className=" bg-clip-text bg-gradient-to-r text-[#115D8E]">
                            Industries
                        </span>{' '}
                        We Proudly Serve
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We deliver tailored solutions for diverse sectors with cutting-edge technology
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${section.borderColor} ${section.bgColor} group`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="p-8 flex flex-col md:flex-row items-start" data-aos="flip-right" data-aos-duration="2000">
                                <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                                    <div className={`w-16 h-16 rounded-lg ${section.textColor} flex items-center justify-center text-3xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                        {section.icon}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className={`text-2xl font-bold mb-3 ${section.textColor}`}>{section.title}</h3>
                                    <p className="text-gray-600 mb-6">{section.content}</p>

                                    <Link
                                        href="/contact"
                                        className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white ${section.textColor} border-2 ${section.borderColor} hover:bg-gradient-to-r hover:bg-gray-50 hover:text-[#115D8E] hover:border-transparent hover:shadow-md`}
                                    >
                                        View Details
                                        <MdOutlineArrowOutward className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Industries;