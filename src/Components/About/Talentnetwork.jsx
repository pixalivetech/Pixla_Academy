import React from "react";
import img1 from "../../assets/About/T1.png";
import img2 from "../../assets/About/T2.png";
import img3 from "../../assets/About/T3.png";
import img4 from "../../assets/About/T4.png";
import img5 from "../../assets/About/T5.png";

const CompanyInfo = () => {
  const features = [
    {
      img: img1,
      text: " Priority Access – Guaranteed internships & job interview opportunities with partner companies",
    },
    {
      img: img2,
      text: "Hands-on Projects – Build a strong portfolio with live, industry-based projects",
    },
    {
      img: img3,
      text: "Career Support – Mock interviews, resume-building workshops & placement preparation",
    },
    {
      img: img4,
      text: "Expert Mentorship – Career guidance from top professionals and hiring experts",
    },
    {
      img: img5,
      text: "Fast-Track Growth – Priority placement assistance and early access to exclusive hiring drives",
    },
  ];

  return (
    <div className="bg-white text-gray-800 px-6 md:px-24 py-16 company-info-section">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <p className="text-sm text-gray-600">Join the Pixla Talent Network</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-8">
          Pixla Academy — Your Launchpad <br /> from Learning to Earning
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={feature.img}
                alt="feature"
                className="w-20 h-20 object-contain mb-4"
              />
              <p className="text-sm text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-16 bg-gray-50 rounded-2xl shadow-sm p-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            🎯 Why Pixla Academy Talent Network?
          </h3>
          <ul className="text-gray-700 text-base space-y-2 mb-6">
            <li>✅ A complete career journey: <b>Learn → Elevate → Deploy</b></li>
            <li>
              ✅ Access to <b>₹4 Lakh worth of training & resources</b> + a{" "}
              <b>High-Performance Laptop (₹1 Lakh)</b>
            </li>
            <li>✅ <b>75% Scholarship</b> — Pay only ₹1 Lakh instead of ₹5 Lakhs</li>
            <li>
              ✅ Lifetime membership with continuous upskilling & job opportunities
            </li>
          </ul>
          <p className="text-gray-600 max-w-2xl mx-auto">
            💡 At Pixla Academy, your college years turn into a career launchpad.
            Learn smart, grow fast, and step into your dream job with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
