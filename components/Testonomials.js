"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";


const testimonials = [
    {
        name: "Abjfkf jfjf",
        review: "This service exceeded all expectations. Professional, prompt, and reliable!",
        timeAgo: "2 days ago",
        image: "/images/b3.jpg",
        post: "UI/UX Designer",
    },
    {
        name: "Rahul Mehta",
        review: "Amazing experience! Will definitely recommend to others.",
        timeAgo: "1 week ago",
        image: "/images/b3.jpg",
        post: "Frontend Developer",
    },
    {
        name: "Sneha Verma",
        review: "Prompt support and great communication. Highly appreciated!",
        timeAgo: "3 weeks ago",
        image: "/images/b3.jpg",
        post: "Product Manager",
    },
    {
        name: "Kunal Raj",
        review: "Their expert services helped boost our productivity.",
        timeAgo: "1 month ago",
        image: "/images/b3.jpg",
        post: "Fullstack Developer",
    },
     {
        name: "Kunal Raj",
        review: "Their expert services helped boost our productivity.",
        timeAgo: "1 month ago",
        image: "/images/b3.jpg",
        post: "Fullstack Developer",
    },
];



export default function Testonomials() {
      const [activeIndex, setActiveIndex] = useState(0)
    return (
        <section className="container pt-20 text-center md:text-left">
            <p className="heading font-semibold max-w-xl">
                Client <span className="theme-text">Experiences</span>
            </p>

            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 , disableOnInteraction: true }}
                loop
                  centeredSlides={true}
                spaceBetween={10}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  
                }}
                   onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="group peer pt-12 px-3 transition-all duration-300">
                       <div
            className={`relative lg:h-80 bg-white rounded-xl p-6 shadow-[0_8px_40px_rgba(138,173,187,0.5)]
border border-gray-50 flex flex-col justify-between transition-transform duration-500 ease-in-out ${
              index === activeIndex ? "scale-105 z-10" : "scale-95 "
            }`}
          >
            {index === activeIndex && (
              <span className="absolute -top-4 -left-4 text-[6rem] flex text-[#115D8E] font-serif leading-none">
                <Image src="/images/vector6.png" width={20} height={20} alt="comma" />
                <Image src="/images/vector6.png" width={20} height={20} alt="comma" />
              </span>
            )}
                            <div className="lg:flex items-center justify-center  lg:gap-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-18 h-18 rounded-full object-cover mx-auto md:mx-0"
                                    width={40}
                                    height={40}
                                />
                                <div>
                                    <h4 className="text-lg font-bold theme-text">{testimonial.name}</h4>
                                    <p className="text-sm  text-gray-500">{testimonial.post}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700 text-sm md:text-lg mb-2 md:mb-0">"{testimonial.review}"</p>

                            <div className="flex items-center">
                                <Image src="/images/logo.png" width={40} height={40} alt="logo" />
                                <span className="text-sm  text-gray-400 ms-2">{testimonial.timeAgo}</span>
                            </div>
                        </div>

                    </SwiperSlide>

                ))}
            </Swiper>
        </section>
    );
}
