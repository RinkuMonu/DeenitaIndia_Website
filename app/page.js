import BestChoices from "@/components/BestChoices";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import HomeSteps from "@/components/HomeSteps";
import Industries from "@/components/Industries";
import Partners from "@/components/Partners";
import ProjectCarousel from "@/components/Slider";
import Testonomials from "@/components/Testonomials";
import Image from "next/image";


export default function Home() {


  return (
    <>
      <section className="home-hero-section  py-10">
       <div className=" container">
         <div className="grid grid-cols-2">
          <div className="pt-20 flex flex-col gap-4">
            <h1 className="theme-text text-2xl text-[55px] font-bold">
              One platform to handle everything
            </h1>
            <p className="text-base font-semibold text-[#515151] max-w-md">
              Consolidate your projects, clients and team into
              one integrated, easy-to-use platform
            </p>
            <div>
              <button type="button" className="text-white shadow-[0_8px_30px_rgba(138,173,187)] me-4 font-semibold bg-[#115D8E] py-3 rounded-lg text-base px-6 text-center   ">Get started</button>
              <button type="button" className="font-semibold bg-white rounded-lg shadow-[0_8px_30px_rgba(138,173,187)] text-base px-6 py-3 text-center text-[#39464F] ">Book a demo</button>
            </div>
            <div>
              <p className="text-[40px] font-semibold"><span className="theme-text">100+ </span>Projects</p>
              <p className="text-sm max-w-32 text-[#515151]">
                Consolidate your projects, clients and team into
              </p>
            </div>
          </div>
          <div className="relative home-img-height">
            <Image className="object-cover rounded-md p-0" src="/images/home-main.png" fill alt="banner image" />
          </div>
        </div>
       </div>

      </section>

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
