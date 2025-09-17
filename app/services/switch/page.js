"use client"
// import BankingPartner from "@/components/BankingPartner";
import Partners from "@/components/Partners";
import Cta from "@/components/Cta";
import ServiceAdvantage from "@/components/ServiceAdvantage";
import ServiceBanner from "@/components/ServiceBanner";
import ServiceContracts from "@/components/ServiceContracts";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceSection2 from "@/components/ServiceSection2";
import ServicesSteper from "@/components/ServicesSteper";
import { Library, MessageSquare, BellRing, Share2, Combine, Keyboard } from "lucide-react";
import React from "react";
const featuresData = [
  {
    icon: Library,
    title: "Seamless Transfers",
    description: "Move your salary account, savings, or business accounts across banks without disrupting your financial activities.",
    side: 'left',
  },
  {
    icon: MessageSquare,
    title: "Hassle-Free Process",
    description: " No more lengthy paperwork and endless visits. We simplify the process for you.",
    side: 'right',
  },
  {
    icon: BellRing,
    title: "Secure & Reliable",
    description: "Every switch is backed by strong encryption and compliance with banking and regulatory standards.",
    side: 'left',
  },
  {
    icon: Share2,
    title: "One-Stop Solution",
    description: " Whether you’re shifting for better interest rates, digital banking, or convenience, we make your transition smooth.",
    side: 'right',
  },
  // {
  //   icon: Combine,
  //   title: "Merge Files",
  //   description: "There are many variations of passages of Lorem Ipsum.",
  //   side: 'left',
  // },
  // {
  //   icon: Keyboard,
  //   title: "Custom Shortcuts",
  //   description: "There are many variations of passages of Lorem Ipsum.",
  //   side: 'right',
  // },
];
const sections = [
  {
    title: "What Makes Us Different?",
    description:
      "Experience easy, secure, reliable transaction management through Switch Service.",
    buttonText: "Connect Now",
    imageSrc: "/images/switchservice.jpg",
    features: [
      { icon: "/images/dashbord.png", label: "Secure" },
      { icon: "/images/dashbord.png", label: "Affordable" },
      { icon: "/images/dashbord.png", label: "Community" },
    ],
  },
];

const data =
{
  title: "Let Us Help You Find the Perfect Fit",
  description:
    "Tell us your requirements, and our specialists will provide tailored Switch Service solutions for your business.",
}

function page() {
  const EscrowService = [
    {
      tag: "Services",
      title: "Switch Service – Seamless, Secure Transactions",
      description:
        "Easily manage transactions across channels while enjoying fast, secure, and reliable processing with our Switch Service.",
      ctaText: "Connect",
      ctaLink: "/contact",
      imageSrc: "/images/switch1.jpg",
      features: [
        {
          value: "25+",
          label: "Minimize errors"
        },
        {
          value: "1250+",
          label: "Fraud prevention"
        },
        {
          value: "99%",
          label: "Reliability "
        }
      ],
    },
  ];
  const section2 = [
    {
      tag: "Switch Service",
      tag1: "hjh hghgjh",
      tag2: "hjh hghgjh",
      title:
        " Switch Service – Fast, Secure & Reliable Multi-Channel Transactions",
      description:
        "Deenita India’s Switch Service ensures seamless fund routing with top-tier security and speed. Transactions are validated in real-time, processed only when conditions are met, giving businesses and customers complete trust and efficiency.",
      ctaText: "Ready to get started?",
      ctaLink: "/get-started",
      imageSrc: "/images/switch2.png",
    },
  ];
  const contractData = [
    {
      title: "Industries We Serve",
      subtitle:
        "Serving diverse sectors with secure, transparent, and efficient escrow and payment solutions tailored to industry needs.",
      items: [
        {
          title: "B2B",
          description:
            "Understand the standards and safety for parties involved in business-to-business transactions.",
          image: "/images/b2b.jpg",
        },
        {
          title: "Real Estate",
          description:
            "Control property payments and escrow processes.",
          image: "/images/real-estate.jpg",
        },
        {
          title: "Freelancing",
          description:
            "Secure and protect payments between freelancers and their clients.",
          image: "/images/freelancing.jpg",
        },
        {
          title: "E-commerce",
          description:
            "Allow payments to take place quickly and wirelessly.",
          image: "/images/real-estate.jpg",
        },
        {
          title: "Financial Services / NBFCs",
          description:
            "Make banking and transaction processing simple.",
          image: "/images/freelancing.jpg",
        },
        {
          title: "Legal/Consultancy Firms",
          description:
            "Safety for your client to make meaningful payments.",
          image: "/images/b2b.jpg",
        },
      ]

    },
  ];
  const stepperData = {
    title: "How Switch Service works",
    subtitle:
      "Seamless, secure, and smart transaction routing",
description:      "Every step is validated in real-time, and payments are processed only when both parties meet the agreed conditions.",
    steps: [
      {
        image: "/images/stepper.png",
        title: "Register & Complete KYC",
        description: "Create an account and upload your documentation.",
      },
      {
        image: "/images/stepper.png",
        title: "Choose Service and Make Payment",
        description: "Select Switch Service and pay securely through our platform.",
      },
      {
        image: "/images/stepper.png",
        title: "Transaction Processing and Completion",
        description: "Funds are routed safely and transactions are completed reliably.",
      },
    ],
  };
  return (
    <>
      <div className="">
        <ServiceHeroSection sections={EscrowService} />
        <ServiceSection2 sections={section2} />
        <ServiceContracts contracts={contractData} />
      </div>
      <Cta data={data} />
      <div className="">
        <ServicesSteper data={stepperData} />
      </div>
      <ServiceBanner sections={sections} />

      {/* <div>
        <BankingPartner />
      </div> */}
      <Partners />
      <div className="container">
        <ServiceAdvantage featuresData={featuresData} title={"Secure, smart, and trusted transactions"} description={"We deliver reliable, transparent, and compliant payment solutions that protect businesses and build customer confidence."}/>
      </div>
    </>
  );
}

export default page;
