"use client"
import Cta from '@/components/Cta';
import ServiceAdvantage from '@/components/ServiceAdvantage';
import ServiceBanner from '@/components/ServiceBanner';
import ServiceContracts from '@/components/ServiceContracts';
import ServiceHeroSection from '@/components/ServiceHeroSection'
import ServiceSection2 from '@/components/ServiceSection2';
import { Library, MessageSquare, BellRing, Share2, Combine, Keyboard, UserCheck } from "lucide-react";
import ServicesSteper from '@/components/ServicesSteper';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const featuresData = [
  {
    icon: MessageSquare,
    title: "Instant Transfers",
    description: "Fast and secure fund movement.",
    side: 'left',
  },
  {
    icon: BellRing,
    title: "Full Visibility",
    description: "Real-time tracking of all transactions.",
    side: 'right',
  },
  {
    icon: Share2,
    title: "Regulatory Compliant",
    description: "Built with banking-grade security.",
    side: 'left',
  },
  {
    icon: Combine,
    title: "Seamless Integration",
    description: "Connect with business tools easily.",
    side: 'right',
  },
  {
    icon: Keyboard,
    title: "Time Saving",
    description: "Automate reconciliations and reporting.",
    side: 'left',
  },
  {
    icon: UserCheck,
    title: "Expert Support",
    description: "Dedicated help whenever you need it.",
    side: 'right',
  },
];

const sections = [
    {
        title: "Simplify Banking with One Platform",
        description: "Manage all your bank accounts in one place with secure access, instant transfers, and complete financial visibility.m",
        buttonText: "Connect Now",
        imageSrc: "/images/office.jpg",
        features: [
            { icon: "/images/dashbord.png", label: "Unified Accounts" },
            { icon: "/images/dashbord.png", label: "Instant Transfers " },
            { icon: "/images/dashbord.png", label: "Full Visibility" },
        ],
    },
];
const sections1 = [
    {
        title: "Legal & Compliance Information",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
        imageSrc: "/images/cb4.jpg",
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
            }, {
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
            title: "Connected Banking Made Easy",
            description: "Link all your bank accounts and financial services in one platform for effortless management, instant transfers, and full visibility.",
            ctaText: "Connect",
            ctaLink: "/contact",
            imageSrc: "/images/cb1.jpg",
                    features: [
      {
       value: "25+",
        label: "Unified Accounts"
      },
    {
        value: "1250+",
        label: "Instant Transfers"
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
            tag: "Connected Banking",
            tag1: "hjh hghgjh",
            tag2: "hjh hghgjh",
            title: "Smarter, Faster & Unified Financial Access",
            description:
                "Deenita India’s Connected Banking brings all your accounts and services into one secure platform. Manage funds, track transactions, and transfer instantly with full visibility. Experience simplified banking with seamless integration, transparency, and complete control.",
            ctaText: "Get started",
            ctaLink: "/get-started",
            imageSrc: "/images/cb2.png",
        },
    ]
    const contractData = [
        {
            title: "Industries We Serve – Connected Banking",
            subtitle: "Delivering secure, seamless, and compliant payment solutions across industries with trusted escrow and connected banking services",
            items: [
                {
                    title: "SMEs & Startups",
                    description: "Manage multiple accounts in one place for better cash flow control.",
                    image: "/images/b2b.jpg"
                },
                {
                    title: "Corporates",
                    description: "Streamline bulk payments, payroll, and inter-bank transfers securely.",
                    image: "/images/real-estate.jpg"
                },
                {
                    title: "Freelancers & Professionals",
                    description: "Access unified accounts and faster client payments.",
                    image: "/images/freelancing.jpg"
                },
                {
                    title: "E-commerce & Marketplaces",
                    description: "Simplify collections, payouts, and refunds across banks.",
                    image: "/images/b2b.jpg"
                },
                {
                    title: "NBFCs & Financial Institutions",
                    description: "Enable seamless lending, collections, and reconciliations.",
                    image: "/images/real-estate.jpg"
                },
                {
                    title: "Educational Institutions",
                    description: "Manage fee collections and vendor payments efficiently.",
                    image: "/images/freelancing.jpg"
                },
                 {
                    title: "Healthcare & Service Providers",
                    description: "Track payments, disbursements, and vendor settlements in real-time.",
                    image: "/images/freelancing.jpg"
                },
            ]
        }

    ];
    return (
        <>
            <div className=''>
                <ServiceHeroSection sections={EscrowService} />
                <ServiceSection2 sections={section2} />
            </div>
            <ServiceBanner sections={sections} />
            <div className='container'>
                <ServiceContracts contracts={contractData} />
               <ServiceAdvantage featuresData={featuresData} title={"Secure, unified, and transparent banking solution"} description={"Simplify your finances with trusted services designed to support both businesses and individuals, ensuring clarity, confidence, and ease."} />
            </div>

            <Cta />


    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transforming Banking  <span className="text-[#1476ad]">into Simplicity</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We empower businesses and individuals with Connected Banking solutions that unify accounts, simplify payments, and ensure secure, transparent, and real-time financial management.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-lg bg-[#1476ad] text-white font-semibold shadow-md hover:bg-[#125f8a] transition">
            Learn More
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden ">
          <Image
            src="/images/vector.png"
            alt="Creative process"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>

        </>
    )
}

export default page
