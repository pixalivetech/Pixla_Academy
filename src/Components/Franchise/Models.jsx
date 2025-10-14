import React from 'react';
import Photo1 from "./../../assets/Franchise/m1.png"
import Photo2 from "./../../assets/Franchise/m2.png"
import Photo3 from "./../../assets/Franchise/m3.png"
import bgImage from "./../../assets/Franchise/m-bg.png" 

const cards = [
  {
    image: Photo3,
    title: '1. Pixla Academy Center Franchise',
    setup: 'Training center in your city/district',
    investment: '₹10–15 Lakhs',
    roi: '18–24 months',
  },
  {
    image: Photo1,
    title: '2. Pixla Academy Partner Franchise',
    setup: 'Smaller setup with focus on student enrollment & coordination',
    investment: '₹5–7 Lakhs',
    roi: '12–18 months',
  },
  {
    image: Photo2,
    title: '3. Pixla Academy State Master Franchise',
    setup: 'Control over multiple district/city franchises',
    investment: '₹25–50 Lakhs',
    roi: '24–30 months',
  },
];

const Models = () => {
  return (
    <div className="relative px-4 md:px-10 lg:px-24 py-16 bg-gray-900 text-white font-sans overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold mb-10 text-center md:text-left">Franchise Models</h1>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="w-full h-48 md:h-56 lg:h-60">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-4 text-gray-800 flex flex-col flex-grow">
                <h2 className="text-lg md:text-xl font-bold mb-3">{card.title}</h2>
                <div className="space-y-1 text-sm md:text-base flex-grow">
                  <p><span className="font-semibold">Setup:</span> {card.setup}</p>
                  <p><span className="font-semibold">Investment:</span> {card.investment}</p>
                  <p><span className="font-semibold">ROI:</span> {card.roi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;
