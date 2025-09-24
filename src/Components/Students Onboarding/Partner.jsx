import React from 'react';
import Partner1 from './../../assets/Onboarding/partner2.png'
const PartnershipSection = () => {
  return (
    <div className="bg-gray-100  px-6 md:px-24 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        {/* Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Start Your Career Journey with Pixla Academy
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
          At Pixla Academy, students gain more than just training—they gain opportunities. Our programs are designed to match industry requirements, ensuring every learner develops practical skills, works on live projects, and gets access to top recruiters through our placement drives.  </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
           Pixla Academy is India’s fastest skilling and placement company, helping students build strong skills, gain real-world exposure, and secure high-paying jobs.</p>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={Partner1}
            alt="Pixla Academy Partnership" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
