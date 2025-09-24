// src/components/CompanyInfo.jsx

import React, { useState, useEffect } from 'react';
import Hero from "./../../assets/About/heroimage.png";

const CompanyInfo = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [trainers, setTrainers] = useState(0);
  const [rating, setRating] = useState(0);

  const animateCount = (target, setter, isDecimal = false) => {
    let current = 0;
    const increment = isDecimal ? 0.1 : 1;
    const interval = setInterval(() => {
      current = current + increment;
      if (current >= target) {
        clearInterval(interval);
        setter(target);
      } else {
        setter(current);
      }
    }, isDecimal ? 50 : 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(7, setYears);
            animateCount(25, setProjects);
            animateCount(100, setTrainers);
            animateCount(4.9, setRating, true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector(".company-info-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 px-6 md:px-24 py-16 company-info-section">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-left">
          The numbers speak for us.
        </h2>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-16">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{years}+</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Years Of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{projects}+</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Successful Projects</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{trainers}+</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Professional Trainers</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{rating.toFixed(1)}/5+</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Student rating</p>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Text */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-6">About Pixla</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Pixla is the official training division of Pixalive Research and Development Pvt. Ltd., 
              part of the visionary Pixalive Group—India's first integrated digital ecosystem.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We're not just a training institute. We're a career launchpad. By combining cutting-edge tech 
              education with real industry exposure, we prepare individuals to thrive in a digital-first world.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're upskilling for a job, freelancing, or starting your own venture — 
              Pixla is your smartest step forward.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={Hero}
              alt="Pixla team members smiling and giving a thumbs up"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
