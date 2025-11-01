"use client"
import Cta from "@/components/Cta";
import ServiceAccordian from "@/components/ServiceAccordian";
import ServiceAdvantage from "@/components/ServiceAdvantage";
import ServiceBanner from "@/components/ServiceBanner";
import ServiceContracts from "@/components/ServiceContracts";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceSection2 from "@/components/ServiceSection2";
import ServicesSteper from "@/components/ServicesSteper";
import React from "react";
import { Library, MessageSquare, BellRing, Share2, Combine, Keyboard } from "lucide-react";

const featuresData = [
  {
    icon: Library,
    title: "One-Stop Platform",
    description: "Pay all utilities in one place.",
    side: 'left',
  },
  {
    icon: MessageSquare,
    title: "Secure Payments",
    description: "Banking-grade security on every transaction.",
    side: 'right',
  },
  {
    icon: BellRing,
    title: "24/7 Access",
    description: "Make payments anytime, anywhere.",
    side: 'left',
  },
  {
    icon: Share2,
    title: "Wide Coverage",
    description: "Electricity, water, gas, mobile, broadband & more.",
    side: 'right',
  },
  {
    icon: Combine,
    title: "Easy Tracking",
    description: "View history and receipts instantly.",
    side: 'left',
  },
  {
    icon: Keyboard,
    title: "Reliable Support",
    description: "Assistance whenever you need it.",
    side: 'right',
  },
];

const sections = [
  {
    title: "Multi-Utility Payment Solutions – Secure & Efficient",
    description:
      "Simplify utility payments with real-time dashboards, milestone-based fund releases, and full transparency across all transactions.",
    buttonText: "Connect Now",
    imageSrc: "/images/lc3.jpg",
    features: [
      { icon: "/images/milestone.png", label: "Milestone-Based Release" },
      { icon: "/images/dashbord.png", label: "Real-Time Dashboard" },
      { icon: "/images/transparency.png", label: "Complete Transparency" },
    ],
  },
];

function page() {
  const EscrowService = [
    {
      tag: "Services",
      title: "Reliable Utility Services",
      description:
        "Streamline your payments and essential services with secure, fast, and hassle-free solutions for everyday convenience and efficiency.",
      ctaText: "Connect",
      ctaLink: "/contact",
      imageSrc: "/images/us1.jpg",
      features: [
        {
          value: "25+",
          label: "Quick Payments"
        },
        {
          value: "1250+",
          label: "Seamless Integration"
        },
        {
          value: "99%",
          label: "24/7 Availability "
        }
      ],
    },
  ];
  const section2 = [
    {
      tag: "About Utility Services ",
      tag1: "hjh hghgjh",
      tag2: "hjh hghgjh",
      title:
        "Simplifying Everyday Payments with Ease",
      description:
        "Deenita India’s Utility Services make bill payments and essential transactions simple, secure, and fast. From electricity, water, and gas to mobile, broadband, and insurance, our platform provides a one-stop solution for managing all your utility needs with ease and transparency.",
      ctaText: "Get started",
      ctaLink: "/get-started",
      imageSrc: "/images/us2.png",
    },
  ];
  const contractData = [
    {
      title: "Industries We Serve – Utility Services",
      subtitle:
        "Enabling secure, transparent, and efficient payment solutions that simplify transactions and build trust across utility services.",
      items: [
        {
          title: "Households",
          description:
            "Manage electricity, water, gas, and broadband payments with ease.",
          image: "/images/b2b.jpg",
        },
        {
          title: "Businesses / SMEs",
          description:
            "Handle bulk bill payments and recurring utilities efficiently.",
          image: "/images/freelancing.jpg",
        },
        {
          title: "Corporates",
          description:
            "Streamline office utilities, telecom, and insurance payments securely.",
          image: "/images/real-estate.jpg",
        },
        {
          title: "Educational Institutions",
          description:
            "Manage fee collections and campus utility expenses.",
          image: "/images/b2b.jpg",
        },
        {
          title: "Healthcare Providers",
          description:
            "Simplify utility and service payments for hospitals and clinics.",
          image: "/images/freelancing.jpg",
        },
        {
          title: "E-commerce & Retail",
          description:
            "Pay for digital services, internet, and operational utilities.",
          image: "/images/real-estate.jpg",
        },
        {
          title: "Government & Public Sector",
          description:
            "Ensure timely payments of essential services.",
          image: "/images/b2b.jpg",
        },
      ]

    },
  ];
  const accordiansections = [
    {
      title: "enables instant and paperless identity verification",
      subtitle: "eKYC Integration Service",
      imageSrc: "/images/us3.jpg",
      items: [
        {
          title: "Real-Time Invoicing",
          description: "Instant invoice generation aligned with GST rules.",
        },
        {
          title: "Automated Tax Calculation",
          description: "System calculates CGST, SGST, and IGST automatically.",
        },
        {
          title: "Real-Time Invoicing",
          description: "Instant invoice generation aligned with GST rules.",
        },
        {
          title: "Automated Tax Calculation",
          description: "System calculates CGST, SGST, and IGST automatically.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="">
        <ServiceHeroSection sections={EscrowService} />
        <ServiceSection2 sections={section2} />
      </div>
      <Cta />
      <div className="">
        <ServiceContracts contracts={contractData} />
      </div>
      <ServiceAccordian sections={accordiansections} />
      <ServiceBanner sections={sections} />
      <div className="container">

        <ServiceAdvantage featuresData={featuresData} title={"Discover the benefits of Deenita India’s"} description={"Utility Services—secure, fast, and reliable solutions that simplify everyday payments and keep your life hassle-free."} />

      </div>
    </>
  );
}

export default page;
