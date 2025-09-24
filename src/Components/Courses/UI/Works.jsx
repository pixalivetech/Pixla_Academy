// StudentsWorks.jsx
import React from "react";
import u7 from "./../../../assets/UI/u7.png";
import u8 from "./../../../assets/UI/u8.png";
import u9 from "./../../../assets/UI/u9.png";
import u10 from "./../../../assets/UI/u10.png";
import u6 from "./../../../assets/UI/u6.png";

export default function StudentsWorks() {
  const works = [
    {
      type: "case",
      title: "MEDICAL TOURISM",
      subtitle: "UI/UX Case study",
      bg: "bg-yellow-400",
    },
    { type: "image", src: u7 },
    { type: "image", src: u8 },
    { type: "image", src: u9},
    { type: "image", src: u10},
    { type: "image", src: u6},
  ];

  return (
    <section className=" px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        {/* Heading */}
        <h2 className="text-xl font-semibold mb-10">Students Works</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) =>
            work.type === "case" ? (
              <div
                key={i}
                className={`${work.bg} rounded-xl flex flex-col items-center justify-center text-center p-10 h-[300px] sm:h-[260px]`}
              >
                <h3 className="text-xl font-semibold text-white mb-6">
                  {work.title}
                </h3>
                <button className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition">
                  {work.subtitle}
                </button>
              </div>
            ) : (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-md h-[300px] sm:h-[260px] flex items-center justify-center"
              >
                <img
                  src={work.src}
                  alt="Student Work"
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
