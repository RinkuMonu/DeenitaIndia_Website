// "use client";

// import Image from "next/image";
// import Cta from "@/components/Cta";

// const termsSections = [
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
//      <div className="container">

// <section className="bg-white min-h-screen pt-28 pb-16">
//     <div className="bg-[#F4FCFF] rounded-2xl">
//           <section>
//             <div className="max-w-5xl mx-auto px-4 py-12">
//               <div className="text-center mb-10">
//                 <div className="mb-6">
//                                  <Image
//                                    src="/Image/privacy-img.png"
//                                    alt="Icon"
//                                    width={83}
//                                    height={83}
//                                    className="mx-auto"
//                                  />
//                                </div>
//                 <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4">
//                  Terms of Use
//                 </div>
//                 <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 lg:px-16 mb-8">
//                 By accessing or using our services, you agree to comply with our terms and conditions
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

//               {termsSections.map((section, index) => (
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
// </section>


//      </div>
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
  Shield,
  User,
  Scale,
  Megaphone,
  ClipboardList,
  FileText,
  HelpCircle,
  CheckCircle,
} from "lucide-react";

const termsSections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: <Shield className="w-5 h-5" />,
    content: `By accessing, browsing, or using any services provided by Deenita India Private Limited, including but not limited to Switch Service, Escrow Service, Connected Banking, Legal & Compliance support, and Utility Services (collectively referred to as “Services”), you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions (“Terms”). These Terms constitute a legally binding agreement between you, the user, and Deenita India Private Limited (“Company,” “we,” “our,” or “us”). If you do not agree with any part of these Terms, you must immediately discontinue the use of all our Services. Continued use of our platform or Services will be considered as your explicit acceptance of these Terms.

Accessing and using our Services indicates that you understand that the Company provides facilitation, advisory, and support services only, and that use of our Services is subject to compliance with applicable laws, regulations, and third-party requirements. You acknowledge that it is your responsibility to review these Terms periodically, as the Company may update them from time to time. Any changes or modifications will be effective immediately upon posting on our platform or communication through other channels. Your continued use of the Services after such updates constitutes acceptance of the revised Terms.

This clause protects the Company legally by establishing that users cannot claim ignorance of the rules governing the use of our Services. It ensures that all users are aware of their rights and responsibilities and confirms that by using the Services, users agree to comply with the regulations, limitations, and obligations described in these Terms. Essentially, this section forms the foundation for all other provisions in the Terms & Conditions, clarifying the contractual relationship between the user and the Company from the outset.`,
  },
  {
    id: "scope",
    title: "2. Scope of Services",
    icon: <User className="w-5 h-5" />,
    content: `Deenita India Private Limited provides a range of facilitation, advisory, and support services designed to assist clients in managing financial, administrative, and utility-related operations efficiently. Our services include, but are not limited to, the following:

- Switch Service – Supports clients in migrating accounts, systems, or services smoothly.
- Escrow Service – Acts as an intermediary with regulated financial institutions to securely hold and release funds.
- Connected Banking – Provides API integrations and tools for seamless banking operations.
- Legal & Compliance Advisory – Helps businesses meet compliance obligations with advisory and documentation support.
- Utility Services – Facilitates digital payments, bill management, and related services.

These services are facilitation and advisory solutions only. The Company does not act as a bank, financial institution, or legal authority. Clients remain responsible for compliance and decisions.`,
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    icon: <Scale className="w-5 h-5" />,
    content: `Users must be at least 18 years of age and legally capable of entering into binding contracts.
Organizations must be duly registered under Indian law and authorized to engage in related transactions.

By using our services, you confirm that you meet these eligibility criteria. Users who fail to meet them must discontinue use immediately.`,
  },
  {
    id: "responsibilities",
    title: "4. User Responsibilities",
    icon: <User className="w-5 h-5" />,
    content: `Users must provide accurate and up-to-date information at all times (e.g., KYC, business registration).
They must comply with all laws and not use services for fraud, money laundering, or unlawful activities.

Users must maintain account confidentiality and are responsible for all activities under their accounts.`,
  },
  {
    id: "fees",
    title: "5. Fees & Payment",
    icon: <Scale className="w-5 h-5" />,
    content: `Services are provided on a fee-for-service basis. Fees will be communicated before initiation and must be paid via approved channels.
All fees are non-refundable except as required by law.

The Company reserves the right to revise pricing with prior notice. Continued use after notice implies acceptance.`,
  },
  {
    id: "escrow",
    title: "6. Escrow & Connected Banking Disclaimer",
    icon: <Shield className="w-5 h-5" />,
    content: `The Company does not operate as a bank. Escrow funds are held only by partner financial institutions.
Connected Banking involves third-party systems, and the Company is not liable for errors or delays beyond its control.

Clients must resolve disputes with the respective financial institutions.`,
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    icon: <Shield className="w-5 h-5" />,
    content: `Services are provided "as is". The Company is not liable for:

- Failures caused by third-party service providers.
- Delays from regulatory approvals.
- Losses due to user negligence or non-compliance.

The maximum liability shall not exceed the service fees paid for the specific service in question.`,
  },
  {
    id: "compliance",
    title: "8. Compliance & Legal Framework",
    icon: <Scale className="w-5 h-5" />,
    content: `Users are responsible for complying with applicable laws and regulations.
The Company provides facilitation only and does not assume liability for non-compliance.

Services may be suspended or terminated immediately in cases of unlawful use.`,
  },
  {
    id: "intellectual",
    title: "9. Intellectual Property Rights",
    icon: <User className="w-5 h-5" />,
    content: `All intellectual property (software, platform, branding, designs, documents, etc.) belongs to the Company.

Users are granted a limited, non-transferable license for agreed purposes only. Unauthorized reproduction, resale, or distribution is strictly prohibited.`,
  },
  {
    id: "termination",
    title: "10. Termination of Services",
    icon: <Shield className="w-5 h-5" />,
    content: `The Company may suspend or terminate services if a user:

- Violates these Terms.
- Provides false or fraudulent information.
- Engages in unlawful use.
- Fails to comply with regulations.

Termination does not relieve the user of obligations incurred prior.`,
  },
  {
    id: "governing-law",
    title: "11. Governing Law & Dispute Resolution",
    icon: <Scale className="w-5 h-5" />,
    content: `These Terms are governed by Indian law.
Disputes will first be resolved through negotiation. If unresolved, they fall under the exclusive jurisdiction of the courts in Jaipur, Rajasthan, India.`,
  },
  {
    id: "changes",
    title: "12. Changes to Terms",
    icon: <Megaphone className="w-5 h-5" />,
    content: `The Company reserves the right to update these Terms at any time.
Users will be notified of updates, and continued use implies acceptance.

If a user disagrees, they must discontinue use immediately.`,
  },
];


