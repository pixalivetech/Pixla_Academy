// src/components/AboutAcademy.jsx
import { Globe, Briefcase, Award, Lightbulb } from "lucide-react";
import Training from "./../../assets/Land/training.jpg";
import Internship from "./../../assets/Land/internship.jpg";
import Freelance from "./../../assets/Land/freelance.jpg";
import Career from "./../../assets/Land/career.jpg";

export default function AboutAcademy() {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-gray-700" />,
      title: "Global Network",
      desc: "Connect students with top companies, mentors, and industry professionals across India and beyond, opening doors to real opportunities.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-gray-700" />,
      title: "Career Focus",
      desc: "From Pixla Learn to Pixla Deploy, our programs ensure students gain job-ready skills, internships, and guaranteed placement support.",
    },
    {
      icon: <Award className="w-6 h-6 text-gray-700" />,
      title: "Excellence",
      desc: "High-quality training with hands-on projects, live mentoring, and continuous assessments to help students achieve professional success.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-gray-700" />,
      title: "Innovation",
      desc: "Cutting-edge curriculum and practical exposure ensure students stay ahead in technology, freelancing, and entrepreneurship.",
    },
  ];

  return (
    <section className="px-6 md:px-24 py-16 md:py-32 bg-white">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Side */}
          <div>
            <p className="text-md text-black mb-2">About Pixla Academy</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
              A Global University <br className="hidden md:block" />
              for the Next Generation
            </h2>

            {/* 4 images in 2x2 grid (mobile & desktop) */}
            <div className="grid grid-cols-2 gap-3">
              {[Training, Internship, Freelance, Career].map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-40 rounded-sm overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`academy-${i}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong>Pixla Academy</strong> is India’s largest skill training
              and placement company, dedicated to transforming students into
              job-ready professionals. Our programs combine cutting-edge
              training, real-world projects, internships, and direct job
              deployment assistance to ensure every learner achieves career
              success.
            </p>
            <p>
              We bridge the gap between education and employment by providing:
              <br />
              <strong>Hands-on Training:</strong> Learn from industry experts
              with live, instructor-led sessions. <br />
              <strong>Internship Opportunities:</strong> Gain real-world
              experience with our partner companies. <br />
              <strong>Career Support:</strong> Resume building, interview
              preparation, and placement assistance. <br />
              <strong>Direct Deployment Assistance:</strong> We help you secure
              your first job with our industry connections. <br />
              <strong>Freelancing Guidance:</strong> Kickstart your freelance
              journey with mentorship and project exposure.
            </p>
            <p>
              <strong>Pixla Academy</strong> empowers students to acquire skills,
              gain experience, and launch successful careers in technology,
              marketing, and beyond.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 md:mt-20">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition hover:scale-105 transition-transform duration-300"
            >
              <div>{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
