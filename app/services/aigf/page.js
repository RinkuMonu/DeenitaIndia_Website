import Cta from '@/components/Cta';
import Plans from '@/components/Plans';
import ServiceAdvantage from '@/components/ServiceAdvantage';
import ServiceBanner from '@/components/ServiceBanner';
import ServiceContracts from '@/components/ServiceContracts';
import ServiceHeroSection from '@/components/ServiceHeroSection'
import ServiceSection2 from '@/components/ServiceSection2';
import ServicesSteper from '@/components/ServicesSteper';
import React from 'react'
const sections = [
  {
    title: "Why AIGF Is Important for Online Games",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    buttonText: "Connect Now",
    imageSrc: "/images/office.jpg",
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
    imageSrc: "/images/cybersecurity.jpg",
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
            title: "AIGF License Assistance",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
            ctaText: "Connect",
            ctaLink: "/contact",
            imageSrc: "/images/aigf1.jpg",
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
      tag: "Escrow Service",
      tag1:"hjh hghgjh",
      tag2:"hjh hghgjh",
        title: "Operate legally and build player trust with AIGF accreditation",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
      ctaText: "Get started",
      ctaLink: "/get-started",
      imageSrc: "/images/aigf2.png",
    },
  ]
  const contractData = [
  {
    title: "B2B",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
    image: "/images/b2b.jpg"
  },
  {
    title: "Real Estate",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
    image: "/images/real-estate.jpg"
  },
  {
    title: "Freelancing",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
    image: "/images/freelancing.jpg"
  },
];
const steps = [
  {
    image: "/images/stepper.png",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
  },
  {
    image: "/images/stepper.png",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
  },
  {
    image: "/images/stepper.png",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus odio dignissimos ducimus",
  },
];
const plans = [
    {
      title: 'Creator',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio',
      price: '100',
      subText: 'Per user & per month',
      buttonText: 'Current Plan',
      buttonType: 'muted',
      popular: false,
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
    },
    {
      title: 'Pro Plan',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio',
      price: '1000',
      subText: 'Per user, per month & billed annually',
      buttonText: 'Switch to this Plan',
      buttonType: 'outline',
      popular: true,
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
    },
    {
      title: 'Business Plan',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus odio',
      price: '2000',
      subText: 'custom Pricing, Custom Billing',
      buttonText: 'Contact Sales',
      buttonType: 'primary',
      popular: false,
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
    },
  ];

    return (
        <>
            <div className='container'>
                <ServiceHeroSection sections={EscrowService} />
                <ServiceSection2 sections={section2}/>
            </div>
             <ServiceBanner sections={sections}/>
                 <div className='container'>
                         <ServiceContracts contracts={contractData}/>
               <ServicesSteper steps={steps}/>
             </div>
               <ServiceAdvantage sections={sections1}/>
               <Cta/>
               <Plans plans={plans}/>
        </>
    )
}

export default page
