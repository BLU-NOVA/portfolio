"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link className='flex  items-center' href="/">
            <img src="/BLU-BG-LESS.png" alt="" className='w-[50px] h-[50px]' />
              <p className="text-xl font-bold text-blue-600">BLU NOVA</p>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/">
              <p className="text-gray-800 hover:text-blue-500">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-gray-800 hover:text-blue-500">About</p>
            </Link>
            <Link href="/services">
              <p className="text-gray-800 hover:text-blue-500">Services</p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-800 hover:text-blue-500">Contact</p>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-green-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-500">Home</p>
            </Link>
            <Link href="/about">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-500">About</p>
            </Link>
            <Link href="/services">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-500">Services</p>
            </Link>
            <Link href="/contact">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-500">Contact</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
