"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const partnerLogos = [
  { default:   "/images/log1.png", hover:   "/images/logo4.png", },
  { default:   "/images/log2.png", hover:   "/images/logo4.png",},
  { default:   "/images/logo3.png", hover:   "/images/logo4.png",},
  { default:   "/images/log2.png", hover:   "/images/logo4.png", },
  { default:   "/images/logo3.png", hover:   "/images/logo4.png", },
  { default:   "/images/log1.png", hover:   "/images/logo4.png", },
];

export default function Partners() {
  return (
    <div className="py-12 bg-white"   data-aos="fade-up"
  data-aos-duration="2000">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="max-w-md">
                <p className="heading font-semibold">
                            Partners & <span className="theme-text">Associations</span>
                        </p>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Stay updated with our latest insights and industry trends.
              Explore expert articles, tips, and thought leadership.
            </p>
          </div>
     <div className="max-w-xl ">
          <Marquee pauseOnHover gradient={false} speed={40} >
        {partnerLogos.map((logo, i) => (
          <div
            key={i}
            className="group relative mx-4 w-32 h-24 border border-gray-200 rounded-lg bg-white transition-all duration-500 hover:bg-[#2E709B] flex items-center justify-center"
          >
            <div className="relative w-[70px] h-[60px]">
              <Image
                src={logo.default}
                alt={`Partner ${i + 1}`}
                fill
                className="object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              {/* Hover */}
              <Image
                src={logo.hover}
                alt={`Partner ${i + 1} Hover`}
                fill
                className="object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </Marquee>

         <Marquee pauseOnHover gradient={false} speed={30} className="gap-6 mt-4">
        {partnerLogos.map((logo, i) => (
          <div
            key={i}
            className="group relative mx-4 w-32 h-24 border border-gray-200 rounded-lg bg-white transition-all duration-500 hover:bg-[#2E709B] flex items-center justify-center"
          >
            {/* Background visible through transparent PNGs */}
            <div className="relative w-[70px] h-[60px]">
              {/* Default */}
              <Image
                src={logo.default}
                alt={`Partner ${i + 1}`}
                fill
                className="object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              {/* Hover */}
              <Image
                src={logo.hover}
                alt={`Partner ${i + 1} Hover`}
                fill
                className="object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
        </div>
      </div>
    </div>
  );
}
