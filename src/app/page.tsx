import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-3">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section */}
        <div className="md:w-[50%] w-full mt-[7rem] p-6 md:pl-6">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-3 leading-tight">
            Build Your Digital <br /> Solutions <br /> Effortlessly
          </p>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            Welcome to BLU NOVA, where innovation meets excellence! <br />
            We specialize in crafting cutting-edge systems, websites, and mobile apps tailored to your needs. Whether you're an organization seeking to enhance your digital presence or a personal business aiming for growth, our team of experts is here to bring your vision to life. Partner with us and experience seamless solutions that drive success in the digital world. Let's build the future together.
          </p>
          <div className="mt-6 w-max">
            <button className="hover:animate-pulse border flex rounded-full p-3 items-center justify-center">
              Get in touch{" "}
              <img
                src="/arrow.svg"
                className="w-[20px] mt-1 hover:animate-spin"
                alt=""
              />
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-[50%] w-full mt-6 md:mt-0 flex justify-center">
          <img
            src="/Programming-rafiki.svg"
            alt="Programming-rafiki"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="my-10">
        <Services />
      </div>

      {/* Testimonials Section */}
      <div className="my-10">
        <Testimonials />
      </div>
    </div>
  );
}
