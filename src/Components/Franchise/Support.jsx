import React from 'react';
import { createRoot } from 'react-dom/client';
import S1 from "./../../assets/Franchise/s1.png"
import S2 from "./../../assets/Franchise/s2.png"
import S3 from "./../../assets/Franchise/s3.png"
import S4 from "./../../assets/Franchise/s4.png"
import S5 from "./../../assets/Franchise/s5.png"
import S6 from "./../../assets/Franchise/s6.png"

const supportItems = [
  {
    icon: S6,
    text: 'Center setup and branding support',
  },
  {
    icon:S5,
    text: 'Student onboarding system (Colleges + students)',
  },
  {
    icon: S4,
    
    text: 'Digital marketing campaigns',
  },
  {
    icon: S3,
    text: 'Curriculum & training material',
  },
  {
    icon: S2,
    text: 'Placement tie-ups with companies',
  },
  {
    icon: S1,
    text: 'Regular workshops & events',
  },
];

const Support = () => {
  return (
    <div className="bg-gray-50 min-h-screen  px-6 md:px-24 py-16 md:py-32  font-poppins">
      <div className=" mx-auto">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-12 text-center lg:text-left">
          How We Support You
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center text-center">
          {supportItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">
                <img src={item.icon} alt={`Icon for ${item.text}`} className="h-29 w-29  object-contain" />
              </div>
              <p className="text-sm md:text-lg text-[#000000] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;