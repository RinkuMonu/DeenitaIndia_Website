"use client";

import Image from "next/image";



export default function CompanySection() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        <div className="md:w-full bg-[#eaf4fa] rounded-3xl p-8 shadow-sm flex">
          <div>
            <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white text-sm px-4 py-1 rounded-full mb-4">
            About Company
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#115d8e] mb-4">
            Creating connections through impactful experiences
          </h2>
          <p className="text-gray-600 mb-6">
            We turn bold ideas into impactful results through design,
            strategy, and innovation.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl shadow-md w-40 text-center">
              <div className="text-2xl font-semibold text-[#184766]">2000+</div>
              <div className="text-sm text-gray-600">Distributors</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md w-40 text-center">
              <div className="text-2xl font-semibold text-[#184766]">1,00,000+</div>
              <div className="text-sm text-gray-600">Retailers</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md w-40 text-center">
              <div className="text-2xl font-semibold text-[#184766]">800+</div>
              <div className="text-sm text-gray-600">Districts</div>
            </div>
          </div>

          <button className="bg-[#115d8e] hover:bg-[#006c9d] text-white font-semibold px-6 py-2 rounded-md shadow-md">
            Get started
          </button>
          </div>


          <div className="md:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/Image/Rectangle 45.png"
              alt="Team working"
              width={398}
              height={520}
              className="object-cover w-full h-full"
            />
          </div>
          </div>
</div>
</div>

      <div className="mt-34 ">
<h2 className="text-5xl md:text-5xl font-bold mb-14 pl-12">
  <span className="text-[#115d8e]">Our </span>
  <span className="text-gray-700">Vision & Mission</span>
</h2>
 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">



        <div className="bg-[#166599] text-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6" />
            <h3 className="text-xl font-bold">Vision</h3>
          </div>
          <p className="text-sm leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas.
          </p>
        </div>


        <div className="bg-white border border-gray-200 text-[#166599] p-8 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6" />
            <h3 className="text-xl font-bold">Mission</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas.
          </p>
        </div>
      </div>
</div>



    </section>
  );
}
