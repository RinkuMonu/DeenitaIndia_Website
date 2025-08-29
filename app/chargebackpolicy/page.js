// "use client";

// import Image from "next/image";
// import Cta from "@/components/Cta";

// const chargeSections = [
//   {
//     title: "Data Security",
//     content:
//       "Our privacy policy prioritizes the protection of your personal data, ensuring that any information we collect is securely stored and used exclusively for the purpose of delivering and enhancing our services. We are committed to respecting your privacy and will never share your data with third parties without your explicit consent. Additionally, we adhere to all applicable data protection laws and regulations, including GDPR and other relevant frameworks.",
//   },
//   {
//     title: "Data Security",
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita",
//   },
//   {
//     title: "Data Security",
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita",
//   },
// ];

// export default function Privacy() {
//   return (
//     <>
//    <div className="container">
//        <section className="bg-white min-h-screen pt-28 pb-16">
//         <div className="bg-[#F4FCFF] rounded-2xl">
//           <section>
//             <div className="max-w-5xl mx-auto px-4 py-12">
//               <div className="text-center mb-10">
//                 <div className="mb-6">
//                   <Image
//                     src="/Image/chargeback-img.png"
//                     alt="Icon"
//                     width={83}
//                     height={83}
//                     className="mx-auto"
//                   />
//                 </div>
//                 <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4">
//                   Chargeback & Cancellation Policy
//                 </div>
//                 <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 lg:px-16 mb-8">
//                  Cancellations must be requested within the allowed period as per our policy for eligibility
//                 </h1>
//                 <p className="mt-4 text-gray-600 text-start">
//                   Our privacy policy prioritizes the protection of your personal
//                   data, ensuring that any information we collect is securely
//                   stored and used exclusively for the purpose of delivering and
//                   enhancing our services. We are committed to respecting your
//                   privacy and will never share your data with third parties
//                   without your explicit consent. Additionally, we adhere to all
//                   applicable data protection laws and regulations, including
//                   GDPR and other relevant frameworks. Our policy ensures
//                   transparency, providing you with clear information on how your
//                   data is collected, processed, and stored, so you can make
//                   informed decisions about your privacy and security when
//                   interacting with our services.
//                 </p>
//               </div>

//               {chargeSections.map((section, index) => (
//                 <div key={index} className="mb-8">
//                   <h3 className="text-lg font-bold text-gray-800 mb-2">
//                     {section.title}
//                   </h3>
//                   <p className="text-gray-600">{section.content}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </section>
//    </div>

//       <div className="mb-16">
//         <Cta />
//       </div>
//     </>
//   );
// }



"use client";

import Image from "next/image";
import Cta from "@/components/Cta";
import { useState, useRef, useEffect } from "react";

// SVG Icons as React Components
const CreditCardIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 7H2V11H22V7Z" fill="currentColor" />
    <path d="M2 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CancelIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const RefundIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
    <path d="M12 15.5L15.5 12L12 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 12H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExceptionIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 3L3 7.5L12 12L21 7.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 19H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PolicySectionsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="9" cy="12" r="1" fill="currentColor" />
    <circle cx="9" cy="16" r="1" fill="currentColor" />
  </svg>
);

const SummaryIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14Z" fill="currentColor" />
    <path d="M8 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 18H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 22H14C17.3137 22 20 19.3137 20 16V8C20 4.68629 17.3137 2 14 2H10C6.68629 2 4 4.68629 4 8V16C4 19.3137 6.68629 22 10 22Z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const FAQIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17.5C12.2761 17.5 12.5 17.2761 12.5 17C12.5 16.7239 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.7239 11.5 17C11.5 17.2761 11.7239 17.5 12 17.5Z" fill="currentColor" />
    <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const chargeSections = [
  {
    id: "chargeback-process",
    title: "Chargeback Process",
    icon: CreditCardIcon,
    content:
      "Chargebacks can only be initiated through your bank or payment provider. However, we recommend contacting our support team first, as many issues can be resolved quickly. Unauthorized or fraudulent transactions are investigated thoroughly, and we aim to resolve disputes fairly.",
  },
  {
    id: "cancellation-policy",
    title: "Cancellation Policy",
    icon: CancelIcon,
    content:
      "Cancellations must be requested within the allowed period mentioned in the service agreement or policy. Requests after the specified time frame may not be eligible. Our team processes cancellation requests within 24–48 hours and provides a confirmation email.",
  },
  {
    id: "refund-guidelines",
    title: "Refund Guidelines",
    icon: RefundIcon,
    content:
      "Refund eligibility depends on the type of service purchased. Full refunds are available if cancellation requests are made within the permitted window. Refunds are processed to the original payment method within 5–10 business days after approval.",
  },
  {
    id: "exceptions",
    title: "Exceptions",
    icon: ExceptionIcon,
    content:
      "Certain digital products, customized services, or partially used services are non-refundable. If technical issues on our side prevent access or usage, exceptions may be considered. Each case is reviewed individually by our support team.",
  },
];

