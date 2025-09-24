// src/components/TestimonialSection.jsx
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import StudentImg from "./../../assets/Land/stud.png"; // replace with your image
import StudentImg1 from "./../../assets/Land/stud1.png"; 
import StudentImg2 from "./../../assets/Land/stud2.png"; 

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Arjun Ramesh",
      role: "Full Stack Development",
      text: "Practical training and live projects helped me secure my first job quickly. Pixla Academy truly bridges learning and career.",
      img: StudentImg1,
    },
    {
      name: "Lakshmi Priya",
      role: "Digital Marketing",
      text: "The guidance and support at Pixla Academy made learning enjoyable and effective. I feel fully prepared for my professional journey.",
      img: StudentImg,
    },
    {
      name: "Vignesh Kumar",
      role: "AI & Data Science",
      text: "The mentorship and real-world experience at Pixla Academy gave me the edge I needed to excel in my career.",
      img: StudentImg2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-[#FFDA44] py-16 px-6 md:px-24">
      <hr className="border-t border-gray-500 my-6" />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <p className="text-md font-medium text-black">Testimonial</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-8 leading-snug text-black">
            What Our <br /> Students Saying <br /> About Us
          </h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Show All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Section */}
        <div className="relative border-l border-gray-400">
          {/* Quote Mark */}
          <div className="absolute top-24 left-10 text-[#C5AA05]-600 font-serif text-[150px] leading-none opacity-20 transform -translate-x-1/2 -translate-y-1/2">
            “
          </div>

          {/* Testimonial Card */}
          <div className="relative p-8 pt-16 transition-all duration-700 ease-in-out">
            <div className="gap-6 items-center md:items-center">
              <img
                src={testimonials[currentIndex].img}
                alt={testimonials[currentIndex].name}
                className="w-60 h-60 object-cover rounded-lg filter grayscale"
              />
              <div className="flex flex-col gap-4 text-black">
                <p className="text-base md:text-lg text-black leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
                <hr className="border-t border-gray-500 my-6" />
                <div>
                  <h4 className="font-bold text-black">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-end mt-4 gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-6 bg-[#C5AA05]"
                      : "w-2 bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-500 my-6" />
    </section>
  );
}
