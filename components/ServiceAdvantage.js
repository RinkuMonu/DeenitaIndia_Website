import Image from 'next/image';
import React from 'react';


// Data for the feature items

// Reusable component for each feature item
const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="border border-gray-200 p-3 rounded-lg flex-shrink-0">
      <Icon className="w-6 h-6 text-[#115D8E]" />
    </div>
    <div>
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <p className="text-gray-500 mt-1">{description}</p>
    </div>
  </div>
);

// Main section component
const ServiceAdvantage = ({featuresData }) => {
  const leftFeatures = featuresData.filter(f => f.side === 'left');
  const rightFeatures = featuresData.filter(f => f.side === 'right');
  //  const mid = Math.ceil(title.length / 2); // split in half
  // const firstHalf = title.slice(0, mid);
  // const secondHalf = title.slice(mid);

  return (
    <section className="bg-white w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="inline-block bg-[#115D8E]/10 text-[#115D8E] text-sm font-semibold px-4 py-1 rounded-full">
            Why choose our service
          </p>
          {/* <h2 className="mt-4 text-4xl font-bold tracking-tight">
      <span className="text-gray-900">{firstHalf}</span>
      <span className="text-[#115D8E]">{secondHalf}</span>
    </h2>
          <p className='text-gray-500 mt-4'>{description}</p> */}
        </div>


        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-x-8 lg:items-center">

          {/* Left Features Column */}
          <div className="space-y-12">
            {leftFeatures?.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>

          <div className="relative lg:flex justify-center items-center lg:px-6 hidden ">
            <div className="absolute w-[100%] h-auto aspect-square -z-0 bg-[#115d8e]/10 rounded-full"></div>

            <Image
            width={300}
            height={300}
              src="/images/stepper.png"
              alt="App interface on two smartphones"
              className="relative max-w-xs md:max-w-sm mx-auto"
            />
          </div>

          <div className="space-y-12">
            {rightFeatures?.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAdvantage;