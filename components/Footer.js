import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative shadow-[1px_-2px_4px_0px_#00000040]">
      <div className="relative w-full">
        <Image
          className="object-cover rounded-md"
          src="/Image/footer-bg.png"
          fill
          alt="footer-bg image"
        />

        <div className="absolute inset-0 bg-white opacity-20"></div>

        <div className="relative z-10 flex flex-col px-12 md:px-12 py-12">
          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              <div className="lg:pl-10">
                <Image
                  src="/Image/deenita-logo.png"
                  alt="Deenita Logo"
                  width={220}
                  height={160}
                  className="mb-5"
                />
                <p className="text-base max-w-xs">
                  t vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
                <div className="flex gap-4 mt-6">
                  <Link
                    href=""
                    className="text-gray-600 hover:text-[#1476ad] transition-colors"
                  >
                    <FaInstagram size={24} />
                  </Link>
                  <Link
                    href=""
                    className="text-gray-600 hover:text-[#1476ad] transition-colors"
                  >
                    <FaFacebook size={24} />
                  </Link>
                </div>
              </div>

              <div className="lg:pl-20 mt-10 md:mt-0">
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-base">
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link href="/about" className="hover:text-[#0E91C9]">
                      About Us
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link
                      href="/services"
                      className="hover:text-[#0E91C9]"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link href="" className="hover:text-[#0E91C9]">
                      API's
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link href="/blog" className="hover:text-[#0E91C9]">
                      Blog
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link href="/" className="hover:text-[#0E91C9]">
                      Our Team
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link href="/" className="hover:text-[#0E91C9]">
                      Careers
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link href="/" className="hover:text-[#0E91C9]">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="font-bold text-lg mb-4">Services</h3>
                <ul className="space-y-2 text-base">
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link
                      href="/services/switch"
                      className="hover:text-[#0E91C9]"
                    >
                      Switch Service
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link
                      href="/services/escrow"
                      className="hover:text-[#0E91C9]"
                    >
                      Escrow Service
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link
                      href="/services/connected-banking"
                      className="hover:text-[#0E91C9]"
                    >
                      Connected Banking
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link
                      href="/services/aigf"
                      className="hover:text-[#0E91C9]"
                    >
                      AIGF License Assistance
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link
                      href="/services/legal-compliance"
                      className="hover:text-[#0E91C9]"
                    >
                      Legal & Compliance Services
                    </Link>
                  </li>
                  <li className="group transition-all duration-200 hover:pl-2">
                    <Link
                      href="/services/utility"
                      className="hover:text-[#0E91C9]"
                    >
                      Utility Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">HEAD OFFICE</p>
                    <div className="flex items-start">
                      <FaLocationDot className="text-3xl text-[#0E91C9] mt-1" />
                      <p className="pl-3 hover:text-[#0E91C9]">
                        Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer,
                        Jagatpura, Jaipur Rajasthan, India, 302017
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">COORPORATE OFFICE</p>
                    <div className="flex items-start">
                      <FaLocationDot className="text-5xl text-[#0E91C9] mt-1" />
                      <p className="pl-3 hover:text-[#0E91C9]">
                        Office No. 101/2, ‘Vakratunda Corporate Park Premises
                        Co-operative Society Limited, Off. Aarey Road, Goregaon
                        (East), Mumbai - 400063
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <IoMail className="text-xl text-[#0E91C9] mt-1" />
                    <p className="pl-3 hover:text-[#0E91C9]">
                      support@7unique.in
                    </p>
                  </div>
                  <div className="flex items-start">
                    <IoMail className="text-xl text-[#0E91C9] mt-1" />
                    <p className="pl-3 hover:text-[#0E91C9]">info@7unique.in</p>
                  </div>
                  <div className="flex items-start">
                    <IoMdCall className="text-xl text-[#0E91C9] mt-1" />
                    <p className="pl-3 hover:text-[#0E91C9]">0141-4511098</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-3 border-[#0E91C9] w-full mb-6"></div>

          <div className="mb-6">
            <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-base text-center">
              <li>
                <Link href="/privacypolicy" className="hover:text-[#0E91C9]">
                  Privacy Policy
                </Link>
              </li>
              <span className="hidden sm:inline">|</span>

              <li>
                <Link href="/refundpolicy" className="hover:text-[#0E91C9]">
                  Cancellation & Refund Policy
                </Link>
              </li>
              <span className="hidden sm:inline">|</span>

              <li>
                <Link href="/termsofuse" className="hover:text-[#0E91C9]">
                  Terms of Use
                </Link>
              </li>
              <span className="hidden sm:inline">|</span>

              <li>
                <Link href="/kycpolicy" className="hover:text-[#0E91C9]">
                  KYC Policy & Onboarding Process
                </Link>
              </li>
              <span className="hidden sm:inline">|</span>

              <li>
                <Link href="/chargebackpolicy" className="hover:text-[#0E91C9]">
                  Chargeback & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center text-base mt-auto">
            © 2025 Deenita India Private Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
