// "use client";

// import Image from "next/image";
// import Cta from "@/components/Cta";

// const privacySections = [
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
//     <div className="container">
//         <section className="bg-white min-h-screen pt-28 pb-16">
//         <div className="bg-[#F4FCFF] rounded-2xl">
//           <section>
//             <div className="max-w-5xl mx-auto px-4 py-12">
//               <div className="text-center mb-10">
//                 <div className="mb-6">
//                   <Image
//                     src="/Image/privacy-img.png"
//                     alt="Icon"
//                     width={83}
//                     height={83}
//                     className="mx-auto"
//                   />
//                 </div>
//                 <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4">
//                   Privacy Policy
//                 </div>
//                 <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 lg:px-16 mb-8">
//                   We value your privacy and are committed to protecting your
//                   personal information
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

//               {privacySections.map((section, index) => (
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
//     </div>

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

// ==== SVG ICONS (Same Style as Chargeback Policy) ====

const SecurityIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L4 6V11C4 16.52 7.58 21.74 12 23C16.42 21.74 20 16.52 20 11V6L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="8" r="1" fill="currentColor" />
  </svg>
);

const CollectionIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 10H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const UsageIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="3"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 21H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 17V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CookiesIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="10" cy="10" r="1" fill="currentColor" />
    <circle cx="14" cy="14" r="1" fill="currentColor" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
  </svg>
);

const RightsIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="7"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M5.5 21C5.5 17.6863 8.18629 15 11.5 15H12.5C15.8137 15 18.5 17.6863 18.5 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 16V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 8H12.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// ==== PRIVACY SECTIONS WITH SVG ICONS ====

