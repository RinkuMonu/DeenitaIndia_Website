"use client";
import Image from "next/image";
import {
  UserPlus,
  IdCard,
  FileSearch,
  ShieldCheck,
  LayoutDashboard,
  CheckCircle,
} from "lucide-react";

export default function HomeSteps() {
  const steps = [
    {
      title: "Register / Create an Account",
      description: "You're signed up with your basic details",
      icon: <UserPlus className="h-8 w-8" />,
    },
    {
      title: "Complete KYC & Upload Documents",
      description: "Confirm your identity by uploading the required documentation",
      icon: <IdCard className="h-8 w-8" />,
    },
    {
      title: "Select a Service or Request a Quote",
      description: "Choose the service you need or request a custom quote",
      icon: <FileSearch className="h-8 w-8" />,
    },
    {
      title: "Escrow Setup / Legal Process Begins",
      description: "Your funds are placed in escrow, and the process begins",
      icon: <ShieldCheck className="h-8 w-8" />,
    },
    {
      title: "Real-time Dashboard Access ",
      description: "You can track the status of your project anytime based on live updates",
      icon: <LayoutDashboard className="h-8 w-8" />,
    },
    {
      title: "Completion & Secure Closure",
      description: "You'll obtain confirmation and close out the service securely",
      icon: <CheckCircle className="h-8 w-8" />,
    },
  ];

  return (
    <section className="relative bg-sand text-ink">
      <div className="container mx-auto px-6 md:px-10 lg:px-14 pt-16 md:pt-20 pb-16">
        {/* header */}
        <div>
          <p className="heading font-semibold mb-8 capitalize">
            Here's how it <span className="theme-text">Works</span> <br /> that drive results
          </p>
        </div>

        {/* ARROWS (first row) */}
        <div className="relative mt-14">
          <Image
            src="/Newimg/bgimg/workprocess-shape1.webp"
            alt=""
            width={900}
            height={240}
            className="
              pointer-events-none select-none
              hidden lg:block
              absolute
              top-[-1.25rem] md:top-[-0.5rem] xl:top-[50%]
              left-72 -translate-x-1/2
              w-[18%] max-w-[520px] min-w-[280px] h-auto
            "
          />
          {/* right arrow: between column 2 and 3 */}
          <Image
            src="/Newimg/bgimg/workprocess-shape2.webp"
            alt=""
            width={900}
            height={240}
            className="
              pointer-events-none select-none
              hidden lg:block
              absolute
              top-[-1.25rem] md:top-[-0.5rem] xl:top-[50%]
              right-72 -translate-x-1/2
              w-[18%] max-w-[520px] min-w-[280px] h-auto
            "
          />

          {/* steps (3 columns desktop, 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {steps.map((s, i) => (
              <Step
                key={s.title}
                index={String(i + 1).padStart(2, "0")}
                title={s.title}
                description={s.description}
                icon={s.icon}
                isFirst={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ index, title, description, icon, isFirst  }) {
  return (
    <div
    className={`relative p-3 transition-all 
      ${isFirst ? "shadow-2xl" : "hover:shadow-2xl"}`}
  >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-circle ring-1 ring-ring">
        {icon}
      </div>
      <div className="absolute -left-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#115c8c] text-white text-sm font-bold ring-8 ring-sand">
        {index}
      </div>
      <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
      <p className="mt-3 max-w-xl text-base leading-7 text-sub">{description}</p>
    </div>
  );
}
