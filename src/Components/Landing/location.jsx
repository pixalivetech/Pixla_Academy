// src/components/CampusSection.jsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Building from "./../../assets/Land/location1.png";

export default function CampusSection() {
  const locations = [
    {
      city: "Bengaluru",
      title: "Bengaluru (Main Headquarters)",
      address: `2nd Floor, Reliance Smart Bazaar Building,
Hosur Rd, Opp. E City Bus Stop, Phase II, Electronic City,
Bengaluru, Karnataka 560100`,
    },
    {
      city: "Chennai",
      title: "Chennai Campus",
      address: `No. 18, SIPCOT IT Park, Tech Park A-29,<br>
               3rd Cross Road, Siruseri,<br>
               Tamil Nadu – 603103`,
    },
    {
      city: "Krishnagiri",
      title: "Krishnagiri (Campus)",
      address: `Opp. St Joseph’s Polytechnic College & <br>
                Soolamalai Bus Stop,Periyapanamutlu, <br>
                Krishnagiri, Tamil Nadu - 635001`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left Column */}
        <div className="bg-[#656565] flex flex-col justify-between text-white relative">
          <div className="flex flex-1 items-center justify-end md:justify-end">
            <img
              src={Building}
              alt="Building Illustration"
              className="max-h-[280px] w-auto object-contain"
            />
          </div>

          <div className="px-6 md:px-24 py-12">
            <h2 className="text-3xl font-medium mb-3">Pixla Academy</h2>
            <p
              className="text-base md:text-lg text-gray-200 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: `<b>${currentIndex + 1}. ${locations[currentIndex].title}</b><br>${locations[currentIndex].address}`,
              }}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-black flex flex-col px-6 md:px-24 py-12 text-white relative border-t md:border-t-0 md:border-b border-gray-700">
          <div>
            <p className="text-md mb-3">Location</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              <span className="md:hidden">Explore Our Campuses Location</span>
              <span className="hidden md:inline-block">
                Explore Our <br /> Campuses{" "}
                <span className="text-yellow-400">Location</span>
              </span>
            </h2>
          </div>

          {/* Animated City Name */}
          <div className="flex-1 flex items-center justify-center md:block mt-10 md:mt-20">
            <AnimatePresence mode="wait">
              <motion.h1
                key={locations[currentIndex].city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold text-center md:text-left"
              >
                {locations[currentIndex].city}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="mt-8 md:mt-0 flex justify-center w-full z-10 md:absolute md:bottom-18 md:left-1/2 md:-translate-x-1/2 md:gap-8">
            <div className="flex gap-4 md:gap-8">
              <button
                onClick={handlePrev}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
