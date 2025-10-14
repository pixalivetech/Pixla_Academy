import React from "react";
import Hero1 from "./../../assets/Franchise/franchise-bg.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] sm:h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Hero1})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-24 py-16 sm:py-20 md:py-32 max-w-4xl mx-auto">
        <h1 className="text-white text-3xl mt-10 sm:text-4xl md:text-5xl font-semibold leading-snug mb-6 sm:mb-8">
          Empower Students. Build Careers. <br className="hidden sm:block" /> Grow Your Business.
        </h1>

        <p className="text-white text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-8 leading-relaxed">
          Bring Pixla Academy, the education & talent arm of Pixla Group, to your
          city and transform engineering students into industry-ready professionals
          while building a profitable business.
        </p>

        {/* Button */}
        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-yellow-500 transition flex items-center mx-auto text-sm sm:text-base">
          Become a Franchise Partner
          <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
