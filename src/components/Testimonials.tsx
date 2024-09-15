import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden">
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
            <stop offset="100%" style={{ stopColor: '#93C5FD', stopOpacity: 0.3 }} />
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
          <h2 className="text-3xl font-bold text-blue-900">Hear What They Have to Say About Us</h2>
          <p className="mt-4 text-lg text-blue-700">Our clients love working with us, and here's what they have to say:</p>
        </div>
        <div className="mt-10 max-w-4xl mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <div className="flex justify-center mb-6 text-blue-500">
            <FaQuoteLeft className="w-6 h-6" />
          </div>
          <p className="text-xl text-blue-800 text-center">
            "Working with the team at BLU NOVA has been a fantastic experience. Their technical expertise and commitment to delivering top-quality software solutions have transformed our operations. They truly understand the client's needs and go above and beyond to exceed expectations."
          </p>
          <div className="flex justify-center mt-6 text-blue-500">
            <FaQuoteRight className="w-6 h-6" />
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-blue-900">Amos Mwongela</p>
            <p className="text-blue-700">Software Engineer at Pesira</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;