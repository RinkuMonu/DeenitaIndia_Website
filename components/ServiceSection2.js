// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { MdArrowOutward } from "react-icons/md";

// export default function ServiceSection2({ sections }) {
//   return (
//     <div className="space-y-16 my-10">
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           className="flex flex-col md:flex-row items-center gap-16 md:p-12 "

//   data-aos-duration="2000"
//         >
//           <div className="w-full md:w-2/5  relative" data-aos="fade-right"data-aos-duration="2000">
//             <div className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-xl bg-gradient-to-t from-white to-[#115d8e] shadow-lg  overflow-visible">
//               <div className="absolute -top-4 md:-top-8 md:-left-10 w-[120%] h-[110%]">
//                 <Image
//                   src={section.imageSrc}
//                   alt="Feature"
//                   width={400}
//                   height={400}
//                   className="w-full h-full object-cover object-center"
//                 />
//               </div>
//               <div className="absolute animate-float-tag top-20 -right-5 bg-white text-black px-3 py-1 rounded-3xl shadow-lg z-20">
//                 {section.tag1}
//               </div>
//               <div className="absolute animate-float-tag top-36 -right-8 bg-white text-black px-3 py-1 rounded-3xl shadow-lg z-20">
//                 {section.tag2}
//               </div>
//             </div>
//           </div>


//           <div className="w-full md:w-3/5 space-y-4" data-aos="fade-left"data-aos-duration="2000">
//             <p className="text-2xl md:text-4xl max-w-lg font-bold text-gray-800">
//               <span className="text-[#115D8E] text-base font-semibold me-2">{section.tag}</span>
//               {section.title}
//             </p>
//             <p className="text-lg text-gray-800">{section.description}</p>

//             <Link
//               href="/services"
//               className="inline-flex items-center gap-2 bg-[#115D8E] shadow-[0_8px_30px_rgba(138,173,187)]  text-white font-medium text-sm px-5 py-2.5 rounded-md transition"
//             >
//               Get Started
//               <MdArrowOutward className="ml-2 text-bold" />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



"use client";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { useEffect, useState } from "react";

export default function ServiceSection2({ sections }) {
  const [isVisible, setIsVisible] = useState(Array(sections.length).fill(false));

  useEffect(() => {
    // Simulate staggered animation for each section
    const timeouts = sections.map((_, index) => {
      return setTimeout(() => {
        setIsVisible(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 300);
    });

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [sections.length]);

  return (
    <div className="space-y-28 my-16 px-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16 p-6 md:p-10 rounded-2xl transition-all duration-1000 ${isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Image Container */}
          <div className="w-full md:w-2/5 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#115d8e] rounded-2xl shadow-xl overflow-hidden transform rotate-3"></div>
              
              <div className="relative w-full h-full transform -rotate-3">
                <Image
                  src={section.imageSrc}
                  alt="Feature"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              
              {/* Floating Tags */}
              <div className="absolute top-1/4 -right-4 md:-right-6 bg-white text-[#115D8E] px-4 py-2 rounded-full shadow-lg z-20 font-medium text-sm animate-float">
                {section.tag1}
              </div>
              <div className="absolute bottom-1/4 -right-2 md:-right-4 bg-white text-[#115D8E] px-4 py-2 rounded-full shadow-lg z-20 font-medium text-sm animate-float-delayed">
                {section.tag2}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#115D8E] opacity-10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#0B4870] opacity-10 rounded-full"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-3/5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-[#115D8E]"></div>
              <span className="text-[#115D8E] text-base font-semibold tracking-wide uppercase">
                {section.tag}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B4870] leading-tight">
              {section.title}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              {section.description}
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#115D8E] to-[#0B4870] hover:from-[#0B4870] hover:to-[#115D8E] text-white font-semibold text-base px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group/cta mt-4"
            >
              Get Started
              <MdArrowOutward className="ml-1 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </Link>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out 1s infinite;
        }
      `}</style>
    </div>
  );
}