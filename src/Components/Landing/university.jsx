// src/components/HeroSection.jsx
import { ChevronUp, ChevronDown } from "lucide-react";
import UNI from "./../../assets/Land/uni.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center px-6 md:px-24 py-34"
      style={{
        backgroundImage: `url(${UNI})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
          This Is More <br /> Than Just a <br /> College
        </h1>
        <br /><br /><br /><br />
        <p className="max-w-xl text-sm md:text-base leading-relaxed mt-16">
          At Pixla Academy, we believe higher education should go beyond traditional classrooms.
          We are a new kind of institution—one that blends global perspective, modern technology,
          and real-world experience to prepare students for the challenges of tomorrow.

        </p>
      </div>

      {/* Floating Nav Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 md:gap-8 z-10 right-6 md:right-24">
        <button className="bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 transition">
          <ChevronUp className="w-4 h-4" />
        </button>
        <button className="bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 transition">
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}