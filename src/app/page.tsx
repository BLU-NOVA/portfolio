import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-100 to-white">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: '#93C5FD', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        
        <path fill="url(#grad1)" d="M0 0h1440v800H0z" />
        
        <path 
          fill="#FFFFFF" 
          fillOpacity="0.3"
          d="M0,160 C320,300 520,0 720,100 C920,200 1120,80 1440,80 V800 H0 V160 Z" 
        />
        <path 
          fill="#FFFFFF" 
          fillOpacity="0.4"
          d="M0,320 C320,400 520,200 720,300 C920,400 1120,280 1440,320 V800 H0 V320 Z" 
        />
      </svg>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36 py-8">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="lg:w-1/2 w-full mt-20 sm:mt-24 lg:mt-32 p-4">
            <h1 className="anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-3 leading-tight text-blue-900">
              Build Your Digital <br className="hidden sm:inline" /> Solutions <br className="hidden sm:inline" /> Effortlessly.
            </h1>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-blue-800">
              Welcome to BLU NOVA, where innovation meets excellence! <br className="hidden sm:inline" />
              We specialize in crafting cutting-edge systems, websites, and mobile apps tailored to your needs. Whether you&apos;re an organization seeking to enhance your digital presence or a personal business aiming for growth, our team of experts is here to bring your vision to life. Partner with us and experience seamless solutions that drive success in the digital world. Let&apos;s build the future together.
            </p>
            <div className="mt-6">
              <button className="w-full sm:w-auto border border-yellow-800 text-yellow-800 hover:bg-green-500 hover:text-white transition-colors duration-300 flex rounded-full p-3 items-center justify-center">
               <Link href="/contact-us"> Hire Us{" "}</Link>
                <img
                  src="/arrow.svg"
                  className="w-5 h-5 ml-2 hover:animate-spin"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center items-center">
            <img
              src="/Programming-rafiki.svg"
              alt="Programming-rafiki"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>

        <div className="my-16">
          <Services />
        </div>

        <div className="my-16">
          <Testimonials />
        </div>
      </div>
    </div>
  );
}