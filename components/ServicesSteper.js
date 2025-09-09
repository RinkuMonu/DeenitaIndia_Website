// import Image from "next/image";

// const ServicesSteper = ({ data }) => {
//   return (
//     <section className=" py-6 md:py-16 max-w-7xl mx-auto md:text-center"   data-aos="fade-up"
//   data-aos-duration="2000">
//       <p className="text-[#1476ad] font-medium text-sm mb-2">{data.title}</p>
//       <h2 className="text-2xl md:text-4xl font-semibold mb-3">
//         {data.subtitle}
//       </h2>
//       <p className="text-md md:text-lg mx-auto mb-12">{data.description}</p>

//       <div className="hidden md:block">
//         <div className="relative mb-4 flex items-center justify-between max-w-4xl mx-auto px-6">
//           {data.steps.map((_, index) => (
//             <div key={index} className="relative z-10 text-center w-full">
//               <div className="inline-block px-4 py-2 rounded-md shadow-md bg-white font-semibold text-[#1476ad]">
//                 {`Step (${index + 1})`}
//               </div>
//             </div>
//           ))}
//         </div>
//         <Image
//           src="/images/stepervec.png"
//           width={400}
//           height={400}
//           alt="stepper vector"
//           className="w-[50%] h-auto mx-auto"
//         />
//       </div>

//       <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {data.steps.map((step, index) => (
//           <div key={index} className="radial-grad p-6 rounded-xl shadow-sm">
//             <div className="relative w-full h-40 mb-4">
//               <Image
//                 src={step.image}
//                 alt={`Step ${index + 1}`}
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//             <p className="text-gray-700 text-sm">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSteper;



import Image from "next/image";

const ServicesSteper = ({ data }) => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 md:px-6 relative">
      {/* Header Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#1476ad]/20 to-[#63b3ed]/20 border border-[#1476ad]/30 mb-6 shadow-sm">
          <p className="text-[#1476ad] font-semibold text-sm tracking-wide uppercase">
            {data.title}
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          {data.subtitle}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          {data.description}
        </p>
      </div>

      {/* Vertical Stepper Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full bg-gradient-to-b from-[#1476ad]/30 to-[#63b3ed]/30"></div>

        <div className="space-y-16">
          {data.steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-stretch ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } relative`}
              >
                {/* Connector Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#1476ad] to-[#63b3ed] w-6 h-6 rounded-full border-4 border-white shadow-md"></div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 bg-[#1476ad]/10 backdrop-blur-lg border border-gray-100 p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                  }`}
                >
                  {/* Step Badge */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1476ad] to-[#63b3ed] text-white flex items-center justify-center text-lg font-bold shadow-md mb-4">
                    {index + 1}
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-44 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-inner">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={`Step ${index + 1}`}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title || `Step ${index + 1}`}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSteper;
