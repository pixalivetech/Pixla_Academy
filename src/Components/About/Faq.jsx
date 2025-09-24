import React, { useState } from "react";
import { Minus, Plus } from "lucide-react"; // for icons

const AcademyAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 const items = [
  {
    title: "What is Pixla Academy?",
    content:
      "Pixla Academy is a career-focused learning platform that blends training, mentorship, real-world projects, and guaranteed opportunities. We prepare students from 1st year to final year with a structured roadmap: Learn → Elevate → Deploy.",
  },
  {
    title: "What makes Pixla Academy different?",
    content:
      "Combined programs worth ₹4,00,000 + a High-Configuration Laptop worth ₹1,00,000\n\n75% Scholarship – students pay only ₹1,00,000\n\nLifetime access to the Pixla Talent Network for jobs, internships & freelancing\n\nReal industry projects, career mentorship, and fast-track hiring opportunities",
  },
  {
    title: "Who can join Pixla Academy?",
    content:
      "Any college student (from 1st year onwards) or fresh graduate who wants to build a strong career in technology, marketing, or freelancing.",
  },
  {
    title: "What do I get as part of the program?",
    content:
      "✅ 4 years of guided learning + continuous upskilling\n✅ Internship & job interview priority access\n✅ Resume building & mock interview sessions\n✅ Expert mentorship & career support\n✅ A brand-new high-end laptop\n✅ Access to the Pixla Talent Network",
  },
  {
    title: "How does the scholarship work?",
    content:
      "The actual program value is ₹5,00,000 (training + laptop). With our 75% scholarship, students need to pay only ₹1,00,000.",
  },
  {
    title: "What is the Pixla Talent Network?",
    content:
      "It’s a lifetime career support ecosystem. Once enrolled, students get access to:\n\n- Internship & job opportunities from top companies\n- Freelance projects\n- Continuous learning modules\n- Networking with industry professionals",
  },
  {
    title: "Will Pixla Academy guarantee a job?",
    content:
      "We don’t “sell jobs” – but we provide everything to make you job-ready and employable:\n\n- Industry projects\n- Internship pipelines\n- Placement drives\n- Fast-track interview opportunities\n\nYour success = Our success.",
  },
  {
    title: "When should I join?",
    content:
      "The earlier, the better. Joining in 1st or 2nd year gives you more time to practice, gain projects, and build a strong portfolio before graduation.",
  },
  {
    title: "Do I need to pay extra for the laptop?",
    content:
      "No. The ₹1,00,000 fee covers both the training & laptop. You don’t have to pay anything extra.",
  },
  {
    title: "How do I apply?",
    content:
      "Simply register on our website, complete a quick eligibility check, and confirm your enrollment. Our team will connect with you to guide you through the onboarding process.",
  },
];

1
  return (
    <div className="max-w-7xl mx-auto  px-6 md:px-24 py-16">
      <h4 className="text-sm font-semibold text-gray-700">
        Empowering Learning Through Innovation
      </h4>
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
        We fuse technology and creativity to make learning personal and
        powerful. Learners engage with real-world challenges through smart,
        adaptive experiences.
      </h2>

      <div className="mt-10 space-y-6">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium text-gray-800">
                {index + 1}. {item.title}
              </span>
              {openIndex === index ? (
                <Minus className="h-5 w-5 text-gray-600" />
              ) : (
                <Plus className="h-5 w-5 text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademyAccordion;