export default function Privacy() {
  const [activeSection, setActiveSection] = useState("data-security");
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
              <div className="max-w-6xl px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Table of Contents */}
                  <div className="lg:w-1/4">
                    <div className="sticky top-32 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <ClipboardList className="w-5 h-5 mr-2 text-[#115D8E]" /> Policy Sections
                      </h3>
                      <ul className="space-y-2">
                        {termsSections.map((section, index) => (
                          <li key={index}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer ${
                                activeSection === section.id
                                  ? "bg-[#115D8E] bg-opacity-10 text-white font-medium"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`}
                            >
                              <span className="mr-2">{section.icon}</span>
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
                      <div className="mb-10">
                        <div className="mb-6">
                          <div className="w-20 h-20 md:ml-8 bg-gradient-to-br from-[#115D8E] to-[#777777] rounded-full flex items-center justify-center">
                            <FileText className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                          Terms & Conditions
                        </div>
                        {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-4">
                          By accessing or using our services, you agree to comply with our terms and conditions
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#777777] to-[#115D8E] mx-auto mb-6 rounded-full"></div> */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                           Effective Date:
Company: Deenita India Private Limited (“Company,” “we,” “our,” or “us”)<br />
 Registered Office: Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017<br />
 Contact: support@7unique.in | 0141-4511098

                        </p>
                      </div>
                    </div>

                    {termsSections.map((section, index) => (
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
                        <p className="text-gray-600 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}

                    {/* Summary Card */}
                    <div className="bg-gradient-to-r from-[#115D8E] to-[#777777] p-1 rounded-2xl shadow-lg mt-10">
                      <div className="bg-white rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <FileText className="w-5 h-5 mr-2 text-[#115D8E]" /> Contact Information
                        </h3>
                        <p className="text-gray-500 mb-6">For any support, queries, feedback, or complaints related to the services provided by Deenita India Private Limited, users may reach out to the Company through the following contact channels:
</p>
                        <ul className="space-y-2 text-gray-600 mt-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />Company Name: Deenita India Private Limited

                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" /> Registered Office Address: Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India, 302017

                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />  Email: d

                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />   Phone: 0141-4511098

                          </li>
                        </ul>
                        <p className="mt-6 text-gray-500">Users are encouraged to contact the Company for any clarifications regarding services, billing, technical support, compliance, or the Terms & Conditions. The Company will make reasonable efforts to respond to inquiries in a timely manner and resolve issues efficiently.
All correspondence should include sufficient details to allow the Company to identify the account, service, or transaction in question. Users are responsible for providing accurate contact information to ensure effective communication.
© 2025 Deenita India Private Limited. All rights reserved.
</p>
                        <button className="bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-md mt-4">
                          Contact Support
                        </button>
                      </div>
                    </div>

                    {/* FAQ Section */}
                    {/* <div className="bg-white p-8 rounded-2xl shadow-sm mt-10">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <HelpCircle className="w-5 h-5 mr-2 text-[#115D8E]" /> Frequently Asked Questions
                      </h3>
                      <div className="space-y-4">
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2">
                            Do you share my personal data?
                          </h4>
                          <p className="text-gray-600">
                            No, your data is never shared with third parties without your explicit consent.
                          </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2">
                            What happens if I violate the terms?
                          </h4>
                          <p className="text-gray-600">
                            Violating our terms can result in account suspension or termination, depending on severity.
                          </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2">
                            How will I know if policies change?
                          </h4>
                          <p className="text-gray-600">
                            We notify users via email or in-app messages for major updates to our terms of use.
                          </p>
                        </div>
                      </div>
                    </div> */}
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
