import Image from "next/image"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { VscWorkspaceTrusted } from "react-icons/vsc"

const ServiceContracts = ({ contracts }) => {
  return (
    <section className=" mx-auto py-6 px-4  relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#72CAF7]/5 via-[#44A5E9]/3 to-[#0097CC]/5 -z-20"></div>
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-[#5EBDF7]/20 to-[#44A5E9]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-l from-[#0E90C9]/20 to-[#1476AD]/20 rounded-full blur-3xl -z-10"></div> */}

      {/* <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-[#44A5E9]/30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-16 w-8 h-8 rounded-full bg-[#0097CC]/40 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-[#72CAF7]/50 animate-ping"></div> */}

      {contracts.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-24 relative max-w-7xl mx-auto">
          {/* Section Header + Connect Button in one row */}
          <div className="flex items-center justify-between mb-12 relative flex-wrap gap-4">
            <div className="text-start">
              {/* <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#115D8E] via-[#1476AD] to-[#0E90C9] bg-clip-text text-transparent mb-6">
                <span className="relative inline-block text-black/45">{section.title}</span>
              </h2> */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#44A5E9] to-[#0E90C9]"></div>
                <span className="text-[#115D8E] text-lg mb-4 font-semibold tracking-wide uppercase">{section.title}</span>
              </div>
              <span className="text-[#115D8E] font-medium flex items-center">
                <VscWorkspaceTrusted className="text-[#44A5E9] mr-2" />
                {section.subtitle}
              </span>
            </div>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#44A5E9] to-[#0097CC] hover:from-[#115D8E] hover:to-[#1476AD] text-white border-2 border-transparent hover:border-[#72CAF7]/30 font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Connect
                <MdArrowOutward className="ml-1 text-bold" />
              </Link>
            </div>
          </div>

          {/* Contract Cards Grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((contract, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-[#72CAF7]/20 hover:border-[#44A5E9]/40"
              >
                {/* Image Container with improved overlay */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={contract.image || "/placeholder.svg"}
                    alt={contract.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#115D8E]/90 via-[#1476AD]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {contract.description.substring(0, 100)}...
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#5EBDF7] to-[#72CAF7] text-white font-semibold text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                    {contract.category || "Service"}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#1476AD] transition-colors duration-300 pr-2 flex justify-between items-center">
                      {contract.title}
                      <div className="text-[#44A5E9] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                        <MdArrowOutward size={20} />
                      </div>
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{contract.description}</p>

                  <div className="flex items-end justify-end mt-6 pt-4 border-t border-[#72CAF7]/20">
                    <span className="text-xs text-gray-500 flex items-center">
                      <VscWorkspaceTrusted className="mr-1 text-[#0097CC]" />
                      Trusted Service
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#44A5E9]/50 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#5EBDF7]/0 via-[#72CAF7]/0 to-[#0097CC]/0 group-hover:via-[#5EBDF7]/5 group-hover:to-[#44A5E9]/5 transition-all duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default ServiceContracts
