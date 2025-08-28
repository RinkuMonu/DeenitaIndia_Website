// import Image from "next/image";

// export default function ServiceBanner({ sections }) {
//   return (
//     <div>
//       {sections.map((section, sectionIndex) => (
//         <section
//           key={sectionIndex}
//           className="service-bg relative text-white my-10 py-4"
//         >
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(17,93,142,0.8)_0%,_rgba(12,22,28,0.95)_100%)] z-0"></div>

//           <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-0 z-10">
//             <div className="flex-1 space-y-6 text-center md:text-left">
//               <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
//                 {section.title}
//               </p>
//               <p className="text-white text-sm md:text-base">{section.description}</p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
//                 {section.features.map((feature, idx) => (
//                   <div
//                     key={idx}
//                     className={`flex flex-col items-center text-center bg-white text-[#0A223D] px-6 py-4
//                       ${idx === 0 ? "rounded-tl-4xl" : ""}
//                       ${idx === section.features.length - 1 ? "rounded-br-4xl" : ""}`}
//                   >
//                     <Image
//                       src={feature.icon}
//                       alt={feature.label}
//                       width={40}
//                       height={50}
//                       className="w-10 h-12 object-contain"
//                     />
//                     <p className="mt-3 font-semibold text-sm sm:text-base">
//                       {feature.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex-1 w-full max-w-md md:max-w-none">
//               <div className="rounded-xl overflow-hidden py-6 md:p-10 shadow-md">
//                 <Image
//                   src={section.imageSrc}
//                   alt="Section visual"
//                   width={600}
//                   height={400}
//                   className="rounded-2xl w-full h-auto object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }




"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ServiceBanner({ sections }) {
  const [currentSection, setCurrentSection] = useState(0);

  // Auto-rotate sections for better engagement
  useEffect(() => {
    if (sections.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <div className="relative">
      {sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`service-bg relative text-white my-10 py-8 transition-opacity duration-500 ${
            sectionIndex === currentSection ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
          style={{ 
            background: "radial-gradient(ellipse at center, rgba(17,93,142,0.8) 0%, rgba(12,22,28,0.95) 100%)",
            zIndex: sectionIndex === currentSection ? 1 : 0
          }}
        >
          {/* Background pattern for visual interest */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-white rounded-full"></div>
          </div>

          <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-8 z-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold">Premium Service</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {section.title}
              </h2>
              
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                {section.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {section.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={feature.icon}
                        alt={feature.label}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <p className="mt-4 font-semibold text-lg text-white group-hover:text-white/100 transition-colors duration-300">
                      {feature.label}
                    </p>
                    {feature.description && (
                      <p className="mt-2 text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                        {feature.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full max-w-md md:max-w-none">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#115D8E] to-[#0A223D] rounded-2xl opacity-70 blur-xl -z-10"></div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src={section.imageSrc}
                    alt="Section visual"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section indicators */}
          {sections.length > 1 && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {sections.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSection(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentSection ? "bg-white scale-125" : "bg-white/40"
                  }`}
                  aria-label={`Go to section ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}