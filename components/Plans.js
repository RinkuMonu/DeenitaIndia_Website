"use client"
import { useState } from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaStar } from "react-icons/fa"
import Link from "next/link"

export default function Plans({ plans }) {
  const [billingCycle, setBillingCycle] = useState("annual")

  const filteredPlans = plans.map((plan) => ({
    ...plan,
    price: billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice,
    originalPrice: billingCycle === "annual" ? plan.monthlyPrice * 12 : null,
    subText: billingCycle === "monthly" ? "Per user & per month" : "Per user, per month & billed annually",
  }))

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-md md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1 rounded-xl flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-lg transition-all duration-200 font-medium ${
                billingCycle === "monthly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-3 rounded-lg transition-all duration-200 font-medium flex items-center gap-2 ${
                billingCycle === "annual" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual
              <span className="bg-[#115D8E] text-white text-xs px-2 py-1 rounded-full font-semibold">Save 50%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-200 ${
                plan.popular
                  ? "border-2 border-[#115D8E] shadow-lg bg-gradient-to-b from-[#f8fbff] to-white"
                  : "border border-gray-200 shadow-sm hover:shadow-md bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#115D8E] text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                    <FaStar className="text-yellow-300 w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-8">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">Rs {plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">Rs {plan.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{plan.subText}</p>
                </div>

                <Link
                  href={plan.link}
                  className={`block w-full py-3 rounded-lg text-center font-semibold transition-all duration-200 mb-8 ${
                    plan.buttonType === "primary"
                      ? "bg-[#115D8E] hover:bg-[#0E90C9] text-white"
                      : plan.buttonType === "muted"
                        ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        : "border-2 border-[#115D8E] text-[#115D8E] hover:bg-[#115D8E] hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </Link>

                <p className="text-sm text-center text-gray-600 mb-8">
                  Start <span className="font-semibold text-[#115D8E]">Free 7-Day</span> Trial
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#115D8E] text-lg mt-0.5">
                          <IoMdCheckmarkCircleOutline />
                        </span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Have questions about our plans?</p>
          <Link
            href="/contact"
            className="text-[#115D8E] font-semibold hover:text-[#0E90C9] inline-flex items-center gap-2 transition-colors duration-200"
          >
            Contact our team <IoMdCheckmarkCircleOutline />
          </Link>
        </div>
      </div>
    </section>
  )
}
