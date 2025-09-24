import React from "react";
import Hero1 from "./../../assets/Franchise/franchise-bg.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Hero1})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-24 py-16 md:py-32 ">
        <h1 className="text-white text-4xl md:text-5xl font-semibold leading-snug mb-8">
          Empower Students. Build Careers. <br />  Grow Your Business.
        </h1>

        <p className="text-white text-base md:text-lg font-medium mb-8">
          Bring Pixla Academy, the education & talent arm of Pixla Group, to your <br />
          city and transform engineering students into industry-ready professionals <br />
          while building a profitable business.
        </p>

        {/* Button */}
        <button className="bg-yellow-400 text-black font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full hover:bg-yellow-500 transition flex items-center mx-auto">
          Become a Franchise Partner
          <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
