import Image from "next/image";

const ServicesSteper = ({ data }) => {
  return (
    <section className=" py-6 md:py-16 max-w-7xl mx-auto md:text-center"   data-aos="fade-up"
  data-aos-duration="2000">
      <p className="text-[#1476ad] font-medium text-sm mb-2">{data.title}</p>
      <h2 className="text-2xl md:text-4xl font-semibold mb-3">
        {data.subtitle}
      </h2>
      <p className="text-md md:text-lg mx-auto mb-12">{data.description}</p>

      <div className="hidden md:block">
        <div className="relative mb-4 flex items-center justify-between max-w-4xl mx-auto px-6">
          {data.steps.map((_, index) => (
            <div key={index} className="relative z-10 text-center w-full">
              <div className="inline-block px-4 py-2 rounded-md shadow-md bg-white font-semibold text-[#1476ad]">
                {`Step (${index + 1})`}
              </div>
            </div>
          ))}
        </div>
        <Image
          src="/images/stepervec.png"
          width={400}
          height={400}
          alt="stepper vector"
          className="w-[50%] h-auto mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.steps.map((step, index) => (
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
