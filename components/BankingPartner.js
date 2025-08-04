"use client";
import Image from "next/image";

const partnerLogos = [
  { default: "/images/log1.png", hover: "/images/logo4.png" },
  { default: "/images/log2.png", hover: "/images/logo4.png" },
  { default: "/images/logo3.png", hover: "/images/logo4.png" },
  { default: "/images/log2.png", hover: "/images/logo4.png" },
  { default: "/images/logo3.png", hover: "/images/logo4.png" },
  { default: "/images/log1.png", hover: "/images/logo4.png" },
  { default: "/images/logo3.png", hover: "/images/logo4.png" },
  { default: "/images/logo3.png", hover: "/images/logo4.png" },
];

export default function BankingPartner() {
  return (
    <div className="w-full py-12 bg-white"   data-aos="fade-right"
  data-aos-duration="2000">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="lg:max-w-md">
            <p className="text-5xl font-semibold">
              <span className="theme-text "> Our Banking &</span> <br></br> Partner Network
            </p>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus
            </p>
          </div>

          <div className="w-full grid grid-cols-2  md:grid-cols-4 gap-6">
            {partnerLogos.map((logo, i) => (
              <div
                key={i}
                className={`group relative w-32 h-24 shadow-[0_4px_30px_rgba(228,237,243,1)] rounded-lg bg-white transition-all duration-500 hover:bg-[#2E709B] flex items-center justify-center float-animate ${i % 2 === 0 ? "mt-0" : "mt-10"
                  }`}
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${6 + (i % 4)}s`,
                }}
              >
                <div className="relative w-[70px] h-[60px]">
                  <Image
                    src={logo.default}
                    alt={`Partner ${i + 1}`}
                    fill
                    className="object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                  />
                  <Image
                    src={logo.hover}
                    alt={`Partner ${i + 1} Hover`}
                    fill
                    className="object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
