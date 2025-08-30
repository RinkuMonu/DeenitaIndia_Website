"use client";

import Image from "next/image";
import Cta from "@/components/Cta";
import Link from "next/link";
import "aos/dist/aos.css";
import { MdArrowOutward } from "react-icons/md";
import { useEffect, useState } from "react";

const images = [
  "/Image/Rectangle 61.png",
  "/Image/Rectangle 61.png",
  "/Image/Rectangle 61.png",
  "/Image/Rectangle 61.png",
  "/Image/Rectangle 61.png",
  "/Image/Rectangle 61.png",
  "/Image/Rectangle 61.png",
  "/Image/Rectangle 61.png",
  "/Image/Rectangle 61.png",
  "/Image/Rectangle 61.png",
];

const getRandomHeight = (index) => {
  const heights = ["h-32", "h-64", "h-56", "h-96"];
  return heights[index % heights.length];
};

export default function CompanySection() {
  const [columns, setColumns] = useState(4);

  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    const updateStyle = () => {
      if (window.innerWidth >= 768) {
        setBgStyle({ backgroundImage: 'url("/Image/about-2-bg.png")' });
      } else {
        setBgStyle({});
      }
    };

    updateStyle();
    window.addEventListener("resize", updateStyle);
    return () => window.removeEventListener("resize", updateStyle);
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 767) {
        setColumns(2); // Mobile & small screens
      } else {
        setColumns(4); // md and up
      }
    };

    // Initial check
    updateColumns();

    // Listen to screen resize
    window.addEventListener("resize", updateColumns);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const imageColumns = Array.from({ length: columns }, (_, i) =>
    images.filter((_, index) => index % columns === i)
  );

  return (
    <>
      <div className="container overflow-hidden">
        <section className="pt-20 md:pt-32 relative">
          <div className="absolute inset-0 backdrop-blur-[100px] bg-white/30 z-[-1]"></div>

          <div className="max-w-7xl mx-auto px-4 xl:px-0 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full bg-gradient-to-br from-white/80 to-[#eaf4fa] rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl border border-white/50">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                  {/* Left Content - Increased width */}
                  <div className="w-full lg:w-1/2 xl:w-3/5">
                    <span className="inline-block gradient-badge text-white text-sm px-4 py-2 rounded-full mb-6 font-medium">
                      About Company
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#115d8e] mb-6 leading-tight">
                      Creating connections through impactful experiences
                    </h1>
                    <p className="text-gray-800 mb-8 text-lg md:text-xl leading-relaxed">
                      We turn bold ideas into impactful results through design,
                      strategy, and innovation.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                      {/* Distributors Card */}
                      <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl text-center card-hover shadow-md border border-gray-100">
                        <div className="mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-[#115d8e] to-[#0c4569] rounded-full flex items-center justify-center">
                          <svg
                            className="w-7 h-7 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <div className="font-bold text-xl text-[#184766] mb-1">
                          2000+
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          Distributors
                        </div>
                      </div>

                      {/* Retailers Card */}
                      <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl text-center card-hover shadow-md border border-gray-100">
                        <div className="mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-[#115d8e] to-[#0c4569] rounded-full flex items-center justify-center">
                          <svg
                            className="w-7 h-7 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <div className="font-bold text-xl text-[#184766] mb-1">
                          100,000+
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          Retailers
                        </div>
                      </div>

                      {/* Districts Card */}
                      <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl text-center card-hover shadow-md border border-gray-100">
                        <div className="mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-[#115d8e] to-[#0c4569] rounded-full flex items-center justify-center">
                          <svg
                            className="w-7 h-7 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="font-bold text-xl text-[#184766] mb-1">
                          800+
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          Districts
                        </div>
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="inline-block mt-2 bg-gradient-to-r from-[#115d8e] to-[#0c4569] hover:from-[#0c4569] hover:to-[#115d8e] text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 text-lg"
                    >
                      Get started
                    </a>
                  </div>

                  {/* Right Image - Adjusted width */}
                  <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center">
                    <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                      {/* Replace with your actual image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#115d8e] to-[#0c4569] flex items-center justify-center text-white text-lg">
                        Company Image
                      </div>
                      {/* Uncomment to use with Next.js Image component */}
                      <Image
                    src="/Image/Rectangle 45.png"
                    alt="Team working"
                    fill
                    className="object-cover"
                  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .gradient-badge {
              background: linear-gradient(to right, #777777, #115d8e);
            }
            .card-hover {
              transition: all 0.3s ease;
            }
            .card-hover:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 30px -5px rgba(17, 93, 142, 0.25);
            }
          `}</style>
        </section>

        <div className="mt-16 md:mt-32 w-full my-20 relative overflow-hidden  rounded-lg">
          {/* Background elements */}
          <div className="absolute w-72 h-72 bg-[#9dbace] rounded-full opacity-20 blur-3xl -top-20 -left-20 z-0"></div>
          <div className="absolute w-64 h-64 bg-[#acbfcc] rounded-full opacity-10 blur-3xl bottom-10 -right-20 z-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <h3 className="relative text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
              <span className="text-[#115d8e] relative inline-block">
                Our
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  width="140"
                  height="8"
                  viewBox="0 0 140 8"
                  fill="none"
                >
                  <path
                    d="M1 4C35.5 2 80 6.5 139 4"
                    stroke="#115d8e"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-gray-800 ml-2">Vision & Mission</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Vision Card */}
              <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#115d8e] to-[#184766] text-white p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-2">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-28 h-28 -mt-10 -mr-10 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 -mb-8 -ml-8 bg-white/5 rounded-full"></div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center md:flex-row md:items-start gap-4 mb-6">
                    <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                      <Image
                        src="/Image/vision.png"
                        alt="Vision Icon"
                        width={40}
                        height={40}
                        className="w-8 h-8 md:w-10 md:h-10"
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                      Vision
                    </h3>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-white/90 text-center md:text-left">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas.
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start">
                    <div className="w-12 h-1 bg-white/40 rounded-full"></div>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
              </div>

              {/* Mission Card */}
              <div className="relative group overflow-hidden rounded-2xl bg-white p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-2">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-28 h-28 -mt-10 -mr-10 bg-[#115d8e]/10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 -mb-8 -ml-8 bg-[#115d8e]/5 rounded-full"></div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center md:flex-row md:items-start gap-4 mb-6">
                    <div className="bg-[#eaf4fa] p-4 rounded-xl">
                      <Image
                        src="/Image/Mission.png"
                        alt="Mission Icon"
                        width={40}
                        height={40}
                        className="w-8 h-8 md:w-10 md:h-10"
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#115d8e] text-center md:text-left">
                      Mission
                    </h3>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-gray-600 text-center md:text-left">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas.
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start">
                    <div className="w-12 h-1 bg-[#115d8e]/40 rounded-full"></div>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#115d8e]/0 group-hover:border-[#115d8e]/20 transition-all duration-500"></div>
              </div>
            </div>

            {/* Connecting line for visual flow */}
            <div className="hidden lg:flex justify-center mt-8">
              <div className="w-1 h-12 bg-gradient-to-b from-[#115d8e] to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full overflow-hidden relative py-16 md:py-24">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTVEOEUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6TTE4IDM0YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4">
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {/* Accent borders */}
            <div className="absolute top-0 left-0 h-full w-2 md:w-3 bg-gradient-to-b from-[#115d8e] to-[#2E709B]"></div>
            <div className="absolute top-0 right-0 h-full w-2 md:w-3 bg-gradient-to-b from-[#115d8e] to-[#2E709B]"></div>

            <div className="relative flex flex-col lg:flex-row items-stretch">
              {/* Image Section */}
              <div className="w-full lg:w-2/5 relative">
                <div className="relative h-full min-h-[400px] lg:min-h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#115de]/80 to-transparent z-10"></div>
                  <Image
                    src="/Image/Rectangle 52.png"
                    alt="CEO"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* CEO Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#115d8e] to-transparent p-6 text-white">
                    <div className="max-w-xs mx-auto lg:mx-0">
                      <p className="text-lg md:text-xl font-semibold mb-1">
                        deleniti atque
                      </p>
                      <p className="text-sm md:text-base opacity-90">
                        CEO at Velasconde
                      </p>

                      {/* Quote icon */}
                      <div className="absolute -top-8 right-6 w-16 h-16 bg-[#115d8e] rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-3/4 p-8 md:px-12 flex flex-col justify-center">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#115d8e] leading-tight mb-5">
                    We started this journey
                    <br />
                    with one goal
                  </h3>

                  <p className="text-lg md:text-xl text-gray-800 font-medium mb-6 leading-relaxed">
                    to make a real difference in people&apos;s lives through
                    experiences that matter.
                  </p>

                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>

                    <p className="leading-relaxed">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#eaf4fa] rounded-full flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-[#115d8e]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#115d8e]">
                          Leadership Team
                        </p>
                        <p className="text-sm text-gray-600">
                          Committed to excellence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />

      <div className="container">
        <section className="py-12 md:py-20 lg:px-4 relative overflow-hidden  rounded-lg  ">
          {/* Background decorative elements */}
          <div className="absolute w-72 h-72 bg-[#bad0e0] rounded-full opacity-15 blur-3xl -top-20 -left-20 z-0"></div>
          <div className="absolute w-64 h-64 bg-[#b5c8d4] rounded-full opacity-10 blur-3xl bottom-0 -right-20 z-0"></div>

          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center px-4">
            {/* Left Content */}
            <div className="">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                Proud Moments & <br />
                <span className="text-[#2E709B] relative inline-block">
                  Achievements
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    width="180"
                    height="8"
                    viewBox="0 0 180 8"
                    fill="none"
                  >
                    <path
                      d="M1 4C40 2 90 6.5 179 4"
                      stroke="#2E709B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-md">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas At vero eos et accusamus et iusto odio
                dignissimos
              </p>
            </div>

            {/* Right Stats Grid */}
            <div className="grid grid-cols-2 gap-6 p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-500 hover:shadow-xl">
              {[
                {
                  value: "9+",
                  label: "Years",
                  description: "Of excellence and innovation",
                },
                {
                  value: "99%",
                  label: "Certified",
                  description: "Quality assurance guaranteed",
                },
                {
                  value: "80+",
                  label: "Clients",
                  description: "Satisfied business partners",
                },
                {
                  value: "100+",
                  label: "Projects",
                  description: "Successfully delivered",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group text-center p-4 rounded-xl hover:bg-[#eaf4fa] transition-all duration-300"
                >
                  {/* Value with animated background */}
                  <div className="relative inline-block mb-3">
                    <div className="absolute inset-0 bg-[#115D8E] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 -inset-3"></div>
                    <h4 className="text-3xl md:text-4xl font-bold text-[#115D8E] relative z-10">
                      {item.value}
                    </h4>
                  </div>

                  {/* Label */}
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.label}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white sm:px-6">
          <div className="mx-auto text-center">
            <div className="inline-block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium mb-4">
              Your Data, Our Responsibility
            </div>

            <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Built on Trust
            </h3>

            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-12">
              We follow industry-leading security protocols to safeguard your
              data and privacy.
              <br className="hidden md:block" />
              Trust is the foundation of everything we do — and we never
              compromise on it.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center">
              {[
                {
                  title: "Data Privacy & Protection",
                  icon: "/Image/folder.png",
                  description:
                    "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
                },
                {
                  title: "Secure Infrastructure",
                  icon: "/Image/folder.png",
                  description:
                    "Enterprise-grade security measures to protect your sensitive information",
                },
                {
                  title: "Compliance",
                  icon: "/Image/folder.png",
                  description:
                    "Adherence to global standards and regulations for data protection",
                },
                {
                  title: "Continuous Monitoring",
                  icon: "/Image/folder.png",
                  description:
                    "24/7 surveillance and proactive threat detection systems",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-[#d1dce41f] rounded-2xl p-6 text-left border border-gray-100 hover:border-[#115D8E]/20 transition-all duration-500 overflow-hidden w-full mx-auto max-w-xs"
                >
                  {/* Background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#115D8E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon container */}
                  <div className="relative z-10 mb-5">
                    <div className="w-12 h-12 bg-[#eaf4fa] rounded-xl flex items-center justify-center group-hover:bg-[#115D8E] group-hover:scale-110 transition-all duration-300">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={24}
                        height={24}
                        className="group-hover:brightness-0 group-hover:invert transition duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-[#115D8E] mb-3 group-hover:text-gray-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#115D8E]/0 group-hover:border-[#115D8E]/10 transition-all duration-500"></div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#115D8E] group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 w-[max-content] mx-auto transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <Link
                href="/contact"
                className="bg-[#115D8E] text-white px-6 md:px-10 py-2 rounded-lg font-semibold shadow-md transition flex items-center justify-center gap-2"
              >
                Get started
                <Image
                  src="/Image/arrow-right.png"
                  alt="Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="">
          <div className="md:flex justify-between align-middle">
            <p className="heading font-semibold " data-aos="fade-right">
              Media <span className="theme-text">Highlights</span>
            </p>
            <p className="md:max-w-sm pt-4" data-aos="fade-left">
              Our work and impact have been featured across trusted media
              platforms.Explore what the press is saying about us.
            </p>
          </div>
          <div className="relative w-full max-h-[80vh] overflow-hidden max-w-6xl mx-auto   my-10 rounded-xl">
            <div className="flex gap-4 w-full overflow-hidden">
              {imageColumns.map((col, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 w-1/2 animate-${
                    index % 2 === 0 ? "scroll-up" : "scroll-down"
                  }`}
                >
                  {[...col, ...col].map((src, i) => (
                    <div
                      key={i}
                      className={`group relative w-full overflow-hidden rounded-xl transition-transform duration-300  ${getRandomHeight(
                        i
                      )}`}
                    >
                      <Image
                        src={src}
                        alt={`img-${i}`}
                        fill
                        className="object-cover"
                      />
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-t from-[#115D8E6B] to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10 flex flex-col justify-end p-4 pointer-events-none ${getRandomHeight(
                          i
                        )} `}
                      >
                        <div>
                          <p className="text-2xl font-semibold">Media</p>
                          <p className="text-sm">
                            Consolidate your projects, clients and team into
                            Consolidate your projects, clients and team into
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <style jsx>{`
              @keyframes scroll-up {
                0% {
                  transform: translateY(0%);
                }
                100% {
                  transform: translateY(-50%);
                }
              }

              @keyframes scroll-down {
                0% {
                  transform: translateY(-50%);
                }
                100% {
                  transform: translateY(0%);
                }
              }

              .animate-scroll-up {
                animation: scroll-up 30s linear infinite;
              }

              .animate-scroll-down {
                animation: scroll-down 30s linear infinite;
              }
            `}</style>
          </div>

          <div className="flex mb-10 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 hover:bg-[#115D8E] text-[#115D8E] border-2 border-gray-200  hover:text-white font-medium text-sm px-4 py-2 rounded-4xl transition"
            >
              Connect
              <MdArrowOutward className="ml-1 text-bold" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
