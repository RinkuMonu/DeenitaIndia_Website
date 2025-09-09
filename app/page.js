import Link from "next/link";
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Slider from "../components/Slider";
import HomeSteps from "../components/HomeSteps";
import BestChoices from "../components/BestChoices";
import Industries from "../components/Industries";
import Testonomials from "../components/Testonomials";
import Blog from "../components/Blog";
import Cta from "../components/Cta";
import Partners from "../components/Partners";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative hero-15 min-h-screen overflow-hidden" style={{ backgroundImage: "url(/Newimg/herosection/hero_bg_2.webp)", }}>
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none z-50">
          <div
            className="absolute bottom-0 left-0 w-full"
            style={{
              backgroundImage: `url("/Image/Vector 1.png")`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "67px",
            }}
          />
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-20 -left-20 animate-pulse" />
          <div className="absolute w-80 h-80 bg-accent/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse delay-1000" />
          <div className="absolute w-64 h-64 bg-secondary/5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative container mx-auto px-14 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
            {/* Left Section */}
            <div className="space-y-8 z-10 py-10">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#046eb4]" />
                  <span>Bank-level Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#046eb4]" />
                  <span>SOC 2 Certified</span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  <span className="bg-gradient-to-r from-[#115D8E] to-[#046eb4] bg-clip-text text-transparent">
                    Empowering Businesses
                  </span>
                  <br />
                  Through <span className="text-[#3B82F6]">Technology</span>
                </h1>

                <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Empowering your financial decisions with cutting-edge technology,
                  comprehensive analytics, and enterprise-grade security.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group bg-card/80 backdrop-blur-sm hover:bg-card text-card-foreground font-semibold py-4 px-8 rounded-xl border border-border/50 hover:border-border transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  Book a Demo
                  <Users className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="absolute top-0 right-0 w-[100%] h-[100%]">
              <div
                className="relative w-full h-full p-2"
                style={{
                  background: "linear-gradient(135deg,#9FB3F9,#6A8DFF)",
                  WebkitMaskImage: "url('/Newimg/herosection/hero_shape_4.png')",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "top right",
                  WebkitMaskSize: "contain",
                  maskImage: "url('/Newimg/herosection/hero_shape_4.png')",
                  maskRepeat: "no-repeat",
                  maskPosition: "top right",
                  maskSize: "contain",
                  borderRadius: 0,
                }}
              >
                <div
                  className="absolute inset-2"
                  style={{
                    WebkitMaskImage: "url('/Newimg/herosection/hero_shape_4.png')",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "top right",
                    WebkitMaskSize: "contain",
                    maskImage: "url('/Newimg/herosection/hero_shape_4.png')",
                    maskRepeat: "no-repeat",
                    maskPosition: "top right",
                    maskSize: "contain",
                  }}
                >
                  <img
                    src="/Newimg/herosection/hero_img_12_1.jpg"
                    alt="Hero"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slider />
      <HomeSteps />
      <BestChoices />
      <Industries />
      <Testonomials />
      <Partners />
      <Cta />
      <Blog />
    </>
  );
}
