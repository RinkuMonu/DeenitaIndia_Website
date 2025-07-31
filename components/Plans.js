"use client"
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";

export default function Plans({ plans }) {
  const [billingCycle, setBillingCycle] = useState("annual");

  const filteredPlans = plans.map(plan => ({
    ...plan,
    price: billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice,
    subText:
      billingCycle === "monthly"
        ? "Per user & per month"
        : "Per user, per month & billed annually",
  }));

  return (
    <section className="py-15 px-4 bg-white text-gray-800">
      <div className=" mb-10">
       <div className='md:flex justify-between align-middle'>
                        <p className="heading font-semibold ">
<span className="theme-text">Plan </span>  <br></br>  & Pricing Info
                        </p>
                        <p className='md:max-w-sm pt-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
                    </div>
      </div>

      <div className="flex mb-8 ">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={` px-4 md:px-7 py-2 rounded transition font-semibold ${
            billingCycle === "monthly"
              ? "bg-[#115D8E] text-white"
              : "bg-[#E4EDF3] text-gray-700"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("annual")}
          className={`px-4 py-2 rounded transition font-semibold ${
            billingCycle === "annual"
              ? "bg-[#115D8E] text-white"
              : "bg-[#E4EDF3] text-gray-700"
          }`}
        >
          Annual <span className="hidden md:block">
            (Save 50%)
          </span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-15  mx-auto">
        {filteredPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-3xl border-2 border-gray-200 transition-all duration-300 ${
              plan.popular
                ? 'shadow-xl bg-gradient-to-tr border-none from-white to-[#E4EDF3] scale-115 z-10'
                : 'bg-white'
            }`}
          >
            {plan.popular && (
              <span className="absolute top-4 inline-flex shadow-xl right-4 text-sm  text-blue-900 px-2 py-1 rounded-full">
                <FaStar className="mt-1 me-1"/> Popular
              </span>
            )}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{plan.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
            <p className="text-2xl font-bold theme-text">Rs {plan.price}</p>
            <p className="text-sm mb-4">{plan.subText}</p>

            <button
              className={`w-full py-1 rounded-lg font-medium mt-2 mb-1 ${
                plan.buttonType === "primary"
                  ? "bg-[#115D8E] text-white"
                  : plan.buttonType === "muted"
                  ? "bg-gray-200 text-gray-600"
                  : "border border-[#115D8E] text-[#115D8E]"
              }`}
            >
              {plan.buttonText}
            </button>
            <p className="text-sm  text-center mb-4">
              Start <span className="font-bold theme-text text-xs">Free 7-Days</span> Trial
            </p>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-700 mb-2">Features</h4>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="theme-text"><IoMdCheckmarkCircleOutline/></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
