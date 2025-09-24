import React from "react";
import U1 from "./../../../assets/UI/u1.png";
import U2 from "./../../../assets/UI/u2.png";
import U3 from "./../../../assets/UI/u3.png";
const features = [
{
// Represents the first icon (lightbulb/idea) from the provided image
icon: U1,
title: "Expert Flutter Full Stack Development Senior Mentors",
desc: "Expert UX/UI mentors at your service. They deliver outstanding answers with clarity and depth. Because your growth deserves the best guidance Our mentors deliver answers that matter."
},
{
// Represents the second icon (laptop/gears) from the provided image
icon: U2,
title: "Exclusive Masterclass with Industry Experts",
desc: "Learn directly from the best in the field Gain insider knowledge, real-world skills, and career-ready insights. Get exclusive training from professionals shaping the design world"
},
{
// Represents the third icon (graduation cap/success) from the provided image
icon: U3,
title: "Get a Support from Personal Career Coach",
desc: "Accelerate your success with a dedicated career coach for 2 months, guiding you to craft a standout portfolio and ATS friendly resume Smart support, right when you need it."
},
{
// Represents the first icon (lightbulb/idea) from the provided image
icon: U1,
title: "Interview Prep & Resume Reviews",
desc: "Upgrade your profile and Present your best self, Get expert help with resume reviews and mock interviews, Stand out with professional resume reviews and 1:1 interview coaching"
},
{
// Represents the second icon (laptop/gears) from the provided image
icon: U2,
title: "Exclusive Career Upgrade Kit",
desc: "Unlock our exclusive toolkit for ATS friendly resume templates, LinkedIn optimization guides, and mock interview sessions Everything you need to level up—tools, templates, and expert guidance"
},
{
// Represents the third icon (graduation cap/success) from the provided image
icon: U3,
title: "Live Projects & Case Studies",
desc: "Learn by doing—solve real problems, present real solutions Work on real-world challenges that build your portfolio and confidence Work on real-world challenges that build your portfolio and confidence"
},
];

export default function FeaturesSection() {
  return (
    <section className=" px-6 md:px-24 py-16 flex justify-center">
      <div className="max-w-[1280px] w-full">
        
        {/* Top Heading Row */}
        <div className="flex flex-col md:flex-row md:justify-center md:divide-x divide-gray-300 text-center mb-14">
          <div className="px-6 py-2">
            <h3 className="text-lg font-medium">Flutter Full Stack Development</h3>
            <p className="text-sm text-gray-500">Beginner Friendly Program</p>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-lg font-medium">Placement Support</h3>
            <p className="text-sm text-gray-500">Guaranteed</p>
          </div>
          <div className="px-6 py-2">
            <h3 className="text-lg font-medium">Professional Certification</h3>
            <p className="text-sm text-gray-500">Industry-recognized Credential</p>
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
