import BestChoices from "@/components/BestChoices";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import HomeSteps from "@/components/HomeSteps";
import Industries from "@/components/Industries";
import Partners from "@/components/Partners";
import ProjectCarousel from "@/components/Slider";
import Testonomials from "@/components/Testonomials";
import Image from "next/image";
import Link from "next/link";


export default function Home() {


  return (
    <>
      <section className="home-hero-section  pt-10 pb-5 lg:pb-0">
        <div className="absolute w-72 h-72 bg-[#115D8E] rounded-full opacity-30 blur-3xl top-50 -left-50 z-0"></div>
       <div className=" container">
         <div className="grid lg:grid-cols-2">
          <div className="pt-20 flex flex-col gap-4">
            <h1 className="theme-text text-4xl lg:text-6xl font-bold">
              One platform to handle everything
            </h1>
            <p className="text-base font-semibold text-[#515151] max-w-md">
              Consolidate your projects, clients and team into
              one integrated, easy-to-use platform
            </p>
            <div className="flex flex-row gap-4">
              <Link href="/login" className="text-white shadow-[0_8px_30px_rgba(138,173,187)]  font-semibold bg-[#115D8E] py-2 md:py-3 rounded-lg text-base px-3 md:px-6 text-center w-fit  ">Get started</Link>
              <Link href="/contact" className="font-semibold bg-white rounded-lg shadow-[0_8px_30px_rgba(138,173,187)] text-base px-3 md:px-6 py-2 md:py-3 text-center text-[#39464F] w-fit">Book a demo</Link>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold"><span className="theme-text">100+ </span>Projects</p>
              <p className="text-sm lg:max-w-32 text-[#515151]">
                Consolidate your projects, clients and team into
              </p>
            </div>
          </div>
          <div className="relative home-img-height hidden lg:block">
              <div className="absolute w-72 h-72 bg-[#115D8E] rounded-full opacity-10 blur-3xl top-20 -left-30 z-0"></div>
            <Image className="object-cover rounded-md p-0 w-auto h-full" src="/images/home-main.png" width={400} height={400} alt="banner image" />
          </div>
        </div>
       </div>
      </section>
      <div className="relative w-full">
  <svg
    viewBox="0 0 100 10"
    preserveAspectRatio="none"
    className="w-full h-0 md:h-10 lg:18"
  >
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#DDEAF0">
          <animate attributeName="offset" values="0%;1" dur="2s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" stopColor="#9BB4C3">
          <animate attributeName="offset" values="0.5;1.5" dur="2s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#D9E7EE">
          <animate attributeName="offset" values="1;2" dur="2s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>

    <path
      d="M0,0 H30 L35,10 H65 L70,0 H100"
      fill="#E4EEF480"
      stroke="url(#animatedGradient)"
      strokeWidth="0.6"
    />
  </svg>
</div>

      <ProjectCarousel />
      <HomeSteps />
      <BestChoices/>
      <Industries/>
      <Testonomials/>
      <Blog/>
      <Cta/>
      <Partners/>



    </>
  );
}
