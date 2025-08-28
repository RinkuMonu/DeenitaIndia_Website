"use client";
import { useState } from "react";
import Image from "next/image";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const ServiceAccordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState({});

  const toggleAccordion = (sectionIndex, itemIndex) => {
    setActiveIndex((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <div className="space-y-12 md:space-y-20">
      {sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="bg-gradient-to-br from-[#F6FAFD] to-[#EDF5FB] py-12 px-6 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="w-full flex items-center justify-between mb-6 max-w-6xl mx-auto">
            {/* Subtitle left */}
            <span className="inline-block text-[#115D8E] text-sm font-semibold px-3 py-1 bg-white rounded-full shadow-sm">
              {section.subtitle}
            </span>

            {/* Button right */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#115D8E] border border-gray-200 px-5 py-2 rounded-full font-medium text-sm shadow-sm hover:shadow-md hover:bg-[#115D8E] hover:text-white transition-all duration-300 group"
            >
              Connect with us
              <MdArrowOutward className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Content - Accordion */}
            <div className="w-full lg:w-1/2 ">
              <div className="mb-8">
                {/* Header with subtitle and button */}

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const isActive = activeIndex[sectionIndex] === itemIndex;

                  return (
                    <div
                      key={itemIndex}
                      className={`bg-white rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "shadow-md border border-[#115D8E]/20"
                          : "shadow-sm border border-gray-100 hover:shadow-md"
                      }`}
                      onClick={() => toggleAccordion(sectionIndex, itemIndex)}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className={`font-medium text-base md:text-lg ${
                            isActive ? "text-[#115D8E]" : "text-gray-700"
                          }`}
                        >
                          {item.title}
                        </span>
                        <div
                          className={`p-1 rounded-full transition-colors ${
                            isActive ? "bg-[#115D8E]/10" : "bg-gray-100"
                          }`}
                        >
                          {isActive ? (
                            <HiChevronUp size={20} className="text-[#115D8E]" />
                          ) : (
                            <HiChevronDown
                              size={20}
                              className="text-gray-500"
                            />
                          )}
                        </div>
                      </div>

                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-gray-600 text-base leading-relaxed transition-all duration-300">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="w-full lg:w-1/2 ">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={section.imageSrc}
                  alt="Section visual"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#115D8E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Show button below image on mobile */}
              {/* <div className="mt-6 flex justify-center lg:hidden">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#115D8E] border border-gray-200 px-5 py-3 rounded-full font-medium text-sm shadow-sm hover:shadow-md hover:bg-[#115D8E] hover:text-white transition-all duration-300 group"
                >
                  Connect with us
                  <MdArrowOutward className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div> */}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServiceAccordion;
