"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import LoginModal from './Login.js';
import { usePathname } from 'next/navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className=" fixed top-3 left-0 w-full z-50  container bg-transparent ">
        <div className=" flex  items-center justify-between mx-auto p-4  bg-[#0423820D] h-[54px] rounded-xl backdrop-blur-2xl">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/images/logo.png" width={50} height={50} className="h-8" alt="Flowbite Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
            <button
              type="button"
              className="font-medium hidden md:block bg-white rounded-lg text-xs px-3 text-center text-[#39464F] h-[38px]"
              onClick={() => setIsModalOpen(true)}
            >
              Login
            </button>
            <Link
              href="/contact"
              type="button"
              className="text-white bg-[#115D8E] hidden md:flex items-center justify-center rounded-lg text-xs px-4 h-[38px]"
            >
              Join
            </Link>

            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 " aria-controls="navbar-cta" aria-expanded="false" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
              <li>
                <Link href="/" className="block py-2 px-3 md:p-0  text-xs " aria-current="page">Home</Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 px-3 md:p-0 text-xs ${pathname === '/about' ? 'text-[#115D8E]' : 'text-black hover:text-[#115D8E]'
                    }`}>About</Link>
              </li>
              <li>
                <div className="relative group">
                  <div
                    className={`text-xs flex items-center appearance-none list-none cursor-pointer transition-colors duration-300 ${pathname.startsWith('/services')
                        ? 'text-[#115D8E]'
                        : 'text-black hover:text-[#115D8E]'
                      }`}>
                    Services
                    <svg
                      className="w-3 h-3 ml-1 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  <div
                    className="absolute mt-3 left-0 bg-white border border-gray-200 rounded-xl shadow-[0_8px_30px_rgba(138,173,187)] 
    w-96 z-50 grid grid-cols-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                  >
                    <Link href="/services/switch" className="block px-4 py-3 text-xs hover-underline">
                      Switch Service
                    </Link>
                    <Link href="/services/aigf" className="block px-4 py-3 text-xs hover-underline">
                      AIGF License Assistance
                    </Link>
                    <Link href="/services/escrow" className="block px-4 py-3 text-xs hover-underline">
                      Escrow Service
                    </Link>
                    <Link href="/services/legal-compliance" className="block px-4 py-3 text-xs hover-underline">
                      Legal & Compliance Services
                    </Link>
                    <Link href="/services/connected-banking" className="block px-4 py-3 text-xs hover-underline">
                      Connected Banking
                    </Link>
                    <Link href="/services/utility" className="block px-4 py-3 text-xs hover-underline">
                      Utility Services
                    </Link>
                  </div>
                </div>

              </li>
              <li>
                <Link
                  href="/blog"
                  className={`block py-2 px-3 md:p-0 text-xs ${pathname === '/blog' ? 'text-[#115D8E]' : 'text-black hover:text-[#115D8E]'
                    }`}
                >Blog</Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 px-3 md:p-0 text-xs ${pathname === '/contact' ? 'text-[#115D8E]' : 'text-black hover:text-[#115D8E]'
                    }`}
                >Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'
            } bg-white rounded-b-xl shadow-md relative z-0`}
        >
          <ul className="flex flex-col font-medium p-4 space-y-2">
            <li>
              <Link
                href="/"
                 onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 md:p-0 text-xs ${pathname === '/' ? 'text-[#115D8E]' : 'text-black hover:text-[#115D8E]'
                  }`}
              >Home</Link>
            </li>
            <li>
              <Link
                href="/about"
                 onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 md:p-0 text-xs ${pathname === '/about' ? 'text-[#115D8E]' : 'text-black hover:text-[#115D8E]'
                  }`}
              >About</Link>
            </li>
            <li>
              <details className="group">
                <summary
                  className={`text-xs flex px-3 py-2 items-center appearance-none list-none cursor-pointer transition-colors duration-300 ${pathname.startsWith('/services')
                      ? 'text-[#115D8E]'
                      : 'text-black hover:text-[#115D8E]'
                    }`}
                >Services
                  <svg className="w-3 h-3 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pl-4 mt-2 space-y-1 group-open:block hidden">
                  <Link href="/services/switch"  onClick={() => setIsMenuOpen(false)} className="block px-4 py-1 text-xs hover-underline">
                    Switch Service
                  </Link>
                  <Link href="/services/aigf"  onClick={() => setIsMenuOpen(false)} className="block px-4 py-1 text-xs hover-underline">
                    AIGF License Assistance
                  </Link>
                  <Link href="/services/escrow"  onClick={() => setIsMenuOpen(false)} className="block px-4 py-1 text-xs hover-underline">
                    Escrow Service
                  </Link>
                  <Link href="/services/legal-compliance"  onClick={() => setIsMenuOpen(false)} className="block px-4 py-1 text-xs hover-underline">
                    Legal & Compliance Services
                  </Link>
                  <Link href="/services/connected-banking"  onClick={() => setIsMenuOpen(false)} className="block px-4 py-1 text-xs hover-underline">
                    Connected Banking
                  </Link>
                  <Link href="/services/utility"  onClick={() => setIsMenuOpen(false)} className="block px-4 py-1 text-xs hover-underline">
                    Utility Services
                  </Link>
                </div>
              </details>

            </li>
            <li>
              <Link
                href="/blog"
                className={`block py-2 px-3 md:p-0 text-xs ${pathname === '/blog' ? 'text-[#115D8E]' : 'text-black hover:text-[#115D8E]'
                  }`}
                   onClick={() => setIsMenuOpen(false)}
              >Blog</Link>
            </li>
            <li>
              <Link
                href="/contact"
                 onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 md:p-0 text-xs ${pathname === '/contact' ? 'text-[#115D8E]' : 'text-black hover:text-[#115D8E]'
                  }`}
              >Contact us</Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {setIsModalOpen(true)
                   setIsMenuOpen(false);}
                }
                className="block text-xs px-3 py-2 hover:text-[#115D8E]"
              >
                Login
              </button>
            </li>
            <li>
              <Link href="/contact" className="block text-xs px-3 py-2 hover:text-[#115D8E]">Join</Link>
            </li>
          </ul>
        </div>
      </nav>

      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

export default Header
