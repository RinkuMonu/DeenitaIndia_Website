"use client";

import { useState, useEffect, useRef } from "react";
import {
  Crown, Users, Building2, ArrowDown, ArrowUp, Star, Award, BarChart3
} from "lucide-react";

// 🔽 Add Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";

const tabs = [
  {
    id: 1,
    title: "Leadership Structure",
    content:
      "Our leadership framework ensures clear direction and strategic vision. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    icon: Crown,
    features: ["Strategic Vision", "Decision Making", "Executive Oversight"],
    stats: "95% Employee Satisfaction",
  },
  {
    id: 2,
    title: "Team Organization",
    content:
      "Our teams are structured for maximum collaboration and efficiency. Content for tab 2: different text can go here. You can add more if needed voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    icon: Users,
    features: ["Collaboration", "Efficiency", "Cross-functional Teams"],
    stats: "42+ Teams Organized",
  },
  {
    id: 3,
    title: "Department Roles",
    content:
      "Clear department roles ensure accountability and smooth operations. Content for tab 3: replace this with relevant content voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    icon: Building2,
    features: ["Accountability", "Clarity", "Streamlined Operations"],
    stats: "15 Departments",
  },
];

export default function OrganizationalStructuring() {
  const [activeTab, setActiveTab] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const swiperRef = useRef(null); // 🔽 holds Swiper instance

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Helper to map tab.id -> slide index
  const indexFromId = (id) => tabs.findIndex((t) => t.id === id);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#115D8E]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#115D8E]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-7xl w-full space-y-8 relative z-10">
        {/* Header Section */}
        <div>
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#115D8E] to-[#0e4a75] text-white rounded-full text-xs font-semibold mb-6 shadow-md">
            <Award className="w-4 h-4 mr-2" />
            Organizational Excellence
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#115D8E] to-[#0e4a75] bg-clip-text text-transparent">
            Organizational
          </h2>
          <h3 className="text-4xl font-bold text-gray-800 mt-2">Structuring</h3>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Discover how our organization is structured for success, efficiency, and collaboration across all departments and teams.
          </p>
        </div>

        {/* Desktop: Buttons + Slider (kept buttons, now control the slider) */}
        <div className="hidden md:block">
          {/* Buttons Row */}
          <div className="flex gap-4 mb-10">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(indexFromId(tab.id));
                    }
                  }}
                  aria-pressed={isActive}
                  className={`flex flex-col items-center gap-4 px-4 py-3 rounded-2xl border-2 text-lg font-semibold transition-all duration-500 transform ${
                    isActive
                      ? "border-[#115D8E] text-[#115D8E] bg-white shadow-2xl scale-105"
                      : "border-gray-200 text-gray-600 bg-white hover:border-[#115D8E]/40 hover:text-[#115D8E] hover:shadow-lg"
                  }`}
                >
                  <div className={`p-3 rounded-full ${isActive ? "bg-[#115D8E]/10" : "bg-gray-100"}`}>
                    <IconComponent className={`w-6 h-6 ${isActive ? "text-[#115D8E]" : "text-gray-500"}`} />
                  </div>
                  {tab.title}
                  <div
                    className={`h-1.5 w-12 rounded-full transition-all duration-500 ${
                      isActive ? "bg-[#115D8E] w-16" : "bg-transparent"
                    }`}
                  ></div>
                </button>
              );
            })}
          </div>

          {/* Slider */}
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            speed={500}
            autoHeight
            // navigation
            pagination={{ clickable: true }}
            initialSlide={indexFromId(activeTab)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              const newActiveId = tabs[swiper.activeIndex]?.id;
              if (newActiveId) setActiveTab(newActiveId);
            }}
            className="pb-10"
          >
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <SwiperSlide key={tab.id}>
                  <div
                    className="bg-white p-10 rounded-3xl border border-gray-200 transition-all duration-700"
                    data-aos="fade-in"
                    data-aos-duration="800"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-start mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#115D8E] to-[#0e4a75] flex items-center justify-center text-3xl text-white mr-6 shadow-lg">
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <div>
                            <h4 className="text-3xl font-bold text-gray-800">{tab.title}</h4>
                            <div className="flex gap-2 mt-3 flex-wrap">
                              {tab.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1.5 bg-[#115D8E]/10 text-[#115D8E] rounded-full text-sm font-medium"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">{tab.content}</p>
                        <div className="flex items-center gap-3 text-[#115D8E] font-medium">
                          <BarChart3 className="w-5 h-5" />
                          <span>{tab.stats}</span>
                        </div>
                      </div>

                      <div className="md:w-1/3 bg-gradient-to-br from-[#F2F8FB] to-blue-50 p-6 rounded-2xl border border-[#115D8E]/20">
                        <h5 className="font-semibold text-gray-800 mb-4 flex items-center">
                          <Star className="w-5 h-5 text-amber-400 mr-2" />
                          Key Benefits
                        </h5>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-[#115D8E] mr-3"></div>
                            <span className="text-gray-700">Enhanced decision-making processes</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-[#115D8E] mr-3"></div>
                            <span className="text-gray-700">Improved cross-department collaboration</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-[#115D8E] mr-3"></div>
                            <span className="text-gray-700">Clear accountability at all levels</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-[#115D8E] mr-3"></div>
                            <span className="text-gray-700">Streamlined operational efficiency</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Mobile Accordion (unchanged) */}
        <div className="md:hidden space-y-6">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isOpen = openAccordion === tab.id;

            return (
              <div key={tab.id} className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white">
                {/* Accordion Button */}
                <button
                  onClick={() => toggleAccordion(tab.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#115D8E]/10 flex items-center justify-center text-[#115D8E] mr-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 text-lg block">{tab.title}</span>
                      <span className="text-sm text-gray-500">{tab.stats}</span>
                    </div>
                  </div>

                  {isOpen ? <ArrowUp className="w-5 h-5 text-[#115D8E]" /> : <ArrowDown className="w-5 h-5 text-[#115D8E]" />}
                </button>

                {/* Accordion Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 p-6" : "grid-rows-[0fr] opacity-0 p-0"
                  }`}
                >
                  <div className="overflow-hidden bg-[#F2F8FB] rounded-xl border-t border-gray-100 p-4">
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {tab.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-[#115D8E]/10 text-[#115D8E] rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <p className="mb-4">{tab.content}</p>

                    <div className="bg-white p-4 rounded-xl border border-[#115D8E]/10">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Star className="w-4 h-4 text-amber-400 mr-2" />
                        Key Benefits
                      </h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#115D8E] mr-2"></div>
                          <span>Enhanced decision-making</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#115D8E] mr-2"></div>
                          <span>Improved collaboration</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#115D8E] mr-2"></div>
                          <span>Clear accountability</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
