// src/components/HowWeWork.jsx

import React from 'react';
import BgImage from './../../assets/About/banner2.png';

const HowWeWork = () => {
  return (
    <div
      className="relative bg-cover bg-center px-6 md:px-24 py-16"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Wrapper */}
      <div className="relative max-w-7xl mx-auto text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-left">
          How <span className="text-yellow-400">We Work</span>
        </h2>
        <p className="text-base md:text-lg mb-12 max-w-3xl text-left">
          At Pixla Academy, we focus on practical, outcome-based learning powered by expert mentorship, real projects, and continuous career growth.
        </p>

        {/* Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="border border-gray-600 rounded-md p-6 text-center">
            <div className="text-lg font-semibold mb-3">01</div>
            <h3 className="text-lg font-semibold mb-2">Learn from Experts</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Live, instructor-led sessions with industry professionals, real-world assignments, and hands-on projects that prepare you for today’s job market. </p>
          </div>

          {/* Step 2 */}
          <div className="border border-gray-600 rounded-md p-6 text-center">
            <div className="text-lg font-semibold mb-3 rounded-b-2xl ">02</div>
            <h3 className="text-lg font-semibold mb-2">Get Mentored</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              1-on-1 mentorship from experienced professionals, startup founders, and career coaches who guide you every step of the way </p>
          </div>

          {/* Step 3 */}
          <div className="border border-gray-600 rounded-md p-6 text-center">
            <div className="text-lg font-semibold mb-3">03</div>
            <h3 className="text-lg font-semibold mb-2">Build a Portfolio</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Work on real client projects through Pixla Academy’s industry collaborations and create a portfolio that stands out.  </p>
          </div>

          {/* Step 4 */}
          <div className="border border-gray-600 rounded-md p-6 text-center">
            <div className="text-lg font-semibold mb-3">04</div>
            <h3 className="text-lg font-semibold mb-2">Get Hired or Freelance</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
             Unlock career opportunities with Pixla Academy’s placement network, or kickstart your freelance journey with complete support from Pixla Works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
