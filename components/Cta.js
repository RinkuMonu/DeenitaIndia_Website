"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { Lightbulb } from "lucide-react";

const Cta = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const circleY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const circleY2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div ref={sectionRef} className="bg-gradient-to-br from-[#1A1A1A] to-[#204972] relative overflow-hidden mb-5">
      <motion.div
        style={{ y: circleY1 }}
        className="absolute -top-3 -left-10 w-30 h-30 border-3 border-gray-400 rounded-full z-10"
      />
      <motion.div
        style={{ y: circleY2 }}
        className="absolute bottom-5 -right-6 w-30 h-30 border-4 border-gray-400 rounded-full z-10"
      />


      <div className="absolute top-5 container mx-auto flex justify-end gap-12">

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-700/40"
        >
          <Lightbulb className="w-12 h-12 text-gray-300" />
        </motion.div>


        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center w-28 h-28 rounded-full bg-gray-600/40"
        >
          <Lightbulb className="w-14 h-14 text-gray-200" />
        </motion.div>


        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-800/40"
        >
          <Lightbulb className="w-10 h-10 text-gray-400" />
        </motion.div>
      </div>


      <div className="container py-10 md:py-28">
        <div className="flex flex-col justify-between items-start lg:items-start gap-6  md:px-0">
          <div className="">
            <p className="text-3xl md:text-5xl sm:text-4xl text-gray-200 font-bold mb-4">
              Let us help you find the perfect fit
            </p>
            <p className="text-lg sm:text-2xl text-gray-200 opacity-60">
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
