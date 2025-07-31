import Image from "next/image";

const ServicesSteper = ({ steps }) => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto md:text-center">
      <p className="text-[#1476ad] font-medium text-sm mb-2">How it works</p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-3">
        Choose your service, complete KYC, and make a<br />
       secure payment through our platform
      </h2>
      <p className="text-lg mx-auto mb-12">
        Funds are held in escrow and released only when both parties fulfill their commitments
      </p>
   <div className="hidden md:block">
       <div className="relative mb-4 flex items-center justify-between max-w-4xl mx-auto px-6">
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 text-center w-full">
            <div className="inline-block px-4  rounded-md  shadow-md bg-white font-semibold text-[#1476ad]">
              {`Step (${index + 1})`}
            </div>
           
          </div>
       
      
        ))}
          
      </div>
       <Image src="/images/stepervec.png" width={400} height={400} alt="stepper vector" className="w-[50%] h-auto mx-auto"></Image>
   </div>
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="radial-grad p-6 rounded-xl shadow-sm">
            <div className="relative w-full h-40 mb-4">
              <Image
                src={step.image}
                alt={`Step ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-gray-700 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSteper;
