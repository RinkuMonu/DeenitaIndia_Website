import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const ServiceContracts = ({ contracts }) => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      {contracts.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-16">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">
              <span className="text-[#115D8E]">{section.title}</span>
            </h2>
            <p className="mt-2 text-lg max-w-xl">{section.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((contract, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md relative group border-4 border-transparent hover:border-[#115D8E] transition-all duration-300"
              >
                <Image
                  src={contract.image}
                  alt={contract.title}
                  width={500}
                  height={300}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white p-4 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800">{contract.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{contract.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 hover:bg-[#115D8E] text-[#115D8E] border-2 border-gray-200  hover:text-white font-medium text-sm px-2 py-1 rounded-4xl transition"
        >
          Connect
          <MdArrowOutward className="ml-1 text-bold" />
        </Link>
      </div>
    </section>
  );
};


export default ServiceContracts;