"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import LoginModal from "@/components/login"
import { usePathname } from "next/navigation"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
     <nav className={`fixed left-0 w-full z-50 transition-all duration-500 ${scrolled ? "top-0 px-0" : "top-4 px-4"}`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`flex items-center justify-between px-6 py-3 backdrop-blur-xl rounded-2xl border shadow-lg transition-all duration-500 ${scrolled
                ? "bg-gradient-to-r from-[#44A5E9]/10 via-[#5EBDF7]/10 to-[#72CAF7]/20 border-[#44A5E9]/10 shadow-xl shadow-[#115D8E]/20 rounded-none"
                : "bg-gradient-to-r from-[#44A5E9]/10 via-[#5EBDF7]/5 to-[#72CAF7]/10 border-[#44A5E9]/20 shadow-[#115D8E]/10"
              }`}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex items-center space-x-3 transition-all duration-300 group-hover:scale-105">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#44A5E9]/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-[#44A5E9]/20 to-[#0E90C9]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                  <Image
                    src="/Image/deenita-logo.png"
                    width={100}
                    height={100}
                    className="relative z-10"
                    alt="Company Logo"
                  />
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-8 font-medium">
                <li>
                  <Link
                    href="/"
                    className={`text-sm font-medium transition-all duration-300 hover:text-[#0E90C9] hover:scale-105 relative group ${pathname === "/"
                        ? "text-[#0E90C9]"
                        : scrolled
                          ? "text-black hover:text-white"
                          : "text-foreground"
                      }`}
                  >
                    Home
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#0E90C9] transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    ></span>
                    <span className="absolute inset-0 bg-[#44A5E9]/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`text-sm font-medium transition-all duration-300 hover:text-[#0E90C9] hover:scale-105 relative group ${pathname === "/about"
                        ? "text-[#0E90C9]"
                        : scrolled
                          ? "text-black hover:text-white"
                          : "text-foreground"
                      }`}
                  >
                    About
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#0E90C9] transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    ></span>
                    <span className="absolute inset-0 bg-[#44A5E9]/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  </Link>
                </li>
                <li>
                  <div className="relative group">
                    <div
                      className={`text-sm font-medium flex items-center cursor-pointer transition-all duration-300 hover:text-[#0E90C9] hover:scale-105 relative px-2 py-1 rounded-md ${pathname.startsWith("/services")
                          ? "text-[#0E90C9]"
                          : scrolled
                            ? "text-white hover:text-white"
                            : "text-foreground"
                        }`}
                    >
                      Services
                      <span
                        className={`absolute -bottom-1 left-2 h-0.5 bg-[#0E90C9] transition-all duration-300 ${pathname.startsWith("/services")
                            ? "w-[calc(100%-16px)]"
                            : "w-0 group-hover:w-[calc(100%-16px)]"
                          }`}
                      ></span>
                      <span className="absolute inset-0 bg-[#44A5E9]/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    <div className="absolute top-full left-0 mt-3 bg-white/95 backdrop-blur-xl border-2 border-[#44A5E9]/60 rounded-xl shadow-2xl shadow-[#115D8E]/30 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 scale-95 group-hover:scale-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#44A5E9]/5 to-[#0E90C9]/10 rounded-xl border border-[#72CAF7]/20"></div>
                      <div className="absolute inset-[1px] bg-white/90 rounded-[11px] border border-[#44A5E9]/20"></div>

                      <div className="relative z-10 grid grid-cols-1 gap-1 p-4">
                        {[
                          { href: "/services/switch", title: "Switch Service" },
                          { href: "/services/aigf", title: "AIGF License Assistance" },
                          { href: "/services/escrow", title: "Escrow Service" },
                          { href: "/services/legal-compliance", title: "Legal & Compliance Services" },
                          { href: "/services/connected-banking", title: "Connected Banking" },
                          { href: "/services/utility", title: "Utility Services" },
                        ].map((service, index) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-3 text-xs text-[#115D8E] font-medium hover:text-black hover:bg-gradient-to-r hover:from-[#44A5E9]/10 hover:to-[#0E90C9]/10 rounded-lg transition-all duration-300 relative group/item hover:scale-105 transform hover:-translate-y-1 border border-transparent hover:border-[#72CAF7]/30 hover:shadow-lg hover:shadow-[#115D8E]/20"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <span className="relative z-10">{service.title}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#72CAF7] to-[#44A5E9] group-hover/item:w-full transition-all duration-300 rounded-full"></span>
                            {/* <span className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#0E90C9] to-[#1476AD] group-hover/item:w-full transition-all duration-300 delay-100 rounded-full"></span> */}
                            {/* <span className="absolute inset-0 bg-gradient-to-br from-[#44A5E9]/10 via-transparent to-[#0E90C9]/10 rounded-lg opacity-0 group-hover/item:opacity-100 transition-all duration-300 border border-[#72CAF7]/20"></span> */}
                          </Link>
                        ))}
                      </div>

                      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#44A5E9]/40 to-transparent rounded-full"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`text-sm font-medium transition-all duration-300 hover:text-[#0E90C9] hover:scale-105 relative group ${pathname === "/blog"
                        ? "text-[#0E90C9]"
                        : scrolled
                          ? "text-black hover:text-white"
                          : "text-foreground"
                      }`}
                  >
                    Blog
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#0E90C9] transition-all duration-300 ${pathname === "/blog" ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    ></span>
                    <span className="absolute inset-0 bg-[#44A5E9]/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`text-sm font-medium transition-all duration-300 hover:text-[#0E90C9] hover:scale-105 relative group ${pathname === "/contact"
                        ? "text-[#0E90C9]"
                        : scrolled
                          ? "text-black hover:text-white"
                          : "text-foreground"
                      }`}
                  >
                    Contact us
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#0E90C9] transition-all duration-300 ${pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    ></span>
                    <span className="absolute inset-0 bg-[#44A5E9]/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                className={`hidden lg:flex items-center justify-center px-4 py-2 text-sm cursor-pointer font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg relative group overflow-hidden ${scrolled
                    ? "text-black bg-white/10 hover:bg-white/20 border border-white/30 hover:shadow-white/20"
                    : "text-[#115D8E] bg-[#72CAF7]/10 hover:bg-[#5EBDF7]/20 border border-[#44A5E9]/30 hover:shadow-[#115D8E]/20"
                  }`}
                onClick={() => setIsModalOpen(true)}
              >
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="absolute inset-0 bg-[#44A5E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </button>
              <Link
                href="/contact"
                className={`hidden lg:flex items-center justify-center px-6 py-2 text-sm font-medium text-white  rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg relative group overflow-hidden ${scrolled
                    ? "bg-gradient-to-r from-white/20 via-white/30 to-white/20 hover:from-white/30 hover:via-white/40 hover:to-white/30 hover:shadow-white/30"
                    : "bg-gradient-to-r from-[#115D8E] via-[#1476AD] to-[#0E90C9] hover:from-[#0E90C9] hover:via-[#0097CC] hover:to-[#44A5E9] hover:shadow-[#115D8E]/30"
                  }`}
              >
                <span className="relative z-10">Join</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#44A5E9]/20 to-[#0E90C9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </Link>

              <button
                type="button"
                className={`lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 rounded-lg transition-all duration-300 hover:scale-110 ${scrolled ? "text-white hover:bg-white/10" : "text-[#115D8E] hover:bg-[#44A5E9]/10"
                  }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-8"
            }`}
        >
          <div className="max-w-7xl mx-auto mt-2 px-4">
            <div className="bg-gradient-to-br from-[#44A5E9]/95 via-[#5EBDF7]/90 to-[#72CAF7]/95 backdrop-blur-xl border border-[#44A5E9]/30 rounded-xl shadow-2xl shadow-[#115D8E]/20 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#44A5E9]/20 to-[#0E90C9]/20"></div>
              <ul className="space-y-4 relative z-10">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-sm font-medium transition-all duration-300 hover:translate-x-2 ${pathname === "/" ? "text-white" : "text-white/80 hover:text-white"
                      }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-sm font-medium transition-all duration-300 hover:translate-x-2 ${pathname === "/about" ? "text-white" : "text-white/80 hover:text-white"
                      }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <details className="group">
                    <summary
                      className={`py-2 text-sm font-medium flex items-center cursor-pointer transition-all duration-300 hover:translate-x-2 ${pathname.startsWith("/services") ? "text-white" : "text-white/80 hover:text-white"
                        }`}
                    >
                      Services
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="pl-4 mt-2 space-y-2">
                      <Link
                        href="/services/switch"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2"
                      >
                        Switch Service
                      </Link>
                      <Link
                        href="/services/aigf"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2"
                      >
                        AIGF License Assistance
                      </Link>
                      <Link
                        href="/services/escrow"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2"
                      >
                        Escrow Service
                      </Link>
                      <Link
                        href="/services/legal-compliance"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2"
                      >
                        Legal & Compliance Services
                      </Link>
                      <Link
                        href="/services/connected-banking"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2"
                      >
                        Connected Banking
                      </Link>
                      <Link
                        href="/services/utility"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2"
                      >
                        Utility Services
                      </Link>
                    </div>
                  </details>
                </li>
                <li>
                  <Link
                    href="/blog"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-sm font-medium transition-all duration-300 hover:translate-x-2 ${pathname === "/blog" ? "text-white" : "text-white/80 hover:text-white"
                      }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-sm font-medium transition-all duration-300 hover:translate-x-2 ${pathname === "/contact" ? "text-white" : "text-white/80 hover:text-white"
                      }`}
                  >
                    Contact us
                  </Link>
                </li>

                <li className="pt-4 border-t border-white/20">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(true)
                      setIsMenuOpen(false)
                    }}
                    className="block w-full py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg transition-all duration-300 mb-3 hover:scale-105"
                  >
                    Login
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full py-3 text-sm font-medium text-center text-white bg-gradient-to-r from-white/20 to-white/30 hover:from-white/30 hover:to-white/40 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Join
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

export default Header
