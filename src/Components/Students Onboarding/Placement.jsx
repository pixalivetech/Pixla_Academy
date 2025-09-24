import React from 'react';
import P1 from './../../assets/Onboarding/P11.png';
import P2 from './../../assets/Onboarding/P13.png';
import P3 from './../../assets/Onboarding/P12.png';
import P4 from './../../assets/Onboarding/P15.png';
import P5 from './../../assets/Onboarding/P14.png';

const PartnershipBenefits = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:space-x-12">
        
        {/* Left Section: Title and Benefits */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            Why Choose Pixla Academy?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {/* Benefit 1: Laptop Provided */}
            <div className="flex flex-col items-start space-y-2">
              <div className="h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="17" x2="22" y2="17"></line><line x1="6" y1="21" x2="18" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-800">Laptop Provided</h3>
              <p className="text-gray-600">
                Every enrolled student receives a laptop to support learning.
              </p>
            </div>
            
            {/* Benefit 2: Job-First Training */}
            <div className="flex flex-col items-start space-y-2">
              <div className="h-12 w-12 rounded-lg bg-red-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="12" y1="18" x2="12" y2="12"></line><line x1="15" y1="15" x2="9" y2="15"></line></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-800">Job-First Training</h3>
              <p className="text-gray-600">
                All programs are built with placement as the ultimate goal.
              </p>
            </div>

            {/* Benefit 3: Strong Hiring Network */}
            <div className="flex flex-col items-start space-y-2">
              <div className="h-12 w-12 rounded-lg bg-green-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-800">Strong Hiring Network</h3>
              <p className="text-gray-600">
                Access to 500+ hiring partners across India.
              </p>
            </div>

            {/* Benefit 4: Practical Exposure */}
            <div className="flex flex-col items-start space-y-2">
              <div className="h-12 w-12 rounded-lg bg-yellow-400 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v-7H6.5A2.5 2.5 0 0 1 4 7.5V19.5z"></path><path d="M14 11l-3 3-3-3"></path><path d="M11 14v-4"></path></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-800">Practical Exposure</h3>
              <p className="text-gray-600">
                Real projects, assessments, and internship opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Image Gallery */}
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="grid grid-cols-2 grid-rows-3 gap-4 w-full">
            <img 
              src={P1}
              alt="Partnership Image 1" 
              className="rounded-lg shadow-xl col-span-2 object-cover h-full"
            />
            <img 
              src={P2}
              alt="Partnership Image 2" 
              className="rounded-lg shadow-xl w-full object-cover h-full"
            />
            <img 
              src={P3}
              alt="Partnership Image 3" 
              className="rounded-lg shadow-xl w-full object-cover h-full"
            />
            <img 
              src={P4}
              alt="Partnership Image 4" 
              className="rounded-lg shadow-xl w-full object-cover h-full"
            />
            <img 
              src={P5}
              alt="Partnership Image 5" 
              className="rounded-lg shadow-xl w-full object-cover h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipBenefits;