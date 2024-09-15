"use client"
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative z-0 min-h-screen overflow-hidden bg-gradient-to-b from-blue-300 to-blue-100">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7babef', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4fb0ff', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#16aae9', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#297af4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        <path fill="url(#grad1)" d="M0 0h1440v800H0z" />
        
        <path 
          fill="url(#grad2)" 
          d="M0,400 C320,360 480,480 720,440 C960,400 1120,320 1440,400 V800 H0 V400 Z"
        />
      </svg>

      <div className="relative z-10 p-6">
        <section className="mt-16 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-12 rounded-lg text-center mb-12 shadow-lg backdrop-blur-sm bg-opacity-80">
          <h1 className="text-4xl font-bold mb-6">What We Are About </h1>
          <p className="text-lg leading-relaxed">
            Blu Nova is an organization that helps you bring your ideas and products to the online world. We aim to make global digital transformation easy by automating repetitive tasks and enabling you to focus on creativity and growth. Our suite of tools and services, from ecommerce to product management, is designed to streamline your business processes and enhance your productivity.
          </p>
        </section>

        <section className="my-12 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-white">Our Mission</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-10"
          >
            <p className="text-lg max-w-lg leading-relaxed text-gray-700 bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-lg">
              At Blu Nova, our mission is to empower businesses of all sizes to thrive in the digital era. We believe in the power of innovation, and we are committed to providing tools that simplify your workflow and expand your reach.
            </p>
          </motion.div>
        </section>

        <section className="my-12 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 bg-opacity-70 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Innovation</h3>
              <p className="text-lg text-gray-600">
                We lead with innovation, ensuring that our solutions are always at the forefront of technology to meet the needs of tomorrow.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 bg-opacity-70 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Integrity</h3>
              <p className="text-lg text-gray-600">
                Honesty and transparency are at the heart of our work. We build trust with our clients by delivering on our promises with integrity.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 bg-opacity-70 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Excellence</h3>
              <p className="text-lg text-gray-600">
                We strive for excellence in every project we undertake, ensuring that our solutions exceed expectations and deliver value.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}