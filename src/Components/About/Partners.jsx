import React from "react";

// Import all logos
import nasscom from "../../assets/About/P1.png";
import google from "../../assets/About/P2.png";
import uipath from "../../assets/About/P3.png";
import iso from "../../assets/About/P4.png";
import empower from "../../assets/About/P5.png";
import autodesk from "../../assets/About/P6.png";
import jio from "../../assets/About/P7.png";
import openai from "../../assets/About/P8.png";
import github from "../../assets/About/P9.png";
import hcl from "../../assets/About/P10.png";
import googlecloud from "../../assets/About/P11.png";
import aicte from "../../assets/About/P12.png";

const TrustedPartners = () => {
  const partners = [
    { src: nasscom, alt: "Nasscom" },
    { src: google, alt: "Google Developers Launchpad" },
    { src: uipath, alt: "UiPath" },
    { src: iso, alt: "ISO Certification" },
    { src: empower, alt: "Empower" },
    { src: autodesk, alt: "Autodesk" },
    { src: jio, alt: "Jio Gennext" },
    { src: openai, alt: "OpenAI" },
    { src: github, alt: "GitHub" },
    { src: hcl, alt: "HCL" },
    { src: googlecloud, alt: "Google Cloud Partner" },
    { src: aicte, alt: "AICTE" },
  ];

  return (
    <div className=" px-6 md:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Trusted Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white shadow-sm rounded-lg p-4 h-20"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
