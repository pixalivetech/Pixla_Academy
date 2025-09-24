import React from "react";
import { ArrowRight } from "lucide-react"; // for arrow icon
import Hero2 from "./../../assets/Land/hero2.jpg"

const HeroSection = () => {
  return (
    <section
      className="px-6 md:px-24 pt-16 md:pt-82 pb-16 md:pb-96 relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage:`url(${Hero2})`,
          // replace with your bg image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-semibold mb-8">
          “From Learning to Earning – Real Projects,<br /> Real Experience”
        </h1>
       <p className="text-base sm:text-lg md:text-xl font-medium mb-6 text-white">
      Gain hands-on experience with live client projects <br />

       Get mentorship from industry experts and startup founders <br />

       Build a portfolio that makes you job-ready or freelance-ready</p>
        {/* Button */}
        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center space-x-2 hover:bg-yellow-500 transition">
          <span>Explore Program</span>
          <ArrowRight size={20} />
        </button>
      </div>


      {/* Bottom Stats */}
      <div className="absolute bottom-8 w-full flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-4 md:space-y-0 text-white text-sm md:text-base font-medium z-10">
        <span className="bg-white/80 px-4 py-2 rounded-full text-black">
          20,000+ Students
        </span>
        <span className="bg-white/80 px-4 py-2 rounded-full text-black">
          12,000+ Internships
        </span>
        <span className="bg-white/80 px-4 py-2 rounded-full text-black">
          10 Campuses
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
