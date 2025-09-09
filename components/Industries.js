"use client";

import Image from "next/image";
import { Sparkles, Puzzle, Zap, MessagesSquare } from "lucide-react";

function Feature({ icon, title, desc, align = "left" }) {
  return (
    <div
      className={`flex items-start bg-white shadow-2xl p-4 rounded-2xl gap-4 max-w-xs w-full ${
        align === "right" ? "ml-auto text-left" : "text-left"
      }`}
    >
      <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-100 to-blue-100 border border-blue-200/60 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 text-[16px]">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed text-[14px]">{desc}</p>
      </div>
    </div>
  );
}

export default function WhyChoose() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50"
      style={{
        backgroundImage: 'url("/Newimg/bgimg/why_bg_1.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top soft divider arc */}
      <div className="absolute -top-24 left-0 right-0 h-48 bg-gradient-to-b from-white to-transparent opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="mt-3 text-3xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 capitalize">
            <span className="text-[#115d8e]">Industries </span> We Proudly Serve
          </h2>
          <p className="text-base sm:text-lg font-semibold text-[#ccc] uppercase">
            We deliver tailored solutions for diverse sectors with cutting-edge technology
          </p>
        </div>

        {/* Layout: features left / phone center / features right */}
        <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left features */}
          <div className="order-2 md:order-1 space-y-6 md:space-y-10">
            <Feature
              icon={<Puzzle className="w-5 h-5 text-blue-600" />}
              title="Gaming"
              desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deieniti atque corrupti quos dolores et quas"
              align="left"
            />
          </div>

          {/* Center phone mockup */}
          <div className="order-1 md:order-2 flex justify-center mb-6 md:mb-0">
            <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px]">
              {/* phone frame */}
              <div className="relative rounded-[36px] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                {/* top bar */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2 h-5 w-20 sm:w-28 rounded-full bg-slate-200" />
                {/* screen */}
                <div className="rounded-[32px] overflow-hidden">
                  <Image
                    src="/Newimg/bgimg/phone-bg.jpg"
                    alt="WebTeck Wallet"
                    width={640}
                    height={1280}
                    className="w-full h-[400px] sm:h-[480px] md:h-[520px] lg:h-[540px] object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right features */}
          <div className="order-3 space-y-6 md:space-y-10">
            <Feature
              icon={<Sparkles className="w-5 h-5 text-blue-600" />}
              title="Real Estate"
              desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditilis praesentium voluptatum deleniti atque corrupti quos dolores et quas"
              align="right"
            />
            <Feature
              icon={<MessagesSquare className="w-5 h-5 text-blue-600" />}
              title="NBFCs"
              desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"
              align="right"
            />
          </div>
        </div>
      </div>

      {/* bottom waves */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-full text-slate-200">
          <path
            d="M0,80 C200,140 400,20 720,80 C1040,140 1240,40 1440,80 L1440,120 L0,120 Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M0,90 C240,150 480,30 720,90 C960,150 1200,30 1440,90 L1440,120 L0,120 Z"
            fill="currentColor"
            opacity="0.35"
          />
        </svg>
      </div>
    </section>
  );
}
