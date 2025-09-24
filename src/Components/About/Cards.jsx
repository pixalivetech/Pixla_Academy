// src/components/WeArePixla.jsx

import React from 'react';
import { Target, Lightbulb, Flag } from 'lucide-react'; // using lucide icons (clean line icons)

const WeArePixla = () => {
  return (
    <div className=" text-gray-800 px-6 md:px-24 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-10 text-left">
          We Are Pixla
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className=" border border-gray-300 rounded-lg p-6 text-left">
            <Target className="w-6 h-6 text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To empower individuals with transformative technology education that bridges 
              the gap between learning and earning — through real-world projects, 
              industry-aligned mentorship, and a future-ready digital ecosystem.
            </p>
          </div>

          {/* Vision */}
          <div className=" border border-gray-300 rounded-lg p-6 text-left">
            <Lightbulb className="w-6 h-6 text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be India’s most trusted and impactful career acceleration academy, bridging the gap between education and employment by creating skilled, job-ready professionals across technology and business domains.
            </p>
          </div>

          {/* Goal */}
  <div className=" border border-gray-300 rounded-lg p-6 text-left">
            <Flag className="w-6 h-6 text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Goal</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Train 1,00,000+ students in cutting-edge technologies by 2030.

Build strong collaborations with top colleges and industries to provide real-world exposure.

Offer affordable, high-value programs with scholarships up to 75%.

Provide laptops and resources to ensure every student is equipped to learn and excel.

Ensure 100% deployment assistance for Pixla Academy graduates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeArePixla;
