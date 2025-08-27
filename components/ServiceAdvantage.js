// import Image from "next/image";
// import Link from "next/link";
// import { MdArrowOutward } from "react-icons/md";

// export default function ServiceAdvantage({ sections }) {
//     return (
//         <section className="w-full py-10 ">
//             {sections.map((section, idx) => (
//                 <div
//                     key={idx}
//                     className="flex flex-col md:flex-row items-center lg:items-stretch mb-6"
//                 >
//                     <div className="flex-1 flex items-center " data-aos="flip-down">
//                         <Image
//                             src={section.imageSrc}
//                             alt="Section Image"
//                             width={500}
//                             height={500}
//                             className="rounded-2xl max-h-[280px] w-auto mb-3 md:mb-0"
//                         />
//                     </div>
//                     <div className="flex-1 flex flex-col justify-center">
//                         <p className="text-3xl md:text-4xl font-bold max-w-md">
//                             {section.title.split(" ").map((word, i, arr) => {
//                                 const shouldHighlight =
//                                     (arr.length === 1 && i === 0) ||
//                                     (arr.length === 2 && i === 0) ||
//                                     (arr.length > 2 && i < 2);

//                                 return (
//                                     <span
//                                         key={i}
//                                         className={shouldHighlight ? "text-[#115D8E]" : "text-[#0A223D]"}
//                                     >
//                                         {word}{" "}
//                                     </span>
//                                 );
//                             })}
//                         </p>

//                         <p className="mt-4 text-[#3A4F66] text-lg leading-relaxed">
//                             {section.description}
//                         </p>
//                         <Link
//                             href="/contact"
//                             className="mt-6 w-fit inline-flex items-center gap-2 bg-[#115D8E] text-white px-3 py-1 rounded-lg hover:bg-[#004e8c] transition-all"
//                         >
//                             Connect <MdArrowOutward />
//                         </Link>
//                     </div>
//                 </div>
//             ))}


//             <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"  
// >
//                 {sections[0].features.map((feature, idx) => (
//                     <div
//                         key={idx}
//                         className="flex flex-col md:py-6 "
//                          data-aos="fade-up"
//       data-aos-delay={idx * 100}
//                     >
//                         <Image
//                             src={feature.icon}
//                             alt={feature.label}
//                             width={40}
//                             height={40}
//                             className="border-2 rounded-md p-1 border-gray-200"
//                         />
//                         <h4 className="mt-4 text-lg  text-gray-800 font-semibold">{feature.label}</h4>
//                         <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }



import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function ServiceAdvantage({ sections }) {
    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0A223D] mb-6">
                        Why Choose Our Services
                    </h2>
                    <p className="text-xl text-[#3A4F66] max-w-3xl mx-auto">
                        Discover the advantages that set our services apart and help you achieve your goals
                    </p>
                </div>

                {/* Main Content Sections */}
                {sections.map((section, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 mb-16 md:mb-20`}
                    >
                        {/* Image Section */}
                        <div 
                            className="flex-1 relative group" 
                            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-delay={idx * 100}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                    src={section.imageSrc}
                                    alt="Section Image"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#115D8E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            {idx === 0 && (
                                <div className="absolute -bottom-4 -right-4 bg-[#115D8E] text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md">
                                    Most Popular
                                </div>
                            )}
                        </div>

                        {/* Text Content Section */}
                        <div 
                            className="flex-1 flex flex-col justify-center"
                            data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                            data-aos-delay={idx * 100 + 200}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                {section.title.split(" ").map((word, i, arr) => {
                                    const shouldHighlight =
                                        (arr.length === 1 && i === 0) ||
                                        (arr.length === 2 && i === 0) ||
                                        (arr.length > 2 && i < 2);

                                    return (
                                        <span
                                            key={i}
                                            className={shouldHighlight ? "text-[#115D8E]" : "text-[#0A223D]"}
                                        >
                                            {word}{" "}
                                        </span>
                                    );
                                })}
                            </h3>

                            <p className="text-[#3A4F66] text-lg leading-relaxed mb-6">
                                {section.description}
                            </p>
                            <Link
                                href="/contact"
                                className="group w-fit inline-flex items-center gap-2 bg-[#115D8E] text-white px-6 py-3 rounded-lg hover:bg-[#004e8c] transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Connect 
                                <MdArrowOutward className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                ))}

                {/* Features Grid */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-[#0A223D] mb-12" data-aos="fade-up">
                        Key Features & Advantages
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sections[0].features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#E6F0F9] group-hover:bg-[#115D8E] group-hover:text-white transition-colors duration-300">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.label}
                                        width={24}
                                        height={24}
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#115D8E] transition-colors duration-300">
                                    {feature.label}
                                </h4>
                                <p className="text-gray-600 flex-1">
                                    {feature.description}
                                </p>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <span className="text-sm text-[#115D8E] font-medium group-hover:underline">
                                        Learn more
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}