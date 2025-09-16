"use client"
import Image from "next/image"
import { useEffect, useState } from "react"


import { MdTrendingUp } from "react-icons/md"

export default function ServiceHeroSection({ sections }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-[#72CAF7]/10 overflow-hidden container mx-auto px-14 pt-32 pb-20">

      {sections.map((section, index) => (
        <div key={index} className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            {/* Content Section */}
            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 bg-[#44A5E9]/10 border border-[#44A5E9]/20 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-[#0E90C9] rounded-full animate-pulse"></div>
                  <span className="text-[#115D8E] font-medium text-sm uppercase tracking-wide">
                    {section.tag}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                  {section.title.split(" ").map((word, index) => {
                    if (index === 3) {
                      return (
                        <span
                          key={index}
                          className="text-transparent bg-gradient-to-r from-[#0E90C9] to-[#44A5E9] bg-clip-text"
                        >
                          {word}{" "}
                        </span>
                      );
                    } else {
                      return word + " ";
                    }
                  })}
                </h1>


                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  {section.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 py-4">
                {section.features.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-[#115D8E]">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="relative">
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-[#72CAF7]/20">
                  <Image
                    src="/images/b2b.jpg"
                    alt="Financial Dashboard Preview"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#115D8E]/20 to-transparent"></div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl border border-[#72CAF7]/20 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#44A5E9] to-[#0E90C9] rounded-xl flex items-center justify-center">
                      <MdTrendingUp className="text-white text-2xl" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">$2.5M+</p>
                      <p className="text-sm text-slate-500">Assets Managed</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white rounded-xl p-3 shadow-xl border border-[#5EBDF7]/20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#0E90C9] rounded-full animate-pulse"></div>
                    <span className="text-[#115D8E] font-semibold text-sm">Live Trading</span>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#72CAF7]/10 to-[#5EBDF7]/10 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}
