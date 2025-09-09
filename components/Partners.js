"use client";

import { ArrowRight, Plus } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const integrationIcons = [
  { name: "Axis", src: "/bank/axisbank.png", direction: "left" },
  { name: "Tata", src: "/bank/tata-capital.png", direction: "left" },
  { name: "YesBank", src: "/bank/yes-bank.png", direction: "left" },
  { name: "Bajaj", src: "/bank/bajaj-finserv.png", direction: "left" },
  { name: "Kotak", src: "/bank/kotak.png", direction: "left" },
  { name: "Jana-sfb", src: "/bank/jana-sfb.png", direction: "right" },
  { name: "Bandhan", src: "/bank/bandhan.png", direction: "right" },
  { name: "RBL", src: "/bank/rbl.png", direction: "right" },
  { name: "AU", src: "/bank/au-sfb.png", direction: "right" },
  { name: "Idfc", src: "/bank/idfc-first.png", direction: "right" },
];

// Reusable Icon Card with Framer Motion
const IconCard = ({ src, name, direction }) => {
  const initialX = direction === "left" ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white p-1 rounded-lg shadow-md flex items-center justify-center"
    >
      <img
        src={src}
        alt={`${name} logo`}
        className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 object-contain"
      />
    </motion.div>
  );
};

const IntegrationsSection = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-16 overflow-hidden relative">
      <div className="container mx-auto relative px-4">
        {/* Central Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center lg:h-[40vh]">
          <button className="flex items-center gap-2 mb-6 border border-[#115D8E]/20 bg-white px-3 py-1 rounded-full shadow-sm">
      
            <span className="text-sm font-medium text-[#115D8E]">
              Our Partners
            </span>
          </button>

          <h1 className="text-3xl lg:text-4xl font-bold text-[#115D8E] max-w-3xl leading-tight">
            Partners & Associations
          </h1>

          {/* <button className="flex items-center gap-2 mt-8 bg-[#115D8E]/60 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#115D8E]/70 transition-colors duration-300">
            <span>SEE ALL Partners</span>
            <ArrowRight size={20} />
          </button> */}
          <p className=" text-gray-700 max-w-lg ">
          Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.
          </p>
        </div>

        {/* Desktop absolute icons */}
        <div className="hidden lg:block">
          {/* Left side */}
          <div className="absolute top-0 left-[20%]">
            <IconCard {...integrationIcons[0]} />
          </div>
          <div className="absolute bottom-0 left-[20%]">
            <IconCard {...integrationIcons[1]} />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-[11%]">
            <IconCard {...integrationIcons[2]} />
          </div>
          <div className="absolute bottom-0 left-11">
            <IconCard {...integrationIcons[3]} />
          </div>
          <div className="absolute top-0 left-11">
            <IconCard {...integrationIcons[4]} />
          </div>

          {/* Right side */}
          <div className="absolute top-0 right-[20%]">
            <IconCard {...integrationIcons[5]} />
          </div>
          <div className="absolute bottom-0 right-[20%]">
            <IconCard {...integrationIcons[6]} />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[11%]">
            <IconCard {...integrationIcons[7]} />
          </div>
          <div className="absolute bottom-0 right-11">
            <IconCard {...integrationIcons[8]} />
          </div>
          <div className="absolute top-0 right-11">
            <IconCard {...integrationIcons[9]} />
          </div>
        </div>

        {/* Mobile / Tablet Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12 lg:hidden">
          {integrationIcons.map((icon, i) => (
            <IconCard key={i} {...icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;