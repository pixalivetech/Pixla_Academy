import React from 'react';
import Partner1 from './../../assets/Onboarding/partner1.png'
const PartnershipSection = () => {
  return (
    <div className="bg-gray-100  px-6 md:px-24 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        {/* Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Partner with Pixla Academy
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Pixla Academy collaborates with colleges across India to create a future-ready workforce. By partnering with us, your institution gains access to industry-driven training, internships, and placement pipelines that ensure your students are job-ready from day one.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Empower your students with industry-ready skills and 100% placement support. Pixla Academy collaborates with colleges across India to bridge the gap between education and employment.
          </p>
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
