"use client";
import { ChevronDown, ChevronUp , useEffect } from "lucide-react";
import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div
    className="group cursor-pointer bg-blue-50 py-4 px-6 border border-blue-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
    onClick={onClick}
  >
    <div className="flex justify-between items-center">
      <h3 className=" font-semibold text-gray-800">{question}</h3>
     {isOpen ?  <ChevronUp className="text-[#115D8E]"/> :  <ChevronDown  className="text-[#115D8E]" /> }
    </div>

    {/* Collapsible Answer */}
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-40 mt-3" : "max-h-0"
      }`}
    >
      <p className="text-gray-600">{answer}</p>
    </div>
  </div>
);

const ServiceAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useGSAP(()=>{
    gsap.to( '#image-anime' , {
      x:50,
      yoyo:true,
      repeat: -1,
      duration:1
    })
  })

 const faqs = [
  {
    question: "What do Legal & Compliance Services cover?",
    answer:
      "They ensure all financial and business operations follow applicable laws, regulations, and internal policies for secure and transparent transactions.",
  },
  {
    question: "Which industries need these services?",
    answer:
      "Industries like Financial Services, Legal Firms, Real Estate, B2B, E-commerce, Healthcare, and Online Platforms benefit from full legal and regulatory compliance.",
  },
  {
    question: "How does Deenita India ensure compliance?",
    answer:
      "We follow strict regulatory frameworks, maintain secure processes, and provide transparent reporting for all transactions and operations.",
  },
];

  return (
    <div className="   flex items-center justify-center font-sans py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center align-middle">
        {/* Left Side: FAQs */}
        <div className="px-4">
          <span className="inline-flex items-center bg-blue-100 text-[#115D8E] text-xs font-semibold px-4 py-1 rounded-full">
             FAQs
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mt-4 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-base mb-8">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>

        {/* Right Side: Images */}
        <div className="relative flex items-center justify-end ">

          <div className="relative w-full max-w-md max-h-lg z-10">
            <img
              src="/images/b2b.jpg"
              alt="BankDash main dashboard interface"
              className="w-full rounded-2xl shadow-2xl  h-[500px]"
            />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-35 -translate-x-1/4 sm:-translate-x-1/3 w-1/3 max-w-xs z-20">
            <img
              src="/images/b2b.jpg"
              alt="BankDash sidebar view"
              id="image-anime"
              className="w-full rounded-2xl shadow-2xl border-4 border-white  h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAccordion;
