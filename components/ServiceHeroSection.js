"use client";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function ServiceHeroSection({ sections }) {
  return (
    <div className="relative mt-30">
      {sections.map((section, index) => (
        <div
          key={index}
          className=" grid grid-cols-1 lg:grid-cols-5 bg-[#E6F0F9] rounded-xl p-6 md:p-10 lg:gap-20 overflow-hidden"
        >
         <div className="col-span-3">
           <div className="space-y-4 lg:ps-5 z-10">
            <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white shadow-[0_8px_30px_rgba(138,173,187)] px-3 py-1 rounded-full text-sm font-medium">
              {section.tag}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B4870] leading-snug">
              {section.title}
            </h1>
            <p className="text-gray-600 text-sm md:text-base whitespace-pre-line">
              {section.description}
            </p>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center shadow-[0_8px_30px_rgba(138,173,187)] bg-white text-[#0A223D] px-6 py-4 rounded-xl "
                >
                  <Image src={feature.icon} alt={feature.label} width={40} height={50} />
                  <p className="mt-3 font-semibold">{feature.label}</p>
                </div>
              ))}
            </div>

            <Link
              href={section.ctaLink}
              className="inline-flex items-center gap-2 bg-[#115D8E] shadow-[0_8px_30px_rgba(138,173,187)] mt-5 text-white font-medium text-sm px-5 py-2.5 rounded-md transition"
            >
              {section.ctaText}
              <MdArrowOutward className="ml-2 text-bold" />
            </Link>
          </div>
         </div>


          <div className="absolute -top-8 right-15  h-[480px] rounded-xl z-49 hidden lg:block">
            <Image
              src={section.imageSrc}
              alt="Blog Preview"
              width={350}
              height={450}
              className="rounded-xl h-[480px] object-cover z-49"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
