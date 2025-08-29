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

const kycSections = [
  {
    id: "data-security",
    title: "Data Security",
    icon: Shield,
    content:
      "We prioritize the protection of your personal data. All information collected during KYC verification is securely stored and used only for compliance and service enhancement. We strictly adhere to data protection laws, including GDPR, and never share your details with third parties without consent.",
  },
  {
    id: "identity-verification",
    title: "Identity Verification",
    icon: IdCard,
    content:
      "As part of our onboarding process, users must provide valid identification documents such as government-issued ID, proof of address, and other supporting materials. These documents are used exclusively for compliance and security purposes.",
  },
  {
    id: "compliance-standards",
    title: "Compliance Standards",
    icon: Scale,
    content:
      "We follow strict compliance procedures to meet local and international regulatory standards. Our KYC process ensures transparency and protects against fraudulent activities, money laundering, and unauthorized access.",
  },
  {
    id: "exceptions",
    title: "Special Cases & Exceptions",
    icon: Star,
    content:
      "In some cases, additional documents or verification steps may be required based on regional regulations or user risk profiles. Our compliance team reviews each case individually to ensure fair and transparent processing.",
  },
];

export default function KycPolicy() {
  const [activeSection, setActiveSection] = useState("data-security");
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
                      <div className="text-center mb-10">
                        <div className="mb-6">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#115D8E] to-[#777777] rounded-full flex items-center justify-center">
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
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-4">
                          We follow a strict KYC policy to verify identity and ensure compliance
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#777777] to-[#115D8E] mx-auto mb-6 rounded-full"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          Our KYC process ensures compliance with legal standards and helps us
                          protect against fraudulent activities. The process is designed to be
                          secure, transparent, and user-friendly.
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
                          Policy Summary
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>✔ All user identities must be verified</li>
                          <li>✔ Data is secured under global standards</li>
                          <li>✔ Compliance with AML & GDPR</li>
                          <li>✔ Transparent onboarding process</li>
                        </ul>
                        <button className="bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-md mt-4">
                          Contact Support
                        </button>
                      </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm mt-10">
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

