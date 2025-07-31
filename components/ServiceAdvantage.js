import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function ServiceAdvantage({ sections }) {
    return (
        <section className="w-full py-10 container">
            {sections.map((section, idx) => (
                <div
                    key={idx}
                    className="flex flex-col lg:flex-row items-center lg:items-stretch mb-6"
                >
                    <div className="flex-1 flex items-center ">
                        <Image
                            src={section.imageSrc}
                            alt="Section Image"
                            width={500}
                            height={500}
                            className="rounded-2xl max-h-[280px] w-auto"
                        />
                    </div>
                    <div className="flex-1 flex flex-col justify-center px-4">
                        <p className="text-4xl font-bold text-[#0A223D] max-w-md">
                            {section.title.split(",").map((word, i, arr) => (
                                <span
                                    key={i}
                                    className={
                                        arr.length === 2
                                            ? i === 0
                                                ? "text-[#115D8E] "
                                                : ""
                                            : i < 2
                                                ? "text-[#115D8E]"
                                                : ""
                                    }
                                >
                                    {word}
                                    {i < arr.length - 1 && ","}{" "}
                                </span>
                            ))}
                        </p>
                        <p className="mt-4 text-[#3A4F66] text-lg leading-relaxed">
                            {section.description}
                        </p>
                        <Link
                            href="/contact"
                            className="mt-6 w-fit inline-flex items-center gap-2 bg-[#115D8E] text-white px-3 py-1 rounded-lg hover:bg-[#004e8c] transition-all"
                        >
                            Connect <MdArrowOutward />
                        </Link>
                    </div>
                </div>
            ))}


            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {sections[0].features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col py-6 "
                    >
                        <Image
                            src={feature.icon}
                            alt={feature.label}
                            width={40}
                            height={40}
                        />
                        <h4 className="mt-4 text-lg  text-gray-800 font-semibold">{feature.label}</h4>
                        <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
