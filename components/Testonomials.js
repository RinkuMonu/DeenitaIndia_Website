"use client"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const testimonials = [
    {
        name: "Ankit Sharma",
        review: "The Switch Service by Deenita India truly optimized our payment system, making it much quicker and more dependable, and the improvement was instantaneous in terms of transaction speed and trust from our customers.",
        timeAgo: "2 days ago",
        image: "/Newimg/herosection/man.png",
        post: "Founder, Fintech Startup",
    },
    {
        name: "Rohit Verma",
        review: "With the escrow service, business transactions became far more secure and transparent. Clients experience the security of working with us now.",
        timeAgo: "1 week ago",
        image: "/Newimg/herosection/man2.png",
        post: "Head of Operations, E-commerce Brand",
    },
    {
        name: "Sneha Kapoor",
        review: "The Connected Banking solutions are integrated directly into our platform, reducing the amount of manual work and drastically improving our reconciliation speed.",
        timeAgo: "3 weeks ago",
        image: "/Newimg/herosection/girl.png",
        post: "Finance Manager, SaaS Company",
    },
    {
        name: "Aditya Mehta",
        review: "The legal and compliance services were timely and relevant, and specific to our organization. Their expertise gave us strong advice and strategies to mitigate any possible risks.",
        timeAgo: "1 month ago",
        image: "/Newimg/herosection/man3.png",
        post: "Legal Consultant",
    }, {
        name: "Neha Singh",
        review: "We have full faith in their Utility Services model support. They offer a full range of services from bill payments to customer integrations, and there is never a second of downtime.",
        timeAgo: "1 month ago",
        image: "/Newimg/herosection/human.png",
        post: "Startup Owner",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="max-w-7xl mx-auto pt-20 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center mt-8">

                <div className="flex justify-center">
                    <Image
                        src='/image/testimonials1.jpg'
                        alt="testemonial image"
                        width={500}
                        height={500}
                        className=" object-contain"
                    />
                </div>



                <div className="">
                    <p className="heading font-semibold mb-10 px-10 capitalize">
                        Client <span className="theme-text">Experiences</span> <br />
                    </p>
                    <Swiper
                        direction="vertical"
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                        centeredSlides={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        // loopedSlides={testimonials.length}
                        speed={1200}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                        style={{ height: "320px" }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide
                                key={index}
                                className="group transition-all duration-300 py-4 px-10 max-w-xl"
                            >
                                <div
                                    className={`relative h-full  rounded-xl p-8
         border-gray-300 border-2  transition-transform duration-500 ease-in-out 
                    }`}
                                >
                                    {index === activeIndex && (
                                        <span className="absolute -top-4 -left-4 text-[6rem] flex text-[#115d8e] font-serif leading-none">
                                            <img src="/images/vector6.png" alt="comma" className="w-5 h-8" />
                                            <img src="/images/vector6.png" alt="comma" className="w-5 h-8" />
                                        </span>
                                    )}

                                    <p className="mt-4 text-gray-700 text-sm md:text-lg mb-2 md:mb-0">"{testimonial.review}"</p>
                                    <div className="lg:flex items-center mt-5 lg:gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover mx-auto md:mx-0 p-1"
                                        />
                                        <div>
                                            <h4 className="text-lg font-bold text-[#115d8e]">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.post}</p>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>


        </section>
    );
}
