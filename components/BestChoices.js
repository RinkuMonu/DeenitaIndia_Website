// "use client";

// import Image from "next/image";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, A11y } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const items = [
//   { icon: "/images/secure-icon.png",    title: "Secure",     description: "Bank-level security protocols to protect your data and transactions" },
//   { icon: "/images/regulated-icon.png", title: "Regulated",  description: "Fully compliant with all financial regulations and standards" },
//   { icon: "/images/audited-icon.png",   title: "Audited",    description: "Regular third-party audits ensure complete transparency" },
//   { icon: "/images/secure-icon.png",    title: "Reliable",    description: "99.9% uptime with redundant systems for maximum reliability" },
//   { icon: "/images/regulated-icon.png", title: "Innovative", description: "Cutting-edge technology for seamless user experience" },
//   { icon: "/images/audited-icon.png",   title: "Trusted",     description: "Trusted by thousands of customers worldwide" },
// ];

// function Card({ icon, title, description, index }) {
//   return (
//     <div
//       className="relative group overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full"
//       data-aos="fade-up"
//       data-aos-delay={index * 100}
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9E4] to-[#E4EDF3] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
//         <div className="mb-6 p-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
//           <Image
//             src={icon}
//             alt={title}
//             width={48}
//             height={48}
//             className="transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>
//         <h3 className="text-2xl font-bold text-[#115D8E] mb-3">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//         <div className="mt-6 w-30 h-1 bg-gradient-to-r from-[#115D8E] to-[#115D8E] rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
//       </div>
//     </div>
//   );
// }

// export default function BestChoices() {
//   return (
//     <section className="my-24 relative container mx-auto px-14 pt-32 pb-20 overflow-hidden">
//       {/* background blobs */}
//       <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
//       <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

//       <div className="container pb-8 relative z-10">
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 lg:mb-0 leading-tight" data-aos="fade-left">
//             What Makes Us Your <br className="hidden md:block" />
//             <span className="bg-clip-text bg-gradient-to-r text-[#115D8E]">Best Choice</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-lg" data-aos="fade-right">
//             At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
//             deleniti atque corrupti quos dolores et quas
//           </p>
//         </div>

//         {/* Swiper Slider */}
//         <div className="relative">
//           <Swiper
//             modules={[Navigation, Pagination, A11y]}
//             navigation
//             pagination={{ clickable: true }}
//             spaceBetween={24}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 1.2, spaceBetween: 24 },
//               768: { slidesPerView: 2,   spaceBetween: 24 },
//               1024:{ slidesPerView: 3,   spaceBetween: 24 },
//               1440:{ slidesPerView: 3.5, spaceBetween: 28 },
//             }}
//             className="!pb-12"
//           >
//             {items.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <Card {...item} index={index} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* optional: edge fade masks */}
//           <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
//         </div>
//       </div>

//       {/* minor tweak so Swiper arrows sit nicely */}
//       <style jsx global>{`
//         .swiper-button-prev,
//         .swiper-button-next {
//           color: #115D8E;
//           width: 34px;
//           height: 34px;
//         }
//         .swiper-button-prev::after,
//         .swiper-button-next::after {
//           font-size: 18px;
//           font-weight: 700;
//         }
//         .swiper-pagination-bullet {
//           background: #cfd8e3;
//           opacity: 1;
//         }
//         .swiper-pagination-bullet-active {
//           background: #115D8E;
//           width: 18px;
//           border-radius: 9999px;
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import Image from "next/image";


const STEPS = [
    {
        no: "01",
        title: "Secure",
        desc: "Bank-level security protocols protect your data and transactions.",
        icon: "/images/secure-icon.png",
    },
    {
        no: "02",
        title: "Regulated",
        desc: " Fully compliant with all regulatory requirements and standards within the financial industry.",
        icon: "/images/regulated-icon.png",
    },
    {
        no: "03",
        title: "Audited",
        desc: " Independent third parties audit our transparency.",
        icon: "/images/audited-icon.png",
    },
    {
        no: "04",
        title: "Trusted",
        desc: " Thousands of customers around the world choose us and trust us",
        icon: "/images/audited-icon.png",
    },
    {
        no: "05",
        title: "Reliable",
        desc: "99.9% uptime and a highly redundant system.",
        icon: "/images/audited-icon.png",
    },
    {
        no: "06",
        title: "Innovative",
        desc: " High-end technology is focused on a seamless customer experience.",
        icon: "/images/audited-icon.png",
    },
];

export default function WorkFeature() {
    return (
        <>
            <section className="relative">
                {/* Heading */}
                <div className="container mx-auto px-14 pt-32 pb-20">
                    <div>
                        <p className="heading font-semibold mb-8 capitalize">
                            What Makes Us <span className="theme-text"><br />Best Choice</span>
                        </p>
                    </div>
                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {STEPS.map((s, i) => (
                            <article
                                key={s.no}
                                className="relative"
                            >
                                <div className="grid grid-cols-[76px_1fr] gap-6 items-start">
                                    {/* Big faint number */}
                                    <div className="relative">
                                        <span className="select-none text-6xl md:text-7xl font-extrabold text-slate-200/80 leading-none">
                                            {s.no}
                                        </span>
                                    </div>

                                    {/* Content with vertical divider + blue accent */}
                                    <div className="relative pl-6">
                                        {/* thin gray divider */}
                                        <span className="pointer-events-none absolute left-0 top-0 h-full w-px bg-slate-200" />
                                        {/* blue accent segment (centered) */}
                                        <span className="absolute left-0 top-0 h-full w-px bg-slate-200" />

                                        <span
                                            className="pointer-events-none absolute left-0 -translate-x-1/2 w-[1px] h-16 rounded-full bg-blue-600 border-anim"
                                        />

                                        <h3 className="text-2xl font-semibold text-slate-900">
                                            {s.title}
                                        </h3>
                                        <p className="mt-4 text-slate-500 leading-relaxed">
                                            {s.desc}
                                        </p>

                                        {/* icon at bottom-left of content area */}
                                        <div className="mt-8">
                                            <Image
                                                src={s.icon}
                                                alt=""
                                                width={64}
                                                height={64}
                                                className="w-14 h-14 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* subtle column separator on desktop (between cards) */}
                                {i < STEPS.length - 1 && (
                                    <span className="hidden md:block absolute right-[-20px] top-0 h-full w-px bg-transparent" />
                                )}
                            </article>
                        ))}
                    </div>
                </div>


            </section>

            <style jsx global>{`
              @keyframes borderSlide {
                0%   { top: 0; }
                50%  { top: calc(100% - 4rem); } /* 4rem = h-16 (blue segment height) */
                100% { top: 0; }
              }
              .border-anim {
                animation: borderSlide 3s ease-in-out infinite;
                will-change: top;
              }
            `}</style>
        </>
    );

}
