// src/components/UniversityHero.jsx
import { ArrowRight } from "lucide-react";
import UniBg from "./../../assets/Land/leadhero.jpg"; // replace with your image

export default function UniversityHero() {
  return (
    <section
      className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${UniBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-24 py-16">
        {/* Heading (Top Left) */}
        <h2 className="text-3xl md:text-5xl font-semibold text-white max-w-lg leading-snug">
          <span className="md:hidden">Inside One of Tomorrow’s Leading Universities</span>
          <span className="hidden md:block">
            Inside One <br />
            Of Tomorrow’s <br />
            Leading Universities
          </span>
        </h2>

        {/* CTA Button (Bottom Right) */}
        <div className="flex justify-center md:justify-end">
          <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}