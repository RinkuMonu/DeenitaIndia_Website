"use client"
import Image from "next/image"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ServiceSection2({ sections }) {
  const containerRef = useRef(null)
  const sectionRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const isEven = index % 2 === 0

          // Animate the entire section container
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 100,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          )

          // Animate image container with rotation and scale
          const imageContainer = section.querySelector(".image-container")
          if (imageContainer) {
            gsap.fromTo(
              imageContainer,
              {
                x: isEven ? -100 : 100,
                rotation: isEven ? -10 : 10,
                scale: 0.8,
              },
              {
                x: 0,
                rotation: isEven ? 3 : -3,
                scale: 1,
                duration: 1.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: section,
                  start: "top 75%",
                  end: "bottom 25%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          }

          // Animate content with stagger effect
          const contentElements = section.querySelectorAll(".content-item")
          gsap.fromTo(
            contentElements,
            {
              opacity: 0,
              x: isEven ? 100 : -100,
              y: 50,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1,
              ease: "power2.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            },
          )

          // Animate floating tags with bounce effect
          const tags = section.querySelectorAll(".floating-tag")
          gsap.fromTo(
            tags,
            {
              scale: 0,
              rotation: 180,
              opacity: 0,
            },
            {
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 0.8,
              ease: "back.out(2)",
              stagger: 0.3,
              scrollTrigger: {
                trigger: section,
                start: "top 65%",
                end: "bottom 35%",
                toggleActions: "play none none reverse",
              },
            },
          )

          // Continuous parallax effect for decorative elements
          const decorativeElements = section.querySelectorAll(".decorative-element")
          decorativeElements.forEach((element, i) => {
            gsap.to(element, {
              y: (i + 1) * -50,
              rotation: (i + 1) * 360,
              duration: 2,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            })
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [sections.length])

  return (
    <div ref={containerRef} className="space-y-28 my-16 px-4">
      {sections.map((section, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16 p-6 md:p-10 rounded-2xl`}
        >
          <div className="w-full md:w-2/5 relative image-container">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#72CAF7]/10 via-[#44A5E9]/10 to-[#115D8E] rounded-2xl shadow-xl overflow-hidden transform rotate-3"></div>

              <div className="relative w-full h-full transform -rotate-3">
                <Image
                  src={section.imageSrc || "/placeholder.svg"}
                  alt="Feature"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#115D8E]/20 to-transparent rounded-2xl"></div>
              </div>

              <div className="floating-tag absolute top-1/4 -right-4 md:-right-6 bg-gradient-to-r from-[#5EBDF7] to-[#44A5E9] text-white px-4 py-2 rounded-full shadow-lg z-20 font-medium text-sm animate-float border border-[#0097CC]/20">
                {section.tag1}
              </div>
              <div className="floating-tag absolute bottom-1/4 -right-2 md:-right-4 bg-gradient-to-r from-[#0E90C9] to-[#1476AD] text-white px-4 py-2 rounded-full shadow-lg z-20 font-medium text-sm animate-float-delayed border border-[#72CAF7]/20">
                {section.tag2}
              </div>

              <div className="decorative-element absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#44A5E9] to-[#5EBDF7] opacity-20 rounded-full blur-sm"></div>
              <div className="decorative-element absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#0097CC] to-[#115D8E] opacity-20 rounded-full blur-sm"></div>
              <div className="decorative-element absolute top-1/2 -left-6 w-8 h-8 bg-[#72CAF7] opacity-30 rounded-full"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-3/5 space-y-6">
            <div className="content-item flex items-center gap-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#44A5E9] to-[#0E90C9]"></div>
              <span className="text-[#115D8E] text-base font-semibold tracking-wide uppercase">{section.tag}</span>
            </div>

            <h2 className="content-item text-3xl md:text-4xl lg:text-5xl font-bold text-[#115D8E] leading-tight">
              {section.title}
            </h2>

            <p className="content-item text-lg text-gray-700 leading-relaxed max-w-2xl">{section.description}</p>

            <Link
              href="/contact"
              className="content-item inline-flex items-center gap-2 bg-gradient-to-r from-[#44A5E9] via-[#0E90C9] to-[#115D8E] hover:from-[#5EBDF7] hover:via-[#44A5E9] hover:to-[#1476AD] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#44A5E9]/25 group/cta mt-6 border border-[#72CAF7]/20"
            >
              Get Started
              <MdArrowOutward className="ml-1 transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
            </Link>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out 1s infinite;
        }
      `}</style>
    </div>
  )
}
