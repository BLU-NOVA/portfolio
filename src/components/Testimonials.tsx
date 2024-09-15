import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden">
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
        
        <path fill="url(#grad1)" d="M0 0h1440v400H0z" />
        
        <path 
          fill="#FFFFFF" 
          fillOpacity="0.3"
          d="M0,100 C320,150 520,50 720,100 C920,150 1120,100 1440,80 V400 H0 V100 Z" 
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* <h2 className="text-3xl font-bold text-blue-900">A Message from Our CEO</h2> */}
          <p className="mt-4 text-lg text-blue-700">Discover the vision that drives BLU NOVA forward</p>
        </div>
        <div className="mt-10 max-w-4xl mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <div className="flex justify-center mb-6 text-blue-500">
            <FaQuoteLeft className="w-6 h-6" />
          </div>
          <p className="text-xl text-blue-800 text-center">
            &quot;At BLU NOVA, we&apos;re not just building software; we&apos;re crafting digital solutions that empower businesses to thrive in the ever-evolving technological landscape. Our commitment to innovation, coupled with our deep understanding of our clients&apos; needs, allows us to deliver transformative results. We&apos;re not just a service provider; we&apos;re your partner in digital success.&quot;
          </p>
          <div className="flex justify-center mt-6 text-blue-500">
            <FaQuoteRight className="w-6 h-6" />
          </div>
          <div className="mt-8 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="/ceo.jpg" 
                alt="CEO of BLU NOVA" 
                width={96} 
                height={96}
                className="object-cover"
              />
            </div>
            <p className="text-lg font-semibold text-blue-900">Amos Wachira</p>
            <p className="text-blue-700 text-xs">CEO BLU NOVA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;