import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function Industries() {
    const sections = [
        {
            title: 'Gaming',
            content: `At vero eos et accusamus et iusto odio dignissimos
ducimus qui blanditilis praesentium voluptatum
deleniti atque corrupti quos dolores et quas`,
        },
        {
            title: 'Real Estate',
            content: `At vero eos et accusamus et iusto odio dignissimos
ducimus qui blanditilis praesentium voluptatum
deleniti atque corrupti quos dolores et quas`,
        },
        {
            title: 'NBFCs',
            content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas`,
        }
    ];

    return (
        <>
            <section className='container'>
                <p className="heading font-semibold max-w-md">
                    <span className="theme-text">Industries </span>
                    We Proudly Serve
                </p>
                <div className="space-y-8 pt-10">
                    {sections.map((section, index) => (
                        <div key={index} className="group md:grid md:grid-cols-4 border-b-3 pb-4 border-[#2E709B]">
                            <div className='col-span-1 md:flex items-center justify-center md:text-center md:border-r-2  border-[#2E709B]'>
                                <p className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">{section.title}</p>
                            </div>
                           <div className='col-span-2 mb-3 md:mb-0 flex items-center justify-center md:border-r-2 border-[#2E709B]'>
                                <p className="text-gray-600 md:px-6 lg:px-14">
                                    {section.content}
                                </p>
                            </div>
                              <div className='col-span-1 mx-auto mt-1 md:mt-0 '>
                                <Link href="/contact" className="group inline-flex md:flex-col items-center justify-center px-2 py-1 md:py-6 text-[#2E709B] bg-white text-xs border-2 border-[#2E709B] font-medium rounded-2xl md:rounded-full transition-all duration-300 ease-in-out hover:bg-[#2E709B] hover:text-white">
                                <MdArrowOutward  className="text-xl mx-auto" />
                                View Details
                            </Link></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Industries
