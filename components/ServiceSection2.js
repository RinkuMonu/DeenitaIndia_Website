"use client";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function ServiceSection2({ sections }) {
  return (
    <div className="space-y-16 my-10">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-16 md:p-12 "

  data-aos-duration="2000"
        >
          <div className="w-full md:w-2/5  relative" data-aos="fade-right"data-aos-duration="2000">
            <div className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-xl bg-gradient-to-t from-white to-[#115d8e] shadow-lg  overflow-visible">
              <div className="absolute -top-4 md:-top-8 md:-left-10 w-[120%] h-[110%]">
                <Image
                  src={section.imageSrc}
                  alt="Feature"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute animate-float-tag top-20 -right-5 bg-white text-black px-3 py-1 rounded-3xl shadow-lg z-20">
                {section.tag1}
              </div>
              <div className="absolute animate-float-tag top-36 -right-8 bg-white text-black px-3 py-1 rounded-3xl shadow-lg z-20">
                {section.tag2}
              </div>
            </div>
          </div>


          <div className="w-full md:w-3/5 space-y-4" data-aos="fade-left"data-aos-duration="2000">
            <p className="text-2xl md:text-4xl max-w-lg font-bold text-gray-800">
              <span className="text-[#115D8E] text-base font-semibold me-2">{section.tag}</span>
              {section.title}
            </p>
            <p className="text-lg text-gray-800">{section.description}</p>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#115D8E] shadow-[0_8px_30px_rgba(138,173,187)]  text-white font-medium text-sm px-5 py-2.5 rounded-md transition"
            >
              Get Started
              <MdArrowOutward className="ml-2 text-bold" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
