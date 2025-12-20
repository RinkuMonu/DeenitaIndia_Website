// "use client";

// import Image from "next/image";
// import Cta from "@/components/Cta";

// const kycSections = [
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
//        <section className="bg-white min-h-screen pt-28 pb-16">
//         <div className="bg-[#F4FCFF] rounded-2xl">
//           <section>
//             <div className="max-w-5xl mx-auto px-4 py-12">
//               <div className="text-center mb-10">
//                 <div className="mb-6">
//                   <Image
//                     src="/Image/kyc-img.png"
//                     alt="Icon"
//                     width={83}
//                     height={83}
//                     className="mx-auto"
//                   />
//                 </div>
//                 <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4">
//                   KYC Policy & Onboarding process
//                 </div>
//                 <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 lg:px-16 mb-8">
//                  We follow a strict KYC policy to verify user identity and ensure compliance with regulatory standards
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

//               {kycSections.map((section, index) => (
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
  IdCard,
  Scale,
  Star,
  ClipboardList,
  FileText,
  HelpCircle,
} from "lucide-react";
import { UserCheck, Search, RefreshCw, Lock } from "lucide-react";

const kycSections = [
  {
    id: "purpose",
    title: "Purpose",
    icon: UserCheck,
    content:
      "The primary purpose of the KYC (Know Your Customer) Policy is to establish the identity, legitimacy, and authenticity of clients using Deenita India Private Limited’s services. This process ensures that the Company can maintain high standards of security, compliance, and transparency while mitigating risks related to fraud, money laundering, or any unlawful activities. The policy applies to all services, including Switch Service, Escrow Service, Connected Banking, advisory support, and utility facilitation.\n\nKYC serves as the foundation for regulatory compliance and operational integrity. It allows the Company to verify that clients meet legal eligibility requirements and that submitted documentation is accurate and valid. Furthermore, it enables the Company to monitor account activity effectively and prevent misuse of services.\n\nThe process not only protects the Company but also safeguards clients’ interests by ensuring that only legitimate individuals or organizations can access services. Clear identification, proper verification, and documentation create a transparent relationship, enabling efficient onboarding, secure transactions, and reliable service delivery. Non-compliance or submission of fraudulent information can result in immediate termination of services and potential legal action, reinforcing the importance of accuracy and honesty in all submissions.",
  },
  {
    id: "eligibility",
    title: "Eligibility",
    icon: Scale,
    content:
      "To ensure compliance with regulatory standards and contractual obligations, only individuals who are 18 years or older and capable of entering into legally binding agreements may onboard with the Company. Organizations must be legally registered entities under Indian law, with valid incorporation documents and authorized representatives.\n\nDuring the onboarding process, users confirm that they meet these eligibility requirements. This step protects the Company from engaging with unauthorized or non-compliant parties. Verification ensures that minors, unregistered entities, or those acting under false pretenses cannot access services, which is crucial for maintaining legal compliance and service integrity.\n\nEligibility checks are designed to protect all stakeholders, including financial institutions, regulatory authorities, and other clients interacting through the platform. By confirming eligibility, the Company ensures that services such as Escrow facilitation, banking integrations are delivered only to qualified clients.\n\nNon-compliance with eligibility requirements may lead to rejection of onboarding or immediate suspension of services. Users are expected to provide truthful and complete information regarding their age, legal status, and authority to act on behalf of an organization. This safeguards both the Company and its clients from potential legal, financial, or reputational risks.",
  },
  {
    id: "information-required",
    title: "Information Required",
    icon: FileText,
    content:
      "Deenita India Private Limited collects specific personal, business, and financial information to complete the KYC process and enable onboarding. For individuals, this typically includes government-issued identification such as Aadhaar, PAN, Passport, or Driving License, proof of address, and valid contact details. For organizations, required documentation includes a Certificate of Incorporation, GST registration, authorized signatory details, bank account information, and other legal registrations.\n\nFinancial verification may also be required, particularly for Escrow or Connected Banking services. Bank account statements, canceled cheques, or verification letters may be requested to ensure accuracy and compliance with regulatory standards. Users are responsible for submitting authentic, up-to-date, and accurate documents.\n\nSubmission of false, misleading, or incomplete information can result in rejection of onboarding or termination of services. The Company reserves the right to verify any submitted document with relevant authorities, banks, or licensing bodies.\n\nCollecting this information allows the Company to ensure that all clients are legally compliant and verified, protecting both the Company and other users. This step is essential for maintaining operational integrity, regulatory compliance, and a secure service environment.",
  },
  {
    id: "verification-process",
    title: "Verification Process",
    icon: Search,
    content:
      "The verification process involves multiple steps to ensure the authenticity of the information provided. First, users submit their KYC documents electronically or physically, depending on the requirements. The Company reviews each document for completeness, validity, and accuracy.\n\nNext, verification is conducted through cross-checking with regulatory bodies, banks, and licensing authorities where applicable. This ensures that submitted documents are genuine and belong to the client requesting services. Any discrepancies are communicated to the client for correction or resubmission.\n\nUpon successful verification, the client’s account is approved, and full access to services is granted. Incomplete, inaccurate, or fraudulent submissions result in rejection of onboarding. Verification timelines may vary depending on document quality, third-party checks, and regulatory approvals, but the Company makes all efforts to ensure a smooth and timely process.\n\nThis step ensures that only verified, eligible clients can access sensitive services like Escrow or Connected Banking, maintaining the integrity and security of the platform.",
  },
  {
    id: "ongoing-monitoring",
    title: "Ongoing Monitoring",
    icon: RefreshCw,
    content:
      "Even after successful onboarding, the Company may periodically request updated documents or information to ensure continued compliance with regulatory requirements. This may include updated identity proofs, business documents, or financial statements.\n\nOngoing monitoring helps the Company detect and prevent fraudulent or unlawful activities, ensuring that clients remain compliant with Indian laws and the Company’s Terms & Conditions. Users are required to cooperate fully with these requests.\n\nFailure to provide updated information or respond to verification requests may result in suspension or termination of services. This ensures that all accounts remain secure, legitimate, and compliant, protecting both the Company and other clients interacting through the platform.",
  },
  {
    id: "data-security",
    title: "Data Security & Confidentiality",
    icon: Shield,
    content:
      "All KYC and onboarding information is securely stored using industry-standard security measures, including encryption, access control, and restricted data access. Only authorized personnel with legitimate business needs can access user data.\n\nUsers are responsible for maintaining the confidentiality of login credentials and sensitive documents. Unauthorized access, submission of false documents, or misuse of information may result in legal action.\n\nData security measures ensure compliance with Indian laws, protect user privacy, and prevent unauthorized transactions or data breaches.",
  },
  {
    id: "legal-compliance",
    title: "Legal & Regulatory Compliance",
    icon: Lock,
    content:
      "The KYC process ensures compliance with all applicable laws, including RBI guidelines, IT Act, GST Act, and other regulations. Users acknowledge that completion of KYC is mandatory for accessing services.\n\nNon-compliance with regulatory requirements may result in termination of services and potential legal consequences.",
  },
];

