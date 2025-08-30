import Image from "next/image"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import { IoMdCall } from "react-icons/io"
import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-blue-50/30 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Image src="/Image/deenita-logo.png" alt="Deenita Logo" width={140} height={80} className="mb-6" />
            <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
              Empowering businesses with innovative financial solutions and cutting-edge technology.
            </p>

            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/deenita_india/"
                className="w-12 h-12 bg-gradient-to-r from-[#44A5E9] to-[#5EBDF7] rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 hover:scale-105"
              >
                <FaInstagram size={20} className="text-white" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61580205651246"
                className="w-12 h-12 bg-gradient-to-r from-[#44A5E9] to-[#5EBDF7] rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 hover:scale-105"
              >
                <FaFacebook size={20} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#115D8E] to-[#44A5E9] bg-clip-text text-transparent mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "API's", href: "" },
                { name: "Blog", href: "/blog" },
                { name: "Our Team", href: "/" },
                { name: "Careers", href: "/" },
                { name: "Gallery", href: "/" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-slate-600 hover:text-[#115D8E] transition-all duration-200 text-sm font-medium hover:translate-x-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#115D8E] to-[#44A5E9] bg-clip-text text-transparent mb-6">
              Services
            </h3>
            <div className="space-y-3">
              {[
                { name: "Switch Service", href: "/services/switch" },
                { name: "Escrow Service", href: "/services/escrow" },
                { name: "Connected Banking", href: "/services/connected-banking" },
                { name: "AIGF License", href: "/services/aigf" },
                { name: "Legal & Compliance", href: "/services/legal-compliance" },
                { name: "Utility Services", href: "/services/utility" },
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block text-slate-600 hover:text-[#115D8E] transition-all duration-200 text-sm font-medium hover:translate-x-1"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#115D8E] to-[#44A5E9] bg-clip-text text-transparent mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#72CAF7] to-[#44A5E9] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaLocationDot size={14} className="text-white" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
                </p>
              </div>
              <a
                href="mailto:support@7unique.in"
                className="flex items-center gap-4 text-slate-600 hover:text-[#115D8E] transition-all duration-200 text-sm font-medium group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#72CAF7] to-[#44A5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <IoMail size={14} className="text-white" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-200">support@7unique.in</span>
              </a>
              <a
                href="tel:0141-4511098"
                className="flex items-center gap-4 text-slate-600 hover:text-[#115D8E] transition-all duration-200 text-sm font-medium group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#72CAF7] to-[#44A5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <IoMdCall size={14} className="text-white" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-200 font-medium">0141-4511098</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-medium">
            © 2025 Deenita India Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-8 text-sm">
            {[
              { name: "Privacy Policy", href: "/privacypolicy" },
              { name: "Terms of Use", href: "/termsofuse" },
              { name: "KYC Policy", href: "/kycpolicy" },
              { name: "Refund Policy", href: "/refundpolicy" },
            ].map((policy, index) => (
              <Link
                key={index}
                href={policy.href}
                className="text-slate-500 hover:text-[#115D8E] transition-colors font-mediumt-"
              >
                {policy.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
