import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";

function Footer() {
  return (
    <footer
      className="relative text-gray-400"
      style={{
        width: '100%',
        height: 'auto',
        top: '6px',
        backgroundImage: "url('/Image/footer-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#000',
      }}
    >
      <div className="absolute inset-0 bg-white opacity-20"></div>

      <div className="relative h-full flex flex-col px-30 py-12">

        <div className="mb-16">
          <div className="grid grid-cols-5 gap-12 mt-18">
            <div className='col-span-2'>
              <Image
                src="/Image/deenita-logo.png"
                alt="Deenita Logo"
                width={220}
                height={160}
                className="mb-5"
              />
              <p className="text-sm w-1/2">t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-4">Quick Links</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="block hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="block hover:text-blue-400">Services</a></li>
                <li><a href="#" className="block hover:text-blue-400">API's</a></li>
                <li><a href="#" className="block hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="block hover:text-blue-400">Our Team</a></li>
                <li><a href="#" className="block hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="block hover:text-blue-400">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-4">Services</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="block hover:text-blue-400">Switch Service</a></li>
                <li><a href="#" className="block hover:text-blue-400">Escrow Service</a></li>
                <li><a href="#" className="block hover:text-blue-400">Connected Banking</a></li>
                <li><a href="#" className="block hover:text-blue-400">AIGF License Assistance</a></li>
                <li><a href="#" className="block hover:text-blue-400">Legal & Compliance</a></li>
                <li><a href="#" className="block hover:text-blue-400">Services</a></li>
                <li><a href="#" className="block hover:text-blue-400">Utility Services</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-4">Contact Us</h3>
              <div className="space-y-4 text-sm">
                <p className="font-semibold">HEAD OFFICE</p>
<div className='flex'>
  <FaLocationDot className='text-xl pt-2 text-[#0097cc]' />
                <p className="leading-relaxed pl-3"> At vero eos et accusamus et lusto </p>
</div>

<p className="font-semibold">COORPORATE OFFICE</p>
<div className='flex'>
  <FaLocationDot className='text-xl pt-2 text-[#0097cc]' />
                <p className="leading-relaxed pl-3"> At vero eos et accusamus et lusto</p>
</div>


<div className='flex'>
  <IoMail  className='text-xl pt-2 text-[#0097cc]' />
                <p className="leading-relaxed pl-3"> At vero eos et </p>
</div>
<div className='flex'>
  <IoMdCall  className='text-xl pt-2 text-[#0097cc]' />
                <p className="leading-relaxed pl-3"> At vero eos et </p>
</div>

              </div>
            </div>
          </div>
        </div>

        <div className="border-t-4 w-full border-blue-400 mb-6 mx-auto"></div>
        <div className="mb-6">
          <ul className="flex flex-wrap gap-20 justify-center text-sm">
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Cancellation & Refund Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms of Use</a></li>
            <li><a href="#" className="hover:text-blue-400">KYC Policy & Onboarding Process</a></li>
            <li><a href="#" className="hover:text-blue-400">Chargeback & Cancellation Policy</a></li>
          </ul>
        </div>

        <div className="text-center text-sm mt-auto">
          © 2025 Deenita India Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;