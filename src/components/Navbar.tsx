"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="relative">
        <svg
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#3B82F6"
            fillOpacity="0.8"
            d="M0,0 C480,80 960,20 1440,100 L1440,0 L0,0 Z"
          />
        </svg>
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link className="flex items-center" href="/">
                <img
                  src="/BLU-BG-LESS.png"
                  alt="Logo"
                  className="w-[50px] h-[50px]"
                />
                <p
                  className={`text-xl font-bold ml-2 transition-colors duration-300 ${
                    isScrolled ? "text-blue-500" : "text-white"
                  }`}
                >
                  BLU NOVA
                </p>
              </Link>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
              {navItems.map((item) => (
                <Link key={item.name} href={item.path}>
                  <p
                    className={`transition-colors duration-300 ${
                      isScrolled
                        ? "text-blue-500 hover:text-blue-700"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-blue-500 hover:text-blue-700"
                    : "text-white hover:text-gray-200"
                } focus:outline-none`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-80 backdrop-blur-md shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <p className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:text-blue-700">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
