import React from "react";
import { useNavigate } from "react-router-dom";
import Hero1 from "./../../../assets/UI/ui.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Hero1})`,
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-4xl mt-20 md:text-5xl font-semibold mb-6">
          UI/UX Design
        </h1>

        <p className="text-white text-lg md:text-2xl font-medium mb-6">
          Master the Craft of UX/UI Design <br className="hidden md:block" /> 
          with Our Academy.
        </p>

        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="flex -space-x-2">
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User1" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User2" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/65.jpg" alt="User3" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="User4" />
          </div>
          <span className="text-white text-lg font-semibold">4.5 Ratings</span>
        </div>

        {/* Button that navigates */}
        <button
          onClick={() => navigate("/contact")}
          className="bg-yellow-400 text-black font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full hover:bg-yellow-500 transition"
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
