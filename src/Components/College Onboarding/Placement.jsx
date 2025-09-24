import React from 'react';
import P1 from './../../assets/Onboarding/P1.png';
import P2 from './../../assets/Onboarding/P3.png';
import P3 from './../../assets/Onboarding/P2.png';
import P4 from './../../assets/Onboarding/P5.png';
import P5 from './../../assets/Onboarding/P4.png';

const PartnershipBenefits = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:space-x-12">
        
        {/* Left Section: Title and Benefits */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            Why Partner with Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {/* Benefit 1 */}
            <div className="flex flex-col items-start space-y-2">
              <div className="h-12 w-12 rounded-lg bg-yellow-400 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5L12 2z"></path><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-800">Skill + Placement Integration</h3>
              <p className="text-gray-600">
                Add value to your curriculum with job-ready programs.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex flex-col items-start space-y-2">
              <div className="h-12 w-12 rounded-lg bg-blue-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-800">Industry-Aligned Training</h3>
              <p className="text-gray-600">
                Courses designed with input from top companies.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-start space-y-2">
              <div className="h-12 w-12 rounded-lg bg-green-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-800">Guaranteed Placements</h3>
              <p className="text-gray-600">
                Pay-After-Placement options ensure student trust.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col items-start space-y-2">
              <div className="h-12 w-12 rounded-lg bg-red-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-800">Brand Value for Your College</h3>
              <p className="text-gray-600">
                Improve placement records & attract more admissions.
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