// "use client"
// import { useState } from "react";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { FaStar } from "react-icons/fa";
// import Link from "next/link";

// export default function Plans({ plans }) {
//   const [billingCycle, setBillingCycle] = useState("annual");

//   const filteredPlans = plans.map(plan => ({
//     ...plan,
//     price: billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice,
//     subText:
//       billingCycle === "monthly"
//         ? "Per user & per month"
//         : "Per user, per month & billed annually",
//   }));

//   return (
//     <section className="py-15 px-4 bg-white text-gray-800" >
//       <div className=" mb-10">
//         <div className='md:flex justify-between align-middle'>
//           <p className="heading font-semibold ">
//             <span className="theme-text">Plan </span>  <br></br>  & Pricing Info
//           </p>
//           <p className='md:max-w-sm pt-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
//         </div>
//       </div>

//       <div className="flex mb-8 ">
//         <button
//           onClick={() => setBillingCycle("monthly")}
//           className={` px-4 md:px-7 py-2 rounded transition font-semibold ${billingCycle === "monthly"
//               ? "bg-[#115D8E] text-white"
//               : "bg-[#E4EDF3] text-gray-700"
//             }`}
//         >
//           Monthly
//         </button>
//         <button
//           onClick={() => setBillingCycle("annual")}
//           className={`px-4 py-2 rounded transition font-semibold ${billingCycle === "annual"
//               ? "bg-[#115D8E] text-white"
//               : "bg-[#E4EDF3] text-gray-700"
//             }`}
//         >
//           Annual <span className="hidden md:block">
//             (Save 50%)
//           </span>
//         </button>
//       </div>

//       <div className="grid md:grid-cols-3 gap-15  mx-auto" data-aos="fade-up"
//         data-aos-duration="2000">
//         {filteredPlans.map((plan, index) => (
//           <div
//             key={index}
//             className={`relative p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 ${plan.popular
//                 ? 'shadow-xl bg-gradient-to-tr border-none from-white to-[#E4EDF3] scale-115 z-10'
//                 : 'bg-white'
//               }`}
//           >
//             {plan.popular && (
//               <span className="absolute top-4 inline-flex shadow-xl right-4 text-sm  text-blue-900 px-2 py-1 rounded-full">
//                 <FaStar className="mt-1 me-1" /> Popular
//               </span>
//             )}
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">{plan.title}</h3>
//             <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
//             <p className="text-2xl font-bold theme-text">Rs {plan.price}</p>
//             <p className="text-sm mb-4">{plan.subText}</p>

//             <Link
//               href={plan.link}
//               className={` p-2 rounded-lg flex flex-col text-center font-medium mt-2 mb-1 ${plan.buttonType === "primary"
//                   ? "bg-[#115D8E] text-white"
//                   : plan.buttonType === "muted"
//                     ? "bg-gray-200 text-gray-600"
//                     : "border border-[#115D8E] text-[#115D8E]"
//                 }`}
//             >
//               {plan.buttonText}
//             </Link>
//             <p className="text-sm  text-center mb-4">
//               Start <span className="font-bold theme-text text-xs">Free 7-Days</span> Trial
//             </p>

//             <div className="border-t pt-4">
//               <h4 className="font-semibold text-gray-700 mb-2">Features</h4>
//               <ul className="space-y-2 text-sm">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     <span className="theme-text text-xl">
//                       <IoMdCheckmarkCircleOutline />
//                     </span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}

//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client"
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function Plans({ plans }) {
  const [billingCycle, setBillingCycle] = useState("annual");

  const filteredPlans = plans.map(plan => ({
    ...plan,
    price: billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice,
    originalPrice: billingCycle === "annual" ? plan.monthlyPrice * 12 : null,
    subText:
      billingCycle === "monthly"
        ? "Per user & per month"
        : "Per user, per month & billed annually",
  }));

  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#115D8E]">Plan</span> & Pricing Info
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1.5 rounded-xl flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-sm ${billingCycle === "monthly"
                  ? "bg-white text-[#115D8E] shadow-md"
                  : "text-gray-600"
                }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-sm flex items-center gap-1 ${billingCycle === "annual"
                  ? "bg-white text-[#115D8E] shadow-md"
                  : "text-gray-600"
                }`}
            >
              Annual Billing
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-1">
                Save 50%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 p-8 flex flex-col h-full ${plan.popular
                  ? 'border-2 border-[#115D8E] shadow-2xl bg-gradient-to-b from-white to-[#f0f7ff] transform md:-translate-y-4'
                  : 'border border-gray-200 shadow-md hover:shadow-lg'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#115D8E] text-white text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <FaStar className="text-yellow-300" /> Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-[#115D8E]">Rs {plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">Rs {plan.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{plan.subText}</p>
                </div>

                <Link
                  href={plan.link}
                  className={`block w-full py-3 rounded-xl text-center font-semibold transition-all duration-300 mb-4 ${plan.buttonType === "primary"
                      ? "bg-[#115D8E] hover:bg-[#0B4870] text-white shadow-md hover:shadow-lg"
                      : plan.buttonType === "muted"
                        ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        : "border-2 border-[#115D8E] text-[#115D8E] hover:bg-[#115D8E] hover:text-white"
                    }`}
                >
                  {plan.buttonText}
                </Link>
                
                <p className="text-sm text-center text-gray-600 mb-8">
                  Start <span className="font-bold text-[#115D8E]">Free 7-Day</span> Trial
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#115D8E] text-lg mt-0.5">
                          <IoMdCheckmarkCircleOutline />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-2">Have questions about our plans?</p>
          <Link 
            href="/contact" 
            className="text-[#115D8E] font-semibold hover:underline inline-flex items-center gap-1"
          >
            Contact our team <IoMdCheckmarkCircleOutline className="mt-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}