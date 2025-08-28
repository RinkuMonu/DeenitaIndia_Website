"use client";

import { useState } from "react";

const tabs = [
  {
    id: 1,
    title: "Leadership Structure",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 2,
    title: "Team Organization",
    content:
      "Content for tab 2: different text can go here. You can add more if needed voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 3,
    title: "Department Roles",
    content:
      "Content for tab 3: replace this with relevant content voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

export default function OrganizationalStructuring() {
  const [activeTab, setActiveTab] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="container"   data-aos="fade-up"
  data-aos-duration="2000">
      <section className="py-12 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#115D8E] pb-2">
          Organizational
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8">
          Structuring
        </h3>

        <div className="hidden md:flex flex-wrap gap-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-8 py-4 rounded-lg border text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "border-[#115D8E] text-[#115D8E] bg-white shadow"
                  : "border-gray-300 text-gray-600 bg-white"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  activeTab === tab.id ? "bg-[#115D8E]" : "bg-gray-600"
                }`}
              ></span>
              {tab.title}
            </button>
          ))}
        </div>

        <div className="hidden md:block bg-[#F2F8FB] p-6 rounded-xl shadow-md text-[16px] text-gray-700 leading-relaxed">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>


        <div className="md:hidden space-y-4">
          {tabs.map((tab) => (
            <div key={tab.id} className="rounded-xl overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleAccordion(tab.id)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-700 font-medium bg-white"
              >
                <span>{tab.title}</span>
                <span className="text-[#1476ad]">{openAccordion === tab.id ? "▲" : "▼"}</span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openAccordion === tab.id ? "max-h-[500px] p-4" : "max-h-0 overflow-hidden p-0"
                } bg-[#F2F8FB] text-[15px] text-gray-700 leading-relaxed`}
              >
                {tab.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
