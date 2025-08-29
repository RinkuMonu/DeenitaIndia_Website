// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { MdArrowOutward, MdOutlineSwapHoriz, MdOutlineDescription, MdAccountBalance, MdGavel, MdAccountBalanceWallet, MdBuild } from "react-icons/md";
// import { useEffect, useState } from "react";
// import Cta from "@/components/Cta";

// export default function ServicesPage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <>
//       {/* Hero Banner */}
//       <div className="relative mt-28 px-10">
//         <div className="relative grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl px-6 md:px-8 overflow-hidden shadow-xl border border-white/20">
//           {/* Background decorative elements */}
//           <div className="absolute top-0 right-0 w-60 h-60 bg-[#115D8E] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
//           <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#0B4870] opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

//           {/* Content Section */}
//           <div className="flex flex-col justify-center py-6 lg:py-8 lg:pr-6 z-10">
//             <div className="space-y-4">
//               <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white shadow px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
//                 Our Services
//               </span>

//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B4870] leading-snug">
//                 Comprehensive Business Solutions
//               </h1>

//               <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
//                 We provide a full suite of services designed to streamline your operations, ensure compliance, and drive growth. Our expert team delivers tailored solutions for your unique business needs.
//               </p>

//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-gradient-to-r from-[#115D8E] to-[#0B4870] hover:from-[#0B4870] hover:to-[#115D8E] text-white font-semibold text-base md:text-lg px-6 py-3 rounded-lg transition-all duration-500 shadow hover:shadow-lg mt-6 group/cta w-fit"
//               >
//                 Get Started Today
//                 <MdArrowOutward className="ml-1 text-lg transition-transform duration-500 group-hover/cta:translate-x-2" />
//               </Link>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="flex items-center justify-center relative lg:pl-6 mt-6 lg:mt-0">
//             <div className="relative w-full max-w-md h-[380px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">

//               <Image
//                 src="http://localhost:3000/images/escrowservice1.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Floating elements */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#115D8E] opacity-10 rounded-xl rotate-12 z-0"></div>
//             <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#0B4870] opacity-10 rounded-xl -rotate-12 z-0"></div>
//           </div>
//         </div>
//       </div>

//       {/* Services Grid Section */}
//       <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#0B4870] mb-4">Our Services</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Discover our comprehensive range of services designed to address all your business needs with efficiency and expertise.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Switch Service */}
//             <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl p-6 shadow-lg border border-white/20 overflow-hidden group hover:shadow-xl transition-all duration-300">
//               <div className="bg-white p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#115D8E] transition-colors duration-300">
//                 <MdOutlineSwapHoriz className="text-2xl text-[#115D8E] group-hover:text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-[#0B4870] mb-2">Switch Service</h3>
//               <p className="text-gray-700 mb-4">Seamless service switching with minimal downtime and maximum efficiency for your business operations.</p>
//               <ul className="mb-6 space-y-2">
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Quick Transition
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Zero Downtime
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Custom Solutions
//                 </li>
//               </ul>
//               <Link href="/services/switch-service" className="inline-flex items-center text-[#115D8E] font-medium group-hover:text-[#0B4870]">
//                 Learn more <MdArrowOutward className="ml-1" />
//               </Link>
//             </div>

//             {/* AIGF License Assistance */}
//             <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl p-6 shadow-lg border border-white/20 overflow-hidden group hover:shadow-xl transition-all duration-300">
//               <div className="bg-white p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#115D8E] transition-colors duration-300">
//                 <MdOutlineDescription className="text-2xl text-[#115D8E] group-hover:text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-[#0B4870] mb-2">AIGF License Assistance</h3>
//               <p className="text-gray-700 mb-4">Complete guidance and support for obtaining your AIGF license with expert consultation.</p>
//               <ul className="mb-6 space-y-2">
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Expert Guidance
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Fast Processing
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Compliance Assurance
//                 </li>
//               </ul>
//               <Link href="/services/aigf-license" className="inline-flex items-center text-[#115D8E] font-medium group-hover:text-[#0B4870]">
//                 Learn more <MdArrowOutward className="ml-1" />
//               </Link>
//             </div>

