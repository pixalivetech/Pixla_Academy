import React from 'react';
import Image1 from "./../../assets/Franchise/t1.png";
import Image2 from "./../../assets/Franchise/t2.png";
import Image3 from "./../../assets/Franchise/t3.png";
import Image4 from "./../../assets/Franchise/t4.png";
import Image5 from "./../../assets/Franchise/t5.png";
import Image6 from "./../../assets/Franchise/t6.png";

// Card data
const cards = [
  {
    icon: Image1,
    title: 'Trusted Brand',
    description: 'We are a trusted brand and the fastest-growing skill training & placement company in India.',
  },
  {
    icon: Image2,
    title: 'High-Demand Market',
    description: 'Career-focused training demand is rising as colleges seek industry-ready programs.',
  },
  {
    icon: Image3,
    title: 'Multiple Revenue Streams',
    description: 'Earn through training, placements, bootcamps, and institutional partnerships.',
  },
  {
    icon: Image4,
    title: 'Marketing & Lead Support',
    description: 'We offer strong branding and local advertising support to help you grow fast.',
  },
  {
    icon: Image5,
    title: 'Low Investment, High Returns',
    description: 'Affordable setup with high ROI and scalable expansion model.',
  },
  {
    icon: Image6,
    title: 'Comprehensive Training',
    description: 'We train you and your team on operations, sales, and execution with ongoing support.',
  },
];

const Partner = () => {
  return (
    <div className="bg-gray-100 px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-32 font-poppins">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 sm:mb-12 lg:mb-16 text-center">
          Why Partner with Pixla Academy
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg flex flex-col items-center text-center shadow-lg 
              transform transition-transform duration-300 hover:scale-105 h-auto"
            >
              <img src={card.icon} alt={card.title} className="w-14 sm:w-16 h-14 sm:h-16 mb-3 object-contain" />
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">{card.title}</h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
