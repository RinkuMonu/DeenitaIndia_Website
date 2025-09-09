"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LeadershipSection() {
  return (
    <section className="relative text-white py-24 overflow-hidden -z-0" style={{backgroundImage:"url(/Image/about-2-bg.png)", backgroundRepeat:"no-repeat"}}>
      {/* Background gradient circles */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#115D8E]/30 to-[#046eb4]/30 blur-3xl animate-slow-pulse" />
        <div className="absolute z-10 -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#046eb4]/30 to-[#115D8E]/30 blur-3xl animate-slow-pulse" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-14 space-y-20">

        {/* Visionary CEO Section */}
        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* CEO Image with premium frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="w-[320px] h-[320px] rounded-full overflow-hidden shadow-2xl border-8 border-[#115D8E]/50 mx-auto">
              <Image
                src="/Image/Rectangle 52.png"
                alt="CEO Portrait"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* CEO Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative bg-gray z-50 rounded-3xl shadow-xl p-10"
          >
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#d6efff] to-[#046eb4] rounded-l-3xl" />

            <h3 className="text-4xl font-extrabold text-black">CEO</h3>
            <p className="mt-2 text-xl text-[#046eb4] font-semibold">deleniti atque</p>
            <p className="mt-1 text-gray-800">CEO at Velasconde</p>

            <p className="mt-6 text-lg leading-relaxed text-gray-900">
              We started this journey with one goal: to make a real difference in people's lives through experiences that matter.
            </p>
            <p className="mt-4 text-gray-400 italic">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
