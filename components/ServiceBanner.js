"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function ServiceBanner({ sections }) {
  const [currentSection, setCurrentSection] = useState(0)

  // Auto-rotate sections for better engagement
  useEffect(() => {
    if (sections.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [sections.length])

  return (
    <div className="relative">
      {sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`service-bg relative text-white my-10 py-8 transition-opacity duration-500 ${
            sectionIndex === currentSection ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
          style={{
            background: "url(/images/bg.png)",
            zIndex: sectionIndex === currentSection ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 z-0 opacity-15">
            <div className="absolute top-10 left-10 w-40 h-40 border-2 border-[#72CAF7] rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-[#5EBDF7] rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-[#44A5E9] rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-20 right-1/4 w-16 h-16 bg-[#0097CC]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-[#72CAF7]/20 rounded-full blur-xl"></div>
          </div>

          <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-8 z-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-block bg-gradient-to-r from-[#44A5E9] to-[#5EBDF7] backdrop-blur-sm px-6 py-3 rounded-full mb-4 shadow-lg">
                <span className="text-sm font-semibold text-white">Premium Service</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                {section.title}
              </h2>

              <p className="text-white/95 text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-sm">
                {section.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {section.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col items-center text-center bg-white/15 backdrop-blur-md p-2 py-4 rounded-2xl border border-[#72CAF7]/30 hover:bg-gradient-to-br hover:from-[#44A5E9]/20 hover:to-[#5EBDF7]/20 transition-all duration-300 hover:scale-105 cursor-pointer hover:border-[#5EBDF7]/50 shadow-lg hover:shadow-xl"
                  >
                    <div className="bg-gradient-to-br from-[#5EBDF7] to-[#44A5E9] p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={feature.icon || "/placeholder.svg"}
                        alt={feature.label}
                        width={48}
                        height={48}
                        className="w-7 h-7 object-contain filter brightness-0 invert"
                      />
                    </div>
                    <p className="mt-4 font-semibold text-sm text-white group-hover:text-[#72CAF7] transition-colors duration-300">
                      {feature.label}
                    </p>
                    {feature.description && (
                      <p className="mt-2 text-white/80 text-sm group-hover:text-white/95 transition-colors duration-300">
                        {feature.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full max-w-md md:max-w-none">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#44A5E9] via-[#0E90C9] to-[#115D8E] rounded-2xl opacity-60 blur-xl -z-10 animate-pulse"></div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#72CAF7]/40 hover:border-[#5EBDF7]/60 transition-all duration-300">
                  <Image
                    src={section.imageSrc || "/placeholder.svg"}
                    alt="Section visual"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#115D8E]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {sections.length > 1 && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
              {sections.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSection(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                    idx === currentSection
                      ? "bg-[#5EBDF7] border-[#72CAF7] scale-125 shadow-lg"
                      : "bg-[#44A5E9]/40 border-[#72CAF7]/40 hover:bg-[#44A5E9]/60"
                  }`}
                  aria-label={`Go to section ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
