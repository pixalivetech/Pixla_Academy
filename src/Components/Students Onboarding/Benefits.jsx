import React from 'react';
import Benefitbg from './../../assets/Onboarding/benefits1bg.png'
import B1 from './../../assets/Onboarding/B11.png'
import B2 from './../../assets/Onboarding/B12.png'
import B3 from './../../assets/Onboarding/B13.png'
import B4 from './../../assets/Onboarding/B14.png'
const PartnershipSection = () => {
  return (
     <div 
      className="relative bg-black/10 bg-cover bg-center py-16 px-6 md:px-24 text-white"
      style={{ backgroundImage: `url("${Benefitbg}")` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10 opacity-60"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col ">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 ">
          Benefits for Students:
        </h2>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={B1}
              alt="Higher placement percentages" 
              className="shadow-xl mb-4"
            />
            <p className="text-lg">
              Industry-focused training in Tech, & Emerging Skills. &rarr; & Emerging Skills.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={B2}
              alt="Access to industry mentors" 
              className=" shadow-xl mb-4"
            />
            <p className="text-lg">
             Real-world internships & projects.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={B3}
              alt="Dedicated placement support" 
              className=" shadow-xl mb-4"
            />
            <p className="text-lg">
              Professional resume & LinkedIn profile building.
            </p>
          </div>
          
          {/* Benefit 4 */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={B4}
              alt="Real-time reports & analytics" 
              className=" shadow-xl mb-4"
            />
            <p className="text-lg">
              100% Placement Assistance with top recruiters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
