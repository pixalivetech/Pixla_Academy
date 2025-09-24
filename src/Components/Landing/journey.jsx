// src/components/JourneySection.jsx
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import FounderImg from "./../../assets/Land/founder1.png"; // replace with your founder image

export default function JourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Apply easily through our portal.",
    "Pick the program that matches your career goals.",
    "Hands-on training, real projects, and mentorship.",
    " Internships, freelance opportunities, or placements.",
  ];

  return (
    <section className="bg-black text-white border-b border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        {/* Left Column - Steps */}
        <div className="px-6 md:px-24 py-16 md:py-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-700">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12">
            <span className="md:hidden">Start Your Journey at Pixla Academy</span>
            <span className="hidden md:block">
              Start Your Journey At <br /> <span className="text-gray-300">Pixla Academy</span>
            </span>
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[20px] top-0 h-full w-px bg-gray-600 hidden md:block"></div>

            {/* Steps */}
            <div className="flex flex-col gap-8 md:gap-16">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 relative cursor-pointer"
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Circle Step Number */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border relative z-10 transition
                      ${
                        activeStep === idx
                          ? "bg-yellow-400 text-black border-yellow-400"
                          : "bg-black text-gray-400 border-gray-600"
                      }`}
                  >
                    0{idx + 1}
                  </div>

                  {/* Step Text */}
                  <p
                    className={`text-sm md:text-base transition ${
                      activeStep === idx ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-8 md:mt-12 flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-300 transition w-fit">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column - Testimonial */}
        <div className="px-6 md:px-24 py-16 md:py-0 flex flex-col justify-center border-t md:border-t-0">
          <p className="text-sm leading-snug text-gray-300 mb-4">
            Welcome to Pixla Academy! Our mission is to empower every student and 
            job seeker with the skills, confidence, and opportunities 
            needed to excel in today’s fast-evolving world. At Pixla Academy,
            we go beyond traditional learning—we combine hands-on training, mentorship,
            real-world projects, and career support to make you truly job-ready.
          </p>
          <p className="text-sm leading-relaxed text-gray-300 mb-4">
            Whether you’re aiming to kickstart your career, grow as a freelancer,
            or land your dream job, our programs are designed to guide you every step of the way. 
            We believe in your potential and are committed to providing the tools, exposure,
            and network to help you succeed.
          </p>
          <p className="text-sm leading-relaxed text-gray-300 mb-8">
            Join us, learn with purpose, build your portfolio, 
            and launch a professional journey that sets you apart. 
            The future belongs to those who prepare for it today, and at Pixla Academy,
            we are here to ensure you’re ready.
          </p>

          {/* Founder Info */}
          <div className="flex flex-col items-center md:items-center">
            <img
              src={FounderImg}
              alt="Founder"
              className="w-48 h-48 object-cover rounded-md mb-4 md:w-60 md:h-60"
            />
            <h3 className="text-lg font-semibold">-Rajasekar Sundaresan</h3>
            <p className="text-sm text-gray-400">Founder of Pixla Academy</p>
          </div>
        </div>
      </div>
    </section>
  );
}