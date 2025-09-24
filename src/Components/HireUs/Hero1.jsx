import React from "react";
import { ArrowRight } from "lucide-react"; // for arrow icon
import Hire1 from "./../../assets/Hireus/hirebg.jpg"

const HeroSection = () => {
  return (
    <section
      className="relative w-full px-6 md:px-24 py-16 h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage:`url(${Hire1})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-white max-w-3xl px-4">
        <h1 className="text-white text-4xl md:text-5xl font-semibold leading-snug mb-8">
          Hire Top-Tier Talent, Effortlessly
        </h1>
        <p className="text-lg md:text-xl font-medium mb-8 drop-shadow-md">
          Discover a pool of industry-ready professionals trained with practical skills for immediate impact.
        </p>
        <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105 inline-flex items-center justify-center mx-auto">
          Request a Hire
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;