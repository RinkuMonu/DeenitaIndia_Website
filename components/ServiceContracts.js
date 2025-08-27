import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const ServiceContracts = ({ contracts }) => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72  rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#0B4870]/5 rounded-full blur-3xl -z-10"></div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-[#115D8E]/20 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-16 w-8 h-8 rounded-full bg-[#0B4870]/30 animate-bounce"></div>

      {contracts.map((section, sectionIndex, index) => (
        <>
          <div key={index} className="mb-24 relative">
            {/* Section Header with improved styling */}
            <div className="text-start mb-12 relative">
              <h2 className="text-4xl md:text-5xl font-bold text-[#115D8E] mb-6">
                <span className="relative inline-block">{section.title}</span>
              </h2>
              <span className="text-[#425866] font-medium flex items-center">
                <VscWorkspaceTrusted className="text-[#415b6d] mr-2" />
                {section.subtitle}
              </span>
            </div>

            {/* Contract Cards Grid with improved layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((contract, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image Container with improved overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={contract.image}
                      alt={contract.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B4870]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          {contract.description.substring(0, 100)}...
                        </p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#115D8E] font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm">
                      {contract.category || "Service"}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 relative">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#115D8E] transition-colors duration-300 pr-2 flex justify-between items-center">
                        {contract.title}
                        <div className="text-[#115D8E] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                          <MdArrowOutward size={20} />
                        </div>
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {contract.description}
                    </p>

                    <div className="flex items-end justify-end mt-6 pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500 flex items-center">
                        <VscWorkspaceTrusted className="mr-1 text-[#115D8E]" />
                        Trusted Service
                      </span>
                    </div>
                  </div>

                  {/* Hover effects */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#115D8E]/30 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#115D8E]/0 via-[#115D8E]/0 to-[#115D8E]/0 group-hover:via-[#115D8E]/5 group-hover:to-[#0B4870]/5 transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 hover:bg-[#115D8E] text-[#115D8E] border-2 border-gray-200  hover:text-white font-medium text-sm px-4 py-2 rounded-4xl transition"
            >
              Connect
              <MdArrowOutward className="ml-1 text-bold" />
            </Link>
          </div>
        </>
      ))}
    </section>
  );
};

export default ServiceContracts;