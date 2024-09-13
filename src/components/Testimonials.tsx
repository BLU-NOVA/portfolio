import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Hear What They Have to Say About Us</h2>
          <p className="mt-4 text-lg text-gray-600">Our clients love working with us, and here's what they have to say:</p>
        </div>
        <div className="mt-10 max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6 text-blue-500">
            <FaQuoteLeft className="w-6 h-6" />
          </div>
          <p className="text-xl text-gray-700 text-center">
            "Working with the team at BLU NOVA has been a fantastic experience. Their technical expertise and commitment to delivering top-quality software solutions have transformed our operations. They truly understand the client's needs and go above and beyond to exceed expectations."
          </p>
          <div className="flex justify-center mt-6 text-blue-500">
            <FaQuoteRight className="w-6 h-6" />
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-gray-800">Amos Mwongela</p>
            <p className="text-gray-600">Software Engineer at Pesira</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
