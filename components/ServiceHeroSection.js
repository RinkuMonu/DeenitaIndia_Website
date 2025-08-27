// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { MdArrowOutward } from "react-icons/md";

// export default function ServiceHeroSection({ sections }) {
//   return (
//     <div className="relative mt-30">
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           className=" grid grid-cols-1 lg:grid-cols-5 bg-[#E6F0F9] rounded-xl p-6 md:p-10 lg:gap-20 overflow-hidden"
//         >
//          <div className="col-span-3">
//            <div className="space-y-4 lg:ps-5 z-10">
//             <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white shadow-[0_8px_30px_rgba(138,173,187)] px-3 py-1 rounded-full text-sm font-medium">
//               {section.tag}
//             </span>
//             <h1 className="text-3xl md:text-4xl font-bold text-[#0B4870] leading-snug">
//               {section.title}
//             </h1>
//             <p className="text-gray-600 text-sm md:text-base whitespace-pre-line">
//               {section.description}
//             </p>
//             <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {section.features.map((feature, idx) => (
//                 <div
//                   key={idx}
//                   className="flex flex-col items-center text-center shadow-[0_8px_30px_rgba(138,173,187)] bg-white text-[#0A223D] px-6 py-4 rounded-xl "
//                 >
//                   <Image src={feature.icon} alt={feature.label} width={40} height={50} />
//                   <p className="mt-3 font-semibold">{feature.label}</p>
//                 </div>
//               ))}
//             </div>

//             <Link
//               href={section.ctaLink}
//               className="inline-flex items-center gap-2 bg-[#115D8E] shadow-[0_8px_30px_rgba(138,173,187)] mt-5 text-white font-medium text-sm px-5 py-2.5 rounded-md transition"
//             >
//               {section.ctaText}
//               <MdArrowOutward className="ml-2 text-bold" />
//             </Link>
//           </div>
//          </div>


//           <div className="absolute -top-8 right-15  h-[480px] rounded-xl z-49 hidden lg:block">
//             <Image
//               src={section.imageSrc}
//               alt="Blog Preview"
//               width={350}
//               height={450}
//               className="rounded-xl h-[480px] object-cover z-49"
//             />
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

export default function ServiceHeroSection({ sections }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative mt-28 px-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-3xl px-8 md:px-12 overflow-hidden shadow-2xl border border-white/20"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#115D8E] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B4870] opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          {/* Content Section */}
          <div className="flex flex-col justify-center py-8 lg:py-12 lg:pr-8 z-10">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white shadow-lg px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase">
                {section.tag}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B4870] leading-tight">
                {section.title}
              </h1>
              
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl">
                {section.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
                {section.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center bg-white/80 backdrop-blur-sm text-[#0A223D] p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border border-white/30"
                  >
                    <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] p-4 rounded-2xl mb-4 group-hover:from-[#115D8E] group-hover:to-[#0B4870] transition-all duration-500 shadow-inner">
                      <Image 
                        src={feature.icon} 
                        alt={feature.label} 
                        width={48} 
                        height={48} 
                        className="group-hover:brightness-0 group-hover:invert transition-all duration-500"
                      />
                    </div>
                    <p className="font-semibold text-base md:text-lg group-hover:text-[#115D8E] transition-colors duration-500">{feature.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href={section.ctaLink}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#115D8E] to-[#0B4870] hover:from-[#0B4870] hover:to-[#115D8E] text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl mt-10 group/cta"
              >
                {section.ctaText}
                <MdArrowOutward className="ml-1 text-xl transition-transform duration-500 group-hover/cta:translate-x-2" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center relative lg:pl-8 mt-10 lg:mt-0">
            <div className="relative w-full max-w-lg h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={section.imageSrc}
                alt="Service Preview"
                fill
                className="object-cover rounded-3xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-[#115D8E] opacity-10 rounded-2xl rotate-12 z-0"></div>
              <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-[#0B4870] opacity-10 rounded-2xl -rotate-12 z-0"></div>
              
              {/* Overlay gradient for better text contrast */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0B4870]/40 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}