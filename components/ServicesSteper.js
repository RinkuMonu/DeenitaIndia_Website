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

      // <div className="hidden md:block">
      //   <div className="relative mb-4 flex items-center justify-between max-w-4xl mx-auto px-6">
      //     {data.steps.map((_, index) => (
      //       <div key={index} className="relative z-10 text-center w-full">
      //         <div className="inline-block px-4 py-2 rounded-md shadow-md bg-white font-semibold text-[#1476ad]">
      //           {`Step (${index + 1})`}
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      //   <Image
      //     src="/images/stepervec.png"
      //     width={400}
      //     height={400}
      //     alt="stepper vector"
      //     className="w-[50%] h-auto mx-auto"
      //   />
      // </div>

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



import Image from "next/image"

const ServicesSteper = ({ data }) => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 md:px-6" >
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1476ad]/10 border border-[#1476ad]/20 mb-6">
          <p className="text-[#1476ad] font-semibold text-sm tracking-wide uppercase">{data.title}</p>
        </div>
        <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">{data.subtitle}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{data.description}</p>
      </div>

      {/* Desktop Stepper Visualization */}
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


      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {data.steps.map((step, index) => (
          <div
            key={index}
            className="group radial-grad p-8 rounded-2xl shadow-sm border border-white/20 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Step Number Badge */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1476ad] text-white flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>

            {/* Image Container */}
            <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-white/50 p-4">
              <Image
                src={step.image || "/placeholder.svg"}
                alt={`Step ${index + 1}`}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-[#1476ad] font-semibold text-lg">Step {index + 1}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{step.description}</p>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1476ad]/20 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Mobile Stepper Indicator */}
      <div className="md:hidden mt-12 flex justify-center">
        <div className="flex space-x-2">
          {data.steps.map((_, index) => (
            <div key={index} className="w-3 h-3 rounded-full bg-[#1476ad]/30"></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSteper
