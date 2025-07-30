"use client";

import Image from "next/image";




export default function ContactPage() {
  return (

     <section className="pt-20 md:pt-32 relative before:content-[''] before:absolute before:inset-0 before:backdrop-blur-[100px] before:z-[-1] z-1 px-4 sm:px-24">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full bg-[#eaf4fa] rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row">
                <div className="w-full md:w-3/5">
                  <span className="inline-block bg-gradient-to-r from-[#777777] to-[#115D8E] text-white text-sm px-4 py-1 rounded-full mb-4">
                    Contact us anytime
                  </span>
                  <h2 className="text-2xl md:text-[32px] font-bold text-[#115d8e] mb-4 md:pr-10">
                    Reach out to us we’re just a message away
                  </h2>
                  <p className="text-gray-800 mb-6 text-base md:text-[16px] md:pr-8">
                   We’re here to answer your questions and provide the support you need.
                  </p>



                  <button className="mt-4 md:mt-6 bg-[#115d8e] hover:bg-[#006c9d] text-white font-semibold px-6 py-2 rounded-md shadow-md">
                    Get started
                  </button>
                </div>

                <div className="hidden md:block md:absolute right-10 lg:right-40 top-[90px]">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/Image/Rectangle 45.png"
                      alt="Team working"
                      width={398}
                      height={190}
                      className="banner-overlaid-img object-cover h-[400px]"
                    />
                  </div>
                </div>
              </div>
            </div>



<section>
<div className="min-h-screen bg-white flex flex-col md:flex-row items-start justify-center gap-12 px-6 md:px-16 py-16 ">
      {/* Contact Form */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[1px_4px_10px_2px_rgba(0,0,0,0.25)] p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#115D8E] mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Kanak Sharma"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 shadow-[1px_1px_6px_0px_#E5E5E5]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#115D8E] mb-1">Business Email</label>
            <input
              type="email"
              placeholder="email@company.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 shadow-[1px_1px_6px_0px_#E5E5E5]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#115D8E] mb-1">Mobile Number</label>
            <input
              type="text"
              placeholder="4856545165"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 shadow-[1px_1px_6px_0px_#E5E5E5]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#115D8E] mb-1">Message</label>
            <textarea
              placeholder="Tell us about your needs.."
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 shadow-[1px_1px_6px_0px_#E5E5E5]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-[#777777] to-[#115D8E] shadow-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="flex-1 max-w-xl text-gray-800">
        <h2 className="text-2xl font-bold text-[#115D8E] mb-2">
          Start the conversation today
        </h2>
        <p className="text-gray-500 mb-8 text-[16px]">We’re just a message, call, or click away.</p>

        <div className="space-y-6 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 pt-0.5">📧</span>
            <div>
              <div className="font-semibold text-[14px]">Email</div>
              <div className="text-gray-500">email@company.com</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-blue-600 pt-0.5">📞</span>
            <div>
              <div className="font-semibold text-[14px]">Call us</div>
              <div className="text-gray-500">2545682559</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-blue-600 pt-0.5">📍</span>
            <div>
              <div className="font-semibold text-[14px]">Visit us</div>
              <div className="text-gray-500">
                At vero eos et accusamus et iusto odio dignissimos ducimus
              </div>
            </div>
          </div>

          <div className="font-semibold">Office Hours</div>
        </div>

        {/* Logos */}
        <div className="mt-16">
          <p className="text-gray-600 text-sm mb-2">Working together for smarter solutions</p>
          <div className="flex items-center gap-6 mt-3">
            <Image src="/logo1.png" alt="Logo 1" width={80} height={30} />
            <Image src="/logo2.png" alt="Logo 2" width={60} height={30} />
            <Image src="/logo3.png" alt="Logo 3" width={100} height={30} />
          </div>
        </div>
      </div>
    </div>
</section>
          </section>
            );
}