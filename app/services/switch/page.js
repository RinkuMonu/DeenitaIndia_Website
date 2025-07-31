import BankingPartner from '@/components/BankingPartner';
import Cta from '@/components/Cta';
import ServiceAdvantage from '@/components/ServiceAdvantage';
import ServiceBanner from '@/components/ServiceBanner';
import ServiceContracts from '@/components/ServiceContracts';
import ServiceHeroSection from '@/components/ServiceHeroSection'
import ServiceSection2 from '@/components/ServiceSection2';
import ServicesSteper from '@/components/ServicesSteper';
import React from 'react'
const sections = [
  {
    title: "What Makes Us Different?",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    buttonText: "Connect Now",
    imageSrc: "/images/switchservice.jpg",
    features: [
      { icon: "/images/dashbord.png", label: "Secure" },
      { icon: "/images/dashbord.png", label: "Affordable" },
      { icon: "/images/dashbord.png", label: "Community" },
    ],
  },
];
const sections1 = [
  {
    title: "Safe, Private, Controlled",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
    imageSrc: "/images/switchsecure.jpg",
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
            title: "Switch Service",
            description: "Our escrow service ensures secure transactions by holding funds until both parties meet agreed conditions.",
            ctaText: "Connect",
            ctaLink: "/contact",
            imageSrc: "/images/switch1.jpg",
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
      title: "A trusted third party holds funds until both parties meet agreed terms",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
      ctaText: "Get started",
      ctaLink: "/get-started",
      imageSrc: "/images/switch2.png",
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
      title: "Real Estate",
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
const stepperData = {
  title: "How it works",
  subtitle: "Choose your service, complete KYC, and make a secure payment through our platform",
  description: "Funds are held in escrow and released only when both parties fulfill their commitments",
  steps: [
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
  ],
};
    return (
        <>
            <div className='container'>
                <ServiceHeroSection sections={EscrowService} />
                <ServiceSection2 sections={section2}/>
                <ServiceContracts contracts={contractData}/>
            </div>
             <Cta/>
                 <div className='container'>
               <ServicesSteper data={stepperData}/>
             
             </div>
               <ServiceBanner sections={sections}/>
               <ServiceAdvantage sections={sections1}/>
               <div>
                <BankingPartner />
               </div>
        </>
    )
}

export default page
