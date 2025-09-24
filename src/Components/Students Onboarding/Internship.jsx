import React, { useState } from "react";
import I1 from "./../../assets/Onboarding/I11.png";
import I2 from "./../../assets/Onboarding/I16.png";
import I3 from "./../../assets/Onboarding/I13.png";
import I4 from "./../../assets/Onboarding/I14.png";
import I5 from "./../../assets/Onboarding/I15.png";
import I6 from "./../../assets/Onboarding/I12.png";
import I7 from "./../../assets/Onboarding/I17.png";
import I8 from "./../../assets/Onboarding/I18.png";

const BenefitsForColleges = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const benefits = [
    {
      title: "100% Placement Assistance",
      description: "Direct access to top recruiters across India.",
    },
    {
      title: "Job-Ready Skills",
      description:
        "Our curriculum is continuously updated with industry leaders to ensure students are learning the most relevant and current skills.",
    },
    {
      title: "Internships & Live Projects",
      description:
        "Students gain practical, real-world experience through hands-on projects and valuable internship opportunities.",
    },
    {
      title: "Globally Recognized Certifications",
      description:
        "Students can earn exclusive certifications that are recognized and valued by employers worldwide.",
    },
    {
      title: "Soft Skills & Interview Training",
      description:
        "Comprehensive training is provided to develop essential soft skills and ace interviews, preparing students for professional success.",
    },
    {
      title: "Affordable Programs",
      description:
        "Our programs are priced to be accessible, providing high-quality education without a heavy financial burden.",
    },
    {
      title: "Mentorship from Experts",
      description:
        "Students receive guidance and support from industry veterans and subject matter experts.",
    },
    {
      title: "Networking Opportunities",
      description:
        "Partnering with us provides your institution with a direct connection to a wide network of leading companies and professionals.",
    },
    {
      title: "Startup & Entrepreneurship Support",
      description:
        "We offer resources and mentorship to help students with innovative ideas launch their own startups.",
    },
    {
      title: "Career Growth Pathway",
      description:
        "We provide a clear and structured path for students, guiding them from college to a successful career.",
    },
  ];

  const images = [I1, I2, I3, I4, I5, I6, I7, I8];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:space-x-12">
        {/* Left Section: Equal Grid Gallery */}
        <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12 md:mb-0">
          <div className="col-span-2 row-span-2">
            <img
              src={I1}
              alt="Graduation image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <img
            src={I2}
            alt="Business meeting"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src={I3}
            alt="Person on laptop"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src={I4}
            alt="Interview"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src={I5}
            alt="Interview"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="col-span-1 row-span-2">
            <img
              src={I6}
              alt="Group of people working"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <img
            src={I7}
            alt="Office buildings"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src={I8}
            alt="Office buildings"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Section: Title and Accordion */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-snug">
            Benefits for Colleges Partnering <br /> with Pixla Academy
          </h2>

          <div className="divide-y divide-gray-200">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="py-4 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-lg text-gray-800">
                    {benefit.title}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsForColleges;