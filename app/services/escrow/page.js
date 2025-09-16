"use client"
import Cta from '@/components/Cta';
import ServiceAdvantage from '@/components/ServiceAdvantage';
import ServiceBanner from '@/components/ServiceBanner';
import ServiceContracts from '@/components/ServiceContracts';
import ServiceHeroSection from '@/components/ServiceHeroSection'
import ServiceSection2 from '@/components/ServiceSection2';
import ServicesSteper from '@/components/ServicesSteper';
import { Library, MessageSquare, BellRing, Share2, Combine, Keyboard, UserCheck } from "lucide-react";
import React from 'react'
const sections = [
  {
    title: "Secure Escrow Payments",
    description: "Ensure safe, transparent, and risk-free transactions with Deenita India’s Escrow Service.",
    buttonText: "Connect Now",
    imageSrc: "/images/office.jpg",
    features: [
      { icon: "/images/milestone.png", label: "Milestone-Based Release" },
      { icon: "/images/dashbord.png", label: "Real-Time Dashboard" },
      { icon: "/images/transparency.png", label: "Full Transparency" },
    ],
  },
];
const featuresData = [
  {
    icon: MessageSquare,
    title: "Fraud Protection",
    description: "Minimize risks and prevent unauthorized transactions.",
    side: 'left',
  },
  {
    icon: BellRing,
    title: "Full Transparency",
    description: "Complete visibility for all parties involved.",
    side: 'right',
  },
  {
    icon: Share2,
    title: "Legally Compliant",
    description: "Operates under all applicable regulations.",
    side: 'left',
  },
  {
    icon: Combine,
    title: "Milestone-Based Releases",
    description: "Funds released in phases as per agreement.",
    side: 'right',
  },
  {
    icon: Keyboard,
    title: "Real-Time Tracking",
    description: "Monitor transactions via a user-friendly dashboard.",
    side: 'left',
  },
  {
    icon: UserCheck,
    title: "Dedicated Support",
    description: "Get guidance from our experts whenever needed.",
    side: 'right',
  },
];


function page() {
    const EscrowService = [
        {
            tag: "Services",
            title: "Secure & Transparent Escrow Service",
            description: "Our Escrow Service ensures funds are safely held until both parties meet agreed terms, minimizing risks and giving buyers and sellers complete confidence in every transaction.",
            ctaText: "Connect",
            ctaLink: "/contact",
            imageSrc: "/images/escrowservice1.jpg",
             features: [
      {
       value: "25+",
        label: "Safe Funds"
      },
    {
        value: "1250+",
        label: "Fraud-Free"
      },
       {
        value: "99%",
        label: "Full Visibility"
      }
    ],
        }
    ];
      const section2 = [
    {
      tag: "Escrow Service",
      tag1:"hjh hghgjh",
      tag2:"hjh hghgjh",
      title: "About Escrow Services – Secure, Transparent & Risk-Free Transactions",
      description:
       "Deenita India’s Escrow Service ensures secure transactions by holding funds safely until all parties meet agreed terms, reducing fraud, enhancing transparency, and enabling risk-free payments for businesses, freelancers, and online platforms.",
      ctaText: "Get started",
      ctaLink: "/get-started",
      imageSrc: "/images/escrow2.png",
    },
  ]
 const contractData = [
   {
  title: "Industries We Serve",
  subtitle: "Secure transactions across industries with tailored escrow, safe payments, and trusted processing solutions.",
  items: [
    {
      title: "B2B",
      description: "Secure payments and contract compliance between businesses",
      image: "/images/b2b.jpg"
    },
    {
      title: "Real Estate",
      description: "Protect funds and build trust in property deals.",
      image: "/images/real-estate.jpg"
    },
    {
      title: "Freelancing",
      description: "Ensure safe and timely release of client-freelancer payments",
      image: "/images/freelancing.jpg"
    },
    {
      title: "E-commerce / Marketplaces",
      description: "Secure transactions between buyers and sellers.",
      image: "/images/b2b.jpg"
    },
    {
      title: "Financial Services / NBFCs ",
      description: " Safeguard loans, investments, and other financial transactions.",
      image: "/images/real-estate.jpg"
    },
    {
      title: "Legal / Consultancy Firms ",
      description: " Protect client payments and service contracts.",
      image: "/images/freelancing.jpg"
    },
  ]
}

  ];
const stepperData = {
  title: "How Escrow Service Works",
  description:  "Funds are safely held and released only after both parties meet agreed terms, ensuring trust in every transaction.",
  subtitle:"Simple, secure, and transparent payment protection",
  steps: [
    {
      image: "/images/stepper.png",
      title:"Select & Register" ,
      description: "Choose your Escrow Service and complete your KYC verification.",
    },
    {
      image: "/images/stepper.png",
       title:"Initiate Transaction" ,
      description: "Provide transaction details; funds are securely held in escrow until both parties meet their terms.",
    },
    {
      image: "/images/stepper.png",
       title:"Release Funds" ,
      description: "Funds are released only after all commitments are fulfilled, ensuring a risk-free and transparent transaction.",
    },
  ],
};

const ctaData = {
  title:"Let Us Help You Find the Perfect Fit" ,
  desc:"Share your transaction requirements, and our experts will provide tailored escrow solutions for secure, risk-free payments."
}

    return (
        <>
            <div className=''>
                <ServiceHeroSection sections={EscrowService} />
                <ServiceSection2 sections={section2}/>
                <ServiceContracts contracts={contractData}/>
            </div>
             <Cta data={ctaData}/>
                 <div className='container'>
               <ServicesSteper data={stepperData}/>
             
             </div>
               <ServiceBanner sections={sections}/>
           <div className='container'>
             <ServiceAdvantage featuresData={featuresData} title={"Secure, transparent, and fully compliant solutions"} description={"Our escrow service builds trust with safe transactions, protecting both parties and ensuring confidence at every step."}/>
           </div>
        </>
    )
}

export default page