//             {/* Escrow Service */}
//             <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl p-6 shadow-lg border border-white/20 overflow-hidden group hover:shadow-xl transition-all duration-300">
//               <div className="bg-white p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#115D8E] transition-colors duration-300">
//                 <MdAccountBalance className="text-2xl text-[#115D8E] group-hover:text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-[#0B4870] mb-2">Escrow Service</h3>
//               <p className="text-gray-700 mb-4">Secure transaction handling with trusted third-party escrow services for your peace of mind.</p>
//               <ul className="mb-6 space-y-2">
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Secure Transactions
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Trusted Mediation
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Timely Releases
//                 </li>
//               </ul>
//               <Link href="/services/escrow-service" className="inline-flex items-center text-[#115D8E] font-medium group-hover:text-[#0B4870]">
//                 Learn more <MdArrowOutward className="ml-1" />
//               </Link>
//             </div>

//             {/* Legal & Compliance Services */}
//             <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl p-6 shadow-lg border border-white/20 overflow-hidden group hover:shadow-xl transition-all duration-300">
//               <div className="bg-white p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#115D8E] transition-colors duration-300">
//                 <MdGavel className="text-2xl text-[#115D8E] group-hover:text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-[#0B4870] mb-2">Legal & Compliance Services</h3>
//               <p className="text-gray-700 mb-4">Comprehensive legal and compliance solutions tailored to your industry requirements.</p>
//               <ul className="mb-6 space-y-2">
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Regulatory Compliance
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Legal Framework
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Risk Management
//                 </li>
//               </ul>
//               <Link href="/services/legal-compliance" className="inline-flex items-center text-[#115D8E] font-medium group-hover:text-[#0B4870]">
//                 Learn more <MdArrowOutward className="ml-1" />
//               </Link>
//             </div>

//             {/* Connected Banking */}
//             <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl p-6 shadow-lg border border-white/20 overflow-hidden group hover:shadow-xl transition-all duration-300">
//               <div className="bg-white p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#115D8E] transition-colors duration-300">
//                 <MdAccountBalanceWallet className="text-2xl text-[#115D8E] group-hover:text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-[#0B4870] mb-2">Connected Banking</h3>
//               <p className="text-gray-700 mb-4">Integrated banking solutions that connect your financial operations seamlessly.</p>
//               <ul className="mb-6 space-y-2">
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Seamless Integration
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Real-time Processing
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Enhanced Security
//                 </li>
//               </ul>
//               <Link href="/services/connected-banking" className="inline-flex items-center text-[#115D8E] font-medium group-hover:text-[#0B4870]">
//                 Learn more <MdArrowOutward className="ml-1" />
//               </Link>
//             </div>

//             {/* Utility Services */}
//             <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl p-6 shadow-lg border border-white/20 overflow-hidden group hover:shadow-xl transition-all duration-300">
//               <div className="bg-white p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#115D8E] transition-colors duration-300">
//                 <MdBuild className="text-2xl text-[#115D8E] group-hover:text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-[#0B4870] mb-2">Utility Services</h3>
//               <p className="text-gray-700 mb-4">Efficient utility management services to optimize your resource allocation and costs.</p>
//               <ul className="mb-6 space-y-2">
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Cost Optimization
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Resource Management
//                 </li>
//                 <li className="flex items-center text-sm text-[#115D8E]">
//                   <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-2"></span>
//                   Efficiency Tracking
//                 </li>
//               </ul>
//               <Link href="/services/utility-services" className="inline-flex items-center text-[#115D8E] font-medium group-hover:text-[#0B4870]">
//                 Learn more <MdArrowOutward className="ml-1" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E6F0F9] to-[#D5E5F5]">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#0B4870] mb-4">Why Choose Our Services?</h2>
//             <p className="text-gray-700 max-w-3xl mx-auto">
//               We are committed to delivering exceptional value through our comprehensive service offerings.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
//               <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#115D8E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-[#0B4870] mb-2">Security & Trust</h3>
//               <p className="text-gray-700">Your business operations are protected with our robust security measures and trusted solutions.</p>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
//               <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#115D8E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-[#0B4870] mb-2">Efficiency & Speed</h3>
//               <p className="text-gray-700">Streamline your operations with our efficient processes designed to save you time and resources.</p>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
//               <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#115D8E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-[#0B4870] mb-2">Expert Support</h3>
//               <p className="text-gray-700">Our team of experts is always ready to provide guidance and support for your business needs.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10">
//         <Cta />
//       </div>
//     </>
//   );
// }



