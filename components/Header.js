"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LogIn, Mail, MapPin, MoveUpRight, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed left-0 w-full z-[9999] transition-all duration-500 ${scrolled ? "bg-white/90 border-b border-zinc-200 shadow-xl" : "px-4"}`}>
      
      {/* Top Contact Bar */}
      <div className="bg-[#0D2C5D] text-white text-sm py-2 px-6 flex justify-between items-center mb-3 rounded-b-lg hidden md:flex">
        <div className="flex space-x-6">
          <span className="flex items-center"><Mail className="mr-1 w-4 h-4" /> support@7unique.in</span>
          <span className="flex items-center"><Phone className="mr-1 w-4 h-4" /> 0141-4511098</span>
          <span className="flex items-center"><MapPin className="mr-1 w-4 h-4" /> 97, Dakshinpuri - I, Shrikishan, Jagatpura, Jaipur </span>
        </div>

        <div className="flex space-x-4">
          <Link href="#" className="hover:text-[#72CAF7] transition-colors flex gap-2 items-center">Instagram<MoveUpRight className="w-4 h-4" /></Link>
          <div className="w-px h-6 bg-gray-300"></div>
          <Link href="#" className="hover:text-[#72CAF7] transition-colors flex gap-2 items-center">Twitter<MoveUpRight className="w-4 h-4" /></Link>
          <div className="w-px h-6 bg-gray-300"></div>
          <Link href="#" className="hover:text-[#72CAF7] transition-colors flex gap-2 items-center">Facebook<MoveUpRight className="w-4 h-4" /></Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`flex items-center justify-between rounded-b-xl px-4 md:px-6 py-3 backdrop-blur-xl transition-all duration-500 ${scrolled ? "bg-white/90 top-0 mx-0 border-zinc-200 shadow-xl rounded-none" : "bg-white rounded-none shadow-md border border-[#44A5E9]/20 top-12 "}`}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#44A5E9]/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            <Image
              src="/Image/deenita-logo.png"
              width={100}
              height={100}
              className="relative z-10"
              alt="Company Logo"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-10 font-medium">
            <li>
              <Link href="/" className={`text-[17px] font-medium transition-all duration-300 hover:text-[#0E90C9] hover:scale-105 relative group ${pathname === "/" ? "text-[#0E90C9]" : scrolled ? "text-zinc-900 hover:text-[#0E90C9]" : "text-foreground"}`}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={`text-[17px] font-medium transition-all duration-300 hover:text-[#0E90C9] hover:scale-105 relative group ${pathname === "/about" ? "text-[#0E90C9]" : scrolled ? "text-zinc-900 hover:text-[#0E90C9]" : "text-foreground"}`}>About</Link>
            </li>
            <li className="relative group">
              <div className={`text-[17px] font-medium flex items-center cursor-pointer transition-all duration-300 hover:text-[#0E90C9] hover:scale-105 relative px-2 py-1 rounded-md ${pathname.startsWith("/services") ? "text-[#0E90C9]" : scrolled ? "text-zinc-900" : "text-foreground"}`}>
                Services
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute top-full left-0 mt-3 bg-white/95 backdrop-blur-xl border-[#44A5E9]/60 rounded-xl shadow-2xl shadow-[#115D8E]/30 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 scale-95 group-hover:scale-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#44A5E9]/5 to-[#0E90C9]/10 rounded-xl border border-[#72CAF7]/20"></div>
                <div className="absolute inset-[1px] bg-white/90 rounded-[11px] border border-[#44A5E9]/20"></div>
                <div className="relative z-10 grid grid-cols-1 gap-1 p-4">
                  {[{ href: "/services/switch", title: "Switch Service" }, { href: "/services/aigf", title: "AIGF License Assistance" }, { href: "/services/escrow", title: "Escrow Service" }, { href: "/services/legal-compliance", title: "Legal & Compliance Services" }, { href: "/services/connected-banking", title: "Connected Banking" }, { href: "/services/utility", title: "Utility Services" }].map((service) => (
                    <Link key={service.href} href={service.href} className="block px-4 py-3 text-md text-[#115D8E] font-medium hover:text-black hover:bg-gradient-to-r hover:from-[#44A5E9]/10 hover:to-[#0E90C9]/10 rounded-lg transition-all duration-300 relative group/item hover:scale-105 transform hover:-translate-y-1 border border-transparent hover:border-[#72CAF7]/30 hover:shadow-lg hover:shadow-[#115D8E]/20">
                      <span className="relative z-10">{service.title}</span>
                    </Link>
                  ))}
                </div>
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#44A5E9]/40 to-transparent rounded-full"></div>
              </div>
            </li>
            <li>
              <Link href="/blog" className={`text-[17px] font-medium transition-all duration-300 hover:text-[#0E90C9] hover:scale-105 relative group ${pathname === "/blog" ? "text-[#0E90C9]" : scrolled ? "text-zinc-900 hover:text-[#0E90C9]" : "text-foreground"}`}>Blog</Link>
            </li>
            <li>
              <Link href="/contact" className={`text-[17px] font-medium transition-all duration-300 hover:text-[#0E90C9] hover:scale-105 relative group ${pathname === "/contact" ? "text-[#0E90C9]" : scrolled ? "text-zinc-900 hover:text-[#0E90C9]" : "text-foreground"}`}>Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/login" className="inline-flex items-center bg-[#115d8e] shadow-none rounded-full px-6 py-3 hover:shadow-lg transition-all duration-300">
            <span className="text-white font-medium mr-3">Login</span>
            <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
              <LogIn className="w-4 h-4 text-[#115d8e]" />
            </span>
          </Link>
          <Link href="/contact" className="inline-flex items-center bg-[#ededed] shadow-none rounded-full px-6 py-3 hover:shadow-lg transition-all duration-300">
            <span className="text-gray-900 font-medium mr-3">Get In Touch</span>
            <span className="flex items-center justify-center w-8 h-8 bg-[#115d8e] rounded-full">
              <MoveUpRight className="w-4 h-4 text-white" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200 transition">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li><Link href="/" className="block py-2 px-4 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="block py-2 px-4 rounded-md" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/services" className="block py-2 px-4 rounded-md" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link href="/blog" className="block py-2 px-4 rounded-md" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" className="block py-2 px-4 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            <li><Link href="/login" className="block py-2 px-4 bg-[#115d8e] text-white rounded-full mt-2" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
            <li><Link href="/contact" className="block py-2 px-4 bg-[#ededed] text-gray-900 rounded-full mt-2" onClick={() => setIsMenuOpen(false)}>Get In Touch</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
