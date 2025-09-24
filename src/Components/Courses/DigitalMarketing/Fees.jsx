import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function CourseFees() {
  const offlinePlans = [
    {
      title: "One Time Plan",
      price: "₹55,000",
      period: "/ month",
      description: "All the basic features to boost your freelance career",
      features: [
        "Full Access to Design tools",
        "Placement Support",
        "Expressions Mentor",
        "Weekly Assessments",
        "Mock interview",
      ],
    },
    {
      title: "2 Months EMI Plan",
      price: "₹27,999",
      period: "/ month",
      description: "All the basic features to boost your freelance career",
      features: [
        "Full Access to Design tools",
        "Placement Support",
        "Expressions Mentor",
        "Weekly Assessments",
        "Mock interview",
      ],
    },
    {
      title: "3 Months EMI Plan",
      price: "₹18,999",
      period: "/ month",
      description: "All the basic features to boost your freelance career",
      features: [
        "Full Access to Design tools",
        "Placement Support",
        "Expressions Mentor",
        "Weekly Assessments",
        "Mock interview",
      ],
    },
  ];

  const onlinePlans = [
    {
      title: "One Time Plan",
      price: "₹45,000",
      period: "/ month",
      description: "All the basic features to boost your freelance career",
      features: [
        "Full Access to Design tools",
        "Placement Support",
        "Expressions Mentor",
        "Weekly Assessments",
        "Mock interview",
      ],
    },
    {
      title: "2 Months EMI Plan",
      price: "₹22,999",
      period: "/ month",
      description: "All the basic features to boost your freelance career",
      features: [
        "Full Access to Design tools",
        "Placement Support",
        "Expressions Mentor",
        "Weekly Assessments",
        "Mock interview",
      ],
    },
    {
      title: "3 Months EMI Plan",
      price: "₹15,999",
      period: "/ month",
      description: "All the basic features to boost your freelance career",
      features: [
        "Full Access to Design tools",
        "Placement Support",
        "Expressions Mentor",
        "Weekly Assessments",
        "Mock interview",
      ],
    },
  ];

  const [isOffline, setIsOffline] = useState(true);
  const plans = isOffline ? offlinePlans : onlinePlans;

  return (
    <section className="px-6 md:px-24 py-20 flex justify-center">
      <div className="max-w-[1280px] w-full">
        {/* Top Section Heading */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">
          <div className="max-w-md mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">Course Fees</h2>
            <p className="text-2xl font-semibold leading-snug">
              Flexible Payment Options, <br /> One Perfect Fit for You
            </p>
          </div>
          <div className="max-w-lg text-gray-500 text-sm leading-relaxed">
            We provide 4 flexible payment options designed to fit every budget.
            Whether you prefer easy installments or a one-time payment, we’ve
            got you covered. All our prices are in INR and inclusive of GST.
            <br />
            <br />
            Choose the plan that works best for you and pay your way.
          </div>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-12">
  <div className="flex border border-gray-300 rounded-xl overflow-hidden">
    <button
      onClick={() => setIsOffline(true)}
      className={`px-6 py-2 font-medium transition-colors ${
        isOffline
          ? "bg-yellow-400 text-black"
          : "bg-white text-black"
      }`}
    >
      Offline Course
    </button>
    <button
      onClick={() => setIsOffline(false)}
      className={`px-6 py-3 font-medium transition-colors ${
        !isOffline
          ? "bg-yellow-400 text-black"
          : "bg-white text-black"
      }`}
    >
      Online Course
    </button>
  </div>
</div>



        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-15 rounded-xl shadow-sm ${
                idx === 0 ? "bg-black text-white" : "bg-[#f5f5f5] text-black"
              } flex flex-col`}
            >
              {/* Show Popular only on first card */}
              {idx === 0 && (
                <span className="absolute top-5 right-5 bg-yellow-400 text-black text-[10px] font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-sm font-medium mb-2">{plan.title}</h3>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-gray-400">{plan.period}</span>
              </div>

              <p className="text-sm mb-6 text-gray-400">{plan.description}</p>

              <button className="w-full rounded-md py-3 text-sm font-medium mb-4 bg-yellow-400 text-black">
                Get Start
              </button>

              <button className="w-full rounded-md py-3 text-sm font-medium mb-6 border border-gray-300 text-gray-400">
                Check price details
              </button>

              <div className="space-y-3 mt-auto">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-yellow-400" />
                    <span className="text-sm">{feature}</span>
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