"use client";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward, MdOutlineSwapHoriz, MdOutlineDescription, MdAccountBalance, MdGavel, MdAccountBalanceWallet, MdBuild } from "react-icons/md";
import { useEffect, useState } from "react";
import Cta from "@/components/Cta";
import ServiceBanner from "@/components/ServiceBanner";
import ServiceAdvantage from "@/components/ServiceAdvantage";
import OrganizationalStructuring from "@/components/Organizational";


const sections = [
  {
    title: "What Makes Us Different?",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    buttonText: "Connect Now",
    imageSrc: "/images/switchservice.jpg",
    features: [
      { icon: "/images/dashbord.png", label: "Secure" },
      { icon: "/images/dashbord.png", label: "Affordable" },
      { icon: "/images/dashbord.png", label: "Community" },
    ],
  },
];

const sections1 = [
  {
    title: "Safe, Private, Controlled",
    description:
      "We provide a secure and private environment where you stay in control of your data and interactions. Our platform is designed with transparency and trust at its core.",
    imageSrc: "/images/switchsecure.jpg",
    features: [
      {
        icon: "/images/legal_paper.png",
        label: "Data Protection",
        description:
          "Your personal and professional information is encrypted and safeguarded with the latest security standards.",
      },
      {
        icon: "/images/venture.png",
        label: "Reliable Platform",
        description:
          "Our infrastructure is built to ensure stability, uptime, and consistent performance for all users.",
      },
      {
        icon: "/images/teamwork.png",
        label: "Collaboration",
        description:
          "Work together seamlessly with teams and partners while keeping sensitive data private and secure.",
      },
      {
        icon: "/images/value_chian.png",
        label: "Transparency",
        description:
          "We believe in open communication and provide full visibility into how your data is managed and protected.",
      },
    ],
  },
];

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Banner - Enhanced with modern design */}
      <section className="relative mt-32 px-4 md:px-8 overflow-hidden">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl px-6 md:px-12 overflow-hidden shadow-2xl border border-white/20">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#115D8E] opacity-5 rounded-full -translate-y-1/3 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B4870] opacity-5 rounded-full translate-y-1/3 -translate-x-1/3"></div>

          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#115D8E] opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-[#0B4870] opacity-10 rounded-full animate-bounce"></div>

          {/* Content Section */}
          <div className="flex flex-col justify-center py-10 lg:py-12 lg:pr-8 z-10">
            <div className="space-y-5">
              <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white shadow-lg px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase transform transition-transform duration-300 hover:scale-105">
                Our Services
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B4870] leading-tight">
                Comprehensive <span className="bg-gradient-to-r from-[#115D8E] to-[#0B4870] bg-clip-text text-transparent">Business Solutions</span>
              </h1>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl">
                We provide a full suite of services designed to streamline your operations, ensure compliance, and drive growth. Our expert team delivers tailored solutions for your unique business needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#115D8E] to-[#0B4870] hover:from-[#0B4870] hover:to-[#115D8E] text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/cta w-fit"
                >
                  Get Started Today
                  <MdArrowOutward className="ml-1 text-lg transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 bg-white text-[#115D8E] border-2 border-[#115D8E] font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:bg-[#115D8E] hover:text-white hover:shadow-md w-fit"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center relative lg:pl-8 mt-8 lg:mt-0">
            <div className="relative w-full max-w-md h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105">
              <Image
                src="http://localhost:3000/images/escrowservice1.jpg"
                alt="Business professionals discussing solutions"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B4870]/20 to-transparent"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#115D8E] opacity-10 rounded-xl rotate-12 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#0B4870] opacity-10 rounded-xl -rotate-12 z-0"></div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B4870] mb-6">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover our comprehensive range of services designed to address all your business needs with efficiency and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ServiceBanner sections={sections} />


      {/* Benefits Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E6F0F9] to-[#D5E5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B4870] mb-6">Why Choose Our Services?</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We are committed to delivering exceptional value through our comprehensive service offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section> */}

      <div className="container">
        <ServiceAdvantage sections={sections1} />
      </div>

      {/* Stats Section - New Addition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-[#0B4870] mb-2">200+</div>
              <div className="text-gray-700">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-[#0B4870] mb-2">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-[#0B4870] mb-2">99%</div>
              <div className="text-gray-700">Client Retention</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-[#0B4870] mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-5">
        <Cta />
      </div>

      <OrganizationalStructuring />

    </>
  );
}

// Service Card Component
const ServiceCard = ({ service, index }) => {
  return (
    <div className="group relative bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] rounded-2xl p-8 shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#115D8E] opacity-5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>

      <div className="bg-white p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#115D8E] transition-colors duration-300">
        {service.icon}
      </div>

      <h3 className="text-2xl font-bold text-[#0B4870] mb-4">{service.title}</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

      <ul className="mb-8 space-y-3">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm text-[#115D8E]">
            <span className="w-2 h-2 bg-[#115D8E] rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>

      <Link href={service.link} className="inline-flex items-center text-[#115D8E] font-semibold group-hover:text-[#0B4870] transition-colors duration-300">
        Learn more
        <MdArrowOutward className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </div>
  );
};

// Benefit Card Component
const BenefitCard = ({ benefit, index }) => {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="bg-gradient-to-br from-[#E6F0F9] to-[#D5E5F5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        {benefit.icon}
      </div>
      <h3 className="text-2xl font-bold text-[#0B4870] mb-4">{benefit.title}</h3>
      <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
    </div>
  );
};

// Services Data
const servicesData = [
  {
    icon: <MdOutlineSwapHoriz className="text-2xl text-[#115D8E] group-hover:text-white" />,
    title: "Switch Service",
    description: "Seamless service switching with minimal downtime and maximum efficiency for your business operations.",
    features: ["Quick Transition", "Zero Downtime", "Custom Solutions"],
    link: "/services/switch"
  },
  {
    icon: <MdOutlineDescription className="text-2xl text-[#115D8E] group-hover:text-white" />,
    title: "AIGF License Assistance",
    description: "Complete guidance and support for obtaining your AIGF license with expert consultation.",
    features: ["Expert Guidance", "Fast Processing", "Compliance Assurance"],
    link: "/services/aigf"
  },
  {
    icon: <MdAccountBalance className="text-2xl text-[#115D8E] group-hover:text-white" />,
    title: "Escrow Service",
    description: "Secure transaction handling with trusted third-party escrow services for your peace of mind.",
    features: ["Secure Transactions", "Trusted Mediation", "Timely Releases"],
    link: "/services/escrow"
  },
  {
    icon: <MdGavel className="text-2xl text-[#115D8E] group-hover:text-white" />,
    title: "Legal & Compliance Services",
    description: "Comprehensive legal and compliance solutions tailored to your industry requirements.",
    features: ["Regulatory Compliance", "Legal Framework", "Risk Management"],
    link: "/services/legal-compliance"
  },
  {
    icon: <MdAccountBalanceWallet className="text-2xl text-[#115D8E] group-hover:text-white" />,
    title: "Connected Banking",
    description: "Integrated banking solutions that connect your financial operations seamlessly.",
    features: ["Seamless Integration", "Real-time Processing", "Enhanced Security"],
    link: "/services/connected-banking"
  },
  {
    icon: <MdBuild className="text-2xl text-[#115D8E] group-hover:text-white" />,
    title: "Utility Services",
    description: "Efficient utility management services to optimize your resource allocation and costs.",
    features: ["Cost Optimization", "Resource Management", "Efficiency Tracking"],
    link: "/services/utility"
  }
];

// Benefits Data
const benefitsData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#115D8E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Security & Trust",
    description: "Your business operations are protected with our robust security measures and trusted solutions."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#115D8E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Efficiency & Speed",
    description: "Streamline your operations with our efficient processes designed to save you time and resources."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#115D8E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Expert Support",
    description: "Our team of experts is always ready to provide guidance and support for your business needs."
  }
];