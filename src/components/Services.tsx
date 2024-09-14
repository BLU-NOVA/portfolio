import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaCube, FaRobot, FaSearchengin } from 'react-icons/fa';
import Head from 'next/head';

const services = [
  {
    title: 'Web Development',
    description: 'High-quality web applications with modern frameworks.',
    icon: <FaLaptopCode className="w-12 h-12" />,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    icon: <FaMobileAlt className="w-12 h-12" />,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered designs to create seamless experiences.',
    icon: <FaPalette className="w-12 h-12" />,
  },
  {
    title: 'Blockchain',
    description: 'Decentralized apps and smart contract development.',
    icon: <FaCube className="w-12 h-12" />,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent systems and AI-powered solutions.',
    icon: <FaRobot className="w-12 h-12" />,
  },
  {
    title: 'Search Engine Optimization | SEO',
    description: 'Get the recognition you deserve for your business or enterprise.',
    icon: <FaSearchengin className="w-12 h-12" />,
  },
];

const Services: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Services | BLU NOVA</title>
        <meta name="description" content="We offer web development, mobile app development, UI/UX design, blockchain, AI, and machine learning services." />
        <meta name="keywords" content="web development, mobile apps, UI/UX, blockchain, AI, machine learning, services" />
        <meta name="author" content="BLU NOVA" />
        <meta property="og:title" content="Our Services | BLU NOVA" />
        <meta property="og:description" content="Explore our services in web development, mobile apps, UI/UX design, blockchain, and AI/ML at BLU NOVA." />
        <meta property="og:image" content="/services-image.jpg" />
        <meta property="og:url" content="https://www.bluenovatech.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="BLU NOVA" />
        <meta name="twitter:image:alt" content="Our services include web development, mobile apps, and more at BLU NOVA." />
      </Head>

      <section className="py-12 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        {/* SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#93C5FD', stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          
          {/* Gradient background */}
          <path fill="url(#grad1)" d="M0 0h1440v400H0z" />
          
          {/* Curved shape */}
          <path 
            fill="#FFFFFF" 
            fillOpacity="0.3"
            d="M0,100 C320,150 520,50 720,100 C920,150 1120,100 1440,80 V400 H0 V100 Z" 
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900">Our Services</h2>
            <p className="mt-4 text-lg text-blue-700">
              We offer a wide range of services to help you build your next big project.
            </p>
          </div>
          <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white bg-opacity-80 shadow-lg p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-4 relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-75"></div>
                  <div className="relative z-10 text-white transform hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
                <p className="mt-2 text-blue-700 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;