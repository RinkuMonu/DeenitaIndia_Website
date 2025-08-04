"use client";

import Image from "next/image";
import Cta from "@/components/Cta";

const refundSections = [
  {
    title: "Data Security",
    content:
      "Our privacy policy prioritizes the protection of your personal data, ensuring that any information we collect is securely stored and used exclusively for the purpose of delivering and enhancing our services. We are committed to respecting your privacy and will never share your data with third parties without your explicit consent. Additionally, we adhere to all applicable data protection laws and regulations, including GDPR and other relevant frameworks.",
  },
  {
    title: "Data Security",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita",
  },
  {
    title: "Data Security",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita",
  },
];

export default function Privacy() {
  return (
    <>
   <div className="container">
       <section className="bg-white min-h-screen pt-28 pb-16">
        <div className="bg-[#F4FCFF] rounded-2xl">
          <section>
            <div className="max-w-5xl mx-auto px-4 py-12">
              <div className="text-center mb-10">
                <div className="mb-6">
                  <Image
                    src="/Image/refund-img.png"
                    alt="Icon"
                    width={100}
                    height={85}
                    className="mx-auto"
                  />
                </div>
                <div className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white font-medium px-8 py-2 rounded-full mb-4">
                  Cancellation & Refund Policy
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 lg:px-16 mb-8">
                 You can cancel your service within 7 days of purchase for a refund as per our policy
                </h1>
                <p className="mt-4 text-gray-600 text-start">
                  Our privacy policy prioritizes the protection of your personal
                  data, ensuring that any information we collect is securely
                  stored and used exclusively for the purpose of delivering and
                  enhancing our services. We are committed to respecting your
                  privacy and will never share your data with third parties
                  without your explicit consent. Additionally, we adhere to all
                  applicable data protection laws and regulations, including
                  GDPR and other relevant frameworks. Our policy ensures
                  transparency, providing you with clear information on how your
                  data is collected, processed, and stored, so you can make
                  informed decisions about your privacy and security when
                  interacting with our services.
                </p>
              </div>

              {refundSections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              ))}
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
