import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Flogo from "./../../assets/UI/flogo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-24 py-16 w-full">
<div className="grid md:grid-cols-2 gap-10 md:gap-60 pb-8 border-b border-gray-700">
  {/* Logo */}
  <div className="flex items-center justify-center md:justify-start">
    <img
      src={Flogo}
      alt="Pixla Academy"
      className="h-40 md:h-60 w-auto mb-2"
    />
  </div>

  {/* Contact + Location */}
  <div className="flex flex-col space-y-6">
    <div>
      <h3 className="font-semibold text-white text-xl mb-2">Contact</h3>
      <p className="flex items-center text-base md:text-lg text-gray-300">
      <FiPhone className="mr-2 text-yellow-400" />
      <span className="font-medium text-white mr-2">Phone:</span>
      +91 93421 17110 / 87785 84566
    </p>
      <p className="flex items-center text-base md:text-lg text-gray-300 mt-2">
      <FiMail className="mr-2 text-yellow-400" />
      <span className="font-medium text-white mr-2">E-mail:</span>
      contact@pixlaacademy.com
    </p>
    </div>
    <div>
      <h3 className="font-semibold text-white text-xl mb-2">Location</h3>
      <p className="text-base md:text-lg text-gray-300 leading-relaxed">
    <b>1. Bengaluru (Main Headquarters)</b> <br />
        Electronic City,
        Bengaluru, Karnataka 560100 <br /><br />
   <b> 2. Chennai (Campus)</b> <br />
        Siruseri,
        Tamil Nadu 603103 <br /><br />
    <b>3. Krishnagiri (Campus)</b><br />
        Periyapanamutlu, Krishnagiri,
        Tamil Nadu 635001
      </p>
    </div>
  </div>
</div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-8">
        {/* Left Side */}
        <div>
          <a href="/" className="hover:underline text-lg md:text-xl">
            Privacy & Policy
          </a>
        </div>

        {/* Right Side */}
        <div className="flex space-x-18 mt-4 md:mt-0">
          
           <a href="/" className="hover:underline text-lg md:text-xl">
            Home
          </a>
          <a href="/mern-fullstack" className="hover:underline text-lg md:text-xl">
            Programs
          </a>
          <a href="/college-onboarding" className="hover:underline text-lg md:text-xl">
            Collage
          </a>
        </div>
      </div>

      {/* Quick Menu Section */}
      <div className="grid md:grid-cols-3 gap-8 py-10 border-b border-gray-700">
        {/* Left Links */}
        <div className="flex flex-col space-y-4 text-lg md:text-xl">
          <a href="/franchise" className="hover:underline">Campus Life</a>
          <a href="/student-onboarding" className="hover:underline">Student & Support</a>
          
        </div>

        {/* Center Empty for Balance */}
        <div></div>

        {/* Quick Menu */}
        <div className="flex flex-col space-y-4 text-lg md:text-xl">
          <h3 className="font-bold text-xl mb-2">Quick Menu</h3><br />
          <a href="/about" className="flex items-center justify-between hover:underline">
            About <span>→</span>
          </a>
          <a href="/hireus" className="flex items-center justify-between hover:underline">
            Career Help <span>→</span>
          </a>
          <a href="/mern-fullstack" className="flex items-center justify-between hover:underline">
            Major Program <span>→</span>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-base md:text-lg space-y-4 md:space-y-0">
        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-400 text-xl">
          <a href="#" className="hover:text-white"><FaLinkedin /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-center">© 2025 Pixla Academy website.</p>
      </div>
    </footer>
  );
};

export default Footer;
