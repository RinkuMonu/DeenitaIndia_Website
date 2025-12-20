// "use client";

// import Image from "next/image";
// import Cta from "@/components/Cta";

// const refundSections = [
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
//                     src="/Image/refund-img.png"
//                     alt="Icon"
//                     width={100}
//                     height={85}
//                     className="mx-auto"
//                   />
//                 </div>
//                 <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4">
//                   Cancellation & Refund Policy
//                 </div>
//                 <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 lg:px-16 mb-8">
//                  You can cancel your service within 7 days of purchase for a refund as per our policy
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

//               {refundSections.map((section, index) => (
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
import {
  XCircle,
  RotateCcw,
  AlertTriangle,
  Scale,
  Mail,
  ClipboardList,
} from "lucide-react";


const refundSections = [
  {
    id: "cancellation-process",
    title: "Cancellation of Services",
    icon: <XCircle className="w-5 h-5 " />,
    content:
      `Clients of Deenita India Private Limited may request the cancellation of any service at any time. To initiate a cancellation, the client must submit a formal request in writing via email to support@7unique.in. Upon receiving the cancellation request, the Company will review the status of the service, assess the work completed, and evaluate any costs already incurred for third-party vendors, licensing fees, or operational expenses.  
      
      The Company reserves the right to deny cancellation requests if the service has been fully completed, delivered, or if cancellation violates contractual obligations agreed upon in the service agreement. Clients should understand that cancellation does not exempt them from fulfilling payment obligations for work that has already been completed or any expenses already incurred by the Company. This policy ensures fairness to both parties and protects the Company from financial loss due to cancellations made after significant work has been performed. Timely submission of a cancellation request is essential to determine eligibility for any potential refund.`,
  },
  {
    id: "refund-eligibility",
    title: "Refund Policy",
    icon: <RotateCcw className="w-5 h-5 " />,
    content:
      `All service fees charged by Deenita India Private Limited are generally non-refundable, unless explicitly stated in writing or required by applicable law. In cases where a service is only partially delivered and the cancellation request is approved, the Company may provide a pro-rata refund, calculated based on the proportion of work not yet completed relative to the total agreed scope of services.

Refunds, when applicable, will be processed through the same payment method originally used for the transaction. The processing timeline may vary depending on the payment channel and banking procedures but will be completed within a reasonable period after cancellation approval. This policy ensures transparency in financial dealings, clearly outlines the circumstances under which refunds may be issued, and sets clear expectations for clients regarding refund eligibility.

The refund structure protects both the client and the Company, ensuring clients are only charged for work performed while safeguarding the Company from losses due to partial cancellations.
`
  },
  {
    id: "non-refundable",
    title: "Third-Party Costs",
    icon: <AlertTriangle className="w-5 h-5 " />,
    content:
      `Some services provided by Deenita India Private Limited involve third-party vendors, partners, or service providers, including banks, licensing authorities, utility providers, or other operational partners. Fees or costs paid to these entities are non-refundable regardless of whether the client cancels services.

Clients are responsible for all third-party charges, even if the Company has already incurred or remitted these payments before receiving the cancellation request. This ensures that the Company is not financially liable for expenses beyond its control. The policy also protects relationships with third-party vendors by guaranteeing timely payment and honoring contractual obligations with these providers.

Clients are advised to review all associated costs and obligations before requesting service initiation. Understanding these third-party obligations ensures transparency and prevents disputes regarding refund eligibility or service cancellations.
`
  },
  {
    id: "exceptions",
    title: "Disputes and Legal Recourse",
    icon: <Scale className="w-5 h-5 " />,
    content:
      `Any disputes or disagreements related to cancellations or refunds will be addressed in accordance with applicable Indian law and the Company’s Terms & Conditions. The Company encourages clients to first attempt to resolve disputes amicably by contacting support@7unique.in.

If an amicable resolution is not possible, the Company reserves the right to pursue legal action to recover unpaid fees, outstanding balances, or costs incurred as a result of service cancellations. This clause ensures that the Company maintains legal protection while providing a structured framework for dispute resolution.

It also emphasizes that clients are responsible for meeting payment obligations and understanding the cancellation and refund terms before engaging the Company’s services.
`
  },
  {
    id: "exceptions",
    title: "Contact for Cancellation & Refund Requests",
    icon: <Mail className="w-5 h-5 " />,
    content:
      `Clients seeking to cancel a service or request a refund may contact the Company through the following channels:

Email: support@7unique.in
 Phone: 0141-4511098

All requests should include sufficient details about the service, payment reference, and reason for cancellation to enable the Company to respond efficiently. Timely communication ensures proper assessment of the cancellation request and determination of any potential refunds.
Deenita India Private Limited aims to respond promptly to all requests, providing clear guidance regarding next steps and any applicable financial obligations. Unauthorized attempts to dispute payments or bypass the official process may result in legal action.

`
  },
];

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState("cancellation-process");
  const sectionRefs = useRef([]);

useEffect(() => {
  const sections = sectionRefs.current; // 👈 snapshot

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

  sections.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => {
    sections.forEach((ref) => {
      if (ref) observer.unobserve(ref);
    });
    observer.disconnect(); // ✅ extra safety
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
                  {/* Table of Contents */}
                  <div className="lg:w-1/4">
                    <div className="sticky top-32 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <ClipboardList className="w-5 h-5 mr-2 text-[#115D8E]" /> Policy Sections
                      </h3>
                      <ul className="space-y-2">
                        {refundSections.map((section, index) => (
                          <li key={index}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer gap-2 ${activeSection === section.id
                                ? "bg-[#115D8E] text-white font-medium"
                                : "text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                              {section.icon}
                              {section.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:w-3/4">
                    <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                      <div className=" mb-10">
                        <div className="mb-6">
                          <div className="w-20 h-20  bg-gradient-to-br from-[#115D8E] to-[#777777] rounded-full flex items-center justify-center">
                            <Image
                              src="/Image/refund-img.png"
                              alt="Refund Policy Icon"
                              width={40}
                              height={40}
                              className="filter invert"
                            />
                          </div>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                          Cancellation & Refund Policy
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-4">
                          You can cancel your service within 7 days of purchase for a refund as per our policy
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#777777] to-[#115D8E] mb-6 rounded-full"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          Our refund policy is designed to be fair and transparent. We understand that circumstances may change, and we strive to make the cancellation and refund process as straightforward as possible. Below you&apos;ll find detailed information about our policies, eligibility criteria, and processes.
                        </p>
                      </div>
                    </div>

                    {refundSections.map((section, index) => (
                      <div
                        key={index}
                        id={section.id}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className="bg-white p-8 rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-start mb-4">
                          <div className="text-2xl mr-4 bg-gradient-to-br from-[#115D8E] to-[#777777] text-white p-2 rounded-lg">
                            {section.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {section.title}
                          </h3>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>
                        <p className="text-gray-600  whitespace-pre-line">{section.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Cta />
        </section>
      </div>
    </>
  );
}