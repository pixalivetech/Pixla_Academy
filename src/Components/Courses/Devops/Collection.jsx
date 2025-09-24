import React from "react";
import U1 from "./../../../assets/UI/u1.png";
import U2 from "./../../../assets/UI/u2.png";
import U3 from "./../../../assets/UI/u3.png";

const features = [
  {
    icon: U1,
    title: "Expert DevOps Mentors",
    desc: "Learn from experienced DevOps engineers who guide you through modern practices, tools, and workflows. Gain real-world insights from experts who build and deploy at scale."
  },
  {
    icon: U2,
    title: "Masterclass on CI/CD Pipelines",
    desc: "Get hands-on experience in building and managing CI/CD pipelines using tools like :contentReference[oaicite:2]{index=2}, :contentReference[oaicite:3]{index=3}, and :contentReference[oaicite:4]{index=4}. Automate builds, tests, and deployments effectively."
  },
  {
    icon: U3,
    title: "Personal Career Coach",
    desc: "Receive 1:1 guidance from a dedicated career coach to build your DevOps resume, portfolio, and prepare for interviews with top tech companies."
  },
  {
    icon: U1,
    title: "Interview Prep & Resume Reviews",
    desc: "Enhance your profile with mock interviews, resume optimization, and role-specific guidance for DevOps engineer roles."
  },
  {
    icon: U2,
    title: "Complete DevOps Toolkit",
    desc: "Access templates, scripts, and guides for :contentReference[oaicite:5]{index=5}, :contentReference[oaicite:6]{index=6}, :contentReference[oaicite:7]{index=7}, and :contentReference[oaicite:8]{index=8} to streamline your learning and project work."
  },
  {
    icon: U3,
    title: "Live Projects & Cloud Deployments",
    desc: "Work on real-time cloud infrastructure projects using :contentReference[oaicite:9]{index=9}, :contentReference[oaicite:10]{index=10}, and :contentReference[oaicite:11]{index=11}. Build, deploy, and monitor scalable systems."
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        
        {/* Top Heading Row */}
        <div className="flex flex-col md:flex-row md:justify-center md:divide-x divide-gray-300 text-center mb-14">
          <div className="px-6 py-2">
            <h3 className="text-lg font-medium">DevOps Engineering Program</h3>
            <p className="text-sm text-gray-500">Beginner to Advanced</p>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-lg font-medium">Placement Support</h3>
            <p className="text-sm text-gray-500">With Interview Preparation</p>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-lg font-medium">Professional Certification</h3>
            <p className="text-sm text-gray-500">Industry Recognized Credential</p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <img src={item.icon} alt={item.title} className="w-14 h-14 mb-4 object-contain" />
              <h4 className="text-base font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
