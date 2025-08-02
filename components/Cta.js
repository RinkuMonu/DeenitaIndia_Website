"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Cta = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const circleY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const circleY2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div ref={sectionRef} className="cta_bg relative overflow-hidden mb-5">
      <motion.div
        style={{ y: circleY1 }}
        className="absolute -top-3 -left-10 w-30 h-30 border-3 border-[#115D8E] rounded-full z-10"
      />
      <motion.div
        style={{ y: circleY2 }}
        className="absolute bottom-5 -right-6 w-30 h-30 border-4 border-[#115D8E] rounded-full z-10"
      />

      <div className="container py-10 md:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6  md:px-0">
          <div className="">
            <p className="text-3xl sm:text-4xl theme-text font-bold mb-4">
              Let us help you find the perfect fit
            </p>
            <p className="text-lg sm:text-2xl theme-text opacity-60">
              Share your requirements, and our experts will get in touch with tailored recommendations
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center bg-white theme-text hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-base sm:text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Contact <MdArrowOutward className="ml-2 mt-1 text-bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
