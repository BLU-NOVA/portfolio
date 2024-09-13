import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaCube, FaRobot, FaSearchengin } from 'react-icons/fa';
import Head from 'next/head';

const services = [
  {
    title: 'Web Development',
    description: 'High-quality web applications with modern frameworks.',
    icon: <FaLaptopCode className="w-12 h-12 text-blue-500" />,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    icon: <FaMobileAlt className="w-12 h-12 text-blue-500" />,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered designs to create seamless experiences.',
    icon: <FaPalette className="w-12 h-12 text-blue-500" />,
  },
  {
    title: 'Blockchain',
    description: 'Decentralized apps and smart contract development.',
    icon: <FaCube className="w-12 h-12 text-blue-500" />,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent systems and AI-powered solutions.',
    icon: <FaRobot className="w-12 h-12 text-blue-500" />,
  },
  {
    title: 'Search Engine Optimization | SEO',
    description: 'Get the recognition you deserve for your business or enterprise.',
    icon: <FaSearchengin className="w-12 h-12 text-blue-500" />,
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

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer a wide range of services to help you build your next big project.
            </p>
          </div>
          <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