export default function KycPolicy() {
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
              <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Table of Contents */}
                  <div className="lg:w-1/4">
                    <div className="sticky top-32 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <ClipboardList className="w-5 h-5 mr-2 text-[#115D8E]" />
                        Policy Sections
                      </h3>
                      <ul className="space-y-2">
                        {kycSections.map((section, index) => (
                          <li key={index}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer ${
                                activeSection === section.id
                                  ? "bg-[#115D8E] bg-opacity-10 text-white font-medium"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`}
                            >
                              <section.icon className="w-5 h-5 mr-2" />
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
                          <div className="w-20 h-20 md:ml-24 bg-gradient-to-br from-[#115D8E] to-[#777777] rounded-full flex items-center justify-center">
                            <Image
                              src="/Image/kyc-img.png"
                              alt="KYC Policy Icon"
                              width={40}
                              height={40}
                              className="filter invert"
                            />
                          </div>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                          KYC Policy & Onboarding Process
                        </div>
                        {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-4">
                          We follow a strict KYC policy to verify identity and ensure compliance
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#777777] to-[#115D8E] mx-auto mb-6 rounded-full"></div> */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Effective Date: September 16, 2025<br />
 Company: Deenita India Private Limited<br />
 Registered Office: Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India, 302017<br />
 Contact: support@7unique.in | 0141-4511098

                        </p>
                      </div>
                    </div>

                    {kycSections.map((section, index) => (
                      <div
                        key={index}
                        id={section.id}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className="bg-white p-8 rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-start mb-4">
                          <div className="text-2xl mr-4 bg-gradient-to-br from-[#115D8E] to-[#777777] text-white p-2 rounded-lg">
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
                          <FileText className="w-5 h-5 mr-2 text-[#115D8E]" />
                          Contact for KYC Assistance
                        </h3>
                        <p className="mb-3 text-gray-500">For questions, document submission, or KYC-related support:
</p>
                        <ul className="space-y-2 text-gray-600">
                          <li>Email: support@7unique.in</li>
                          <li>Phone: 0141-4511098</li>
                        </ul>
                        <button className="bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-md mt-4">
                          Contact Support
                        </button>
                      </div>
                    </div>

                    {/* FAQ Section */}
                    {/* <div className="bg-white p-8 rounded-2xl shadow-sm mt-10">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <HelpCircle className="w-5 h-5 mr-2 text-[#115D8E]" />
                        Frequently Asked Questions
                      </h3>
                      <div className="space-y-4">
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2">
                            Why is KYC required?
                          </h4>
                          <p className="text-gray-600">
                            KYC is required to comply with regulatory standards, prevent fraud,
                            and ensure user trust in our services.
                          </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2">
                            What documents are needed?
                          </h4>
                          <p className="text-gray-600">
                            Government-issued ID, proof of address, and in some cases, income or
                            business verification documents may be required.
                          </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                          <h4 className="font-medium text-gray-800 mb-2">
                            How long does verification take?
                          </h4>
                          <p className="text-gray-600">
                            Verification typically takes 24–48 hours, depending on the accuracy
                            of the documents submitted.
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