const privacySections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: SecurityIcon,
    content:
      "Deenita India Private Limited (“Company,” “we,” “our,” or “us”) is committed to protecting the privacy and confidentiality of information collected from users (“you” or “user”) while accessing or using our services. This Privacy Policy outlines how we collect, process, store, and protect your personal and business information. It also explains your rights regarding your data and how it may be used.\n\nBy using our services, you acknowledge and consent to the practices described in this Privacy Policy. The policy applies to all interactions with our services, including Switch Service, Escrow Service, Connected Banking, Legal & Compliance support, and Utility Services. It is designed to ensure transparency and build trust by informing users about the data we collect, why it is collected, and the measures taken to protect it. Users are encouraged to review this policy periodically to stay informed of updates or changes.",
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: CollectionIcon,
    content:
      "We collect certain personal, business, and usage information to provide, operate, and improve our services efficiently. Personal information includes details such as your name, email address, phone number, account credentials, and KYC or identification documents required for service verification and compliance purposes. Business information may include company registration details, banking information, and documents necessary for service facilitation.\n\nWe also collect usage information, such as IP addresses, device details, browser type, activity logs, and interactions with the platform. This helps us monitor performance, optimize the user experience, and enhance security. For payment processing, we collect limited financial information provided through approved banking channels, ensuring secure handling via our partners.\n\nAll information is collected in accordance with applicable data protection laws. Users are responsible for providing accurate and complete information, as inaccuracies may affect service delivery.",
  },
  {
    id: "data-usage",
    title: "How We Use Your Information",
    icon: UsageIcon,
    content:
      "We use the information collected to provide, manage, and improve our services efficiently. Personal and business information is used to facilitate transactions, process payments, verify identities, complete KYC requirements, and ensure regulatory compliance. Usage data helps us monitor system performance, enhance user experience, and improve reliability.\n\nWe also use your information to send important updates, notifications, and service-related messages. Additionally, the data supports internal analytics, reporting, and strategic planning. Your data will not be used for unrelated commercial purposes without explicit consent.",
  },
  {
    id: "data-sharing",
    title: "Data Sharing and Disclosure",
    icon: RightsIcon,
    content:
      "We do not sell, trade, or rent user information to third parties. Data may be shared only when necessary for service delivery, compliance, or business operations. This includes sharing with licensed financial institutions or trusted service providers under strict confidentiality agreements.\n\nData may also be disclosed when required by law, regulatory authorities, or legal proceedings. Any unauthorized use or access to your data by third parties is strictly prohibited, and we reserve the right to take legal action in such cases.",
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: SecurityIcon,
    content:
      "We implement industry-standard measures to protect user data from unauthorized access, disclosure, alteration, or destruction. These include encryption, secure servers, access controls, and monitoring.\n\nWhile we strive to maintain the highest level of security, no system is completely risk-free. Users must protect their login credentials and notify us of any suspected breaches immediately.",
  },
  {
    id: "user-rights",
    title: "User Rights",
    icon: RightsIcon,
    content:
      "You have the right to access, correct, update, or delete your personal data. You may also request to withdraw consent or obtain details about how your data is used and shared.\n\nTo exercise these rights, please contact us at support@7unique.in. We will respond within a reasonable timeframe in accordance with applicable laws.",
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: UsageIcon,
    content:
      "We retain user data only as long as necessary to provide services, comply with laws, resolve disputes, or enforce agreements. Afterward, data is securely deleted or anonymized.\n\nRetention periods vary depending on the type of data and legal obligations. Users should maintain their own backups of critical data.",
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    icon: CookiesIcon,
    content:
      "We use cookies and tracking technologies to enhance user experience, analyze performance, and personalize content. Users can manage or disable cookies in their browser settings. Some features may not function properly if cookies are disabled.",
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    icon: CollectionIcon,
    content:
      "We may engage third-party providers for services such as payment processing, analytics, hosting, or support. These providers may access limited user data under confidentiality agreements.\n\nWe are not responsible for the practices of third parties. Users should review their privacy policies separately.",
  },
  {
    id: "compliance",
    title: "Compliance with Laws",
    icon: UsageIcon,
    content:
      "Users are responsible for complying with all applicable laws, regulations, and requirements while using our services. Non-compliance may result in suspension or termination of services, and we may take legal action where necessary.",
  },
  {
    id: "changes",
    title: "Changes to Privacy Policy",
    icon: RightsIcon,
    content:
      "We may update or revise this Privacy Policy from time to time to reflect business, legal, or service changes. Updates will be communicated via our platform or email. Continued use of our services constitutes acceptance of the updated policy.",
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
              <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Sidebar (Fixed) */}
                  <div className="lg:w-1/4">
                    <div className="sticky top-32 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <InfoIcon className="w-5 h-5 mr-2" />
                        Contents
                      </h3>
                      <ul className="space-y-2">
                        {privacySections.map((section, index) => (
                          <li key={index}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer ${
                                activeSection === section.id
                                  ? "bg-[#115D8E] bg-opacity-10 text-white font-medium"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`}
                            >
                              <section.icon
                                className={`w-4 h-4 mr-2 ${
                                  activeSection === section.id
                                    ? "text-[#115D8E]"
                                    : "text-gray-500"
                                }`}
                              />
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
                      <div className="text-start mb-10">
                        <div className="mb-6">
                          <div className="w-20 h-20 md:ml-8 bg-gradient-to-br from-[#115D8E] to-[#777777] rounded-full flex items-center justify-center">
                            <Image
                              src="/Image/privacy-img.png"
                              alt="Privacy Icon"
                              width={40}
                              height={40}
                              className="filter invert"
                            />
                          </div>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                          Privacy Policy
                        </div>
                        <h1 className="text-3xl md:text-sm text-gray-800 mb-6 mt-4">
                          <ul className="text-start">
<li>Effective Date: September 16, 2025
 </li>
 <li>
Company: Deenita India Private Limited
 </li>
 <li>
 Registered Office: Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India, 302017
 </li>
 <li>
Contact: support@7unique.in | 0141-4511098
 </li>
                          </ul>

                        </h1>
                        {/* <div className="h-1 w-20 bg-gradient-to-r from-[#777777] to-[#115D8E] mx-auto mb-6 rounded-full"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          Our privacy policy prioritizes the protection of your personal data, ensuring that any information we collect is securely stored and used exclusively for the purpose of delivering and enhancing our services.
                        </p> */}
                      </div>
                    </div>

                    {privacySections.map((section, index) => (
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

                    {/* Additional Info Card */}
                    <div className="bg-gradient-to-r from-[#115D8E] to-[#777777] p-1 rounded-2xl shadow-lg mt-10">
                      <div className="bg-white rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <InfoIcon className="w-5 h-5 mr-2" />
                          Need More Information?
                        </h3>
                        <p className="text-gray-600 mb-4">
                         For questions, concerns, or requests regarding this Privacy Policy or the handling of your personal and business data, users may contact Deenita India Private Limited through the following channels:
                         <div className="my-5">
                          <ul>
                          <li><span className="font-bold text-black">Company Name:</span>  Deenita India Private Limited</li>
                          <li><span className="font-bold text-black">Registered Office:</span>  Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India, 302017</li>
                          <li><span className="font-bold text-black"> Email: </span> support@7unique.in</li>
                          <li> <span className="font-bold text-black">Phone:</span>  0141-4511098</li>
                         </ul>
                         </div>
                        </p>
                        <button className="bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-md">
                          Contact Privacy Team
                        </button>
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

