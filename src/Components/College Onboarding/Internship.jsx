import React, { useState } from "react";
import I1 from "./../../assets/Onboarding/I3.png";
import I2 from "./../../assets/Onboarding/I2.png";
import I3 from "./../../assets/Onboarding/I4.png";
import I4 from "./../../assets/Onboarding/I4.png";
import I5 from "./../../assets/Onboarding/I5.png";
import I6 from "./../../assets/Onboarding/I6.png";
import I7 from "./../../assets/Onboarding/I7.png";
import I8 from "./../../assets/Onboarding/I8.png";

const BenefitsForColleges = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const benefits = [
    {
      title: "Enhanced Placement Opportunities",
      description:
        "Students get trained in industry-demand skills and placed in top companies.",
    },
    {
      title: "Industry-Aligned Curriculum",
      description:
        "Our curriculum is continuously updated with industry leaders to ensure students are learning the most relevant and current skills.",
    },
    {
      title: "Boost Admissions & Reputation",
      description:
        "A strong placement record attracts more students and improves the college's brand value.",
    },
    {
      title: "Faculty Development Programs",
      description:
        "We offer training and resources to faculty to keep them updated with the latest industry trends.",
    },
    {
      title: "Internship Support",
      description:
        "We help students secure valuable internships to gain real-world experience before they graduate.",
    },
    {
      title: "Exclusive Certifications",
      description:
        "Students can earn exclusive certifications that are recognized and valued by employers.",
    },
    {
      title: "No Extra Burden on College",
      description:
        "Our program is designed to integrate seamlessly without adding administrative or financial burden on the college.",
    },
    {
      title: "Stronger Industry Connect",
      description:
        "Partnering with us provides your institution with a direct connection to a wide network of leading companies.",
    },
    {
      title: "Revenue-Sharing Model",
      description:
        "We offer a flexible revenue-sharing model that provides a new income stream for the college.",
    },
    {
      title: "Long-Term Partnership",
      description:
        "We are committed to building a lasting relationship to ensure continuous growth and success for your students and institution.",
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
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-40 md:h-48 object-cover rounded-lg"
            />
          ))}
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
