import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            {/* Uncomment this if you have a logo image */}
            {/* <img src="/BLU-BG-LESS.png" alt="logo" className='w-[50px]' /> */}
            <div className="text-lg font-bold">BLU NOVA</div>
            <p className="mt-2 text-sm text-gray-400">
              Delivering innovative tech solutions <br />
              and system integration services <br />
              tailored for your business needs.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6 text-center md:text-left">
            <a href="/services" className="hover:underline">Services</a>
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/blog" className="hover:underline">Blog</a>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://twitter.com/blunovatech" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/blu-nova-tech" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/BLU-NOVA" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} BLU NOVA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
