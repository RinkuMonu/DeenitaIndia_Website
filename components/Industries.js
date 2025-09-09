// import Link from "next/link";
// import React from "react";
// import {
//   FaArrowRight,
//   FaGamepad,
//   FaBuilding,
//   FaMoneyBillWave,
// } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";

// const Industries = () => {
//   const industries = [
//     {
//       title: "Gaming",
//       description:
//         "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deieniti atque corrupti quos dolores et quas",
//       icon: <FaGamepad className="text-[#115d8e] text-2xl" />,
//       color: "blue",
//       delay: 0,
//     },
//     {
//       title: "Real Estate",
//       description:
//         "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deieniti atque corrupti quos dolores et quas",
//       icon: <FaBuilding className="text-amber-600 text-2xl" />,
//       color: "amber",
//       delay: 50,
//     },
//     {
//       title: "NBFCs",
//       description:
//         "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deieniti atque corrupti quos dolores et quas",
//       icon: <FaMoneyBillWave className="text-[#115d8e] text-2xl" />,
//       color: "#115d8e",
//       delay: 100,
//     },
//   ];

//   const getColorClasses = (color) => {
//     switch (color) {
//       case "blue":
//         return {
//           bg: "bg-blue-50",
//           border: "border-blue-200",
//           text: "text-[#115d8e]",
//           hover: "hover:bg-blue-100",
//           cardHover: "hover:shadow-blue-100",
//           gradient: "from-blue-50 to-blue-100",
//           accentBorder: "border-l-[#115d8e]",
//         };
//       case "amber":
//         return {
//           bg: "bg-amber-50/20",
//           border: "border-amber-200",
//           text: "text-amber-600",
//           hover: "hover:bg-amber-100/20",
//           cardHover: "hover:shadow-amber-100",
//           gradient: "from-amber-50/20 to-amber-100/20",
//           accentBorder: "border-l-amber-600",
//         };
//       case "#115d8e":
//         return {
//           bg: "bg-[#e6f0f8]",
//           border: "border-[#115d8e]",
//           text: "text-[#115d8e]",
//           hover: "hover:bg-[#e6f0f8]",
//           cardHover: "hover:shadow-blue-100",
//           gradient: "from-[#e6f0f8] to-blue-50",
//           accentBorder: "border-l-[#115d8e]",
//         };
//       default:
//         return {
//           bg: "bg-gray-50",
//           border: "border-gray-200",
//           text: "text-gray-600",
//           hover: "hover:bg-gray-100",
//           cardHover: "hover:shadow-gray-100",
//           gradient: "from-gray-50 to-gray-100",
//           accentBorder: "border-l-gray-600",
//         };
//     }
//   };

//   return (
//     <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header section with improved responsive layout */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 md:mb-16">
//           <div className="text-start max-w-2xl">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b6792] to-[#1e557c]">
//                 Industries
//               </span>{" "}
//               <span className="text-[#335368]">We Proudly Serve</span>
//             </h2>
//             <p className="text-base sm:text-lg text-gray-600">
//               We deliver tailored solutions for diverse sectors with
//               cutting-edge technology
//             </p>
//           </div>
//           <div className="w-full lg:w-auto flex justify-start lg:justify-end">
//             <Link
//               href="/contact"
//               className="group bg-[#155d8e] text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:bg-[#043d61] hover:scale-105 inline-flex items-center justify-center"
//             >
//               Contact us
//               <span className="ml-2 inline-block transform opacity-0 -translate-x-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
//                 <MdArrowOutward size={18} />
//               </span>
//             </Link>
//           </div>
//         </div>

//         {/* Enhanced Industries grid with improved card design */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {industries.map((industry, index) => {
//             const colorClasses = getColorClasses(industry.color);

//             return (
//               <div
//                 key={index}
//                 className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${colorClasses.bg} ${colorClasses.hover} ${colorClasses.cardHover} h-full flex flex-col group`}
//                 data-aos="fade-up"
//                 data-aos-delay={industry.delay}
//               >
//                 {/* Accent bar on the left */}
//                 <div className={`absolute left-0 top-0 h-full w-1.5 ${colorClasses.accentBorder}`}></div>

//                 {/* Gradient overlay on hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-b ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>

//                 <div className="relative p-6 sm:p-7 md:p-8 flex-1 flex flex-col z-10">
//                   <div
//                     className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-4 sm:mb-6 ${colorClasses.border} border-2 group-hover:scale-110 transition-transform duration-300`}
//                   >
//                     {industry.icon}
//                   </div>

