"use client"
import { useState } from "react"
import Image from "next/image"
import { HiChevronUp, HiChevronDown } from "react-icons/hi"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"

const ServiceAccordian = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState({})

    const toggleAccordion = (sectionIndex, itemIndex) => {
        setActiveIndex((prev) => ({
            ...prev,
            [sectionIndex]: prev[sectionIndex] === itemIndex ? null : itemIndex
        }))
    }

    return (
        <div className="space-y-16">
            {sections.map((section, sectionIndex) => (
                <section
                    key={sectionIndex}
                    className="bg-[#F6FAFD] py-12 px-0 rounded-xl">
                    <div className="container flex flex-col lg:flex-row items-center gap-24">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-700">   <span className="text-[#115D8E] text-base font-semibold">{section.subtitle}</span> {section.title}</h2>
                            <div className="mt-6">
                                {section.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="border-b border-gray-300 py-3 cursor-pointer transition-all"
                                        onClick={() => toggleAccordion(sectionIndex, itemIndex)}
                                    >
                                        <div className="flex justify-between items-center font-medium text-lg">
                                            <span className={`${activeIndex[sectionIndex] === itemIndex ? 'text-gray-800 text-base' : 'text-gray-500 text-base'}`}>
                                                {item.title}
                                            </span>
                                            {activeIndex[sectionIndex] === itemIndex
                                                ? <HiChevronUp size={22} className="text-gray-500" />
                                                : <HiChevronDown size={22} className="text-gray-500" />}
                                        </div>
                                        {activeIndex[sectionIndex] === itemIndex && (
                                            <p className="text-base text-gray-600 mt-2 transition-all duration-300">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col ">
                            <div className="rounded-2xl overflow-hidden flex justify-end">
                                <Image
                                    src={section.imageSrc}
                                    alt="Section visual"
                                    width={512}
                                    height={512}
                                    className="rounded-2xl"
                                />
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 hover:bg-[#115D8E] bg-white text-[#115D8E] border-2 border-gray-200 mt-5 hover:text-white font-medium text-sm px-2 py-1 rounded-4xl transition"
                            >
                                Connect
                                <MdArrowOutward className="ml-1 text-bold" />
                            </Link>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default ServiceAccordian
