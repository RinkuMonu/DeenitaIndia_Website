"use client";

import { useState } from "react";

const tabs = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Content for tab 2: different text can go here. You can add more if needed.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Content for tab 3: replace this with relevant content for the third tab.",
  },
];

export default function OrganizationalStructuring() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#115D8E] pb-2">
        Organizational
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8">
        Structuring
      </h3>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-8 py-4 rounded-lg border text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "border-[#0E91C9] text-[#0E91C9] bg-white shadow"
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

      {/* Content Box */}
      <div className="bg-[#F2F8FB] p-6 rounded-xl shadow-md  text-[16px] text-gray-700 leading-relaxed">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </section>
  );
}
