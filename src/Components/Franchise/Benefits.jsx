import React from 'react';
import bgImage1 from "./../../assets/Franchise/b-bg.png";

const keyPoints = [
  'Passion for education & student success.',
  'Ability to invest in infrastructure & operations.',
  'Strong local network with colleges & corporates.',
  'Entrepreneurial mindset with commitment to growth.',
  'Exclusive territory rights.',
  'High-margin business model.',
  'Exclusive territory rights.',
  'Access to 100+ skill training programs.',
  'Centralized placement support for your students.',
  'Continuous R&D, curriculum updates, and tech upgrades.',
  'Recognition as part of a national brand.',
];

const Benefits = () => {
  return (
    <div className="bg-gray-100 px-4 md:px-12 lg:px-24 py-12 md:py-20 font-poppins">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 md:mb-12 text-center lg:text-left">
          Ideal & Benefits Franchise Partners
        </h1>

        {/* Layout Wrapper */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img 
              src={bgImage1} 
              alt="Franchise Partner" 
              className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right List */}
          <div className="w-full lg:w-1/2">
            <ol className="space-y-4 md:space-y-5">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start text-gray-700 text-sm md:text-base lg:text-lg">
                  <span className="font-semibold text-black mr-2">{index + 1}.</span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Benefits;
