"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the background color based on the current route
  const getBackgroundColor = () => {
    switch (pathname) {
      case '/about':
        return 'bg-gray-300'; 
      case '/services':
        return 'bg-blue-500'; 
      case '/contact':
        return 'bg-yellow-500'; 
      default:
        return 'bg-white'; 
    }
  };

  return (
    <nav className={`${getBackgroundColor()} shadow-md fixed w-full  top-0 z-50 transition duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link className='flex items-center' href="/">
              <img src="/BLU-BG-LESS.png" alt="Logo" className='w-[50px] h-[50px]' />
              <p className="text-xl font-bold text-blue-500">BLU NOVA</p> {/* Adjusted text color to ensure visibility */}
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/">
              <p className="text-blue-500 hover:text-gray-700">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-blue-500 hover:text-gray-700">About</p>
            </Link>
            <Link href="/services">
              <p className="text-blue-500 hover:text-gray-700">Services</p>
            </Link>
            <Link href="/contact-us">
              <p className="text-gray-800 hover:text-blue-500">Contact</p>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-blue-500 hover:text-gray-700 focus:outline-none">
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