export default function ChargebackPolicy() {
  const [activeSection, setActiveSection] = useState("chargeback-process");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      <div className="container mt-10">
        <section className="bg-white min-h-screen pt-28 pb-16">
          <div className="bg-[#F4FCFF] rounded-2xl shadow-lg">
            <section>
              <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Sidebar Navigation */}
                  <div className="lg:w-1/4">
                    <div className="sticky top-32 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <PolicySectionsIcon className="w-5 h-5 mr-2" />
                        Policy Sections
                      </h3>
                      <ul className="space-y-2">
                        {chargeSections.map((section, index) => (
                          <li key={index}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer ${
                                activeSection === section.id
                                  ? "bg-[#115D8E] bg-opacity-10 text-white font-medium"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`}
                            >
                              <section.icon className={`w-4 h-4 mr-2 ${activeSection === section.id ? "text-[#115D8E]" : "text-gray-500"}`} />
                              {section.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:w-3/4">
                    {/* Hero */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                      <div className="text-center mb-10">
                        <div className="mb-6">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#115D8E] to-[#777777] rounded-full flex items-center justify-center">
                            <Image
                              src="/Image/chargeback-img.png"
                              alt="Chargeback Policy Icon"
                              width={40}
                              height={40}
                              className="filter invert"
                            />
                          </div>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                          Chargeback & Cancellation Policy
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-4">
                          Cancellations must be requested within the allowed period for eligibility
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#777777] to-[#115D8E] mx-auto mb-6 rounded-full"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          Our chargeback and cancellation policy ensures clarity and fairness.
                          We aim to resolve disputes quickly while protecting customers and our platform.
                          Below you'll find details on chargebacks, cancellations, refunds, and exceptions.
                        </p>
                      </div>
                    </div>

                    {/* Sections */}
                    {chargeSections.map((section, index) => (
                      <div
                        key={index}
                        id={section.id}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className="bg-white p-8 rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-start mb-4">
                          <div className="text-2xl mr-4 bg-gradient-to-br from-[#115D8E] to-[#777777] text-white p-3 rounded-lg flex items-center justify-center">
                            <section.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {section.title}
                          </h3>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>
                        <p className="text-gray-600 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}

                    {/* Summary Card */}
                    <div className="bg-gradient-to-r from-[#115D8E] to-[#777777] p-1 rounded-2xl shadow-lg mt-10">
                      <div className="bg-white rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <SummaryIcon className="w-5 h-5 mr-2" />
                          Policy Summary
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Chargebacks should be raised via your bank
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Contact support first for faster resolution
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Refunds processed within 5–10 business days
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Non-refundable services include used or customized items
                          </li>
                        </ul>
                        <button className="bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-md mt-4 flex items-center">
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Contact Support
                        </button>
                      </div>
                    </div>

                    {/* FAQ */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm mt-10">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <FAQIcon className="w-5 h-5 mr-2" />
                        Frequently Asked Questions
                      </h3>
                      <div className="space-y-4">
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                            <svg className="w-4 h-4 text-[#115D8E] mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                              <path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <path d="M12 17.5C12.2761 17.5 12.5 17.2761 12.5 17C12.5 16.7239 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.7239 11.5 17C11.5 17.2761 11.7239 17.5 12 17.5Z" fill="currentColor" />
                            </svg>
                            How do I request a chargeback?
                          </h4>
                          <p className="text-gray-600">
                            Chargebacks must be requested through your payment provider. 
                            However, reaching out to us first may resolve the issue faster.
                          </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                            <svg className="w-4 h-4 text-[#115D8E] mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                              <path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <path d="M12 17.5C12.2761 17.5 12.5 17.2761 12.5 17C12.5 16.7239 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.7239 11.5 17C11.5 17.2761 11.7239 17.5 12 17.5Z" fill="currentColor" />
                            </svg>
                            What if I cancel after the allowed window?
                          </h4>
                          <p className="text-gray-600">
                            Cancellations after the eligibility window are not refundable, 
                            except in rare technical or service failure cases.
                          </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                            <svg className="w-4 h-4 text-[#115D8E] mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                              <path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <path d="M12 17.5C12.2761 17.5 12.5 17.2761 12.5 17C12.5 16.7239 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.7239 11.5 17C11.5 17.2761 11.7239 17.5 12 17.5Z" fill="currentColor" />
                            </svg>
                            How long until I receive my refund?
                          </h4>
                          <p className="text-gray-600">
                            Approved refunds take 5–10 business days to reflect in your account, 
                            depending on your bank or payment provider.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      <div className="mb-16">
        <Cta />
      </div>
    </>
  );
}
