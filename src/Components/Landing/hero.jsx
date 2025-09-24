import React, { useState, useEffect } from "react";
import { ArrowRight, Link } from "lucide-react";
import Hero1 from "./../../assets/Land/hero1.jpg";
import Hero2 from "./../../assets/Land/hero2.jpg";

const HeroSection = () => {
  // Slides Data
  const slides = [
    {
      bg: Hero1,
      headline: (
        <>
          From Skills to Career Success with <br /> Pixla Academy
        </>
      ),
      text: (
        <>
          India’s largest skill training and placement platform – learn, <br />
          intern, and get placed with industry-ready expertise
        </>
      ),
    },
    {
      bg: Hero2,
      headline: (
        <>
          From Learning to Earning – Real Projects, <br /> Real Experience
        </>
      ),
      text: (
        <>
          Gain hands-on experience with live client projects <br />
           
          Build a portfolio that makes you job-ready or freelance-ready
        </>
      ),
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-screen lg:h-[120vh] overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 min-h-screen lg:h-[120vh] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-24 pt-24 pb-24 md:pt-48 md:pb-50">
              <h1 className="text-white text-4xl md:text-5xl font-semibold mb-5 leading-snug">
                {slide.headline}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium mb-5 text-white leading-relaxed">
                {slide.text}
              </p>

              {/* Button */}
              
              <button className="bg-yellow-400 text-black font-semibold px-4 py-2 md:px-6 md:py-2 rounded-full flex items-center space-x-2 hover:bg-yellow-500 transition">
                <span>Explore Program</span>
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Bottom Stats */}
            {/* Bottom Stats */}
<div className="absolute bottom-6 w-full flex items-center justify-center text-center gap-2 md:gap-12 text-white text-sm md:text-base font-medium z-10">
  <span className="bg-white/80 px-4 py-2 rounded-full text-black">
    500+ Students
  </span>
  <span className="bg-white/80 px-4 py-2 rounded-full text-black">
    100+ Internships
  </span>
  <span className="bg-white/80 px-4 py-2 rounded-full text-black">
    5 Campuses
  </span>
</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;