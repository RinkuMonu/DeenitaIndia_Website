"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginModal from "@/components/login";
import { usePathname } from "next/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-4 left-0 w-full z-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-6 bg-card/70 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex items-center space-x-3 transition-all duration-300 group-hover:scale-105">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/Image/deenita-logo.png"
                    width={100}
                    height={100}
                    className=" transition-all duration-300"
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
                    className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative group ${
                      pathname === "/" ? "text-primary" : "text-foreground"
                    }`}
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative group ${
                      pathname === "/about" ? "text-primary" : "text-foreground"
                    }`}
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <div className="relative group">
                    <div
                      className={`text-sm font-medium flex items-center cursor-pointer transition-all duration-300 hover:text-primary hover:scale-105 relative ${
                        pathname.startsWith("/services")
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      Services
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    <div className="absolute top-full left-0 mt-3 bg-popover/90 backdrop-blur-xl border border-border/20 rounded-xl shadow-xl w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="grid grid-cols-2 gap-2 p-4">
                        <Link
                          href="/services/switch"
                          className="block px-4 py-3 text-sm text-popover-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 relative group/item hover:scale-105"
                        >
                          Switch Service
                          <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                        </Link>
                        <Link
                          href="/services/aigf"
                          className="block px-4 py-3 text-sm text-popover-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 relative group/item hover:scale-105"
                        >
                          AIGF License Assistance
                          <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                        </Link>
                        <Link
                          href="/services/escrow"
                          className="block px-4 py-3 text-sm text-popover-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 relative group/item hover:scale-105"
                        >
                          Escrow Service
                          <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                        </Link>
                        <Link
                          href="/services/legal-compliance"
                          className="block px-4 py-3 text-sm text-popover-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 relative group/item hover:scale-105"
                        >
                          Legal & Compliance Services
                          <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                        </Link>
                        <Link
                          href="/services/connected-banking"
                          className="block px-4 py-3 text-sm text-popover-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 relative group/item hover:scale-105"
                        >
                          Connected Banking
                          <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                        </Link>
                        <Link
                          href="/services/utility"
                          className="block px-4 py-3 text-sm text-popover-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 relative group/item hover:scale-105"
                        >
                          Utility Services
                          <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative group ${
                      pathname === "/blog" ? "text-primary" : "text-foreground"
                    }`}
                  >
                    Blog
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative group ${
                      pathname === "/contact"
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    Contact us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                className="hidden lg:flex items-center justify-center px-4 py-2 text-sm font-medium text-foreground bg-background/80 hover:bg-muted/80 border border-border/40 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md relative group overflow-hidden"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </button>
              <Link
                href="/contact"
                className="hidden lg:flex items-center justify-center px-6 py-2 text-sm font-medium text-accent-foreground bg-[#115d8e]
                 hover:bg-[#046eb4] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg relative group overflow-hidden "
              >
                <span className="relative z-10">Join</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </Link>

              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="max-w-7xl mx-auto mt-2 px-4">
            <div className="bg-card/90 backdrop-blur-xl border border-border/20 rounded-xl shadow-xl p-6">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                      pathname === "/"
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                      pathname === "/about"
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <details className="group">
                    <summary
                      className={`py-2 text-sm font-medium flex items-center cursor-pointer transition-colors duration-200 ${
                        pathname.startsWith("/services")
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      Services
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="pl-4 mt-2 space-y-2">
                      <Link
                        href="/services/switch"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        Switch Service
                      </Link>
                      <Link
                        href="/services/aigf"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        AIGF License Assistance
                      </Link>
                      <Link
                        href="/services/escrow"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        Escrow Service
                      </Link>
                      <Link
                        href="/services/legal-compliance"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        Legal & Compliance Services
                      </Link>
                      <Link
                        href="/services/connected-banking"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        Connected Banking
                      </Link>
                      <Link
                        href="/services/utility"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
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
                    className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                      pathname === "/blog"
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                      pathname === "/contact"
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Contact us
                  </Link>
                </li>

                <li className="pt-4 border-t border-border/20">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full py-3 text-sm font-medium text-foreground bg-background/80 hover:bg-muted/80 border border-border/40 rounded-lg transition-all duration-200 mb-3"
                  >
                    Login
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full py-3 text-sm font-medium text-center text-accent-foreground bg-accent hover:bg-accent/90 rounded-lg transition-all duration-200"
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
  );
}

export default Header;
