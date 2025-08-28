import Cta from "@/components/Cta";
import ServiceAccordian from "@/components/ServiceAccordian";
import ServiceAdvantage from "@/components/ServiceAdvantage";
import ServiceBanner from "@/components/ServiceBanner";
import ServiceContracts from "@/components/ServiceContracts";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceSection2 from "@/components/ServiceSection2";
import ServicesSteper from "@/components/ServicesSteper";
import React from "react";
const sections = [
  {
    title: "Multi-Utility Payment API",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    buttonText: "Connect Now",
    imageSrc: "/images/lc3.jpg",
    features: [
      { icon: "/images/milestone.png", label: "Milestone-based release" },
      { icon: "/images/dashbord.png", label: "Dashboard" },
      { icon: "/images/transparency.png", label: "Transparency" },
    ],
  },
];
const sections1 = [
  {
    title: "Fully Compliant, Legally Secure",
    description:
      "We operate under full legal frameworks, ensuring all our services are compliant with applicable laws and regulations",
    imageSrc: "/images/us4.jpg",
    features: [
      {
        icon: "/images/legal_paper.png",
        label: "bgyg njoj",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
      },
      {
        icon: "/images/venture.png",
        label: "bgyg njoj",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
      },
      {
        icon: "/images/teamwork.png",
        label: "bgyg njoj",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
      },
      {
        icon: "/images/value_chian.png",
        label: "bgyg njoj",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
      },
    ],
  },
];
function page() {
  const EscrowService = [
    {
      tag: "Services",
      title: "Utility Service",
      description:
        "Our escrow service ensures secure transactions by holding funds until both parties meet agreed conditions.",
      ctaText: "Connect",
      ctaLink: "/contact",
      imageSrc: "/images/us1.jpg",
      features: [
        {
          icon: "/images/precaution.png",
          label: "Reduce risk",
        },
        {
          icon: "/images/precaution.png",
          label: "Reduce risk",
        },
        {
          icon: "/images/precaution.png",
          label: "Reduce risk",
        },
      ],
    },
  ];
  const section2 = [
    {
      tag: "Legal & Compliance Services",
      tag1: "hjh hghgjh",
      tag2: "hjh hghgjh",
      title:
        "We handle licensing, policy drafting, and ongoing compliance checks",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
      ctaText: "Get started",
      ctaLink: "/get-started",
      imageSrc: "/images/us2.png",
    },
  ];
  const contractData = [
    {
      title: "PAN-Aadhaar-GST Integration",
      subtitle:
        "From scope to timelines, everything is documented to ensure smooth collaboration",
      items: [
        {
          title: "B2B",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
          image: "/images/b2b.jpg",
        },
        {
          title: "Real Estate",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
          image: "/images/real-estate.jpg",
        },
        {
          title: "Freelancing",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
          image: "/images/freelancing.jpg",
        },
      ],
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
      <div className="container">
        <ServiceHeroSection sections={EscrowService} />
        <ServiceSection2 sections={section2} />
      </div>
      <Cta />
      <div className="container">
        <ServiceContracts contracts={contractData} />
      </div>
      <ServiceAccordian sections={accordiansections} />
      <ServiceBanner sections={sections} />
      <div className="container">
        <ServiceAdvantage sections={sections1} />
      </div>
    </>
  );
}

export default page;
