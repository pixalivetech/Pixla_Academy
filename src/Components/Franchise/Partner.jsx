import React from 'react';
import { createRoot } from 'react-dom/client';
import Image1 from "./../../assets/Franchise/t1.png"
import Image2 from "./../../assets/Franchise/t2.png"
import Image3 from "./../../assets/Franchise/t3.png"
import Image4 from "./../../assets/Franchise/t4.png"
import Image5 from "./../../assets/Franchise/t5.png"
import Image6 from "./../../assets/Franchise/t6.png"

// Card data with updated content
const cards = [
  {
    icon: Image1,
    title: 'Trusted Brand',
    description: 'We are a trusted brand and the fastest-growing skill training & placement company in India. With innovative training methods and strong placement support, we bridge the gap between talent and employers. ',
  },
  {
    icon: Image2,
    title: 'High-Demand Market',
    description: 'With millions of students graduating every year, the need for career-ready programs is growing faster than ever. Every college seeks practical skill-based training to improve student employability. This long-term market potential.',
  },
  {
    icon: Image3,
    title: 'Multiple Revenue Streams',
    description: 'We are a trusted brand and the fastest-growing skill training & placement company in India. With innovative training methods and strong placement support, we bridge the gap between talent and employers. ',
  },
  {
    icon:Image4,
    title: 'Marketing & Lead Support',
    description: 'Our marketing and lead support system combines powerful centralized campaigns with targeted local promotions. This hybrid approach ensures strong brand visibility. As a result, we drive consistent student enrollments and strengthen our market presence.',
  },
  {
    icon: Image5,
    title: 'Low Investment, High Returns',
    description: 'Low Investment, High Returns – Minimal startup cost ensures easy entry into the market. With strong demand  break-even can be achieved in a short span. The model is designed for scalable growth, ensuring long-term profitability with reduced financial risk.',
  },
  {
    icon: Image6,
    title: 'Comprehensive Training',
    description: 'Comprehensive Training – We provide end-to-end training covering operations, sales, customer handling, and service delivery. Our structured modules ensure you and your team gain the right skills to manage business smoothly. Continuous guidance and refresher updated.',
  },
];

const Partner = () => {
  return (
    <div className="bg-gray-100 min-h-screen   px-6 md:px-24 py-16 md:py-32  font-poppins">
      <div className=" mx-auto">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-12 lg:mb-20">Why Partner with Pixla Academy</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-3 w-[407] h-[400px] rounded-lg lg:p-5 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="mb-4">
                <img src={card.icon} alt={card.title} className="w-28 h-28 object-contain" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 ">{card.title}</h2>
              <p className="text-sm md:text-md text-gray-600 leading-relaxed mt-4 md:mt-6">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;