
"use client"
import React from 'react'
import Cta from '@/components/Cta';
import OrganizationalStructuring from '@/components/Organizational';
import ServiceAccordian from '@/components/ServiceAccordian';
import ServiceAdvantage from '@/components/ServiceAdvantage';
import { Library, MessageSquare, BellRing, Share2, Combine, Keyboard } from "lucide-react";
import ServiceBanner from '@/components/ServiceBanner';
import ServiceContracts from '@/components/ServiceContracts';
import ServiceHeroSection from '@/components/ServiceHeroSection'
import ServiceSection2 from '@/components/ServiceSection2';
import ServicesSteper from '@/components/ServicesSteper';


const sections = [
  {
    title: "Comprehensive Legal & Compliance",
    description: "Ensure your business operates smoothly with services that maintain full regulatory compliance, safeguard operations, and provide complete transparency.",
    buttonText: "Connect Now",
    imageSrc: "/images/lc3.jpg",
    features: [
      { icon: "/images/milestone.png", label: "Full Compliance" },
      { icon: "/images/dashbord.png", label: "Safe & Secure" },
      { icon: "/images/transparency.png", label: "Transparent Process" },
    ],
  },
];
const featuresData = [
  {
    icon: Library,
    title: "Secure Operations",
    description: "Protect your data and transactions.",
    side: 'left',
  },
  {
    icon: MessageSquare,
    title: "Regulatory Compliance",
    description: "Fully adhere to laws and standards.",
    side: 'right',
  },
  {
    icon: BellRing,
    title: "Transparency ",
    description: "Clear processes and reporting for accountability.",
    side: 'left',
  },
  {
    icon: Share2,
    title: "Risk Reduction",
    description: "Minimize legal and operational risks.",
    side: 'right',
  },
  {
    icon: Combine,
    title: "Expert Guidance ",
    description: " Professional support for compliance matters.",
    side: 'left',
  },
  {
    icon: Keyboard,
    title: "Real-Time Monitoring",
    description: "Track processes through dashboards.",
    side: 'right',
  },
];


function page() {
  const EscrowService = [
    {
      tag: "Services",
      title: "Legal & Compliance You Can Trust",
      description: "All our services follow strict regulatory guidelines, ensuring secure, transparent, and fully compliant operations for your peace of mind.",
      ctaText: "Connect",
      ctaLink: "/contact",
      imageSrc: "/images/lc1.jpg",
      features: [
        {
          value: "25+",
          label: "Regulatory Compliance"
        },
        {
          value: "1025+",
          label: "Secure Operations"
        },
        {
          value: "99",
          label: "Transparent Policies"
        }
      ],
    }
  ];
  const section2 = [
    {
      tag: "Legal & Compliance Services",
      tag1: "hjh hghgjh",
      tag2: "hjh hghgjh",
      title: "Comprehensive Legal & Compliance Services for Secure Transactions",
      description:
        "Deenita India ensures all financial services follow strict legal and regulatory standards, providing fully compliant, secure, and transparent solutions that build trust and protect your business and transactions.",
      ctaText: "Get started",
      ctaLink: "/get-started",
      imageSrc: "/images/lc2.png",
    },
  ]
  const contractData = [
    {
      title: "Industries We Serve",
      subtitle: "Tailored escrow and payment solutions built to meet the unique needs of every industry.",
      items: [
        {
          title: "Financial Services / NBFCs",
          description:
            "Ensure regulatory compliance for loans, investments, and transactions.",
          image: "/images/b2b.jpg",
        },
        {
          title: "Legal / Consultancy Firms",
          description:
            "Protect client payments and adhere to legal frameworks.",
          image: "/images/real-estate.jpg"
        },
        {
          title: "Real Estate",
          description:
            "Maintain compliance in property deals and financial transactions.",
          image: "/images/freelancing.jpg",
        },
        {
          title: "B2B Businesses",
          description:
            "Secure contracts and payments under regulatory standards.",
          image: "/images/real-estate.jpg"
        },
        {
          title: "E-commerce / Online Marketplaces",
          description:
            "Ensure safe, compliant transactions between buyers and sellers.",
          image: "/images/b2b.jpg"
        },
        {
          title: "Healthcare / Pharma",
          description:
            "Handle sensitive data and payments within legal regulations.",
          image: "/images/freelancing.jpg",
        },
      ]

    }

  ];
  const stepperData = {
    title: "How It Works – Legal & Compliance",
    subtitle: "Choose your service, complete KYC, and make a secure payment through our platform",
    description: "Deenita India ensures all services and operations follow strict legal and regulatory standards, providing secure, transparent, and fully compliant solutions.",
    steps: [
      {
        image: "/images/stepper.png",
        title: "Assessment",
        description: "We evaluate your business processes to identify legal and regulatory requirements.",
      },
      {
        image: "/images/stepper.png",
        title: "Implementation",
        description: "Apply compliance frameworks, policies, and secure procedures to your operations.",
      },
      {
        image: "/images/stepper.png",
        title: "Monitoring & Reporting",
        description: "Continuously monitor processes and provide transparent reports to ensure ongoing compliance.",
      },
    ],
  };
  const accordiansections = [
    {
      title: "Fully GST compliant and legally aligned",
      subtitle: "GST-Aligned Operations",
      imageSrc: "/images/lc4.jpg",
      items: [
        {
          title: "Real-Time Invoicing",
          description: "Instant invoice generation aligned with GST rules."
        },
        {
          title: "Automated Tax Calculation",
          description: "System calculates CGST, SGST, and IGST automatically."
        },
        {
          title: "Real-Time Invoicing",
          description: "Instant invoice generation aligned with GST rules."
        },
        {
          title: "Automated Tax Calculation",
          description: "System calculates CGST, SGST, and IGST automatically."
        }
      ]
    }
  ]


  return (
    <>
      <div className=''>
        <ServiceHeroSection sections={EscrowService} />
        <ServiceSection2 sections={section2} />
        <ServiceContracts contracts={contractData} />
      </div>
      <ServiceAccordian sections={accordiansections} />
      <div className='container'>
        <ServicesSteper data={stepperData} />
      </div>

      <ServiceBanner sections={sections} />
      <div className='container'>
        <ServiceAdvantage featuresData={featuresData} title={"Secure, compliant, and transparent solutions you trust"} description={"We deliver reliable services built on integrity and compliance, giving you confidence, peace of mind, and long-term value."} />
      </div>
      <OrganizationalStructuring />
      <Cta />
    </>
  )
}

export default page
