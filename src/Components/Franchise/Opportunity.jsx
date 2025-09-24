import React from "react";

const FranchiseOpportunity = () => {
  return (
    <section className="px-6 md:px-24 py-16 md:py-32 bg-white">
      <div className=" mx-auto flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-8">
        {/* Left Side Heading */}
        <div className="flex-1">
          <h4 className="text-sm md:text-xl font-poppins text-[#000000] mb-4">
            Pixla Academy Franchise Opportunity
          </h4>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-gray-900 mt-4 sm:mt-6 md:mt-10">
            Be a Partner in India’s <br />
            Largest Skill Training & <br />
            Placement Network
          </h1>
        </div>

        {/* Right Side Paragraph */}
        <div className="flex-1 mt-6 lg:mt-19">
          <p className="text-[#6D6D6D] text-base sm:text-lg leading-relaxed">
            Pixla Academy is on a mission to empower millions of students with
            job-ready skills and 100% placement support. By joining as a
            Franchise Partner, you can bring world-class training and career
            opportunities to your city while building a profitable business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FranchiseOpportunity;
