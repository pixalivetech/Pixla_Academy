import React from 'react';
import { createRoot } from 'react-dom/client';
import bgImage1 from "./../../assets/Franchise/b-bg.png"

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
  const imageUrl = bgImage1;

  return (
    <div className="bg-gray-100 min-h-screen px-6 md:px-24 py-16 md:py-32 font-poppins">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-12 lg:mb-16">
          Ideal & Benefits Franchise Partners
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img 
              src={imageUrl} 
              alt="Group of people" 
              className="w-[513px] h-auto object-cover rounded-lg shadow-xl" 
            />
          </div>

          {/* Right Side List */}
          <div className="w-full lg:w-1/2">
            <ol className="list-none space-y-5">
              {keyPoints.map((point, index) => (
                <li key={index} className="text-base lg:text-lg text-gray-700 flex items-start">
                  <span className="font-semibold text-sm md:text-lg text-black mr-3">
                    {index + 1}.
                  </span>
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
