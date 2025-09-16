"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";


const projects = [
  {
    title: "Switch Service",
    description: "A fast, secure, and reliable service for transaction routing.",
    image: "/images/expert-service1.jpg",
  },
  {
    title: "Escrow Service",
    description: "A safe place to hold your funds until the conditions are fully met.",
    image: "/images/expert-service2.jpg",
  },
  {
    title: "Connected Banking",
    description: "A seamless integration of banking services with real-time payments.",
    image: "/images/expert-service3.jpg",
  },
  {
    title: "AIGF License Services",
    description: "We provide complete support for your legal gaming activities.",
    image: "/images/expert-service4.jpg",
  },
  {
    title: "Legal & Compliance Services",
    description: "Keeping you compliant with our experienced legal services.",
    image: "/images/expert-service2.jpg",
  },
  {
    title: "Utility Services",
    description: "Pay bills or recharge easily on a secure platform.",
    image: "/images/expert-service3.jpg",
  },
];


export default function Slider() {
  return (
    <section className="container px-14 pt-32 ">
      <div>
        <p className="heading font-semibold mb-8 capitalize">
        Providing experienced <span className="theme-text">Services</span> <br></br> that drive results
        </p>
        
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        // pagination={{ clickable: false }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          425: { slidesPerView: 1 },
          426: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="my-15"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className={`group relative w-full h-72 overflow-hidden shadow-lg transition-all duration-500 `}
            >
              <div className="absolute inset-0 bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-50"
                />
              </div>

              <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-gradient-to-t from-[rgb(17,93,142)] via-white/20 to-transparent p-6 transition-all duration-500 group-hover:translate-y-0 text-center">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-white">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
