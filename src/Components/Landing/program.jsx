import React, { useState } from "react";
import FrontendImg from "./../../assets/Land/frondend.png";
import BackendImg from "./../../assets/Land/backend.png";
import UiUxImg from "./../../assets/Land/uiux.png";
import MobileImg from "./../../assets/Land/mobile.png";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Pixla Spark",
      img: FrontendImg,
      backItems: ["MERN", "MEAN", "AI", "Flutter", "Java", "Python", "DevOps", "Software Testing", "UI/UX Design", "Digital Marketing"],
      dark: false,
    },
    {
      title: "Pixla Learn",
      img: BackendImg,
      backItems: ["MERN", "MEAN", "AI", "Flutter", "Java", "Python", "DevOps", "Software Testing", "UI/UX Design", "Digital Marketing"],
      dark: true,
    },
    {
      title: "Pixla Elevate",
      img: UiUxImg,
      backItems: ["MERN/ MEAN Full Stack", "AI Full Stack", "Flutter Full Stack", "Java Full Stack", "Python Full Stack", "DevOps", "Software Testing", "UI/UX Design", "Digital Marketing"],
      dark: false,
    },
    {
      title: "Pixla Deploy",
      img: MobileImg,
      backItems: ["MERN Full Stack", "MEAN Full Stack", "AI Full Stack", "Flutter Full Stack", "Java Full Stack", "Python Full Stack "],
      dark: true,
    },
    {
      title: "Pixla Edge",
      img: FrontendImg,
      backItems: ["MERN Full Stack", "MEAN Full Stack", "AI Full Stack", "Flutter Full Stack", "Java Full Stack", "Python Full Stack"],
      dark: false,
    },
  ];

  const [flipped, setFlipped] = useState({});

  const handleFlip = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="bg-gray-100 py-16 md:py-24 overflow-hidden">
      <div className="px-6 md:px-24">
        {/* Header */}
        <p className="text-md text-black mb-2">Programs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 md:mb-12 leading-snug">
          Innovative Programs <br className="hidden md:block" /> Designed For Future
        </h2>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="flex animate-scroll gap-6">
            {programs.concat(programs).map((program, idx) => (
              <div
                key={idx}
                className="w-64 h-80 perspective cursor-pointer flex-shrink-0"
                onMouseEnter={() => handleFlip(idx)}
                onMouseLeave={() => handleFlip(idx)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flipped[idx] ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front */}
                  <div
                    className={`absolute w-full h-full rounded-md backface-hidden overflow-hidden flex items-center justify-center ${
                      program.dark ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <img src={program.img} alt={program.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <h3 className="text-xl font-bold text-white text-center px-2">{program.title}</h3>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className={`absolute w-full h-full rounded-md rotate-y-180 backface-hidden flex items-center justify-center p-4 ${
                      program.dark ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      {program.backItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden flex overflow-x-auto gap-4 pb-4">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="w-64 h-80 perspective flex-shrink-0 cursor-pointer"
              onClick={() => handleFlip(idx)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flipped[idx] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div
                  className={`absolute w-full h-full rounded-md backface-hidden overflow-hidden flex items-center justify-center ${
                    program.dark ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  <img src={program.img} alt={program.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white text-center px-2">{program.title}</h3>
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`absolute w-full h-full rounded-md rotate-y-180 backface-hidden flex items-center justify-center p-4 ${
                    program.dark ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    {program.backItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for auto-scroll */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            gap: 1.5rem;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