//                   <h3
//                     className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${colorClasses.text}`}
//                   >
//                     {industry.title}
//                   </h3>

//                   <p className="text-gray-500 mb-6 leading-relaxed font-medium text-sm sm:text-base flex-1">
//                     {industry.description}
//                   </p>

//                   <Link
//                     href="/contact"
//                     className={`group/link flex items-center font-semibold ${colorClasses.text} transition-all mt-auto text-sm sm:text-base`}
//                   >
//                     <span className="relative">
//                       View Details
//                       <span className={`absolute left-0 -bottom-1 w-0 h-0.5 ${colorClasses.bg} group-hover/link:w-full transition-all duration-300`}></span>
//                     </span>
//                     <FaArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
//                   </Link>
//                 </div>

//                 {/* Subtle corner accent */}
//                 <div className={`absolute right-0 top-0 w-16 h-16 opacity-10 ${colorClasses.text} overflow-hidden`}>
//                   <div className="absolute right-0 top-0 w-32 h-32 transform rotate-45 translate-x-8 -translate-y-8 bg-current"></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;
"use client";

import Image from "next/image";
import { Sparkles, Puzzle, Zap, MessagesSquare } from "lucide-react";


function Feature({
  icon,
  title,
  desc,
  align = "left"
}) {
  return (
    <div
      className={`flex items-start bg-white shadow-2xl p-4 rounded-2xl gap-4 max-w-xs ${align === "right" ? "ml-auto text-left" : "text-left"
        }`}
    >
      <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-100 to-blue-100 border border-blue-200/60 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 text-[16px]">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed text-[14px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function WhyChoose() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50"
      style={{
        backgroundImage: 'url("/Newimg/bgimg/why_bg_1.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* top soft divider arc */}
      <div className="absolute -top-24 left-0 right-0 h-48 bg-gradient-to-b from-white to-transparent opacity-70 pointer-events-none" />

      <div className="container mx-auto px-14 md:px-6 py-10">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 mb-4 capitalize">
            <span className="text-[#115d8e]">Industries </span> We Proudly Serve
          </h2>
          <p className="text-lg font-semibold text-[#ccc] uppercase">
          We deliver tailored solutions for diverse sectors with cutting-edge technology
          </p>
        </div>

        {/* Layout: features left / phone center / features right */}
        <div className="relative mx-auto max-w-7xl grid grid-cols-1 px-14 md:grid-cols-3 gap-4 items-center">
          {/* Left features */}
          <div className="order-2 md:order-1 space-y-10">
            <Feature
              icon={<Puzzle className="w-5 h-5 text-blue-600" />}
              title="Gaming"
              desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deieniti atque corrupti quos dolores et quas"
              align="left"
            />
          </div>

          {/* Center phone mockup */}
          <div className="order-1 md:order-2">
            <div className="relative mx-auto w-[260px] sm:w-[300px] md:w-[320px]">
             

              {/* phone frame */}
              <div className="relative rounded-[36px] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                {/* top bar */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2 h-5 w-28 rounded-full bg-slate-200" />
                {/* screen */}
                <div className="rounded-[32px] overflow-hidden">
                  {/* Replace with your screen image */}
                  <Image
                    src="/Newimg/bgimg/phone-bg.jpg"
                    alt="WebTeck Wallet"
                    width={640}
                    height={1280}
                    className="w-full h-[540px] object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right features */}
          <div className="order-3 space-y-10">
            <Feature
              icon={<Sparkles className="w-5 h-5 text-blue-600" />}
              title="Real Estate"
              desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditilis praesentium voluptatum deleniti atque corrupti quos dolores et quas"
              align="right"
            />
            <Feature
              icon={<MessagesSquare className="w-5 h-5 text-blue-600" />}
              title="NBFCs"
              desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"
              align="right"
            />
          </div>
        </div>
      </div>

      {/* bottom waves */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-full text-slate-200">
          <path
            d="M0,80 C200,140 400,20 720,80 C1040,140 1240,40 1440,80 L1440,120 L0,120 Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M0,90 C240,150 480,30 720,90 C960,150 1200,30 1440,90 L1440,120 L0,120 Z"
            fill="currentColor"
            opacity="0.35"
          />
        </svg>
      </div>
    </section>
  );
}
