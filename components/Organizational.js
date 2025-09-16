"use client";

import { useState } from "react";
import {
  Crown, Users, Building2, Star, Award, BarChart3, Target, ChevronRight
} from "lucide-react";

const tabs = [
  {
    id: 1,
    title: "Leadership Structure",
    content:
      "Our leadership framework ensures clear direction and strategic vision with streamlined decision-making processes that drive organizational success.",
    icon: Crown,
    features: ["Strategic Vision", "Decision Making", "Executive Oversight"],
    stats: "95% Employee Satisfaction",
  },
  {
    id: 2,
    title: "Team Organization",
    content:
      "Our teams are structured for maximum collaboration and efficiency, enabling cross-functional cooperation and innovative problem-solving.",
    icon: Users,
    features: ["Collaboration", "Efficiency", "Cross-functional Teams"],
    stats: "42+ Teams Organized",
  },
  {
    id: 3,
    title: "Department Roles",
    content:
      "Clear department roles ensure accountability and smooth operations across all organizational functions and strategic initiatives.",
    icon: Building2,
    features: ["Accountability", "Clarity", "Streamlined Operations"],
    stats: "15 Departments",
  },
];

export default function OrganizationalStructuring() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen container mx-auto px-14 pt-32 pb-20 flex items-center justify-center bg-gradient-to-br from-blue-50/20 via-white to-indigo-50/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#115D8E]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#115D8E]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="w-full space-y-8 relative z-10">
        {/* Header Section */}
        <div className="">
          <div className="inline-flex items-center  px-4 py-2 bg-gradient-to-r from-[#115D8E] to-[#0e4a75] text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <Award className="w-4 h-4 mr-2" />
            Organizational Excellence
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Organizational {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#115D8E] to-[#0e7bc2]">
              Structuring
            </span>
          </h2>
          
          <p className="mt-4 text-gray-600 text-lg ">
            Discover how our organization is structured for success, efficiency, and collaboration.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap  gap-3 mb-8">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl border text-base font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#115D8E] text-white bg-gradient-to-r from-[#115D8E] to-[#0e7bc2] shadow-lg transform -translate-y-1"
                    : "border-gray-200 text-gray-600 bg-white hover:border-[#115D8E]/60 hover:text-[#115D8E] hover:shadow-md"
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500"}`} />
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-500">
          {tabs.map((tab) => {
            if (tab.id !== activeTab) return null;
            const IconComponent = tab.icon;

            return (
              <div key={tab.id} className="flex flex-col lg:flex-row gap-6 md:gap-8 animate-fadeIn">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-start mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#115D8E] to-[#0e7bc2] flex items-center justify-center text-white mr-4 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{tab.title}</h4>
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {tab.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-blue-50 text-[#115D8E] rounded-lg text-sm font-medium border border-blue-100"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{tab.content}</p>

                  <div className="flex items-center gap-3 text-[#115D8E] font-medium p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-sm">{tab.stats}</span>
                  </div>
                </div>

                {/* Benefits Sidebar */}
                <div className="lg:w-2/5 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center mr-3">
                      <Star className="w-4 h-4 text-amber-500" />
                    </div>
                    <h5 className="font-semibold text-gray-800">Key Benefits</h5>
                  </div>
                  
                  <ul className="space-y-3">
                    {[
                      "Enhanced decision-making processes",
                      "Improved cross-department collaboration",
                      "Clear accountability at all levels",
                      "Streamlined operational efficiency"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <ChevronRight className="w-3 h-3 text-[#115D8E]" />
                        </div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}