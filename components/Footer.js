import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import Link from "next/link"

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 lg:pl-20">
                <Image
                  src="/Image/deenita-logo.png"
                  alt="Deenita Logo"
                  width={220}
                  height={160}
                  className="mb-5"
                />
                <p className="text-sm max-w-xs">
                  t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                </p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-gray-600 hover:text-[#1476ad] transition-colors">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#1476ad] transition-colors">
                    <FaFacebook size={24} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">

    <li><Link href="/about" className="hover:text-[#0E91C9]">About Us</Link></li>
    <li><Link href="" className="hover:text-[#0E91C9]">Services</Link></li>
    <li><Link href="" className="hover:text-[#0E91C9]">API's</Link></li>
    <li><Link href="/blog" className="hover:text-[#0E91C9]">Blog</Link></li>
    <li><Link href="" className="hover:text-[#0E91C9]">Our Team</Link></li>
    <li><Link href="" className="hover:text-[#0E91C9]">Careers</Link></li>
    <li><Link href="" className="hover:text-[#0E91C9]">Gallery</Link></li>
  </ul>


              </div>

              <div>
                <h3 className="font-semibold text-base mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  {["Switch Service", "Escrow Service", "Connected Banking", "AIGF License Assistance", "Legal & Compliance", "Services", "Utility Services"].map((text) => (
                    <li key={text}><a href="#" className="block hover:text-[#1476ad]">{text}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-4">Contact Us</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold">HEAD OFFICE</p>
                    <div className='flex items-start'>
                      <FaLocationDot className='text-xl text-[#1476ad] mt-1' />
                      <p className="pl-3">At vero eos et accusamus et lusto</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">COORPORATE OFFICE</p>
                    <div className='flex items-start'>
                      <FaLocationDot className='text-xl text-[#1476ad] mt-1' />
                      <p className="pl-3">At vero eos et accusamus et lusto</p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <IoMail className='text-xl text-[#1476ad] mt-1' />
                    <p className="pl-3">At vero eos et</p>
                  </div>
                  <div className='flex items-start'>
                    <IoMdCall className='text-xl text-[#1476ad] mt-1' />
                    <p className="pl-3">At vero eos et</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border- w-full mb-6"></div>

          <div className="mb-6">
  <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-center">
    <li><Link href="/privacypolicy" className="hover:text-[#0E91C9]">Privacy Policy</Link></li>
    <li><Link href="/refundpolicy" className="hover:text-[#0E91C9]">Cancellation & Refund Policy</Link></li>
    <li><Link href="/termsofuse" className="hover:text-[#0E91C9]">Terms of Use</Link></li>
    <li><Link href="/kycpolicy" className="hover:text-[#0E91C9]">KYC Policy & Onboarding Process</Link></li>
    <li><Link href="/chargebackpolicy" className="hover:text-[#0E91C9]">Chargeback & Cancellation Policy</Link></li>
  </ul>
</div>

          <div className="text-center text-sm mt-auto">
            © 2025 Deenita India Private Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;