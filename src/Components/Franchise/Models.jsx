import React from 'react';
import { createRoot } from 'react-dom/client';
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
  const bgImageUrl =bgImage ;

  return (
    <div className="min-h-screen relative overflow-hidden  px-6 md:px-24 py-16 md:py-32 bg-gray-900 text-white font-sans">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      ></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className=" mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-16 text-left">Franchise Models</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg p-5 overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover rounded-md" />
                </div>
                <div className="p-3 text-gray-800">
                  <h2 className="text-xl lg:text-2xl font-bold mb-4">{card.title}</h2>
                  <div className="space-y-2 text-sm lg:text-base">
                    <p>
                      <span className="font-semibold">Setup:</span> {card.setup}
                    </p>
                    <p>
                      <span className="font-semibold">Investment:</span> {card.investment}
                    </p>
                    <p>
                      <span className="font-semibold">ROI:</span> {card.roi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;