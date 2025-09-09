"use client"
import Cta from '@/components/Cta';
import ServiceAdvantage from '@/components/ServiceAdvantage';
import ServiceBanner from '@/components/ServiceBanner';
import ServiceContracts from '@/components/ServiceContracts';
import ServiceHeroSection from '@/components/ServiceHeroSection'
import ServiceSection2 from '@/components/ServiceSection2';
import { Library, MessageSquare, BellRing, Share2, Combine, Keyboard } from "lucide-react";
import ServicesSteper from '@/components/ServicesSteper';
import Image from 'next/image';
import React from 'react'

const featuresData = [
  {
    icon: Library,
    title: "High Usability",
    description: "There are many variations of passages of Lorem Ipsum.",
    side: 'left',
  },
  {
    icon: MessageSquare,
    title: "Free Live Chat",
    description: "There are many variations of passages of Lorem Ipsum.",
    side: 'right',
  },
  {
    icon: BellRing,
    title: "Action Reminder",
    description: "There are many variations of passages of Lorem Ipsum.",
    side: 'left',
  },
  {
    icon: Share2,
    title: "Social Share",
    description: "There are many variations of passages of Lorem Ipsum.",
    side: 'right',
  },
  {
    icon: Combine,
    title: "Merge Files",
    description: "There are many variations of passages of Lorem Ipsum.",
    side: 'left',
  },
  {
    icon: Keyboard,
    title: "Custom Shortcuts",
    description: "There are many variations of passages of Lorem Ipsum.",
    side: 'right',
  },
];
const sections = [
    {
        title: "API Access Methods",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        buttonText: "Connect Now",
        imageSrc: "/images/office.jpg",
        features: [
            { icon: "/images/dashbord.png", label: "Secure" },
            { icon: "/images/dashbord.png", label: "Affordable" },
            { icon: "/images/dashbord.png", label: "Community" },
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
            title: "Connected Banking",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
            ctaText: "Connect",
            ctaLink: "/contact",
            imageSrc: "/images/cb1.jpg",
            features: [
                {
                    icon: "/images/precaution.png",
                    label: "Reduce risk"
                },
                {
                    icon: "/images/precaution.png",
                    label: "Reduce risk"
                },
                {
                    icon: "/images/precaution.png",
                    label: "Reduce risk"
                }
            ],
        }
    ];
    const section2 = [
        {
            tag: "Connected Banking",
            tag1: "hjh hghgjh",
            tag2: "hjh hghgjh",
            title: "Ideal for fintech, accounting software, and digital marketplaces",
            description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
            ctaText: "Get started",
            ctaLink: "/get-started",
            imageSrc: "/images/cb2.png",
        },
    ]
    const contractData = [
        {
            title: "Service",
            subtitle: "From scope to timelines, everything is documented to ensure smooth collaboration",
            items: [
                {
                    title: "B2B",
                    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
                    image: "/images/b2b.jpg"
                },
                {
                    title: "Fintech Startups",
                    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
                    image: "/images/real-estate.jpg"
                },
                {
                    title: "Freelancing",
                    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
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
               <ServiceAdvantage featuresData={featuresData} />
            </div>

            <Cta />


    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transforming Ideas into <span className="text-[#1476ad]">Reality</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We help businesses bring their visions to life with innovative
            solutions, cutting-edge technology, and a focus on long-term growth.
          </p>
          <button className="px-6 py-3 rounded-lg bg-[#1476ad] text-white font-semibold shadow-md hover:bg-[#125f8a] transition">
            Learn More
          </button>
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
