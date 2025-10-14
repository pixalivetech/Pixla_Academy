import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Flogo from "./../../assets/UI/flogo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-8 md:px-24 py-12 w-full">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-8 border-b border-gray-700">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={Flogo} alt="Pixla Academy" className="h-28 sm:h-40 md:h-60 w-auto" />
        </div>

        {/* Contact + Location */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg md:text-xl mb-2">Contact</h3>
            <p className="flex items-center text-sm md:text-lg text-gray-300">
              <FiPhone className="mr-2 text-yellow-400" />
              <span className="font-medium text-white mr-2">Phone:</span> +91 93421 17110 / 87785 84566
            </p>
            <p className="flex items-center text-sm md:text-lg text-gray-300 mt-2">
              <FiMail className="mr-2 text-yellow-400" />
              <span className="font-medium text-white mr-2">E-mail:</span> contact@pixlaacademy.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg md:text-xl mb-2">Location</h3>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              <b>1. Bengaluru (HQ)</b><br />
              Electronic City, Bengaluru, KA 560100<br /><br />
              <b>2. Chennai (Campus)</b><br />
              Siruseri, TN 603103<br /><br />
              <b>3. Krishnagiri (Campus)</b><br />
              Periyapanamutlu, Krishnagiri, TN 635001
            </p>
          </div>
        </div>
      </div>

      {/* Middle Links */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm md:text-lg">
        <a href="/" className="hover:underline mb-2 md:mb-0">Privacy & Policy</a>

        <div className="flex space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/mern-fullstack" className="hover:underline">Programs</a>
          <a href="/college-onboarding" className="hover:underline">College</a>
        </div>
      </div>

      {/* Quick Menu Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 border-b border-gray-700">
        <div className="flex flex-col space-y-2 text-sm md:text-lg">
          <a href="/franchise" className="hover:underline">Campus Life</a>
          <a href="/student-onboarding" className="hover:underline">Student & Support</a>
        </div>

        <div></div>

        <div className="flex flex-col space-y-2 text-sm md:text-lg">
          <h3 className="font-bold text-base md:text-xl mb-2">Quick Menu</h3>
          <a href="/about" className="flex justify-between hover:underline">About <span>→</span></a>
          <a href="/hireus" className="flex justify-between hover:underline">Career Help <span>→</span></a>
          <a href="/mern-fullstack" className="flex justify-between hover:underline">Major Program <span>→</span></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm md:text-lg space-y-4 md:space-y-0">
        <div className="flex space-x-4 text-gray-400 text-xl">
          <a href="#" className="hover:text-white"><FaLinkedin /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
        </div>
        <p className="text-gray-400">© 2025 Pixla Academy website.</p>
      </div>
    </footer>
  );
};

export default Footer;
