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
    title: "Switch",
    description: "Consolidate your projects, clients and team intoConsolidate your projects, clients and team into",
    image: "/images/expert-service1.jpg",
  },
  {
    title: "Project Title 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/images/expert-service2.jpg",
  },
  {
    title: "Project Title 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/images/expert-service3.jpg",
  },
  {
    title: "Project Title 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/images/expert-service4.jpg",
  },
  {
    title: "Project Title 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/images/expert-service2.jpg",
  },
  {
    title: "Project Title 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/images/expert-service3.jpg",
  },
];


export default function ProjectCarousel() {
  return (
    <section className="container pt-10">
<div>
        <p className="heading font-semibold mb-8">
        Delivering Expert <span className="theme-text">Services</span> <br></br> that drive results
      </p>
      <Link href="/login" className="text-white shadow-[0_8px_30px_rgba(138,173,187)] me-4 font-semibold bg-[#115D8E] py-3 rounded-lg text-base px-6 text-center">Get in touch</Link>
</div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
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
              className={`group relative w-full h-72 overflow-hidden rounded-lg shadow-lg transition-all duration-500 ${index % 2 === 1 ? "md:mt-10" : ""
                }`}
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
