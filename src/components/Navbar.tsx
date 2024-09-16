"use client"
import { useState,  } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 transition duration-500">
      <div className="relative">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#3B82F6" fillOpacity="0.8" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link className='flex items-center' href="/">
                <img src="/BLU-BG-LESS.png" alt="Logo" className='w-[50px] h-[50px]' />
                <p className="text-xl font-bold text-white">BLU NOVA</p>
              </Link>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
              <Link href="/">
                <p className="text-white hover:text-gray-200">Home</p>
              </Link>
              <Link href="/about">
                <p className="text-white hover:text-gray-200">About</p>
              </Link>
              <Link href="/#services">
                <p className="text-white hover:text-gray-200">Services</p>
              </Link>
              <Link href="/contact-us">
                <p className="text-white hover:text-gray-200">Contact</p>
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white hover:text-gray-200 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-80 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:text-black">Home</p>
            </Link>
            <Link href="/about">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:text-black">About</p>
            </Link>
            <Link href="#services">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:text-black">Services</p>
            </Link>
            <Link href="/contact-us">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:text-black-500">Contact</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;