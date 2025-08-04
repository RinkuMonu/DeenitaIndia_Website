import Cta from '@/components/Cta';
import ServiceAdvantage from '@/components/ServiceAdvantage';
import ServiceBanner from '@/components/ServiceBanner';
import ServiceContracts from '@/components/ServiceContracts';
import ServiceHeroSection from '@/components/ServiceHeroSection'
import ServiceSection2 from '@/components/ServiceSection2';
import ServicesSteper from '@/components/ServicesSteper';
import Image from 'next/image';
import React from 'react'
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
            <div className='container'>
                <ServiceHeroSection sections={EscrowService} />
                <ServiceSection2 sections={section2} />
            </div>
            <ServiceBanner sections={sections} />
            <div className='container'>
                <ServiceContracts contracts={contractData} />
                          <ServiceAdvantage sections={sections1} />
            </div>
  
            <Cta />

            <div className='container my-16'   data-aos="fade-up"
  data-aos-duration="2000">
                <div className='md:flex justify-between align-middle'>
                    <p className="heading font-semibold ">
                        <span className="theme-text">Dashboard Visual </span><br></br>Overview
                    </p>
                    <p className='md:max-w-sm pt-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
                </div>
                <div className='card mt-10'>
                    <Image src="/images/morder-dashboard.png" width={400} height={400} alt='dashboard image' className='w-full h-auto' />

                </div>
            </div>
        </>
    )
}

export default page
