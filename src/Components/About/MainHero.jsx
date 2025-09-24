import React from "react";
import { ArrowRight } from "lucide-react"; // for arrow icon
import Hero1 from "./../../assets/About/heroabout.png"

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage:`url(${Hero1})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-white max-w-3xl px-4">
       <h1 className="text-white text-4xl md:text-5xl font-semibold leading-snug mb-8">
          About Pixla Academy
        </h1>
        <p className="text-lg md:text-xl font-medium mb-8 drop-shadow-md">
          Empowering the next generation of tech professionals with industry-relevant skills and guaranteed placements.
        </p>
        <a 
          href="#learn-more" 
          className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105 inline-flex items-center justify-center mx-auto"
        >
          Learn More
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;