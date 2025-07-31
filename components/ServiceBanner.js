import Image from "next/image";

export default function ServiceBanner({ sections }) {
    return (
        <div>
            {sections.map((section, sectionIndex) => (
                <section
                    key={sectionIndex}
                    className="service-bg relative text-white my-10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(17,93,142,0.8)_0%,_rgba(12,22,28,0.95)_100%)] z-0"></div>
                    <div className=" relative  container mx-auto flex flex-col md:flex-row items-center  z-99">
                        <div className="flex-1 space-y-6">
                            <p className="text-3xl md:text-5xl font-bold">{section.title}</p>
                            <p className="text-white">{section.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                                {section.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex flex-col items-center text-center bg-white text-[#0A223D] px-6 py-4 ]
                                                    ${idx === 0 ? "rounded-tl-4xl" : ""}
                                                    ${idx === section.features.length - 1 ? "rounded-br-4xl" : ""}`}
                                    >
                                        <Image src={feature.icon} alt={feature.label} width={40} height={50} />
                                        <p className="mt-3 font-semibold">{feature.label}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="rounded-xl overflow-hidden p-10 shadow-md">
                                <Image
                                    src={section.imageSrc}
                                    alt="Section visual"
                                    width={300}
                                    height={300}
                                    className="rounded-2xl w-full h-auto  object-cover "
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
