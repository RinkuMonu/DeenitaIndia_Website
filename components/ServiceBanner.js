import Image from "next/image";

export default function ServiceBanner({ sections }) {
  return (
    <div>
      {sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="service-bg relative text-white my-10 py-4"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(17,93,142,0.8)_0%,_rgba(12,22,28,0.95)_100%)] z-0"></div>

          <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-0 z-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
                {section.title}
              </p>
              <p className="text-white text-sm md:text-base">{section.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {section.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center text-center bg-white text-[#0A223D] px-6 py-4
                      ${idx === 0 ? "rounded-tl-4xl" : ""}
                      ${idx === section.features.length - 1 ? "rounded-br-4xl" : ""}`}
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      width={40}
                      height={50}
                      className="w-10 h-12 object-contain"
                    />
                    <p className="mt-3 font-semibold text-sm sm:text-base">
                      {feature.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full max-w-md md:max-w-none">
              <div className="rounded-xl overflow-hidden py-6 md:p-10 shadow-md">
                <Image
                  src={section.imageSrc}
                  alt="Section visual"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
