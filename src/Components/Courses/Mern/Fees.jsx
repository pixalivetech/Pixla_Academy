import React, { useRef, useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import "./scrollbar.css"; // create this file (CSS below)

export default function CourseFees() {
  const courses = [
    {
      title: "Pixla Spark",
      description:
        "Focused learning in trending technologies for rapid upskilling. Practical digital skill development to stay industry-ready.",
      duration: "1–2 Months",
      priceOnline: "₹9,999",
      priceOffline: "₹19,999",
      features: [
        "Advanced training & stipend",
        "Placement guarantee",
         "Industry internship exposure",
        "Practical project-based learning",
      ],
    },
    {
      title: "Pixla Elevate",
      popular: true,
      description:
        "Hands-on training with latest tools & technologies. Industry-oriented internship exposure to gain real-world project experience.",
      duration: "6 Months",
      priceOnline: "₹74,999",
      priceOffline: "₹99,999",
      features: [
        "Free laptop to support your learning",
        "Real-time project training",
        "Guaranteed placement in top companies",
        "Industry internship exposure",
      ],
    },
    {
      title: "Pixla Deploy",
      description:
        "Core skill development in coding, design, marketing, or business. Mentorship from industry professionals.",
      duration: "8–10 Months",
      priceOnline: "₹1,99,999",
      priceOffline: "₹2,49,999",
      features: [
        "Laptop provided",
        "Bootcamps & hackathons",
        "Placement readiness program",
        "College-focused training structure",
      ],
    },
    {
      title: "Pixla Edge",
      description:
        "Integrated learning with projects & internships for practical industry exposure. Mentorship from industry professionals.",
      duration: "4 Years",
      priceOnline: "₹99,999",
      priceOffline: "₹99,999",
      features: [
        "Free laptop & learning resources",
        "Continuous skill support",
        "Full 4-year guidance program",
        "Real-world project exposure",
      ],
    },
    {
      title: "Pixla Learn",
      description:
        "Lifetime access to Pixla’s premium resources, mentorship, and updates. Perfect for professionals who want to stay ahead.",
      duration: "Lifetime",
      priceOnline: "₹29,999",
      priceOffline: "₹49,999",
      features: [
        "Lifetime mentorship & updates",
        "All premium resources unlocked",
        "Networking with top mentors",
        "Exclusive Pixla community access",
      ],
    },
  ];

  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;

    const scroll = () => {
      if (!paused && scrollContainer) {
        scrollPosition += 1; // scroll speed
        scrollContainer.scrollLeft = scrollPosition;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="px-6 md:px-24 py-20 bg-white text-black">
      <div className="max-w-[1280px] w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">
          <div className="max-w-md mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">Pixla Programs</h2>
            <p className="text-2xl font-semibold leading-snug text-gray-800">
              Flexible, Practical, and Career-Focused Learning Tracks
            </p>
          </div>
          <div className="max-w-lg text-gray-600 text-sm leading-relaxed">
            Choose from five unique Pixla learning programs tailored to your
            career goals — from short-term upskilling to long-term full-stack
            mastery. Every program includes mentorship, real-world projects, and
            guaranteed placement opportunities.
          </div>
        </div>

        {/* Auto-scrolling cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-8 scrollbar-hide"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...courses, ...courses].map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex-shrink-0 w-[300px] md:w-[360px] h-[560px] rounded-md p-8 shadow-md flex flex-col transition-transform duration-300 hover:scale-105 ${
                plan.popular ? "bg-black text-white" : "bg-[#f5f5f5]"
              }`}
            >
              {/* Popular Tag */}
              {plan.popular && (
                <span className="absolute top-5 right-5 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-xl font-semibold mb-3">{plan.title}</h3>
              <p
                className={`text-sm mb-4 ${
                  plan.popular ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-medium mb-1">
                  Duration:{" "}
                  <span
                    className={`${plan.popular ? "text-yellow-400" : "text-black"}`}
                  >
                    {plan.duration}
                  </span>
                </p>
                <p className="text-sm font-medium">
                  Price:{" "}
                  <span
                    className={`${plan.popular ? "text-yellow-400" : "text-black"}`}
                  >
                    Online {plan.priceOnline} & Offline {plan.priceOffline}
                  </span>
                </p>
              </div>
              
              
              <button
  onClick={() => (window.location.href = "/contact")}
  className={`w-full rounded-md py-3 text-sm font-medium mt-10 mb-4 ${
    plan.popular
      ? "bg-yellow-400 text-black"
      : "bg-black text-white"
  }`}
>
  Get Started
</button>


              <button
                className={`w-full rounded-md py-3 text-sm font-medium mb-6 border ${
                  plan.popular
                    ? "border-gray-500 text-gray-300"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                Check Details
              </button>

              <div className="space-y-3 mt-auto">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle
                      size={16}
                      className={
                        plan.popular ? "text-yellow-400" : "text-yellow-500"
                      }
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
