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
export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute bottom-0 left-0 w-full"
            style={{
              backgroundImage: `url("/Image/Vector 1.png")`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "67px", // fixed height
            }}
          ></div>
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-accent/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse delay-1000"></div>
          <div className="absolute w-64 h-64 bg-secondary/5 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
            <div className="space-y-8">
              {/* Trust indicators */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>Bank-level Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  <span>SOC 2 Certified</span>
                </div>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Innovative
                  </span>
                  <br />
                  Financial Solutions
                  <br />
                  <span className="text-3xl lg:text-4xl font-semibold text-muted-foreground">
                    You Can Trust
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Empowering your financial decisions with cutting-edge
                  technology, comprehensive analytics, and enterprise-grade
                  security.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="group bg-card/80 backdrop-blur-sm hover:bg-card text-card-foreground font-semibold py-4 px-8 rounded-xl border border-border/50 hover:border-border transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  Book a Demo
                  <Users className="w-4 h-4" />
                </Link>
              </div>

              {/* Stats and trust elements */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-3xl lg:text-4xl font-bold text-primary">
                      $2.5B+
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Transactions processed securely
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-3xl lg:text-4xl font-bold text-primary">
                      10K+
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Businesses trust our platform
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/20 shadow-2xl">
                {/* Dashboard mockup */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      Financial Dashboard
                    </h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="w-3 h-3 bg-muted rounded-full"></div>
                    </div>
                  </div>

                  {/* Chart area */}
                  <div className="bg-muted/30 rounded-xl p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Portfolio Value
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        $847,392
                      </span>
                    </div>

                    {/* Simulated chart */}
                    <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-end justify-between p-4">
                      {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-primary to-accent rounded-sm w-6 transition-all duration-1000"
                          style={{
                            height: `${height}%`,
                            transitionDelay: `${i * 100}ms`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <div className="text-sm text-muted-foreground">
                        Monthly Growth
                      </div>
                      <div className="text-xl font-bold text-accent">
                        +12.5%
                      </div>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-4">
                      <div className="text-sm text-muted-foreground">
                        Risk Score
                      </div>
                      <div className="text-xl font-bold text-primary">Low</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4  -right-4 bg-accent/10 backdrop-blur-sm rounded-full p-4 border border-accent/20">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary/10 backdrop-blur-sm rounded-full p-4 border border-primary/20">
                <TrendingUp className="w-6 h-6 text-primary" />
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
      <Blog />
      <Cta />
      <Partners /> 
    </>
  );
}
