"use client";

import Image from "next/image";
import Cta from "@/components/Cta";
import Link from "next/link";
// import AOS from "aos";
import "aos/dist/aos.css";


const images1 = [
  { src: "/Image/Rectangle 61.png", w: "w-[220px]", h: "h-[240px]" },
  { src: "/Image/Rectangle 61.png", w: "w-[220px]", h: "h-[269px]" },
]
const images2 = [
{ src: "/Image/Rectangle 61.png", w: "w-[220px]", h: "h-[120px]" },
  { src: "/Image/Rectangle 61.png", w: "w-[220px]", h: "h-[160px]" },
  { src: "/Image/Rectangle 61.png", w: "w-[220px]", h: "h-[240px]" },
]
const images3 = [
  { src: "/Image/Rectangle 61.png", w: "w-[220px]", h: "h-[160px]" },
  { src: "/Image/Rectangle 61.png", w: "w-[220px]", h: "h-[160px]" },
]

const images4 = [
 { src: "/Image/Rectangle 61.png", w: "w-[220px]", h: "h-[269px]" },

]



export default function CompanySection() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 relative before:content-[''] before:absolute before:inset-0 before:backdrop-blur-[100px] before:z-[-1] z-1 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full bg-[#eaf4fa] rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row">
            <div className="w-full md:w-3/5">
              <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white text-sm px-4 py-1 rounded-full mb-4">
                About Company
              </span>
              <h1 className="text-2xl md:text-[32px] font-bold text-[#115d8e] mb-4 md:pr-10">
                Creating connections through impactful experiences
              </h1>
              <p className="text-gray-800 mb-6 text-base md:text-[16px] md:pr-8">
                We turn bold ideas into impactful results through design,
                strategy, and innovation.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-md w-full sm:w-40 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                  <Image
                    src="/Image/distribution 1.png"
                    alt="Icon"
                    width={32}
                    height={36}
                    className="mx-auto mb-2"
                  />
                  <div className="flex justify-center">
                    <div className="text-xs md:text-[13px] font-semibold text-[#184766] md:pl-2">
                      2000+
                    </div>
                    <div className="text-xs md:text-[13px] text-gray-600 pl-1 md:pl-2">
                      Distributors
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-md w-full sm:w-40 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                  <Image
                    src="/Image/region 1.png"
                    alt="Icon"
                    width={32}
                    height={36}
                    className="mx-auto mb-2"
                  />
                  <div className="flex justify-center">
                    <div className="text-xs md:text-[13px] font-semibold text-[#184766] md:pl-2">
                      100,000 +
                    </div>
                    <div className="text-xs md:text-[13px] text-gray-600 pl-1 md:pl-2">
                      Retailers
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-md w-full sm:w-40 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                  <Image
                    src="/Image/shop 1.png"
                    alt="Icon"
                    width={32}
                    height={36}
                    className="mx-auto mb-2"
                  />
                  <div className="flex justify-center">
                    <div className="text-xs md:text-[13px] font-semibold text-[#184766] md:pl-4">
                      800 +
                    </div>
                    <div className="text-xs md:text-[13px] text-gray-600 pl-1 md:pl-2">
                      Districts
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="mt-4 md:mt-6 bg-[#115d8e] hover:bg-[#006c9d] text-white font-semibold px-6 py-2 rounded-md shadow-md">
                Get started
              </Link>
            </div>

            <div className="hidden md:block md:absolute right-10 lg:right-40 top-[90px] transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/Image/Rectangle 45.png"
                  alt="Team working"
                  width={398}
                  height={190}
                  className="banner-overlaid-img object-cover h-[540px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>





      <div className="mt-16 md:mt-32 w-full px-4 sm:px-6">
        <h3 className="relative text-3xl md:text-5xl font-bold mb-8 md:mb-14 pl-0 md:pl-32 text-center md:text-left">
<div className="absolute w-96 h-96 bg-[#115D8E] rounded-full opacity-15 blur-3xl top-20 -left-20 z-0"></div>
          <span className="text-[#115d8e]">Our </span>
          <span className="text-gray-700">Vision & Mission</span>
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-0 md:px-10">
  {/* Vision Card */}
  <div className="bg-[#166599] text-white p-6 md:p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
      <h3 className="text-2xl md:text-[36px] font-bold text-center flex items-center justify-center gap-2 pl-10">
        <Image
          src="/Image/vision.png"
          alt="Icon"
          width={32}
          height={36}
        />
        Vision
      </h3>
    </div>
    <p className="text-sm md:text-base leading-relaxed mx-0 md:mx-10 text-center md:text-left">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti atque corrupti quos
      dolores et quas.
    </p>
  </div>

  {/* Mission Card */}
  <div className="bg-white border border-gray-200 text-[#166599] p-6 md:p-8 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#f9f9f9]">
    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
      <h3 className="text-2xl md:text-[36px] font-bold text-center flex items-center justify-center gap-2 pl-10">
        <Image
          src="/Image/Mission.png"
          alt="Icon"
          width={32}
          height={36}
        />
        Mission
      </h3>
    </div>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed mx-0 md:mx-10 text-center md:text-left">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti atque corrupti quos
      dolores et quas.
    </p>
  </div>
</div>

      </div>





      <section className="w-full py-8 md:py-12 overflow-hidden relative bg-cover bg-center bg-no-repeat px-4 sm:px-6">
        <div
          className="relative z-10 bg-white bg-opacity-90 backdrop-blur-[100px] rounded-lg mx-auto max-w-7xl p-4 md:p-6"
          style={{ backgroundImage: 'url("/Image/about-2-bg.png")' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="absolute top-0 left-0 h-full w-2 md:w-7 bg-[#115d8e]" />
            <div className="absolute top-0 right-0 h-full w-2 md:w-7 bg-[#115d8e]" />
            <div className="w-full md:w-[40%] flex justify-center">
              <div className="relative rounded-xl overflow-hidden md:left-10 w-full max-w-[400px] transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src="/Image/Rectangle 52.png"
                  alt="CEO"
                  width={400}
                  height={400}
                  className="rounded-xl w-full h-auto"
                  layout="responsive"
                />
                <div className="absolute bottom-0 bg-gradient-to-r from-[#115d8e] to-gray-700 text-white px-4 py-2">
                  <p className="text-xs md:text-sm font-semibold">deleniti atque</p>
                  <p className="text-[10px] md:text-xs">Ceo at Velasconde</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[60%] mt-6 md:mt-0">
              <h3 className="text-3xl md:text-[48px] font-bold text-[#115d8e] leading-tight mb-2">
                We started this journey
                <br />
                with one goal
              </h3>
              <p className="text-gray-500 mb-4 font-medium text-lg md:text-[20px] md:pr-32">
                to make a real difference in people's lives through experiences
                that matter.
              </p>
              <p className="text-gray-400 text-sm md:text-base md:pr-28">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas. At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas.
                <br />
                <br />
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas.
              </p>
            </div>
          </div>
        </div>
      </section>


  <Cta/>


      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white relative">
          <div className="absolute w-82 h-82 bg-[#115D8E] rounded-full opacity-15 blur-3xl top-70 -left-20 z-0"></div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div>
            <h3  className="text-3xl md:text-[48px] font-bold text-gray-800 leading-snug">
              Proud Moments & <br />
              <span className="text-[#2E709B]">Achievements</span>
            </h3>
            <p className="mt-4 md:mt-6 text-gray-600 leading-relaxed text-sm md:text-base pr-0 md:pr-14">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas At vero eos et accusamus et iusto odio dignissimos
            </p>
          </div>

          {/* Right Grid Box */}
          <div  className="grid grid-cols-2 gap-4 md:gap-8 p-4 md:p-8 border-0.9 rounded-xl shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-xl">
            {[
              { value: "9+", label: "Years" },
              { value: "99%", label: "Certified" },
              { value: "80 +", label: "Clients" },
              { value: "100+", label: "Projects" },
            ].map((item, index) => (
              <div key={index} className="p-2 md:p-0">
                <span className="flex items-center transform transition duration-300 hover:scale-110">
                  <h4 className="text-xl md:text-2xl font-semibold text-[#115D8E] ">
                    {item.value}
                  </h4>
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-600 pl-2">
                    {item.label}
                  </h4>
                </span>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Consolidate your projects,
                  <br />
                  clients and team into
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium mb-4">
            Your Data, Our Responsibility
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Built on Trust
          </h3>

          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-12">
            We follow industry-leading security protocols to safeguard your data
            and privacy.
            <br className="hidden md:block" />
            Trust is the foundation of everything we do — and we never
            compromise on it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center px-0 md:pl-20">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-4 md:p-6 text-left border border-gray-100 hover:shadow-md transition shadow-[1px_1px_100px_1px_#115D8E2E] w-full mx-auto max-w-xs transform duration-300 hover:scale-110"
              >
                <div className="mb-1">
                  <div className="w-8 h-8 md:w-10 md:h-10 transform transition duration-300 hover:scale-120">
                    <Image
                      src="/Image/folder.png"
                      alt="Icon"
                      width={32}
                      height={36}
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#115D8E] mb-2">
                  Data Privacy & Protection
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  At vero eos et accusamus et iusto odio dignissimos ducimus odio
                  dignissimos ducimus
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8 md:mt-12 w-[max-content] mx-auto transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <Link href="/contact" className="bg-[#115D8E] text-white px-6 md:px-10 py-2 rounded-lg font-semibold shadow-md transition flex items-center justify-center gap-2">
              Get started
              <Image
                src="/Image/arrow-right.png"
                alt="Icon"
                width={20}
                height={20}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Media Highlights Section */}
      <section className="bg-white py-12 lg:px-32 md:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
           <div className="absolute w-96 h-96 bg-[#115D8E] rounded-full opacity-15 blur-3xl top-140 -right-20 z-0"></div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 md:mb-10">
            <h3 className="text-3xl md:text-5xl font-bold text-gray-800 pl-0 md:pl-10 mb-4 md:mb-0 text-center md:text-left">
              Media <span className="text-[#115D8E]">Highlights</span>
            </h3>
            <p className="text-gray-600 max-w-md text-sm md:text-base text-center md:text-left">
              Our work and impact have been featured across trusted media
              platforms.
              <br className="hidden md:block" />
              Explore what the press is saying about us.
            </p>
          </div>


         <div className="flex gap-3 align-item-center">

      {/* <div className="w-[160px] h-[240px] bg-[#0E2A38]/80 text-white rounded-xl p-4 backdrop-blur-lg flex flex-col justify-center shadow-md">
        <h2 className="text-2xl font-bold mb-1">Media</h2>
        <p className="text-sm">
          Consolidate your projects, clients and team into Consolidate your
          projects, clients and team into
        </p>
      </div> */}


     <div className="grid grid-cols-1">
       {images1.map((img, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${img.w} ${img.h}`}
        >
          <Image
            src={img.src}
            alt={`Media ${idx + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
     </div>
  <div className="grid grid-cols-1">
{images2.map((img, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${img.w} ${img.h}`}
        >
          <Image
            src={img.src}
            alt={`Media ${idx + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
</div>
 <div className="grid grid-cols-1">
      {images3.map((img, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${img.w} ${img.h}`}
        >
          <Image
            src={img.src}
            alt={`Media ${idx + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      </div>
 <div className="grid grid-cols-1">
      {images4.map((img, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${img.w} ${img.h}`}
        >
          <Image
            src={img.src}
            alt={`Media ${idx + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      </div>
    </div>

          <div className="mt-8 md:mt-12 text-center">
            <Link href="/contact">
            <button className="px-6 md:px-8 py-2 md:py-3 rounded-lg bg-white border border-gray-300 shadow-[2px_2px_20px_0px_#8AADBB] hover:shadow-lg transition font-semibold flex items-center justify-center gap-2 mx-auto">
              Contact Us
              <Image
                src="/Image/arrow-top-right.png"
                alt="Icon"
                width={20}
                height={20}
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}